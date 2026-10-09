"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";

export interface SystemSizeOption {
  kw: number;
  label: string;
  billRange: string;
  helperText: string;
}

export const SYSTEM_SIZE_OPTIONS: SystemSizeOption[] = [
  {
    kw: 3,
    label: "3 kW",
    billRange: "₹1,500 – ₹2,500",
    helperText: "Suitable for an illustrative monthly electricity bill of ₹1,500–₹2,500.",
  },
  {
    kw: 4,
    label: "4 kW",
    billRange: "₹2,500 – ₹4,000",
    helperText: "Suitable for an illustrative monthly electricity bill of ₹2,500–₹4,000.",
  },
  {
    kw: 5,
    label: "5 kW",
    billRange: "₹4,000 – ₹8,000",
    helperText: "Suitable for an illustrative monthly electricity bill of ₹4,000–₹8,000.",
  },
];

export const EMI_TENURE_OPTIONS = [36, 48, 60];

export interface CalculatorConfig {
  /** Benchmark turnkey installed capital expenditure per kW (in INR) */
  costPerKw: number;
  /** Estimated average monthly solar energy generated per kW installed (kWh / Units) */
  monthlyUnitsPerKw: number;
  /** Assumed blended electricity utility tariff rate (INR per unit) */
  tariffPerUnit: number;
  /** Assumed on-site self-consumption and net-metering utilization rate (0.0 to 1.0) */
  selfConsumptionFactor: number;
  /** Illustrative annual financing interest rate for solar green loans (decimal) */
  annualInterestRate: number;
  /** Percentage of net capital outlay financed through loan EMI (decimal) */
  financedPercentage: number;
}

/**
 * Centralised configurable financial and engineering assumptions.
 * These illustrative defaults reflect standard distributed solar metrics in Maharashtra
 * and can be updated as verified commercial terms evolve.
 */
export const DEFAULT_CALCULATOR_CONFIG: CalculatorConfig = {
  costPerKw: 60000, // ₹60,000 / kW benchmark
  monthlyUnitsPerKw: 125, // ~4.1 units / kW / day
  tariffPerUnit: 9.2, // ₹9.20 per unit blended slab
  selfConsumptionFactor: 0.95, // 95% net metering utilization
  annualInterestRate: 0.095, // 9.5% annual interest rate
  financedPercentage: 0.85, // 85% financed through solar loan
};

const formatINR = (val: number): string => {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(Math.round(val));
};

