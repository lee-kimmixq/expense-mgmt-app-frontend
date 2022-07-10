const getFirstLastDates = (duration, date) => {
  if (!date) date = new Date();

  let firstDate;
  let lastDate;

  switch (duration) {
    case "month":
      firstDate = new Date(date.getFullYear(), date.getMonth(), 1);
      lastDate = new Date(date.getFullYear(), date.getMonth() + 1, 0);
      break;

    case "week":
      firstDate = new Date(date.setDate(date.getDate() - 7));
      lastDate = new Date(date.setDate(date.getDate() + 7));
      break;

    case "date":
      firstDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
      lastDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
      break;

    default:
      firstDate = new Date(date.getFullYear(), date.getMonth(), 1);
      lastDate = new Date(date.getFullYear(), date.getMonth() + 1, 0);
      break;
  }

  firstDate.setHours(0, 0, 0, 0);
  lastDate.setHours(23, 59, 59, 999);

  return { firstDate, lastDate };
};

export default getFirstLastDates;
