export interface BillResult {
  subtotal: number;
  tipAmount: number;
  sstAmount: number;
  serviceCharge: number;
  totalBill: number;
  perPerson: number;
  perPersonRounded: number;
}

export function calculateBill(
  subtotal: number,
  tipPct: number,
  people: number,
  addSST = false,
  addServiceCharge = false,
): BillResult {
  const sstAmount = addSST ? subtotal * 0.06 : 0;
  const serviceCharge = addServiceCharge ? subtotal * 0.10 : 0;
  const baseForTip = subtotal + serviceCharge;
  const tipAmount = baseForTip * (tipPct / 100);
  const totalBill = subtotal + sstAmount + serviceCharge + tipAmount;
  const perPerson = totalBill / Math.max(1, people);
  return {
    subtotal,
    tipAmount,
    sstAmount,
    serviceCharge,
    totalBill,
    perPerson,
    perPersonRounded: Math.ceil(perPerson),
  };
}
