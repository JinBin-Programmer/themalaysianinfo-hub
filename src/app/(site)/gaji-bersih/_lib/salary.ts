export interface SalaryInputs {
  gross: number;
  isMarried: boolean;
  spouseWorking: boolean;
  numChildren: number;
}

export interface SalaryResult {
  gross: number;
  epfEmployee: number;
  epfEmployer: number;
  socsoEmployee: number;
  socsoEmployer: number;
  eisEmployee: number;
  eisEmployer: number;
  pcb: number;
  netSalary: number;
  totalDeductions: number;
  taxableIncome: number;
  annualTax: number;
  effectiveTaxRate: number;
  annualNet: number;
}

function calcIncomeTax(taxable: number): number {
  if (taxable <= 5000)    return 0;
  if (taxable <= 20000)   return (taxable - 5000) * 0.01;
  if (taxable <= 35000)   return 150   + (taxable - 20000) * 0.03;
  if (taxable <= 50000)   return 600   + (taxable - 35000) * 0.08;
  if (taxable <= 70000)   return 1800  + (taxable - 50000) * 0.13;
  if (taxable <= 100000)  return 4400  + (taxable - 70000) * 0.21;
  if (taxable <= 400000)  return 10700 + (taxable - 100000) * 0.24;
  if (taxable <= 600000)  return 82700 + (taxable - 400000) * 0.245;
  if (taxable <= 2000000) return 131700 + (taxable - 600000) * 0.25;
  return 481700 + (taxable - 2000000) * 0.26;
}

export function calculateSalary(inputs: SalaryInputs): SalaryResult {
  const { gross, isMarried, spouseWorking, numChildren } = inputs;
  if (gross <= 0) {
    return {
      gross: 0, epfEmployee: 0, epfEmployer: 0, socsoEmployee: 0,
      socsoEmployer: 0, eisEmployee: 0, eisEmployer: 0, pcb: 0,
      netSalary: 0, totalDeductions: 0, taxableIncome: 0,
      annualTax: 0, effectiveTaxRate: 0, annualNet: 0,
    };
  }

  // EPF
  const epfEmployee = gross * 0.11;
  const epfEmployer = gross * (gross <= 5000 ? 0.13 : 0.12);

  // SOCSO — capped at RM5,000 insurable wage
  const socsoWage = Math.min(gross, 5000);
  const socsoEmployee = socsoWage * 0.005;
  const socsoEmployer = socsoWage * 0.0175;

  // EIS — capped at RM5,000
  const eisWage = Math.min(gross, 5000);
  const eisEmployee = eisWage * 0.002;
  const eisEmployer = eisWage * 0.002;

  // PCB — simplified annual calculation then divide by 12
  const annualGross = gross * 12;
  const epfRelief    = Math.min(epfEmployee * 12, 4000);
  const personalRelief = 9000;
  const spouseRelief = isMarried && !spouseWorking ? 4000 : 0;
  const childRelief  = numChildren * 2000;

  const taxableIncome = Math.max(0, annualGross - personalRelief - epfRelief - spouseRelief - childRelief);
  const annualTax  = calcIncomeTax(taxableIncome);
  const pcb        = annualTax / 12;

  const totalDeductions = epfEmployee + socsoEmployee + eisEmployee + pcb;
  const netSalary = gross - totalDeductions;
  const effectiveTaxRate = annualGross > 0 ? (annualTax / annualGross) * 100 : 0;

  return {
    gross,
    epfEmployee,
    epfEmployer,
    socsoEmployee,
    socsoEmployer,
    eisEmployee,
    eisEmployer,
    pcb,
    netSalary,
    totalDeductions,
    taxableIncome,
    annualTax,
    effectiveTaxRate,
    annualNet: netSalary * 12,
  };
}
