export type Region = "peninsular" | "sabahsarawak";
export type VehicleType = "car" | "motorcycle";

const CAR_PENINSULAR: { max: number; rate: number }[] = [
  { max: 1000, rate: 20 },
  { max: 1200, rate: 55 },
  { max: 1400, rate: 70 },
  { max: 1600, rate: 90 },
  { max: 1800, rate: 200 },
  { max: 2000, rate: 310 },
  { max: 2500, rate: 800 },
  { max: 3000, rate: 1200 },
  { max: Infinity, rate: 1800 },
];

const MOTO_PENINSULAR: { max: number; rate: number }[] = [
  { max: 150,  rate: 2  },
  { max: 200,  rate: 30 },
  { max: 250,  rate: 50 },
  { max: 500,  rate: 60 },
  { max: Infinity, rate: 90 },
];

function getBaseRate(cc: number, table: { max: number; rate: number }[]) {
  return table.find(r => cc <= r.max)?.rate ?? table[table.length - 1].rate;
}

export interface RoadTaxResult {
  annualTax: number;
  sixMonthTax: number;
  isApprox: boolean; // true for >2000cc where formula is approximate
}

export function calculateRoadTax(cc: number, type: VehicleType, region: Region): RoadTaxResult {
  const table = type === "car" ? CAR_PENINSULAR : MOTO_PENINSULAR;
  let base = getBaseRate(cc, table);

  if (region === "sabahsarawak") {
    base = Math.round(base * 0.7); // Sabah/Sarawak approx 30% less
  }

  return {
    annualTax: base,
    sixMonthTax: Math.round(base * 0.5 * 100) / 100,
    isApprox: type === "car" && cc > 2000,
  };
}
