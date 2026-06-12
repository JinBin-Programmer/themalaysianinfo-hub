export interface KWSPResult {
  yearsLeft: number;
  monthlyEmployee: number;
  monthlyEmployer: number;
  monthlyTotal: number;
  totalAtRetirement: number;
  totalContributed: number;
  dividendEarned: number;
  monthlyPayout20yr: number;
  monthlyPayout25yr: number;
}

export function calculateKWSP(
  currentAge: number,
  retirementAge: number,
  monthlySalary: number,
  currentBalance: number,
  annualDividend = 5.5,
): KWSPResult {
  const yearsLeft = Math.max(0, retirementAge - currentAge);
  const months = yearsLeft * 12;
  const employeeRate = 0.11;
  const employerRate = monthlySalary <= 5000 ? 0.13 : 0.12;
  const monthlyEmployee = monthlySalary * employeeRate;
  const monthlyEmployer = monthlySalary * employerRate;
  const monthlyTotal = monthlyEmployee + monthlyEmployer;
  const r = annualDividend / 100 / 12;

  const fvBalance = currentBalance * Math.pow(1 + r, months);
  const fvContrib = r === 0
    ? monthlyTotal * months
    : monthlyTotal * (Math.pow(1 + r, months) - 1) / r;
  const totalAtRetirement = fvBalance + fvContrib;
  const totalContributed = currentBalance + monthlyTotal * months;

  return {
    yearsLeft,
    monthlyEmployee,
    monthlyEmployer,
    monthlyTotal,
    totalAtRetirement: Math.round(totalAtRetirement),
    totalContributed: Math.round(totalContributed),
    dividendEarned: Math.round(totalAtRetirement - totalContributed),
    monthlyPayout20yr: Math.round(totalAtRetirement / (20 * 12)),
    monthlyPayout25yr: Math.round(totalAtRetirement / (25 * 12)),
  };
}
