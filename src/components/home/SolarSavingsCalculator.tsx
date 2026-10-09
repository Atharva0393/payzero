"use client";

import React, { useState, useId, useRef } from "react";
import Link from "next/link";
import {
  calculateSolarPotential,
  validatePinCode,
  formatINR,
  type CalculationResult,
} from "./solar-calculator/solar-calculator-model";
import SolarSavingsInformation from "./solar-calculator/SolarSavingsInformation";

export const SolarSavingsCalculator: React.FC = () => {
  const pinInputId = useId();
  const billSliderId = useId();
  const resultsRef = useRef<HTMLDivElement>(null);

  // User input states
  const [pinCode, setPinCode] = useState<string>("431003"); // Default to Chhatrapati Sambhajinagar PIN
  const [monthlyBill, setMonthlyBill] = useState<number>(2500);
  const [pinTouched, setPinTouched] = useState<boolean>(false);
  const [hasCalculated, setHasCalculated] = useState<boolean>(true); // Pre-calculate initial state for immediate utility

  // Validation
  const pinValidation = validatePinCode(pinCode);

  // Computed results from centralised calculation engine
  const [results, setResults] = useState<CalculationResult>(() =>
    calculateSolarPotential(2500, "431003")
  );

  const handlePinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/\D/g, "").slice(0, 6);
    setPinCode(val);
    setPinTouched(true);
  };

  const handleBillChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = Number(e.target.value);
    setMonthlyBill(val);
    // Instant reactive recalculation if already active
    if (pinValidation.isValid) {
      setResults(calculateSolarPotential(val, pinCode));
    }
  };

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    setPinTouched(true);

    if (!pinValidation.isValid) {
      return;
    }

    const newResults = calculateSolarPotential(monthlyBill, pinCode);
    setResults(newResults);
    setHasCalculated(true);

    // Smooth scroll down to results on mobile/tablet viewports
    if (window.innerWidth < 1024 && resultsRef.current) {
      setTimeout(() => {
        resultsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  };

  // Slider background track percentage calculation for custom fill styling
  const sliderPercentage = ((monthlyBill - 500) / (10000 - 500)) * 100;

  return (
    <section
      id="solar-calculator"
      className="relative bg-[#FFF0B8] text-[#102B50] py-16 sm:py-24 border border-[#E8D8A5] overflow-hidden rounded-[var(--radius-lg)] my-12 sm:my-16 shadow-xs"
    >
      {/* Background technical architectural grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 space-y-16">
        {/* ==========================================================
            SECTION 1: Calculator Introduction and Interactive Inputs
            ========================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Introduction & Solar Expert Card */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[var(--radius-sm)] bg-[#FFF8E7] border border-[#E8D8A5] text-[11px] font-mono tracking-widest text-[#102B50] uppercase font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FFC928] animate-pulse" />
                SOLAR SAVINGS CALCULATOR
              </div>

              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#102B50] tracking-tight leading-[1.12]">
                Calculate your savings
              </h2>

              <p className="text-base sm:text-lg text-[#536171] leading-relaxed font-normal">
                Enter your PIN code and average monthly electricity bill to estimate your solar
                savings, recommended capacity, and roof area requirement.
              </p>
            </div>

            {/* Solar Expert Contact Card */}
            <a
              href="tel:+916002370023"
              className="group block bg-[#FFFFFF] border border-[#E8D8A5] rounded-[22px] p-6 shadow-sm hover:shadow-md hover:border-[#FFC928] transition-all duration-300 relative overflow-hidden"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-[14px] bg-[#FFF0B8] border border-[#E8D8A5] flex items-center justify-center text-[#102B50] shrink-0 group-hover:bg-[#FFC928] transition-colors duration-200">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>

                <div className="space-y-1">
                  <h3 className="font-heading text-base font-bold text-[#102B50] group-hover:text-[#EAA900] transition-colors">
                    Got questions?
                  </h3>
                  <p className="text-xs sm:text-sm text-[#536171] leading-relaxed">
                    Our solar engineers are just a call away.
                  </p>
                  <div className="pt-1 inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#102B50] group-hover:text-[#EAA900] transition-colors">
                    <span>Talk to our expert</span>
                    <span className="transition-transform duration-200 group-hover:translate-x-1">
                      →
                    </span>
                    <span className="text-[#536171]/40 ml-1">•</span>
                    <span className="text-[#536171] font-mono font-normal ml-1">
                      +91 60023 70023
                    </span>
                  </div>
                </div>
              </div>
            </a>
          </div>

          {/* Right Column: Calculator Input Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleCalculate}
              className="bg-[#FFFFFF] border border-[#E8D8A5] rounded-[24px] p-6 sm:p-8 lg:p-10 space-y-7 shadow-md"
            >
              <div className="border-b border-[#E8D8A5] pb-4 flex items-center justify-between">
                <div>
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#102B50]">
                    Solar Potential Estimation Form
                  </h3>
                  <p className="text-xs text-[#536171] mt-0.5">
                    Adjust consumption to view customized solar generation and financial returns.
                  </p>
                </div>
                <span className="hidden sm:inline border border-[#E8D8A5] px-2 py-0.5 rounded-[var(--radius-sm)] bg-[#FFF0B8] text-[10px] font-mono font-bold text-[#102B50]">
                  REAL-TIME MODEL
                </span>
              </div>

              {/* Field 1: PIN Code */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor={pinInputId}
                    className="block text-xs font-mono font-bold uppercase tracking-wider text-[#102B50]"
                  >
                    PIN Code <span className="text-[#EAA900]">*</span>
                  </label>
                  <span className="text-[11px] font-mono text-[#536171]">6-Digit Indian Postal Code</span>
                </div>

                <div className="relative">
                  <input
                    id={pinInputId}
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    maxLength={6}
                    value={pinCode}
                    onChange={handlePinChange}
                    onBlur={() => setPinTouched(true)}
                    placeholder="Enter 6-digit PIN code (e.g. 431003)"
                    className={`w-full px-4 py-3.5 rounded-[14px] bg-[#FFF8E7] border text-base font-mono font-bold text-[#102B50] placeholder:text-[#536171]/50 focus:outline-none focus:ring-2 transition-all ${
                      pinTouched && !pinValidation.isValid
                        ? "border-red-400 focus:ring-red-200"
                        : "border-[#E8D8A5] focus:ring-[#102B50]/20 focus:border-[#EAA900]"
                    }`}
                  />
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                    {pinValidation.isValid ? (
                      <span className="w-5 h-5 rounded-full bg-[#102B50] text-[#FFC928] flex items-center justify-center text-xs font-bold">
                        ✓
                      </span>
                    ) : (
                      pinTouched && (
                        <span className="w-5 h-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-xs font-bold">
                          !
                        </span>
                      )
                    )}
                  </div>
                </div>

                {pinTouched && (
                  <p
                    className={`text-xs font-mono ${
                      pinValidation.isValid ? "text-[#102B50]" : "text-red-600"
                    }`}
                  >
                    {pinValidation.message}
                  </p>
                )}
              </div>

              {/* Field 2: Monthly Electricity Bill Slider */}
              <div className="space-y-4">
                <div className="flex items-baseline justify-between">
                  <label
                    htmlFor={billSliderId}
                    className="block text-xs font-mono font-bold uppercase tracking-wider text-[#102B50]"
                  >
                    Monthly Electricity Bill
                  </label>
                  <div className="font-mono text-2xl sm:text-3xl font-extrabold text-[#102B50] tracking-tight">
                    {formatINR(monthlyBill)}
                  </div>
                </div>

                {/* Accessible Styled Range Slider */}
                <div className="space-y-2">
                  <input
                    id={billSliderId}
                    type="range"
                    min={500}
                    max={10000}
                    step={500}
                    value={monthlyBill}
                    onChange={handleBillChange}
                    className="w-full h-3 rounded-lg appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#102B50]/30"
                    style={{
                      background: `linear-gradient(to right, #102B50 0%, #102B50 ${sliderPercentage}%, #E8D8A5 ${sliderPercentage}%, #E8D8A5 100%)`,
                    }}
                  />
                  <div className="flex items-center justify-between text-xs font-mono text-[#536171]">
                    <span>₹500 / mo</span>
                    <span>₹5,000 / mo</span>
                    <span>₹10,000 / mo</span>
                  </div>
                </div>
              </div>

              {/* Field 3: Action Trigger Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={!pinValidation.isValid}
                  className="w-full py-4 px-6 rounded-[14px] bg-[#102B50] text-white hover:bg-[#0B1F3A] font-bold text-base transition-all duration-200 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Calculate My Solar Savings</span>
                  <span>→</span>
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* ==========================================================
            SECTION 2 & 3: Solar Calculation Results & Environmental Impact
            ========================================================== */}
        {hasCalculated && (
          <div ref={resultsRef} className="space-y-12 animate-in fade-in duration-300">
            {/* Results Grid Header */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#E8D8A5] pb-5">
              <div>
                <span className="font-mono text-xs font-bold text-[#EAA900] uppercase tracking-wider">
                  CALCULATION RESULTS
                </span>
                <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#102B50]">
                  Your Estimated Solar Potential
                </h3>
              </div>
              <div className="font-mono text-xs text-[#536171]">
                Baseline: PIN <strong className="text-[#102B50]">{results.pinCode}</strong> ·{" "}
                <strong className="text-[#102B50]">{formatINR(results.monthlyBill)}/mo</strong>
              </div>
            </div>

            {/* Results Two-Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              {/* Left Column: Sizing & System Recommendation */}
              <div className="lg:col-span-5 bg-[#FFFFFF] border border-[#E8D8A5] rounded-[24px] p-7 sm:p-8 flex flex-col justify-between space-y-6 shadow-sm">
                <div className="space-y-6">
                  <div className="space-y-1">
                    <span className="font-mono text-[10px] tracking-widest text-[#536171] uppercase font-bold">
                      CAPACITY SPECIFICATION
                    </span>
                    <h4 className="font-heading text-xl font-bold text-[#102B50]">
                      Your Recommended Solar System
                    </h4>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {/* Capacity metric */}
                    <div className="p-4 rounded-[16px] bg-[#FFF8E7] border border-[#E8D8A5] space-y-1">
                      <div className="text-[10px] font-mono text-[#536171] uppercase">
                        System Capacity
                      </div>
                      <div className="font-mono text-2xl sm:text-3xl font-extrabold text-[#102B50]">
                        {results.recommendedKw} kW
                      </div>
                      <div className="text-[11px] text-[#536171]">
                        ~{results.monthlyUnitsGenerated} units / mo
                      </div>
                    </div>

                    {/* Roof area metric */}
                    <div className="p-4 rounded-[16px] bg-[#FFF8E7] border border-[#E8D8A5] space-y-1">
                      <div className="text-[10px] font-mono text-[#536171] uppercase">
                        Required Roof Area
                      </div>
                      <div className="font-mono text-2xl sm:text-3xl font-extrabold text-[#102B50]">
                        {results.recommendedRoofAreaSqFt} sq. ft.
                      </div>
                      <div className="text-[11px] text-[#536171]">Shadow-free area</div>
                    </div>
                  </div>

                  <p className="text-xs text-[#536171] leading-relaxed">
                    Your final system size depends on your roof geometry, electricity usage profile,
                    available sunlight, and on-site electrical panel audit.
                  </p>
                </div>

                {/* Savings Assurance Panel */}
                <div className="p-4.5 rounded-[16px] bg-[#FFF0B8] border border-[#E8D8A5] space-y-2.5">
                  <div className="font-heading text-xs font-bold text-[#102B50]">
                    Plan your solar investment with confidence
                  </div>
                  <p className="text-[11px] text-[#536171] leading-relaxed">
                    Understand your estimated savings, system requirements and potential long-term
                    benefits before making a commitment.
                  </p>
                  <Link
                    href="tel:+916002370023"
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#102B50] hover:text-[#EAA900] transition-colors"
                  >
                    <span>Talk to a Solar Expert</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>

              {/* Right Column: Three Savings Metrics Breakdown */}
              <div className="lg:col-span-7 bg-[#FFFFFF] border border-[#E8D8A5] rounded-[24px] p-7 sm:p-8 flex flex-col justify-between space-y-6 shadow-sm">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <span className="font-mono text-[10px] tracking-widest text-[#536171] uppercase font-bold">
                        FINANCIAL VALUE
                      </span>
                      <h4 className="font-heading text-xl font-bold text-[#102B50]">
                        Your Solar Savings
                      </h4>
                    </div>
                    <span className="border border-[#E8D8A5] px-2 py-0.5 rounded-[var(--radius-sm)] bg-[#FFF8E7] text-[10px] font-mono text-[#102B50]">
                      25-YR MODEL
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {/* Monthly */}
                    <div className="p-4.5 rounded-[18px] bg-[#FFF8E7] border border-[#E8D8A5] space-y-1">
                      <div className="text-[10px] font-mono text-[#536171] uppercase font-semibold">
                        Monthly Savings
                      </div>
                      <div className="font-mono text-2xl sm:text-3xl font-extrabold text-[#102B50]">
                        {formatINR(results.monthlySavings)}
                      </div>
                      <div className="text-[10px] text-[#536171]">Immediate power bill reduction</div>
                    </div>

                    {/* Yearly */}
                    <div className="p-4.5 rounded-[18px] bg-[#FFF8E7] border border-[#E8D8A5] space-y-1">
                      <div className="text-[10px] font-mono text-[#536171] uppercase font-semibold">
                        Yearly Savings
                      </div>
                      <div className="font-mono text-2xl sm:text-3xl font-extrabold text-[#102B50]">
                        {formatINR(results.yearlySavings)}
                      </div>
                      <div className="text-[10px] text-[#536171]">Annualized energy savings</div>
                    </div>

                    {/* Lifetime */}
                    <div className="p-4.5 rounded-[18px] bg-[#FFF0B8] border border-[#E8D8A5] space-y-1">
                      <div className="text-[10px] font-mono text-[#102B50] uppercase font-bold">
                        25-Year Lifetime
                      </div>
                      <div className="font-mono text-2xl sm:text-3xl font-extrabold text-[#102B50]">
                        {formatINR(results.lifetimeSavings)}
                      </div>
                      <div className="text-[10px] text-[#536171]">With tariff escalation model</div>
                    </div>
                  </div>

                  {/* Illustrative EMI Comparison Strip */}
                  <div className="p-4 rounded-[16px] bg-[#FFF8E7] border border-[#E8D8A5] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs font-mono">
                    <div className="text-[#536171]">
                      Illustrative Monthly EMI (5-Yr Loan):{" "}
                      <strong className="text-[#102B50] font-bold text-sm">
                        {formatINR(results.monthlyEmi)}/mo
                      </strong>
                    </div>
                    <div className="text-[#102B50] font-bold text-[11px] bg-[#FFF0B8] px-2.5 py-1 rounded-[var(--radius-sm)] border border-[#E8D8A5]">
                      Savings Offset EMI
                    </div>
                  </div>
                </div>

                <div className="pt-2 text-[11px] font-mono text-[#536171]/80">
                  * Monthly savings assume blended ₹9.00/kWh tariff with 95% net-metering capture.
                </div>
              </div>
            </div>

            {/* Environmental Impact Metrics (Section Three) */}
            <div className="bg-[#FFFFFF] border border-[#E8D8A5] rounded-[24px] p-7 sm:p-9 space-y-6 shadow-sm">
              <div className="space-y-1">
                <span className="font-mono text-[10px] tracking-widest text-[#EAA900] uppercase font-bold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FFC928]" />
                  ENVIRONMENTAL BENEFIT
                </span>
                <h4 className="font-heading text-xl sm:text-2xl font-bold text-[#102B50]">
                  Your Solar Saves More Than Money
                </h4>
                <p className="text-xs sm:text-sm text-[#536171]">
                  Generating clean electricity on-site actively avoids coal-based grid emissions over
                  your system&apos;s 25-year operational lifecycle.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                {/* Metric 1: CO2 Avoided */}
                <div className="p-5 rounded-[18px] bg-[#FFF8E7] border border-[#E8D8A5] space-y-2">
                  <div className="w-9 h-9 rounded-[12px] bg-[#FFF0B8] border border-[#E8D8A5] flex items-center justify-center text-[#102B50]">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 2a9 9 0 0 1 9 9c0 3.9-2.5 7.2-6 8.5V22h-6v-2.5C5.5 18.2 3 14.9 3 11a9 9 0 0 1 9-9z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-mono text-2xl sm:text-3xl font-extrabold text-[#102B50]">
                      {results.annualCo2AvoidedTonnes} Tonnes
                    </div>
                    <div className="text-xs font-bold text-[#102B50] mt-0.5">
                      CO₂ Avoided Annually
                    </div>
                  </div>
                  <div className="text-[11px] text-[#536171] leading-snug">
                    ~{results.lifetimeCo2AvoidedTonnes} Tonnes over 25 years (CEA grid factor 0.82 kg/kWh).
                  </div>
                </div>

                {/* Metric 2: Trees Planted */}
                <div className="p-5 rounded-[18px] bg-[#FFF8E7] border border-[#E8D8A5] space-y-2">
                  <div className="w-9 h-9 rounded-[12px] bg-[#FFF0B8] border border-[#E8D8A5] flex items-center justify-center text-[#102B50]">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 10v12" />
                      <path d="M12 14c-2 0-3-1-3-3 0-3 3-7 3-7s3 4 3 7c0 2-1 3-3 3z" />
                      <path d="M12 18c-3 0-5-2-5-5 0-4 5-9 5-9s5 5 5 9c0 3-2 5-5 5z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-mono text-2xl sm:text-3xl font-extrabold text-[#102B50]">
                      {results.equivalentTreesPlanted} Trees
                    </div>
                    <div className="text-xs font-bold text-[#102B50] mt-0.5">
                      Equivalent Planted / Year
                    </div>
                  </div>
                  <div className="text-[11px] text-[#536171] leading-snug">
                    Calculated based on 20 kg annual CO₂ carbon absorption per mature tree.
                  </div>
                </div>

                {/* Metric 3: Driving Distance Avoided */}
                <div className="p-5 rounded-[18px] bg-[#FFF8E7] border border-[#E8D8A5] space-y-2">
                  <div className="w-9 h-9 rounded-[12px] bg-[#FFF0B8] border border-[#E8D8A5] flex items-center justify-center text-[#102B50]">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
                      <circle cx="7" cy="17" r="2" />
                      <circle cx="17" cy="17" r="2" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-mono text-2xl sm:text-3xl font-extrabold text-[#102B50]">
                      {new Intl.NumberFormat("en-IN").format(results.equivalentKmDrivenAvoided)} km
                    </div>
                    <div className="text-xs font-bold text-[#102B50] mt-0.5">
                      Passenger Car Travel Avoided
                    </div>
                  </div>
                  <div className="text-[11px] text-[#536171] leading-snug">
                    Equivalent emissions reduction benchmarked against 0.14 kg CO₂ / km.
                  </div>
                </div>
              </div>
            </div>

            {/* Financial & Engineering Disclaimer (Section 11) */}
            <div className="p-5 rounded-[18px] bg-[#FFF8E7] border border-[#E8D8A5] text-[11px] font-mono text-[#536171] leading-relaxed">
              * These figures are indicative estimates based on the information provided and the
              assumptions used by the calculator. Actual system size, installation costs, electricity
              savings and environmental impact may vary depending on location, roof conditions,
              shading, electricity tariff, system design and usage. Final estimates are subject to a
              site assessment and a confirmed proposal from Payzero.
            </div>
          </div>
        )}

        {/* ==========================================================
            SECTION 4: Detailed Educational Explanation & Solar Visual
            ========================================================== */}
        <SolarSavingsInformation
          currentKw={results.recommendedKw}
          currentPin={results.pinCode}
        />
      </div>
    </section>
  );
};

export default SolarSavingsCalculator;
