/**
 * Centralised Financial, Engineering, and Environmental Solar Calculation Model
 * for Payzero Solar Infrastructure.
 */

export interface SolarCalculatorAssumptions {
  /** Blended average grid electricity tariff (INR / kWh) */
  tariffPerUnit: number;
  /** Estimated average monthly solar energy generated per kW installed (kWh / Units) */
  monthlyGenerationPerKw: number;
  /** Shadow-free roof area requirement benchmark (sq. ft. per kW) */
  roofAreaPerKw: number;
  /** Target solar offset of current consumption (percentage, 0.0 to 1.0) */
  targetOffsetRatio: number;
  /** On-site self-consumption and net-metering efficiency factor (0.0 to 1.0) */
  gridEfficiencyFactor: number;
  /** Standard system operational lifespan warranty (years) */
  systemLifespanYears: number;
  /** Conservative annual solar module degradation factor (decimal) */
  annualDegradation: number;
  /** Conservative annual grid electricity tariff escalation factor (decimal) */
  annualTariffEscalation: number;
  /** Central Electricity Authority (CEA) India grid emission factor (kg CO2 per kWh) */
  gridEmissionFactorKgPerKwh: number;
  /** Average CO2 absorbed by a mature tree annually (kg CO2 / tree / year) */
  treeCo2AbsorptionKgPerYear: number;
  /** Average passenger vehicle emission factor (kg CO2 per km) */
  carEmissionFactorKgPerKm: number;
  /** Indicative turnkey system capital cost per kW (INR) */
  indicativeCostPerKw: number;
  /** Illustrative financing interest rate per annum (decimal) */
  annualLoanInterestRate: number;
  /** Illustrative debt financing percentage (decimal) */
  loanFinancedRatio: number;
  /** Illustrative loan tenure in months */
  defaultTenureMonths: number;
}

export const DEFAULT_SOLAR_ASSUMPTIONS: SolarCalculatorAssumptions = {
  tariffPerUnit: 9.0, // ₹9.00 / kWh
  monthlyGenerationPerKw: 120, // ~4 kWh / kW / day = 120 kWh / month / kW
  roofAreaPerKw: 80, // ~80 sq. ft. shadow-free area per kW
  targetOffsetRatio: 0.85, // Sized to offset ~85% of grid consumption
  gridEfficiencyFactor: 0.95, // 95% net-metering energy capture
  systemLifespanYears: 25, // 25-year linear performance warranty
  annualDegradation: 0.005, // 0.5% per annum
  annualTariffEscalation: 0.025, // 2.5% per annum
  gridEmissionFactorKgPerKwh: 0.82, // CEA India grid baseline (0.82 kg CO2/kWh)
  treeCo2AbsorptionKgPerYear: 20, // 20 kg CO2 / tree / year
  carEmissionFactorKgPerKm: 0.14, // 0.14 kg CO2 / km
  indicativeCostPerKw: 60000, // ₹60,000 / kW benchmark
  annualLoanInterestRate: 0.095, // 9.5% p.a.
  loanFinancedRatio: 0.85, // 85% debt financed
  defaultTenureMonths: 60, // 5 years
};

export interface CalculationResult {
  pinCode: string;
  monthlyBill: number;
  recommendedKw: number;
  recommendedRoofAreaSqFt: number;
  monthlyUnitsGenerated: number;
  monthlySavings: number;
  yearlySavings: number;
  lifetimeSavings: number;
  monthlyEmi: number;
  annualCo2AvoidedTonnes: number;
  lifetimeCo2AvoidedTonnes: number;
  equivalentTreesPlanted: number;
  equivalentKmDrivenAvoided: number;
}

export function validatePinCode(pin: string): { isValid: boolean; message: string } {
  const cleanPin = pin.trim();
  if (!cleanPin) {
    return { isValid: false, message: "Please enter your 6-digit PIN code." };
  }
  if (!/^\d+$/.test(cleanPin)) {
    return { isValid: false, message: "PIN code must contain numbers only." };
  }
  if (cleanPin.length !== 6) {
    return { isValid: false, message: "PIN code must be exactly 6 digits." };
  }
  if (cleanPin.startsWith("0")) {
    return { isValid: false, message: "Indian PIN codes cannot start with 0." };
  }
  return { isValid: true, message: "Valid PIN code · Maharashtra regional solar profile." };
}

