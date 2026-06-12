interface PostcodeInfo { state: string; stateEn: string; town: string; townEn: string; }

// Specific major postcodes
const SPECIFIC: Record<string, PostcodeInfo> = {
  "50000":{ state:"W.P. Kuala Lumpur", stateEn:"W.P. Kuala Lumpur", town:"Kuala Lumpur", townEn:"Kuala Lumpur" },
  "50450":{ state:"W.P. Kuala Lumpur", stateEn:"W.P. Kuala Lumpur", town:"KLCC", townEn:"KLCC" },
  "50460":{ state:"W.P. Kuala Lumpur", stateEn:"W.P. Kuala Lumpur", town:"Jalan Raja Laut", townEn:"Jalan Raja Laut" },
  "50470":{ state:"W.P. Kuala Lumpur", stateEn:"W.P. Kuala Lumpur", town:"Chow Kit", townEn:"Chow Kit" },
  "50480":{ state:"W.P. Kuala Lumpur", stateEn:"W.P. Kuala Lumpur", town:"Jalan Ipoh", townEn:"Jalan Ipoh" },
  "50490":{ state:"W.P. Kuala Lumpur", stateEn:"W.P. Kuala Lumpur", town:"Jalan Sultan Ismail", townEn:"Jalan Sultan Ismail" },
  "50500":{ state:"W.P. Kuala Lumpur", stateEn:"W.P. Kuala Lumpur", town:"Masjid India", townEn:"Masjid India" },
  "50600":{ state:"W.P. Kuala Lumpur", stateEn:"W.P. Kuala Lumpur", town:"Chow Kit", townEn:"Chow Kit" },
  "51000":{ state:"W.P. Kuala Lumpur", stateEn:"W.P. Kuala Lumpur", town:"Kepong", townEn:"Kepong" },
  "52000":{ state:"W.P. Kuala Lumpur", stateEn:"W.P. Kuala Lumpur", town:"Kepong", townEn:"Kepong" },
  "53000":{ state:"W.P. Kuala Lumpur", stateEn:"W.P. Kuala Lumpur", town:"Setapak", townEn:"Setapak" },
  "54000":{ state:"W.P. Kuala Lumpur", stateEn:"W.P. Kuala Lumpur", town:"Titiwangsa", townEn:"Titiwangsa" },
  "55000":{ state:"W.P. Kuala Lumpur", stateEn:"W.P. Kuala Lumpur", town:"Kampung Baru", townEn:"Kampung Baru" },
  "55100":{ state:"W.P. Kuala Lumpur", stateEn:"W.P. Kuala Lumpur", town:"Cheras", townEn:"Cheras" },
  "56000":{ state:"W.P. Kuala Lumpur", stateEn:"W.P. Kuala Lumpur", town:"Cheras", townEn:"Cheras" },
  "57000":{ state:"W.P. Kuala Lumpur", stateEn:"W.P. Kuala Lumpur", town:"Sri Petaling", townEn:"Sri Petaling" },
  "58000":{ state:"W.P. Kuala Lumpur", stateEn:"W.P. Kuala Lumpur", town:"Kuala Lumpur Selatan", townEn:"KL South" },
  "58200":{ state:"W.P. Kuala Lumpur", stateEn:"W.P. Kuala Lumpur", town:"Bukit Jalil", townEn:"Bukit Jalil" },
  "59000":{ state:"W.P. Kuala Lumpur", stateEn:"W.P. Kuala Lumpur", town:"Bangsar", townEn:"Bangsar" },
  "59100":{ state:"W.P. Kuala Lumpur", stateEn:"W.P. Kuala Lumpur", town:"Pantai", townEn:"Pantai" },
  "62000":{ state:"W.P. Putrajaya", stateEn:"W.P. Putrajaya", town:"Putrajaya", townEn:"Putrajaya" },
  "62300":{ state:"W.P. Putrajaya", stateEn:"W.P. Putrajaya", town:"Putrajaya Presint 3", townEn:"Putrajaya Precinct 3" },
  "40150":{ state:"Selangor", stateEn:"Selangor", town:"Shah Alam", townEn:"Shah Alam" },
  "40450":{ state:"Selangor", stateEn:"Selangor", town:"Shah Alam", townEn:"Shah Alam" },
  "41000":{ state:"Selangor", stateEn:"Selangor", town:"Klang", townEn:"Klang" },
  "41200":{ state:"Selangor", stateEn:"Selangor", town:"Klang", townEn:"Klang" },
  "43000":{ state:"Selangor", stateEn:"Selangor", town:"Kajang", townEn:"Kajang" },
  "43300":{ state:"Selangor", stateEn:"Selangor", town:"Balakong", townEn:"Balakong" },
  "43900":{ state:"Selangor", stateEn:"Selangor", town:"Sepang", townEn:"Sepang" },
  "45000":{ state:"Selangor", stateEn:"Selangor", town:"Kuala Selangor", townEn:"Kuala Selangor" },
  "47500":{ state:"Selangor", stateEn:"Selangor", town:"Subang Jaya", townEn:"Subang Jaya" },
  "47810":{ state:"Selangor", stateEn:"Selangor", town:"Petaling Jaya", townEn:"Petaling Jaya" },
  "47820":{ state:"Selangor", stateEn:"Selangor", town:"Petaling Jaya", townEn:"Petaling Jaya" },
  "63000":{ state:"Selangor", stateEn:"Selangor", town:"Cyberjaya", townEn:"Cyberjaya" },
  "68000":{ state:"Selangor", stateEn:"Selangor", town:"Ampang", townEn:"Ampang" },
  "68100":{ state:"Selangor", stateEn:"Selangor", town:"Batu Caves", townEn:"Batu Caves" },
  "10000":{ state:"Pulau Pinang", stateEn:"Penang", town:"Georgetown", townEn:"Georgetown" },
  "10050":{ state:"Pulau Pinang", stateEn:"Penang", town:"Georgetown", townEn:"Georgetown" },
  "11700":{ state:"Pulau Pinang", stateEn:"Penang", town:"Gelugor", townEn:"Gelugor" },
  "11900":{ state:"Pulau Pinang", stateEn:"Penang", town:"Bayan Lepas", townEn:"Bayan Lepas" },
  "11950":{ state:"Pulau Pinang", stateEn:"Penang", town:"Bayan Baru", townEn:"Bayan Baru" },
  "13000":{ state:"Pulau Pinang", stateEn:"Penang", town:"Butterworth", townEn:"Butterworth" },
  "14000":{ state:"Pulau Pinang", stateEn:"Penang", town:"Bukit Mertajam", townEn:"Bukit Mertajam" },
  "30000":{ state:"Perak", stateEn:"Perak", town:"Ipoh", townEn:"Ipoh" },
  "31400":{ state:"Perak", stateEn:"Perak", town:"Taiping", townEn:"Taiping" },
  "32000":{ state:"Perak", stateEn:"Perak", town:"Sitiawan", townEn:"Sitiawan" },
  "70000":{ state:"Negeri Sembilan", stateEn:"Negeri Sembilan", town:"Seremban", townEn:"Seremban" },
  "71000":{ state:"Negeri Sembilan", stateEn:"Negeri Sembilan", town:"Port Dickson", townEn:"Port Dickson" },
  "75000":{ state:"Melaka", stateEn:"Melaka", town:"Melaka Bandaraya", townEn:"Melaka City" },
  "75400":{ state:"Melaka", stateEn:"Melaka", town:"Melaka", townEn:"Melaka" },
  "76000":{ state:"Melaka", stateEn:"Melaka", town:"Alor Gajah", townEn:"Alor Gajah" },
  "78000":{ state:"Melaka", stateEn:"Melaka", town:"Alor Gajah", townEn:"Alor Gajah" },
  "80000":{ state:"Johor", stateEn:"Johor", town:"Johor Bahru", townEn:"Johor Bahru" },
  "80100":{ state:"Johor", stateEn:"Johor", town:"Johor Bahru", townEn:"Johor Bahru" },
  "81300":{ state:"Johor", stateEn:"Johor", town:"Skudai", townEn:"Skudai" },
  "83000":{ state:"Johor", stateEn:"Johor", town:"Batu Pahat", townEn:"Batu Pahat" },
  "84000":{ state:"Johor", stateEn:"Johor", town:"Muar", townEn:"Muar" },
  "85000":{ state:"Johor", stateEn:"Johor", town:"Segamat", townEn:"Segamat" },
  "86000":{ state:"Johor", stateEn:"Johor", town:"Kluang", townEn:"Kluang" },
  "15000":{ state:"Kelantan", stateEn:"Kelantan", town:"Kota Bharu", townEn:"Kota Bharu" },
  "16000":{ state:"Kelantan", stateEn:"Kelantan", town:"Kota Bharu", townEn:"Kota Bharu" },
  "20000":{ state:"Terengganu", stateEn:"Terengganu", town:"Kuala Terengganu", townEn:"Kuala Terengganu" },
  "21000":{ state:"Terengganu", stateEn:"Terengganu", town:"Kuala Terengganu", townEn:"Kuala Terengganu" },
  "25000":{ state:"Pahang", stateEn:"Pahang", town:"Kuantan", townEn:"Kuantan" },
  "26000":{ state:"Pahang", stateEn:"Pahang", town:"Pekan", townEn:"Pekan" },
  "28000":{ state:"Pahang", stateEn:"Pahang", town:"Temerloh", townEn:"Temerloh" },
  "05000":{ state:"Kedah", stateEn:"Kedah", town:"Alor Setar", townEn:"Alor Setar" },
  "06000":{ state:"Kedah", stateEn:"Kedah", town:"Jitra", townEn:"Jitra" },
  "08000":{ state:"Kedah", stateEn:"Kedah", town:"Sungai Petani", townEn:"Sungai Petani" },
  "09000":{ state:"Kedah", stateEn:"Kedah", town:"Kulim", townEn:"Kulim" },
  "01000":{ state:"Perlis", stateEn:"Perlis", town:"Kangar", townEn:"Kangar" },
  "02000":{ state:"Perlis", stateEn:"Perlis", town:"Arau", townEn:"Arau" },
  "88000":{ state:"Sabah", stateEn:"Sabah", town:"Kota Kinabalu", townEn:"Kota Kinabalu" },
  "88100":{ state:"Sabah", stateEn:"Sabah", town:"Kota Kinabalu", townEn:"Kota Kinabalu" },
  "89000":{ state:"Sabah", stateEn:"Sabah", town:"Keningau", townEn:"Keningau" },
  "90000":{ state:"Sabah", stateEn:"Sabah", town:"Sandakan", townEn:"Sandakan" },
  "91000":{ state:"Sabah", stateEn:"Sabah", town:"Tawau", townEn:"Tawau" },
  "93000":{ state:"Sarawak", stateEn:"Sarawak", town:"Kuching", townEn:"Kuching" },
  "93050":{ state:"Sarawak", stateEn:"Sarawak", town:"Kuching", townEn:"Kuching" },
  "94000":{ state:"Sarawak", stateEn:"Sarawak", town:"Kota Samarahan", townEn:"Kota Samarahan" },
  "96000":{ state:"Sarawak", stateEn:"Sarawak", town:"Sibu", townEn:"Sibu" },
  "98000":{ state:"Sarawak", stateEn:"Sarawak", town:"Miri", townEn:"Miri" },
  "87000":{ state:"W.P. Labuan", stateEn:"W.P. Labuan", town:"Labuan", townEn:"Labuan" },
};

