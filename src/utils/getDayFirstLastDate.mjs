const getDayFirstLastDate = (date) => {
  if (!date) date = new Date();
  const firstDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate()
  );
  firstDay.setHours(0, 0, 0, 0);
  const lastDay = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  lastDay.setHours(23, 59, 59, 999);

  return { firstDay, lastDay };
};

export default getDayFirstLastDate;
