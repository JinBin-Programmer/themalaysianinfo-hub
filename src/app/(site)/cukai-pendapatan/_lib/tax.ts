// Malaysia Personal Income Tax Brackets YA2024
const BRACKETS: [number, number][] = [
  [5000, 0],
  [20000, 0.01],
  [35000, 0.03],
  [50000, 0.08],
  [70000, 0.13],
  [100000, 0.21],
  [400000, 0.24],
  [600000, 0.245],
  [1000000, 0.25],
  [Infinity, 0.26],
];

export function calcTax(chargeableIncome: number): number {
  if (chargeableIncome <= 0) return 0;
  let tax = 0, prev = 0;
  for (const [limit, rate] of BRACKETS) {
    if (chargeableIncome <= prev) break;
    tax += (Math.min(chargeableIncome, limit) - prev) * rate;
    prev = limit === Infinity ? chargeableIncome : limit;
  }
  return Math.round(tax);
}

export function RM(n: number) {
  return n.toLocaleString("en-MY", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}
