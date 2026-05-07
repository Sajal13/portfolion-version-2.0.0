import dayjs from "dayjs";

export const getExperienceDuration = () => {
  const startDate = dayjs("2022-10-01");
  const currentDate = dayjs();

  const years = currentDate.diff(startDate, "year");
  const months = currentDate.diff(startDate.add(years, "year"), "month");

  var totalExperience = years + months / 12;

  return Number(totalExperience.toFixed(1));
};