export const SolarSavingsCalculator: React.FC = () => {
  const [selectedKw, setSelectedKw] = useState<number>(3);
  const [selectedTenure, setSelectedTenure] = useState<number>(60);

  // Dynamic calculations based on centralised configurable assumptions
  const calculations = useMemo(() => {
    const {
      costPerKw,
      monthlyUnitsPerKw,
      tariffPerUnit,
      selfConsumptionFactor,
      annualInterestRate,
      financedPercentage,
    } = DEFAULT_CALCULATOR_CONFIG;

    // 1. Estimated Monthly Savings
    const monthlyGeneratedUnits = selectedKw * monthlyUnitsPerKw;
    const monthlyUsableUnits = monthlyGeneratedUnits * selfConsumptionFactor;
    const monthlySavings = monthlyUsableUnits * tariffPerUnit;

    // 2. Estimated Monthly EMI (Reducing Balance Formula)
    const totalCost = selectedKw * costPerKw;
    const principal = totalCost * financedPercentage;
    const monthlyRate = annualInterestRate / 12;
    const n = selectedTenure;

    let monthlyEmi = 0;
    if (monthlyRate > 0) {
      const compoundFactor = Math.pow(1 + monthlyRate, n);
      monthlyEmi = (principal * monthlyRate * compoundFactor) / (compoundFactor - 1);
    } else {
      monthlyEmi = principal / n;
    }

    return {
      monthlySavings,
      monthlyEmi,
      totalCost,
      principal,
    };
  }, [selectedKw, selectedTenure]);

  return (
    <section
      id="calculator"
      className="relative bg-[#FFF0B8] text-[#102B50] py-16 sm:py-24 border border-[#E8D8A5] overflow-hidden rounded-[var(--radius-lg)] my-12 sm:my-16 shadow-xs"
    >
      {/* Background technical architectural grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* ==========================================================
              LEFT COLUMN — Headline, Supporting Copy & Expert Card (45%)
              ========================================================== */}
          <div className="lg:col-span-5 space-y-8">
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[var(--radius-sm)] bg-[#FFF8E7] border border-[#E8D8A5] text-[11px] font-mono tracking-widest text-[#102B50] uppercase font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FFC928] animate-pulse" />
              SOLAR MADE ACCESSIBLE
            </div>

            {/* Headline with Solar Accent */}
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#102B50] tracking-tight leading-[1.12]">
              Go Solar with{" "}
              <span className="text-[#EAA900] block mt-1">Zero Investment*</span>
            </h2>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-[#536171] leading-relaxed font-normal">
              Explore how solar savings and available financing options could help make your
              transition to solar more affordable.
            </p>

            {/* Solar Expert Contact Card */}
            <a
              href="tel:+916002370023"
              className="group block bg-[#FFFFFF] border border-[#E8D8A5] rounded-[22px] p-6 sm:p-7 shadow-sm hover:shadow-md hover:border-[#FFC928] transition-all duration-300 relative overflow-hidden"
            >
              <div className="flex items-start gap-4">
                {/* Expert / Technical Advisory Glyph */}
                <div className="w-13 h-13 rounded-[16px] bg-[#FFF0B8] border border-[#E8D8A5] flex items-center justify-center text-[#102B50] shrink-0 group-hover:bg-[#FFC928] transition-colors duration-200">
                  <svg
                    width="26"
                    height="26"
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

                {/* Content */}
                <div className="space-y-1.5">
                  <h3 className="font-heading text-lg font-bold text-[#102B50] group-hover:text-[#EAA900] transition-colors">
                    Got questions?
                  </h3>
                  <p className="text-sm text-[#536171] leading-relaxed">
                    Our solar experts are just a call away.
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

          {/* ==========================================================
              RIGHT COLUMN — Calculator Controls & Result Panels (55%)
              ========================================================== */}
          <div className="lg:col-span-7">
            <div className="bg-[#FFFFFF] border border-[#E8D8A5] rounded-[24px] p-6 sm:p-8 lg:p-10 space-y-8 shadow-md">
              {/* Header */}
              <div className="space-y-2 border-b border-[#E8D8A5] pb-5">
                <div className="flex items-center justify-between font-mono text-[10px] tracking-widest text-[#536171] uppercase font-bold">
                  <span>FINANCIAL ESTIMATION MODEL</span>
                  <span className="border border-[#E8D8A5] px-2 py-0.5 rounded-[var(--radius-sm)] bg-[#FFF0B8] text-[#102B50]">
                    ILLUSTRATIVE
                  </span>
                </div>
                <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#102B50] tracking-tight">
                  Get Savings and EMI Estimates
                </h3>
                <p className="text-xs sm:text-sm text-[#536171] leading-relaxed">
                  Select your preferred system size and repayment period to explore an illustrative
                  estimate.
                </p>
              </div>

              {/* Control 1: System Size Selection */}
              <div className="space-y-3">
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#102B50]">
                  System Size
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3" role="radiogroup">
                  {SYSTEM_SIZE_OPTIONS.map((opt) => {
                    const isSelected = selectedKw === opt.kw;
                    return (
                      <button
                        key={opt.kw}
                        type="button"
                        role="radio"
                        aria-checked={isSelected}
                        onClick={() => setSelectedKw(opt.kw)}
                        className={`text-left p-4 rounded-[16px] transition-all duration-200 cursor-pointer flex flex-col justify-between space-y-2 focus:outline-none focus:ring-2 focus:ring-[#102B50]/30 ${
                          isSelected
                            ? "bg-[#FFF0B8] border-2 border-[#EAA900] shadow-xs"
                            : "bg-[#FFF8E7] border border-[#E8D8A5] hover:border-[#FFC928]"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span
                            className={`font-mono text-lg font-extrabold ${
                              isSelected ? "text-[#102B50]" : "text-[#102B50]"
                            }`}
                          >
                            {opt.label}
                          </span>
                          <span
                            className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                              isSelected
                                ? "border-[#EAA900] bg-[#EAA900]"
                                : "border-[#E8D8A5] bg-[#FFFFFF]"
                            }`}
                          >
                            {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
                          </span>
                        </div>
                        <div className="text-[11px] text-[#536171] leading-snug">
                          Suitable for <span className="font-bold text-[#102B50]">{opt.billRange}</span>{" "}
                          monthly bill.
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Control 2: EMI Tenure Selection */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#102B50]">
                    EMI Tenure
                  </label>
                  <span className="font-mono text-xs text-[#536171]">
                    Selected: <strong className="text-[#102B50]">{selectedTenure} Months</strong>
                  </span>
                </div>

                <div className="flex flex-wrap gap-3">
                  {EMI_TENURE_OPTIONS.map((months) => {
                    const isSelected = selectedTenure === months;
                    return (
                      <button
                        key={months}
                        type="button"
                        onClick={() => setSelectedTenure(months)}
                        className={`px-5 py-2.5 rounded-[12px] font-mono text-xs font-bold transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#102B50]/30 ${
                          isSelected
                            ? "bg-[#102B50] text-white shadow-xs"
                            : "bg-[#FFF8E7] border border-[#E8D8A5] text-[#102B50] hover:bg-[#FFF0B8]"
                        }`}
                      >
                        {months} Months
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Results Display */}
              <div className="pt-4 border-t border-[#E8D8A5] grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Result 1 — Estimated Monthly Savings */}
                <div className="p-5 rounded-[18px] bg-[#FFF8E7] border border-[#E8D8A5] space-y-1.5">
                  <div className="text-[11px] font-mono text-[#536171] uppercase tracking-wider font-semibold">
                    Estimated Monthly Savings
                  </div>
                  <div className="font-mono text-3xl sm:text-4xl font-extrabold text-[#102B50] tracking-tight">
                    {formatINR(calculations.monthlySavings)}
                  </div>
                  <div className="text-[11px] text-[#536171] leading-relaxed">
                    Illustrative estimate based on the selected system and configured assumptions.
                  </div>
                </div>

                {/* Result 2 — Estimated Monthly EMI */}
                <div className="p-5 rounded-[18px] bg-[#FFF8E7] border border-[#E8D8A5] space-y-1.5">
                  <div className="text-[11px] font-mono text-[#536171] uppercase tracking-wider font-semibold">
                    Estimated Monthly EMI
                  </div>
                  <div className="font-mono text-3xl sm:text-4xl font-extrabold text-[#102B50] tracking-tight">
                    {formatINR(calculations.monthlyEmi)}
                  </div>
                  <div className="text-[11px] text-[#536171] leading-relaxed">
                    Based on {selectedTenure}-month tenure and illustrative financing assumptions.
                  </div>
                </div>
              </div>

              {/* Consultation Link Strip */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
                <span className="text-[#536171]">
                  Ready for a custom site & financial model?
                </span>
                <Link
                  href="#contact"
                  className="font-mono font-bold text-[#102B50] hover:text-[#EAA900] inline-flex items-center gap-1.5 transition-colors"
                >
                  <span>Request Project Assessment</span>
                  <span>→</span>
                </Link>
              </div>

              {/* Section 10: Subsidy and Financial Disclaimer */}
              <div className="pt-4 border-t border-[#E8D8A5] text-[11px] font-mono text-[#536171]/80 leading-relaxed">
                * All figures are illustrative estimates, not a quotation or financing offer. Actual
                installation costs, electricity savings, subsidy eligibility, approved subsidy
                amounts, loan availability, interest rates and EMI depend on the property, system
                design, applicable scheme rules and lender terms. Government subsidies are subject to
                eligibility, approval and applicable conditions.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolarSavingsCalculator;
