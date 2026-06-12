export interface DiscountResult {
  originalPrice: number;
  discountAmount: number;
  priceAfterDiscount: number;
  sstAmount: number;
  finalPrice: number;
  totalSavings: number;
  totalFinal: number;
  effectiveDiscountPct: number;
}

export function calculateDiscount(
  originalPrice: number,
  discountPct: number,
  qty = 1,
  addSST = false,
): DiscountResult {
  const discountAmount = originalPrice * (discountPct / 100);
  const priceAfterDiscount = originalPrice - discountAmount;
  const sstAmount = addSST ? priceAfterDiscount * 0.06 : 0;
  const finalPrice = priceAfterDiscount + sstAmount;
  return {
    originalPrice,
    discountAmount,
    priceAfterDiscount,
    sstAmount,
    finalPrice,
    totalSavings: discountAmount * qty,
    totalFinal: finalPrice * qty,
    effectiveDiscountPct: discountPct,
  };
}

// Given final price, find original
export function reverseDiscount(finalPrice: number, discountPct: number): number {
  return finalPrice / (1 - discountPct / 100);
}

// Stack two discounts: e.g. 20% + 10%
export function stackedDiscount(price: number, d1: number, d2: number): number {
  return price * (1 - d1 / 100) * (1 - d2 / 100);
}
