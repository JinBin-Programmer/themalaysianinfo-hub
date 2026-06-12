export interface LoanResult {
  monthlyPayment: number;
  totalPayment: number;
  totalInterest: number;
  principal: number;
  annualRate: number;
  tenureMonths: number;
  interestToLoanRatio: number;
}

export function calculateReducingBalance(principal: number, annualRate: number, tenureYears: number): LoanResult {
  const tenureMonths = tenureYears * 12;
  const monthlyRate = annualRate / 100 / 12;
  let monthlyPayment: number;
  if (monthlyRate === 0) {
    monthlyPayment = principal / tenureMonths;
  } else {
    monthlyPayment =
      (principal * monthlyRate * Math.pow(1 + monthlyRate, tenureMonths)) /
      (Math.pow(1 + monthlyRate, tenureMonths) - 1);
  }
  const totalPayment = monthlyPayment * tenureMonths;
  const totalInterest = totalPayment - principal;
  return { monthlyPayment, totalPayment, totalInterest, principal, annualRate, tenureMonths, interestToLoanRatio: (totalInterest / principal) * 100 };
}

export function calculateFlatRate(principal: number, annualRate: number, tenureYears: number): LoanResult {
  const tenureMonths = tenureYears * 12;
  const totalInterest = principal * (annualRate / 100) * tenureYears;
  const totalPayment = principal + totalInterest;
  const monthlyPayment = totalPayment / tenureMonths;
  return { monthlyPayment, totalPayment, totalInterest, principal, annualRate, tenureMonths, interestToLoanRatio: (totalInterest / principal) * 100 };
}
