import React from "react";
import Link from "next/link";
import Badge from "@/components/ui/Badge";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";

interface ProjectItem {
  id: string;
  number: string;
  title: string;
  category: string;
  location?: string;
  aspectRatio: "16/9" | "4/3" | "21/9";
  imageLabel: string;
  imageSublabel: string;
  note?: string;
  featured: boolean;
}

const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "project-01",
    number: "PROJECT 01",
    title: "[ PROJECT NAME — PLACEHOLDER ]",
    category: "COMMERCIAL SOLAR INFRASTRUCTURE",
    location: "[ LOCATION — PLACEHOLDER ]",
    aspectRatio: "16/9",
    imageLabel: "PAYZERO PROJECT 01 // ARCHITECTURAL INTEGRATION",
    imageSublabel:
      "High-resolution photography slot: Premium modern commercial building with rooftop solar installation",
    note: "Project specifications and imagery coming soon.",
    featured: true,
  },
  {
    id: "project-02",
    number: "PROJECT 02",
    title: "[ PROJECT NAME — PLACEHOLDER ]",
    category: "COMMERCIAL & INDUSTRIAL",
    location: "[ LOCATION — PLACEHOLDER ]",
    aspectRatio: "4/3",
    imageLabel: "PAYZERO PROJECT 02 // COMMERCIAL ARRAY",
    imageSublabel:
      "High-resolution photography slot: Commercial/industrial solar installation integrated with architecture",
    featured: false,
  },
  {
    id: "project-03",
    number: "PROJECT 03",
    title: "[ PROJECT NAME — PLACEHOLDER ]",
    category: "RESIDENTIAL ESTATE",
    location: "[ LOCATION — PLACEHOLDER ]",
    aspectRatio: "4/3",
    imageLabel: "PAYZERO PROJECT 03 // RESIDENTIAL ESTATE",
    imageSublabel:
      "High-resolution photography slot: Residential luxury property with architecturally integrated solar",
    featured: false,
  },
];

export const ProjectsSection: React.FC = () => {
  const featuredProject = PROJECTS_DATA.find((p) => p.featured);
  const secondaryProjects = PROJECTS_DATA.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-16 sm:py-24 lg:py-32 border-b border-[var(--border-light)] relative">
      {/* Section Header */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-16 sm:mb-20 lg:mb-24">
        {/* Left: Eyebrow + Headline */}
        <div className="lg:col-span-7 space-y-4">
          <Badge variant="neutral">SELECTED PROJECTS</Badge>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--text-primary)] tracking-tight leading-[1.12]">
            Built for the Properties That Matter.
          </h2>
        </div>

        {/* Right: Supporting Description */}
        <div className="lg:col-span-5 lg:pt-10">
          <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed font-normal">
            Every Payzero project is designed around the specific property, architectural characteristics, and long-term energy requirements.
          </p>
        </div>
      </div>

      {/* Featured Project (Project 01) */}
      {featuredProject && (
        <article className="group mb-12 sm:mb-16 pb-12 sm:pb-16 border-b border-[var(--border-light)] space-y-6">
          <ImagePlaceholder
            aspectRatio={featuredProject.aspectRatio}
            label={featuredProject.imageLabel}
            sublabel={featuredProject.imageSublabel}
            className="w-full shadow-sm"
          />

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pt-2">
            <div className="space-y-1.5">
              <div className="flex items-center gap-3 font-mono text-xs font-semibold text-[var(--text-muted)] tracking-widest uppercase">
                <span className="text-[var(--text-primary)]">{featuredProject.number}</span>
                <span>—</span>
                <span>{featuredProject.category}</span>
              </div>
              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[var(--text-primary)] tracking-tight group-hover:text-[var(--accent-highlight)] transition-colors duration-200">
                {featuredProject.title}
              </h3>
            </div>

            <div className="text-left md:text-right space-y-1">
              {featuredProject.location && (
                <div className="font-mono text-xs text-[var(--text-muted)] tracking-wider">
                  {featuredProject.location}
                </div>
              )}
              {featuredProject.note && (
                <div className="font-mono text-[11px] text-[var(--text-muted)] italic">
                  {featuredProject.note}
                </div>
              )}
            </div>
          </div>
        </article>
      )}

      {/* Secondary Projects Grid (Projects 02 & 03) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-8 lg:gap-12">
        {secondaryProjects.map((project) => (
          <article key={project.id} className="group space-y-5">
            <ImagePlaceholder
              aspectRatio={project.aspectRatio}
              label={project.imageLabel}
              sublabel={project.imageSublabel}
              className="w-full shadow-xs"
            />

            <div className="space-y-1.5">
              <div className="flex items-center gap-3 font-mono text-xs font-semibold text-[var(--text-muted)] tracking-widest uppercase">
                <span className="text-[var(--text-primary)]">{project.number}</span>
                <span>—</span>
                <span>{project.category}</span>
              </div>
              <h3 className="font-heading text-xl font-bold text-[var(--text-primary)] tracking-tight group-hover:text-[var(--accent-highlight)] transition-colors duration-200">
                {project.title}
              </h3>
              {project.location && (
                <div className="font-mono text-xs text-[var(--text-muted)] tracking-wider pt-0.5">
                  {project.location}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>

      {/* Section Footer Link */}
      <div className="mt-16 sm:mt-20 text-left">
        <Link
          href="#projects"
          className="inline-flex items-center gap-2.5 text-xs font-mono tracking-widest uppercase font-semibold text-[var(--text-primary)] hover:text-[var(--accent-highlight)] transition-colors duration-200 group focus:outline-none focus:underline"
        >
          <span>View All Projects</span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-transform duration-300 group-hover:translate-x-1.5"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </Link>
      </div>
    </section>
  );
};

export default ProjectsSection;