export function calculateSolarPotential(
  monthlyBill: number,
  pinCode: string,
  tenureMonths: number = DEFAULT_SOLAR_ASSUMPTIONS.defaultTenureMonths,
  customAssumptions: Partial<SolarCalculatorAssumptions> = {}
): CalculationResult {
  const config = { ...DEFAULT_SOLAR_ASSUMPTIONS, ...customAssumptions };

  // 1. Estimate monthly electricity units consumed
  const estimatedMonthlyUnitsConsumed = monthlyBill / config.tariffPerUnit;

  // 2. Recommend system capacity (kW) to offset target ratio
  const targetMonthlyUnits = estimatedMonthlyUnitsConsumed * config.targetOffsetRatio;
  const rawKw = targetMonthlyUnits / config.monthlyGenerationPerKw;
  // Restrain to minimum 1 kW, round to 1 decimal place (or 0.5 kW steps)
  const recommendedKw = Math.max(1.0, Math.round(rawKw * 2) / 2);

  // 3. Estimate roof area required
  const recommendedRoofAreaSqFt = Math.round(recommendedKw * config.roofAreaPerKw);

  // 4. Monthly & yearly energy generation
  const monthlyUnitsGenerated = Math.round(recommendedKw * config.monthlyGenerationPerKw);
  const usableMonthlyUnits = monthlyUnitsGenerated * config.gridEfficiencyFactor;

  // 5. Monthly & yearly savings
  // Savings capped at monthly bill to avoid unrealistic negative net bills
  const rawMonthlySavings = usableMonthlyUnits * config.tariffPerUnit;
  const monthlySavings = Math.round(Math.min(monthlyBill * 0.95, rawMonthlySavings));
  const yearlySavings = Math.round(monthlySavings * 12);

  // 6. Lifetime 25-year cumulative savings (factoring compound degradation & tariff escalation)
  let lifetimeSavings = 0;
  let currentYearGeneration = monthlyUnitsGenerated * 12;
  let currentTariff = config.tariffPerUnit;

  for (let year = 1; year <= config.systemLifespanYears; year++) {
    const yearUsableUnits = currentYearGeneration * config.gridEfficiencyFactor;
    lifetimeSavings += yearUsableUnits * currentTariff;
    currentYearGeneration *= 1 - config.annualDegradation;
    currentTariff *= 1 + config.annualTariffEscalation;
  }
  lifetimeSavings = Math.round(lifetimeSavings);

  // 7. Monthly EMI calculation (Reducing Balance Amortization)
  const systemCapCost = recommendedKw * config.indicativeCostPerKw;
  const principal = systemCapCost * config.loanFinancedRatio;
  const monthlyInterestRate = config.annualLoanInterestRate / 12;
  const n = tenureMonths;

  let monthlyEmi = 0;
  if (monthlyInterestRate > 0) {
    const compound = Math.pow(1 + monthlyInterestRate, n);
    monthlyEmi = Math.round((principal * monthlyInterestRate * compound) / (compound - 1));
  } else {
    monthlyEmi = Math.round(principal / n);
  }

  // 8. Environmental Impact Calculations
  const annualGenerationKwh = monthlyUnitsGenerated * 12;
  const annualCo2AvoidedKg = annualGenerationKwh * config.gridEmissionFactorKgPerKwh;
  const annualCo2AvoidedTonnes = Number((annualCo2AvoidedKg / 1000).toFixed(1));
  const lifetimeCo2AvoidedTonnes = Number(
    ((annualCo2AvoidedKg * config.systemLifespanYears * 0.94) / 1000).toFixed(1)
  );

  const equivalentTreesPlanted = Math.round(
    annualCo2AvoidedKg / config.treeCo2AbsorptionKgPerYear
  );
  const equivalentKmDrivenAvoided = Math.round(
    annualCo2AvoidedKg / config.carEmissionFactorKgPerKm
  );

  return {
    pinCode,
    monthlyBill,
    recommendedKw,
    recommendedRoofAreaSqFt,
    monthlyUnitsGenerated,
    monthlySavings,
    yearlySavings,
    lifetimeSavings,
    monthlyEmi,
    annualCo2AvoidedTonnes,
    lifetimeCo2AvoidedTonnes,
    equivalentTreesPlanted,
    equivalentKmDrivenAvoided,
  };
}

export function formatINR(val: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(Math.round(val));
}
