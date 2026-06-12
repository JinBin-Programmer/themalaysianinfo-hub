export interface ExchangeData {
  base: string;
  date: string;
  rates: Record<string, number>;
}

export const CURRENCIES = [
  { code: "USD", name: "US Dollar", flag: "🇺🇸" },
  { code: "SGD", name: "Singapore Dollar", flag: "🇸🇬" },
  { code: "EUR", name: "Euro", flag: "🇪🇺" },
  { code: "GBP", name: "British Pound", flag: "🇬🇧" },
  { code: "JPY", name: "Japanese Yen", flag: "🇯🇵" },
  { code: "AUD", name: "Australian Dollar", flag: "🇦🇺" },
  { code: "CNY", name: "Chinese Yuan", flag: "🇨🇳" },
  { code: "THB", name: "Thai Baht", flag: "🇹🇭" },
  { code: "IDR", name: "Indonesian Rupiah", flag: "🇮🇩" },
  { code: "SAR", name: "Saudi Riyal", flag: "🇸🇦" },
];

export async function getExchangeRates(): Promise<ExchangeData> {
  const res = await fetch("https://api.exchangerate-api.com/v4/latest/MYR", {
    next: { revalidate: 3600 },
  });
  if (!res.ok) throw new Error("Failed to fetch exchange rates");
  return res.json();
}
