export type Category = "length" | "weight" | "temperature" | "volume" | "area";

export interface Unit { key: string; label: string; labelMs: string; toBase: (v: number) => number; fromBase: (v: number) => number; }

export const UNITS: Record<Category, Unit[]> = {
  length: [
    { key: "mm",  labelMs: "Milimeter",  label: "Millimeter",  toBase: v => v / 1000,   fromBase: v => v * 1000   },
    { key: "cm",  labelMs: "Sentimeter", label: "Centimeter",  toBase: v => v / 100,    fromBase: v => v * 100    },
    { key: "m",   labelMs: "Meter",      label: "Meter",       toBase: v => v,           fromBase: v => v          },
    { key: "km",  labelMs: "Kilometer",  label: "Kilometer",   toBase: v => v * 1000,   fromBase: v => v / 1000   },
    { key: "in",  labelMs: "Inci",       label: "Inch",        toBase: v => v * 0.0254, fromBase: v => v / 0.0254 },
    { key: "ft",  labelMs: "Kaki",       label: "Foot",        toBase: v => v * 0.3048, fromBase: v => v / 0.3048 },
    { key: "mi",  labelMs: "Batu",       label: "Mile",        toBase: v => v * 1609.34,fromBase: v => v / 1609.34},
  ],
  weight: [
    { key: "mg",  labelMs: "Miligram",   label: "Milligram",   toBase: v => v / 1e6,    fromBase: v => v * 1e6    },
    { key: "g",   labelMs: "Gram",       label: "Gram",        toBase: v => v / 1000,   fromBase: v => v * 1000   },
    { key: "kg",  labelMs: "Kilogram",   label: "Kilogram",    toBase: v => v,           fromBase: v => v          },
    { key: "t",   labelMs: "Tan",        label: "Metric Ton",  toBase: v => v * 1000,   fromBase: v => v / 1000   },
    { key: "lb",  labelMs: "Paun",       label: "Pound",       toBase: v => v * 0.453592,fromBase: v => v / 0.453592},
    { key: "oz",  labelMs: "Auns",       label: "Ounce",       toBase: v => v * 0.028349,fromBase: v => v / 0.028349},
  ],
  temperature: [
    { key: "c",   labelMs: "Celsius",    label: "Celsius",     toBase: v => v,            fromBase: v => v           },
    { key: "f",   labelMs: "Fahrenheit", label: "Fahrenheit",  toBase: v => (v - 32) * 5/9, fromBase: v => v * 9/5 + 32 },
    { key: "k",   labelMs: "Kelvin",     label: "Kelvin",      toBase: v => v - 273.15,   fromBase: v => v + 273.15  },
  ],
  volume: [
    { key: "ml",  labelMs: "Mililiter",  label: "Milliliter",  toBase: v => v / 1000,   fromBase: v => v * 1000   },
    { key: "l",   labelMs: "Liter",      label: "Liter",       toBase: v => v,           fromBase: v => v          },
    { key: "m3",  labelMs: "Meter Padu", label: "Cubic Meter", toBase: v => v * 1000,   fromBase: v => v / 1000   },
    { key: "tsp", labelMs: "Sudu teh",   label: "Teaspoon",    toBase: v => v * 0.00492, fromBase: v => v / 0.00492},
    { key: "tbsp",labelMs: "Sudu makan", label: "Tablespoon",  toBase: v => v * 0.01479, fromBase: v => v / 0.01479},
    { key: "cup", labelMs: "Cawan",      label: "Cup",         toBase: v => v * 0.2366,  fromBase: v => v / 0.2366 },
    { key: "gal", labelMs: "Gelen",      label: "Gallon (US)", toBase: v => v * 3.7854,  fromBase: v => v / 3.7854 },
  ],
  area: [
    { key: "cm2", labelMs: "cm²",        label: "cm²",         toBase: v => v / 1e4,    fromBase: v => v * 1e4    },
    { key: "m2",  labelMs: "m²",         label: "m²",          toBase: v => v,           fromBase: v => v          },
    { key: "km2", labelMs: "km²",        label: "km²",         toBase: v => v * 1e6,    fromBase: v => v / 1e6    },
    { key: "sqft",labelMs: "Kaki persegi",label: "sq ft",      toBase: v => v * 0.0929, fromBase: v => v / 0.0929 },
    { key: "acre",labelMs: "Ekar",       label: "Acre",        toBase: v => v * 4046.86, fromBase: v => v / 4046.86},
    { key: "ha",  labelMs: "Hektar",     label: "Hectare",     toBase: v => v * 10000,  fromBase: v => v / 10000  },
  ],
};

export function convert(value: number, fromKey: string, toKey: string, category: Category): number {
  const units = UNITS[category];
  const from = units.find(u => u.key === fromKey);
  const to = units.find(u => u.key === toKey);
  if (!from || !to) return 0;
  return to.fromBase(from.toBase(value));
}
