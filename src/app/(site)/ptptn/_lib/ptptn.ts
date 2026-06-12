export interface PTPTNResult {
  loanAmount: number;
  monthlyPayment: number;
  totalServiceCharge: number;
  totalToPay: number;
  months: number;
  years: number;
  remainingYears: number; // from graduation (assume age 23)
}

// PTPTN: 1% annual service charge on reducing balance (bukan faedah/riba)
export function calculatePTPTN(loanAmount: number, monthlyPayment: number): PTPTNResult {
  const monthlyRate = 0.01 / 12;
  let balance = loanAmount;
  let totalServiceCharge = 0;
  let months = 0;

  while (balance > 0.01 && months < 600) {
    const svc = balance * monthlyRate;
    const principal = monthlyPayment - svc;
    if (principal <= 0) break;
    totalServiceCharge += svc;
    balance = Math.max(0, balance - principal);
    months++;
  }

  return {
    loanAmount,
    monthlyPayment,
    totalServiceCharge: Math.round(totalServiceCharge * 100) / 100,
    totalToPay: Math.round((loanAmount + totalServiceCharge) * 100) / 100,
    months,
    years: Math.ceil(months / 12),
    remainingYears: Math.max(0, Math.ceil(months / 12)),
  };
}

// Income-based monthly payment suggestion
export function suggestedPayment(monthlyIncome: number, loanAmount: number): number {
  if (monthlyIncome < 1000) return 50;
  if (monthlyIncome < 2000) return 100;
  if (monthlyIncome < 3000) return 150;
  if (monthlyIncome < 4000) return 200;
  if (monthlyIncome < 5000) return 250;
  return Math.round(monthlyIncome * 0.03 / 10) * 10;
}
