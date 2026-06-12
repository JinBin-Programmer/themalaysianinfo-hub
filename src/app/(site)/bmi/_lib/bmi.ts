export interface BMIResult {
  bmi: number;
  categoryMs: string;
  categoryEn: string;
  colorClass: string;
  idealMin: number;
  idealMax: number;
  weightDiff: number; // kg to reach ideal (negative = need to lose)
  weightDiffDir: "lose" | "gain" | "ideal";
}

export function calculateBMI(weightKg: number, heightCm: number): BMIResult {
  const h = heightCm / 100;
  const bmi = weightKg / (h * h);
  const idealMin = 18.5 * h * h;
  const idealMax = 22.9 * h * h;

  let categoryMs: string, categoryEn: string, colorClass: string;
  if (bmi < 18.5) {
    categoryMs = "Kurus"; categoryEn = "Underweight"; colorClass = "text-blue-400";
  } else if (bmi < 23) {
    categoryMs = "Normal"; categoryEn = "Normal"; colorClass = "text-green-400";
  } else if (bmi < 25) {
    categoryMs = "Berat Berlebihan"; categoryEn = "Overweight"; colorClass = "text-yellow-400";
  } else if (bmi < 30) {
    categoryMs = "Obes I"; categoryEn = "Obese Class I"; colorClass = "text-orange-400";
  } else {
    categoryMs = "Obes II"; categoryEn = "Obese Class II"; colorClass = "text-red-400";
  }

  let weightDiff = 0;
  let weightDiffDir: "lose" | "gain" | "ideal" = "ideal";
  if (weightKg < idealMin) { weightDiff = idealMin - weightKg; weightDiffDir = "gain"; }
  else if (weightKg > idealMax) { weightDiff = weightKg - idealMax; weightDiffDir = "lose"; }

  return { bmi, categoryMs, categoryEn, colorClass, idealMin, idealMax, weightDiff, weightDiffDir };
}

export function lbsToKg(lbs: number) { return lbs * 0.453592; }
export function ftInToCm(ft: number, inch: number) { return (ft * 12 + inch) * 2.54; }