// Range-based fallback
function getStateRange(code: number): { state: string; stateEn: string } | null {
  if (code >= 1000 && code <= 2900) return { state: "Perlis", stateEn: "Perlis" };
  if (code >= 5000 && code <= 9810) return { state: "Kedah", stateEn: "Kedah" };
  if (code >= 10000 && code <= 14400) return { state: "Pulau Pinang", stateEn: "Penang" };
  if (code >= 15000 && code <= 18500) return { state: "Kelantan", stateEn: "Kelantan" };
  if (code >= 20000 && code <= 24300) return { state: "Terengganu", stateEn: "Terengganu" };
  if (code >= 25000 && code <= 28800) return { state: "Pahang", stateEn: "Pahang" };
  if (code >= 30000 && code <= 36810) return { state: "Perak", stateEn: "Perak" };
  if (code >= 39000 && code <= 39200) return { state: "Pahang", stateEn: "Pahang" };
  if (code >= 40000 && code <= 48300) return { state: "Selangor", stateEn: "Selangor" };
  if (code >= 50000 && code <= 60000) return { state: "W.P. Kuala Lumpur", stateEn: "W.P. Kuala Lumpur" };
  if (code >= 62000 && code <= 62988) return { state: "W.P. Putrajaya", stateEn: "W.P. Putrajaya" };
  if (code >= 63000 && code <= 68100) return { state: "Selangor", stateEn: "Selangor" };
  if (code >= 69000 && code <= 69999) return { state: "Pahang", stateEn: "Pahang" };
  if (code >= 70000 && code <= 73509) return { state: "Negeri Sembilan", stateEn: "Negeri Sembilan" };
  if (code >= 75000 && code <= 78309) return { state: "Melaka", stateEn: "Melaka" };
  if (code >= 79000 && code <= 86900) return { state: "Johor", stateEn: "Johor" };
  if (code >= 87000 && code <= 87033) return { state: "W.P. Labuan", stateEn: "W.P. Labuan" };
  if (code >= 88000 && code <= 91309) return { state: "Sabah", stateEn: "Sabah" };
  if (code >= 93000 && code <= 98859) return { state: "Sarawak", stateEn: "Sarawak" };
  return null;
}

export function lookupPostcode(postcode: string): PostcodeInfo | null {
  const clean = postcode.trim().padStart(5, "0");
  if (!/^\d{5}$/.test(clean)) return null;
  if (SPECIFIC[clean]) return SPECIFIC[clean];
  const code = parseInt(clean);
  const range = getStateRange(code);
  if (!range) return null;
  return { ...range, town: range.state, townEn: range.stateEn };
}
