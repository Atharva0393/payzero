export const generativeTreeSource = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Generative Branching Tree</title>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  html, body { width: 100%; height: 100%; overflow: hidden; background: transparent; }
  canvas { display: block; width: 100vw; height: 100vh; }
  .label {
    position: fixed;
    top: 20px;
    left: 24px;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: rgba(16, 43, 80, 0.45);
    z-index: 10;
    pointer-events: none;
    user-select: none;
  }
</style>
</head>
<body>
<div class="label">04 / Generative Tree</div>
<canvas id="canvas"></canvas>
<script>
(function() {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  let W, H;

  // --- Utilities ---
  function lerp(a, b, t) { return a + (b - a) * t; }
  function rand(lo, hi) { return Math.random() * (hi - lo) + lo; }
  function easeOutCubic(t) { return 1 - Math.pow(1 - t, 3); }
  function smoothstep(a, b, t) {
    t = Math.max(0, Math.min(1, (t - a) / (b - a)));
    return t * t * (3 - 2 * t);
  }

  // --- Configuration ---
  let MAX_DEPTH = 10;
  let GROWTH_SPEED_BASE = 0.006;
  const HOLD_DURATION = 400;
  const FADE_DURATION = 180;
  const WAIT_DURATION = 80;

  // --- Pre-rendered particle sprite (soft dot) ---
  let particleSprite;
  function initParticleSprite() {
    particleSprite = document.createElement('canvas');
    particleSprite.width = 32;
    particleSprite.height = 32;
    const pctx = particleSprite.getContext('2d');
    const g = pctx.createRadialGradient(16, 16, 0, 16, 16, 16);
    g.addColorStop(0, 'rgba(234, 169, 0, 0.7)');
    g.addColorStop(0.35, 'rgba(255, 201, 40, 0.35)');
    g.addColorStop(1, 'rgba(255, 201, 40, 0)');
    pctx.fillStyle = g;
    pctx.fillRect(0, 0, 32, 32);
  }

  function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
    initParticleSprite();
  }
  window.addEventListener('resize', resize);
  resize();

  // --- Particle system ---
  const PARTICLE_COUNT = 50;
  let particles = [];

  function createParticle(fullRandom) {
    return {
      x: rand(W * 0.15, W * 0.85),
      y: fullRandom ? rand(H * 0.1, H * 0.9) : rand(H * 0.5, H),
      vx: rand(-0.12, 0.12),
      vy: rand(-0.35, -0.06),
      size: rand(0.6, 2.2),
      alpha: rand(0.04, 0.2),
      phase: rand(0, Math.PI * 2),
      freq: rand(0.0004, 0.0015),
      life: fullRandom ? rand(0, 1) : 0,
      lifeSpeed: rand(0.0006, 0.0025),
    };
  }

  function initParticles() {
    particles = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push(createParticle(true));
    }
  }

  function updateParticles(time) {
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.x += p.vx + Math.sin(time * p.freq + p.phase) * 0.25;
      p.y += p.vy;
      p.life += p.lifeSpeed;
      if (p.life > 1 || p.y < -10 || p.x < -10 || p.x > W + 10) {
        particles[i] = createParticle(false);
      }
    }
  }

  function drawParticles(drawCtx, globalAlpha) {
    for (const p of particles) {
      const lifeFade = p.life < 0.15 ? p.life / 0.15
                     : p.life > 0.8 ? (1 - p.life) / 0.2
                     : 1;
      const a = p.alpha * lifeFade * globalAlpha;
      if (a < 0.004) continue;
      const s = p.size * 3;
      drawCtx.globalAlpha = a;
      drawCtx.drawImage(particleSprite, p.x - s, p.y - s, s * 2, s * 2);
    }
    drawCtx.globalAlpha = 1;
  }

  // --- Color palette (deep timber trunk → warm solar amber → vibrant golden foliage tips) ---
  const PALETTE = [
    { r: 75, g: 44, b: 16 },    // deep solar timber trunk
    { r: 120, g: 72, b: 20 },   // rich amber bark
    { r: 170, g: 105, b: 25 },  // golden hour branch
    { r: 210, g: 140, b: 30 },  // solar gold mid-branch
    { r: 234, g: 169, b: 0 },   // Golden Hour foliage
    { r: 255, g: 205, b: 45 },  // vibrant Solar Gold leaves & tips
  ];

  function colorForDepth(depth, hueShift) {
    const t = depth / MAX_DEPTH;
    const idx = t * (PALETTE.length - 1);
    const i0 = Math.floor(idx);
    const i1 = Math.min(PALETTE.length - 1, i0 + 1);
    const f = idx - i0;
    let r = lerp(PALETTE[i0].r, PALETTE[i1].r, f);
    let g = lerp(PALETTE[i0].g, PALETTE[i1].g, f);
    let b = lerp(PALETTE[i0].b, PALETTE[i1].b, f);

    // Per-branch subtle organic hue variation (warm amber to radiant gold)
    if (hueShift !== undefined) {
      const strength = t * t * 14;
      r += hueShift * strength * 0.7;
      g += hueShift * strength * 0.5;
      b += hueShift * strength * 0.1;
    }

    return { r, g, b };
  }

  // --- Branch data ---
  let allBranches = [];
  let treeAlpha = 1;
  let treeState = 'growing';
  let holdTimer = 0, fadeTimer = 0, waitTimer = 0;
  const _pad = parseFloat(new URLSearchParams(location.search).get('p')) || 1;

  function createTree() {
    allBranches = [];

    // Bounded scaling: guarantee the full canopy fits inside canvas with safe padding on all sides
    // Max canopy lateral spread is ~2.7x trunk length, and vertical height span is ~3.0x trunk length
    const padFactor = Math.max(0.8, Math.min(1.3, _pad));
    const safeMarginX = Math.max(18, W * 0.12);
    const safeMarginY = Math.max(20, H * 0.12);
    const availW = Math.max(50, (W - safeMarginX * 2) * (1 / padFactor));
    const availH = Math.max(70, (H - safeMarginY * 2) * (1 / padFactor));

    const maxLenW = availW / 2.7;
    const maxLenH = availH / 3.0;
    const baseLen = Math.min(maxLenW, maxLenH);
    const trunkLen = Math.max(20, baseLen * rand(0.93, 0.99));
    const trunkThick = Math.max(4.5, Math.min(10, trunkLen * 0.15));
    const trunkAngle = -Math.PI / 2 + rand(-0.015, 0.015);

    // Plant trunk at bottom with 4px margin so trunk foot is cleanly grounded
    const baseY = H - 4;

    allBranches.push({
      x0: W / 2,
      y0: baseY,
      angle: trunkAngle,
      length: trunkLen,
      thickness: trunkThick,
      depth: 0,
      growthProgress: 0,
      growthSpeed: GROWTH_SPEED_BASE * rand(0.9, 1.1),
      children: [],
      spawned: false,
      swayPhase: rand(0, Math.PI * 2),
      swayAmp: 0.0006,
      curvature: rand(-0.01, 0.01),
      colorShift: rand(-6, 6),
      hueShift: 0,
      parent: null,
      // Pre-computed stroke variation for painterly rendering
      strokeSeeds: [rand(-1,1), rand(-1,1), rand(-1,1), rand(-1,1), rand(-1,1)],
      tipDots: [],
    });

    treeState = 'growing';
    holdTimer = fadeTimer = waitTimer = 0;
    treeAlpha = 1;
    initParticles();
  }

  function spawnChildren(parent) {
    if (parent.depth >= MAX_DEPTH) return;

    let numChildren;
    if (parent.depth < 1) numChildren = 2 + (Math.random() < 0.35 ? 1 : 0);
    else if (parent.depth < 3) numChildren = 2 + (Math.random() < 0.4 ? 1 : 0);
    else numChildren = Math.random() < 0.25 ? 3 : 2;

    // Progressive pruning: more aggressive at outer depths for airy canopy
    const pruneChance = parent.depth <= 3 ? 0 : parent.depth <= 5 ? 0.1 : parent.depth <= 7 ? 0.22 : 0.35;
    if (Math.random() < pruneChance) numChildren = Math.max(1, numChildren - 1);

    const spread = parent.depth < 2 ? rand(0.32, 0.48) : rand(0.38, 0.6);

    for (let i = 0; i < numChildren; i++) {
      let angleOffset;
      if (numChildren === 1) {
        angleOffset = rand(-0.25, 0.25);
      } else if (numChildren === 2) {
        angleOffset = (i === 0 ? -1 : 1) * rand(0.18, spread);
      } else {
        angleOffset = (i - 1) * spread + rand(-0.1, 0.1);
      }

      const childAngle = parent.angle + angleOffset;
      const lengthFactor = rand(0.58, 0.76);
      const thickFactor = rand(0.48, 0.67);

      const ep = getBranchEnd(parent, 1, 0);

      // Pre-compute tip dots for terminal branches (leaves)
      const tipDots = [];
      const childDepth = parent.depth + 1;
      if (childDepth >= MAX_DEPTH - 1) {
        const count = childDepth >= MAX_DEPTH ? (Math.random() < 0.65 ? 2 : 1) : (Math.random() < 0.35 ? 1 : 0);
        for (let d = 0; d < count; d++) {
          tipDots.push({
            ox: rand(-2.5, 2.5),
            oy: rand(-2.5, 2.5),
            size: rand(1.1, 2.2),
            alpha: rand(0.35, 0.65),
          });
        }
      }

      const child = {
        x0: ep.x,
        y0: ep.y,
        angle: childAngle,
        length: parent.length * lengthFactor,
        thickness: Math.max(0.4, parent.thickness * thickFactor),
        depth: childDepth,
        growthProgress: 0,
        growthSpeed: GROWTH_SPEED_BASE * rand(1.0, 1.5) * (1 + parent.depth * 0.1),
        children: [],
        spawned: false,
        swayPhase: rand(0, Math.PI * 2),
        swayAmp: 0.0018 * (parent.depth + 1) * rand(0.7, 1.3),
        curvature: rand(-0.04, 0.04) * (1 + parent.depth * 0.12),
        colorShift: rand(-12, 12),
        hueShift: Math.max(-1, Math.min(1, parent.hueShift + rand(-0.35, 0.35))),
        parent: parent,
        strokeSeeds: [rand(-1,1), rand(-1,1), rand(-1,1), rand(-1,1), rand(-1,1)],
        tipDots: tipDots,
      };

      parent.children.push(child);
      allBranches.push(child);
    }
  }

  // --- Sway (multi-frequency wind + mouse wind + shake) ---
  function getSwayAngle(branch, time) {
    let total = 0;
    let b = branch;
    let depth = 0;
    while (b) {
      const a = b.swayAmp;
      total += Math.sin(time * 0.0005 + b.swayPhase) * a;
      total += Math.sin(time * 0.0003 + b.swayPhase * 1.7) * a * 0.6;
      total += Math.sin(time * 0.00012 + b.swayPhase * 0.4) * a * 0.35;
      depth++;
      b = b.parent;
    }
    // Mouse wind: deeper branches bend more gently to avoid edge clipping
    if (mouseActive) {
      total += windForce * 0.02 * depth;
    }
    // Shake: rapid oscillation that decays
    if (shakeAmount > 0.01) {
      total += Math.sin(time * 0.015 + branch.swayPhase * 3) * shakeAmount * 0.06 * depth;
    }
    return total;
  }

  function getBranchEnd(branch, progress, time) {
    const sway = getSwayAngle(branch, time);
    const angle = branch.angle + sway;
    const len = branch.length * progress;
    const perpX = -Math.sin(angle);
    const perpY = Math.cos(angle);
    const curveOff = branch.curvature * len;
    return {
      x: branch.x0 + Math.cos(angle) * len + perpX * curveOff,
      y: branch.y0 + Math.sin(angle) * len + perpY * curveOff,
    };
  }

  function recalcPositions(time) {
    for (const b of allBranches) {
      if (b.parent) {
        const pe = getBranchEnd(b.parent, 1, time);
        b.x0 = pe.x;
        b.y0 = pe.y;
      }
    }
  }

  function updateBranches(time) {
    let allDone = true;
    for (const b of allBranches) {
      if (b.growthProgress < 1) {
        b.growthProgress = Math.min(1, b.growthProgress + b.growthSpeed);
        allDone = false;
      }
      // Overlapping growth: spawn children at 65%
      if (b.growthProgress >= 0.65 && !b.spawned) {
        b.spawned = true;
        spawnChildren(b);
      }
    }
    return allDone;
  }

  // --- Branch drawing (multi-stroke painterly) ---
  function drawBranch(drawCtx, b, time) {
    if (b.growthProgress <= 0) return;

    const sway = getSwayAngle(b, time);
    const angle = b.angle + sway;
    const progress = easeOutCubic(b.growthProgress);
    const len = b.length * progress;

    const x1 = b.x0;
    const y1 = b.y0;

    // Perpendicular direction
    const perpX = -Math.sin(angle);
    const perpY = Math.cos(angle);

    // Cubic bezier control points with natural curvature
    const curveOff = b.curvature * len * 1.4;
    const cpx1 = x1 + Math.cos(angle) * len * 0.33 + perpX * curveOff * 0.4;
    const cpy1 = y1 + Math.sin(angle) * len * 0.33 + perpY * curveOff * 0.4;
    const cpx2 = x1 + Math.cos(angle) * len * 0.66 + perpX * curveOff * 0.85;
    const cpy2 = y1 + Math.sin(angle) * len * 0.66 + perpY * curveOff * 0.85;
    const x2 = x1 + Math.cos(angle) * len + perpX * curveOff * 0.7;
    const y2 = y1 + Math.sin(angle) * len + perpY * curveOff * 0.7;

    const col = colorForDepth(b.depth, b.hueShift);
    // Alpha falloff at outer depths for rich, visible canopy foliage
    const depthT = b.depth / MAX_DEPTH;
    const baseAlpha = b.depth <= 1 ? 0.96
                    : b.depth <= 5 ? lerp(0.94, 0.82, depthT)
                    : lerp(0.82, 0.65, (depthT - 0.5) * 2);

    // Determine stroke count by depth for performance
    const strokeCount = b.depth < 3 ? 5 : (b.depth < 6 ? 3 : 2);
    const thickBase = b.thickness;
    const thickTaper = lerp(thickBase, thickBase * 0.3, progress);

    for (let s = 0; s < strokeCount; s++) {
      // Deterministic offset from pre-computed seeds
      const seed = b.strokeSeeds[s] || 0;
      const normalizedS = strokeCount > 1 ? (s / (strokeCount - 1) - 0.5) : 0;

      // Perpendicular offset for multi-stroke spread
      const offsetAmt = normalizedS * thickBase * 0.35 + seed * thickBase * 0.08;
      const ox = perpX * offsetAmt;
      const oy = perpY * offsetAmt;

      // Color variation per stroke (staying in rich solar amber spectrum)
      const shift = normalizedS * 14 + b.colorShift * 0.2;
      const r = Math.max(0, Math.min(255, col.r + shift * 0.8));
      const g = Math.max(0, Math.min(255, col.g + shift * 0.6));
      const bb = Math.max(0, Math.min(255, col.b + shift * 0.2));

      // Core stroke is full opacity, flanking strokes are softer
      const isCore = s === Math.floor(strokeCount / 2);
      const alpha = baseAlpha * (isCore ? 1.0 : 0.5);
      const thick = thickTaper * (isCore ? 1.0 : lerp(0.65, 0.45, Math.abs(normalizedS)));

      drawCtx.beginPath();
      drawCtx.moveTo(x1 + ox, y1 + oy);
      drawCtx.bezierCurveTo(
        cpx1 + ox, cpy1 + oy,
        cpx2 + ox, cpy2 + oy,
        x2 + ox, y2 + oy
      );
      drawCtx.strokeStyle = \`rgba(\${r | 0}, \${g | 0}, \${bb | 0}, \${alpha})\`;
      drawCtx.lineWidth = thick;
      drawCtx.lineCap = 'round';
      drawCtx.stroke();
    }

    // Soft ambient solar gold aura on mid-to-deep branches
    if (b.depth >= 4 && b.depth < MAX_DEPTH - 1 && b.growthProgress > 0.8) {
      const glowAlpha = smoothstep(0.8, 1.0, b.growthProgress) * 0.08 * (b.depth / MAX_DEPTH);
      const glowR = Math.max(4, thickBase * 2);
      const grd = drawCtx.createRadialGradient(x2, y2, 0, x2, y2, glowR);
      grd.addColorStop(0, \`rgba(255, 201, 40, \${glowAlpha})\`);
      grd.addColorStop(0.5, \`rgba(234, 169, 0, \${glowAlpha * 0.3})\`);
      grd.addColorStop(1, \`rgba(234, 169, 0, 0)\`);
      drawCtx.fillStyle = grd;
      drawCtx.beginPath();
      drawCtx.arc(x2, y2, glowR, 0, Math.PI * 2);
      drawCtx.fill();
    }

    // Delicate Solar Gold tips and leaf dots (inherit branch color)
    if (b.tipDots.length > 0 && b.growthProgress > 0.9) {
      const tipFade = smoothstep(0.9, 1.0, b.growthProgress);
      // Radiant Solar Gold for the tip leaves
      const tr = 255;
      const tg2 = 205;
      const tb = 45;
      for (const dot of b.tipDots) {
        const dx = x2 + dot.ox;
        const dy = y2 + dot.oy;
        const da = tipFade * dot.alpha;
        const ds = dot.size;

        const tg = drawCtx.createRadialGradient(dx, dy, 0, dx, dy, ds * 2);
        tg.addColorStop(0, \`rgba(\${tr}, \${tg2}, \${tb}, \${da * 0.9})\`);
        tg.addColorStop(0.5, \`rgba(234, 169, 0, \${da * 0.35})\`);
        tg.addColorStop(1, \`rgba(234, 169, 0, 0)\`);
        drawCtx.fillStyle = tg;
        drawCtx.beginPath();
        drawCtx.arc(dx, dy, ds * 2, 0, Math.PI * 2);
        drawCtx.fill();
      }
    }
  }

  // --- Scene ---
  function drawScene(time) {
    ctx.clearRect(0, 0, W, H);

    recalcPositions(time);

    // Draw branches
    ctx.save();
    ctx.globalAlpha = treeAlpha;
    for (const b of allBranches) {
      drawBranch(ctx, b, time);
    }
    ctx.restore();

    // Particles
    updateParticles(time);
    ctx.save();
    drawParticles(ctx, treeAlpha);
    ctx.restore();

  }

  // --- State machine ---
  function frame(time) {
    // Decay shake
    if (shakeAmount > 0.01) shakeAmount *= 0.95;
    else shakeAmount = 0;

    switch (treeState) {
      case 'growing': {
        const done = updateBranches(time);
        drawScene(time);
        if (done) {
          treeState = 'holding';
          holdTimer = 0;
        }
        break;
      }
      case 'holding': {
        drawScene(time);
        holdTimer++;
        if (holdTimer >= HOLD_DURATION) {
          treeState = 'fading';
          fadeTimer = 0;
        }
        break;
      }
      case 'fading': {
        fadeTimer++;
        treeAlpha = Math.max(0, 1 - fadeTimer / FADE_DURATION);
        drawScene(time);
        if (fadeTimer >= FADE_DURATION) {
          treeState = 'waiting';
          waitTimer = 0;
        }
        break;
      }
      case 'waiting': {
        ctx.clearRect(0, 0, W, H);
        waitTimer++;
        if (waitTimer >= WAIT_DURATION) {
          createTree();
        }
        break;
      }
    }
    if (running) requestAnimationFrame(frame);
  }

  // --- Visibility pause ---
  let running = true;
  function startLoop() {
    if (!running) { running = true; requestAnimationFrame(frame); }
  }

  document.addEventListener('visibilitychange', function() {
    if (document.hidden) { running = false; }
    else startLoop();
  });

  // Mouse: move to push the tree with wind, click to shake it
  var mouseX = W / 2, mouseY = H / 2, mouseActive = false;
  var windForce = 0; // -1 to 1, based on mouse x relative to tree
  var shakeAmount = 0;

  canvas.addEventListener('mousemove', function(e) {
    mouseX = e.clientX; mouseY = e.clientY; mouseActive = true;
    windForce = (mouseX - W / 2) / (W / 2); // -1 left, +1 right
  });
  canvas.addEventListener('mouseleave', function() { mouseActive = false; windForce = 0; });
  canvas.addEventListener('click', function() { shakeAmount = 1.0; });
  canvas.addEventListener('touchstart', function(e) {
    e.preventDefault(); mouseActive = true;
    mouseX = e.touches[0].clientX; mouseY = e.touches[0].clientY;
    windForce = (mouseX - W / 2) / (W / 2);
    shakeAmount = 1.0;
  }, { passive: false });
  canvas.addEventListener('touchmove', function(e) {
    e.preventDefault(); mouseX = e.touches[0].clientX; mouseY = e.touches[0].clientY;
    windForce = (mouseX - W / 2) / (W / 2);
  }, { passive: false });
  canvas.addEventListener('touchend', function() { mouseActive = false; windForce = 0; });

  createTree();
  requestAnimationFrame(frame);

  window.addEventListener('message', function(e) {
    if (e.data && e.data.type === 'param') {
      switch (e.data.name) {
        case 'GROWTH_SPEED_BASE': GROWTH_SPEED_BASE = e.data.value; break;
        case 'MAX_DEPTH': MAX_DEPTH = Math.round(e.data.value); break;
      }
    }
  });
})();
<\/script>
<script defer src="https://static.cloudflareinsights.com/beacon.min.js/v8c78df7c7c0f484497ecbca7046644da1771523124516" integrity="sha512-8DS7rgIrAmghBFwoOTujcf6D9rXvH8xm8JQ1Ja01h9QX8EzXldiszufYa4IFfKdLUKTTrnSFXLDkUEOTrZQ8Qg==" data-cf-beacon='{"version":"2024.11.0","token":"216c03e5eb1b42998a91f716785010f9","r":1,"server_timing":{"name":{"cfCacheStatus":true,"cfEdge":true,"cfExtPri":true,"cfL4":true,"cfOrigin":true,"cfSpeedBrain":true},"location_startswith":null}}' crossorigin="anonymous"><\/script>
</body>
</html>
`;
export default generativeTreeSource;
