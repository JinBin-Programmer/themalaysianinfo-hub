export interface DrawResult {
  date: string;
  drawNo: string;
  first: string;
  second: string;
  third: string;
  special: string[];
  consolation: string[];
}

export interface OperatorResults {
  name: string;
  nameMs: string;
  color: string;
  officialUrl: string;
  latest: DrawResult;
}

export const RESULTS: OperatorResults[] = [
  {
    name: "Magnum 4D",
    nameMs: "Magnum 4D",
    color: "from-red-900/40 to-red-950/20",
    officialUrl: "https://www.magnum4d.my",
    latest: {
      date: "25 Mei 2026",
      drawNo: "01/2026",
      first: "3456",
      second: "7821",
      third: "9034",
      special: ["1234","5678","9012","3456","7890","1357","2468","0246","1470","8642"],
      consolation: ["1111","2222","3333","4444","5555","6666","7777","8888","9999","0000"],
    },
  },
  {
    name: "Sports Toto",
    nameMs: "Sports Toto",
    color: "from-blue-900/40 to-blue-950/20",
    officialUrl: "https://www.sportstoto.com.my",
    latest: {
      date: "25 Mei 2026",
      drawNo: "01/2026",
      first: "5678",
      second: "2345",
      third: "8901",
      special: ["2345","6789","0123","4567","8901","2357","3468","1357","2580","9753"],
      consolation: ["1122","2233","3344","4455","5566","6677","7788","8899","9900","0011"],
    },
  },
  {
    name: "Da Ma Cai",
    nameMs: "Da Ma Cai",
    color: "from-green-900/40 to-green-950/20",
    officialUrl: "https://www.damacai.com.my",
    latest: {
      date: "25 Mei 2026",
      drawNo: "01/2026",
      first: "7890",
      second: "4567",
      third: "2345",
      special: ["3456","7890","1234","5678","9012","1248","3690","1470","2580","3691"],
      consolation: ["0123","1234","2345","3456","4567","5678","6789","7890","8901","9012"],
    },
  },
];
