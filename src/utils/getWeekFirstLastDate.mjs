const getWeekFirstLastDate = (date) => {
  if (!date) date = new Date();
  const firstDay = new Date(date.setDate(date.getDate() - 7));
  firstDay.setHours(0, 0, 0, 0);
  const lastDay = new Date(date.setDate(date.getDate() + 7));
  lastDay.setHours(23, 59, 59, 999);

  return { firstDay, lastDay };
};

export default getWeekFirstLastDate;
