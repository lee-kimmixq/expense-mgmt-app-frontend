const getMonthFirstLastDate = (date) => {
  if (!date) date = new Date();
  const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
  const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
  lastDay.setHours(23, 59, 59, 999);

  return { firstDay, lastDay };
};

export default getMonthFirstLastDate;
