export interface AgeResult {
  years: number;
  months: number;
  days: number;
  totalDays: number;
  totalHours: number;
  dayBornMs: string;
  dayBornEn: string;
  generation: string;
  generationEn: string;
  daysToNextBirthday: number;
  nextBirthdayDate: Date;
  isToday: boolean;
}

const DAYS_MS = ["Ahad","Isnin","Selasa","Rabu","Khamis","Jumaat","Sabtu"];
const DAYS_EN = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

export function calculateAge(birthDate: Date, today: Date = new Date()): AgeResult {
  today = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  const birth = new Date(birthDate.getFullYear(), birthDate.getMonth(), birthDate.getDate());

  let years = today.getFullYear() - birth.getFullYear();
  let months = today.getMonth() - birth.getMonth();
  let days = today.getDate() - birth.getDate();

  if (days < 0) {
    months--;
    days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
  }
  if (months < 0) { years--; months += 12; }

  const totalDays = Math.floor((today.getTime() - birth.getTime()) / 86400000);

  const nextBirthday = new Date(today.getFullYear(), birth.getMonth(), birth.getDate());
  if (nextBirthday < today) nextBirthday.setFullYear(today.getFullYear() + 1);
  const daysToNextBirthday = Math.ceil((nextBirthday.getTime() - today.getTime()) / 86400000);
  const isToday = daysToNextBirthday === 0 || (birth.getMonth() === today.getMonth() && birth.getDate() === today.getDate());

  const birthYear = birth.getFullYear();
  let generation = "", generationEn = "";
  if (birthYear < 1946)       { generation = "Generasi Senyap";  generationEn = "Silent Generation"; }
  else if (birthYear < 1965)  { generation = "Baby Boomer";       generationEn = "Baby Boomer"; }
  else if (birthYear < 1980)  { generation = "Generasi X";        generationEn = "Generation X"; }
  else if (birthYear < 1997)  { generation = "Millennial";        generationEn = "Millennial"; }
  else if (birthYear < 2013)  { generation = "Generasi Z";        generationEn = "Generation Z"; }
  else                        { generation = "Generasi Alpha";    generationEn = "Generation Alpha"; }

  return {
    years, months, days, totalDays,
    totalHours: totalDays * 24,
    dayBornMs: DAYS_MS[birth.getDay()],
    dayBornEn: DAYS_EN[birth.getDay()],
    generation, generationEn,
    daysToNextBirthday: isToday ? 0 : daysToNextBirthday,
    nextBirthdayDate: nextBirthday,
    isToday,
  };
}
