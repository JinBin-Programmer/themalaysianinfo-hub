// Upcoming Malaysian state elections — key dates from the Election Commission (SPR),
// announced 12 June 2026. Update `resultsReady` to true once results are loaded into
// seats.ts after polling day. Dates are local (Malaysia, UTC+8).

export interface KeyDate {
  labelBm: string;
  labelEn: string;
  date: string; // ISO yyyy-mm-dd
}

export interface UpcomingElection {
  /** matches the state id in elections.ts / seats.ts so we can deep-link */
  stateId: string;
  nameBm: string;
  nameEn: string;
  editionBm: string;
  editionEn: string;
  totalSeats: number;
  /** ISO datetime of polling day (08:00 local) used for the countdown */
  polling: string;
  pollingDateBm: string;
  pollingDateEn: string;
  /** coalition governing going into the election (caretaker) */
  incumbentName: string;
  incumbentCoalition: string; // colour key in COLORS
  incumbentBm: string;
  incumbentEn: string;
  dates: KeyDate[];
  sourceUrl: string;
  /** flip to true once 2026 results are in seats.ts */
  resultsReady: boolean;
}

export const UPCOMING: UpcomingElection[] = [
  {
    stateId: "johor",
    nameBm: "PRN Johor 2026",
    nameEn: "Johor State Election 2026",
    editionBm: "Pilihan Raya Negeri Johor Ke-16",
    editionEn: "16th Johor State Election",
    totalSeats: 56,
    polling: "2026-07-11T08:00:00+08:00",
    pollingDateBm: "11 Julai 2026 (Sabtu)",
    pollingDateEn: "11 July 2026 (Saturday)",
    incumbentName: "Onn Hafiz Ghazi",
    incumbentCoalition: "BN",
    incumbentBm: "BN (kerajaan sementara)",
    incumbentEn: "BN (caretaker)",
    dates: [
      { labelBm: "Pembubaran DUN", labelEn: "Assembly dissolved", date: "2026-06-01" },
      { labelBm: "Penamaan calon", labelEn: "Nomination day", date: "2026-06-27" },
      { labelBm: "Pengundian awal", labelEn: "Early voting", date: "2026-07-07" },
      { labelBm: "Hari mengundi", labelEn: "Polling day", date: "2026-07-11" },
    ],
    sourceUrl: "https://www.spr.gov.my",
    resultsReady: false,
  },
  {
    stateId: "negeri",
    nameBm: "PRN Negeri Sembilan 2026",
    nameEn: "Negeri Sembilan State Election 2026",
    editionBm: "Pilihan Raya Negeri Sembilan Ke-16",
    editionEn: "16th Negeri Sembilan State Election",
    totalSeats: 36,
    polling: "2026-08-01T08:00:00+08:00",
    pollingDateBm: "1 Ogos 2026 (Sabtu)",
    pollingDateEn: "1 August 2026 (Saturday)",
    incumbentName: "Aminuddin Harun",
    incumbentCoalition: "PH",
    incumbentBm: "PH (kerajaan sementara)",
    incumbentEn: "PH (caretaker)",
    dates: [
      { labelBm: "Pembubaran DUN", labelEn: "Assembly dissolved", date: "2026-06-04" },
      { labelBm: "Penamaan calon", labelEn: "Nomination day", date: "2026-07-18" },
      { labelBm: "Pengundian awal", labelEn: "Early voting", date: "2026-07-28" },
      { labelBm: "Hari mengundi", labelEn: "Polling day", date: "2026-08-01" },
    ],
    sourceUrl: "https://www.spr.gov.my",
    resultsReady: false,
  },
];
