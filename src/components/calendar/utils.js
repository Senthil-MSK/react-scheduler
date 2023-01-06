import { DAYS } from "./constants";

export const range = (end) => {
  const { result } = Array.from({ length: end }).reduce(
    ({ result, current }) => ({
      result: [...result, current],
      current: current + 1,
    }),
    { result: [], current: 1 }
  );
  // console.log("Range :-", result);
  return result;
};

export const getDaysInMonth = (month, year) => {
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
  // console.log("currentDate", currentDate);
  // console.log("startDate", startDate);
  // console.log("endDate", endDate);
  const cu = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    currentDate.getDate()
  );
  const sDate = new Date(
    startDate.getFullYear(),
    startDate.getMonth() - 1,
    startDate.getDate()
  );
  const eDate = new Date(
    endDate.getFullYear(),
    endDate.getMonth() - 1,
    endDate.getDate()
  );
  if (cu >= sDate && cu <= eDate) {
    return true;
  } else {
    return false;
  }
  // return (
  //   currentDate.getFullYear() === startDate.getFullYear() &&
  //   currentDate.getMonth() === startDate.getMonth() - 1 &&
  //   currentDate.getDate() === startDate.getDate()
  // );
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
