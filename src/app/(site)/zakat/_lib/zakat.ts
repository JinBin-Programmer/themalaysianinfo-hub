const NISAB_ANNUAL = 22000;
const EPF_RATE = 0.11;
const SELF_ALLOWANCE = 8000;
const DEPENDENT_ALLOWANCE = 3000;

export interface ZakatIncomeResult {
  grossAnnual: number;
  epfDeduction: number;
  necessitiesDeduction: number;
  netEligible: number;
  nisab: number;
  isEligible: boolean;
  zakatAmount: number;
  monthlyZakat: number;
}

export function calculateIncomeZakat(
  monthlyGross: number,
  dependents: number,
  otherMonthlyDeductions = 0,
): ZakatIncomeResult {
  const grossAnnual = monthlyGross * 12;
  const epfDeduction = grossAnnual * EPF_RATE;
  const necessitiesDeduction = SELF_ALLOWANCE + dependents * DEPENDENT_ALLOWANCE + otherMonthlyDeductions * 12;
  const netEligible = Math.max(0, grossAnnual - epfDeduction - necessitiesDeduction);
  const isEligible = netEligible >= NISAB_ANNUAL;
  const zakatAmount = isEligible ? netEligible * 0.025 : 0;
  return { grossAnnual, epfDeduction, necessitiesDeduction, netEligible, nisab: NISAB_ANNUAL, isEligible, zakatAmount, monthlyZakat: zakatAmount / 12 };
}

export function calculateSavingsZakat(savings: number) {
  const isEligible = savings >= NISAB_ANNUAL;
  return { savings, nisab: NISAB_ANNUAL, isEligible, zakatAmount: isEligible ? savings * 0.025 : 0 };
}
