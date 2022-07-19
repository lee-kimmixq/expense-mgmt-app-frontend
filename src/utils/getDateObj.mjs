const getDateObj = (isEnd, dateStr) => {
  const date = dateStr ? new Date(dateStr) : new Date();
  isEnd ? date.setHours(23, 59, 59, 999) : date.setHours(0, 0, 0, 0);
  return date;
};

export default getDateObj;
