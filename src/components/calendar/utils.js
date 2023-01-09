import { DAYS } from "./constants";

export const range = (nosDays, year, month) => {
  const { result } = Array.from({ length: nosDays }).reduce(
    ({ result, current }) => ({
      result: [...result, current],
      current: current + 1,
    }),
    { result: [], current: 1 }
  );
  // console.log("Range :-", result);
  let prevMonthDays = getFirstDayOfMonth(year, month);
  // console.log("prevMonthDays", nosDays, month, prevMonthDays);
  if (prevMonthDays == 0) prevMonthDays = 5;

  for (let i = 0; i <= prevMonthDays; i++) {
    let d = new Date(year, month + 1, -i).getDate();
    result.unshift(d);
  }
  // console.log("result", result);
  return result;
};

// tot nos of days
export const getDaysInMonth = (month, year) => {
  // if (month === 3) return [2];
  // if (month === 4) return [4];
  // if (month === 5) return [9];
  const nosDays = new Date(year, month + 1, 0).getDate();

  const { result } = Array.from({ length: nosDays }).reduce(
    ({ result, current }) => ({
      result: [...result, current],
      current: current + 1,
    }),
    { result: [], current: 1 }
  );

  // console.log("Range :-", result);
  let prevMonthDays = getFirstDayOfMonth(year, month);
  // console.log("prevMonthDays", nosDays, month, prevMonthDays);
  if (prevMonthDays === 0) prevMonthDays = 6;

  for (let i = 0; i < prevMonthDays; i++) {
    let d = new Date(year, month, -i).getDate();
    result.unshift(d);
  }
  return result;
};

export const getFirstDayOfMonth = (year, month) => {
  return new Date(year, month, 1).getDay();
};

export const getLastDayOfMonth = (year, month) => {
  return new Date(year, month + 1, 0).getDate();
};

export const getSortedDays = (month, year) => {
  const dayIndex = new Date(year, month, 1).getDay();
  return [...DAYS.slice(dayIndex), ...DAYS.slice(0, dayIndex)];
};

export const getDateObj = (day, month, year) => {
  return new Date(year, month, day);
};

export const areDateTheSame = (currentDate, startDate, endDate) => {
  if (
    currentDate.getFullYear() >= startDate.getFullYear() &&
    currentDate.getMonth() >= startDate.getMonth() - 1 &&
    currentDate.getDate() >= startDate.getDate() &&
    currentDate.getFullYear() <= endDate.getFullYear() &&
    currentDate.getMonth() <= endDate.getMonth() - 1 &&
    currentDate.getDate() <= endDate.getDate()
  ) {
    return true;
  } else {
    return false;
  }
};

export const getDateDiff = (startDate, endDate) => {
  return (
    (new Date(
      startDate.split("-")[2],
      startDate.split("-")[1],
      startDate.split("-")[0]
    ) -
      new Date(
        endDate.split("-")[2],
        endDate.split("-")[1],
        endDate.split("-")[0]
      )) /
      (1000 * 60 * 60 * 24) +
    1
  );
};

export const getRandomDarkColor = () => {
  let color = "#";
  for (let i; i < 6; i++) {
    color += Math.floor(Math.random() * 10);
  }
  return color;
};
