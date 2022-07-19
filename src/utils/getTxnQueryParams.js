import getFirstLastDates from "./getFirstLastDates.mjs";

const getTxnQueryParams = (page, type, dateType, currDate) => {
  const isIncomeVal = type === "income";

  const { firstDate, lastDate } = getFirstLastDates(dateType, currDate);

  const defaultQueryParams = [
    ["fields", "id"],
    ["fields", "title"],
    ["fields", "amount"],
    ["fields", "category"],
    ["fields", "txnDate"],
    ["txnDateMin", firstDate],
    ["txnDateMax", lastDate],
  ];

  const additionalQueries = {
    dashboard: [
      ["sort", "txnDate:DESC"],
      ["isIncome", isIncomeVal],
      ["includeUser", "true"],
      ["includeTotal", "true"],
      ["includeBreakdown", "true"],
      ["includeTransactions", "true"],
    ],
    transactions: [
      ["fields", "imageUrl"],
      ["sort", "txnDate:DESC"],
      ["includeTransactions", "true"],
    ],
    reports: [
      ["isIncome", isIncomeVal],
      ["includeUser", "true"],
      ["includeTotal", "true"],
      ["includeBreakdown", "true"],
    ],
    breakdown: [
      ["isIncome", isIncomeVal],
      ["includeTotal", "true"],
      ["includeBreakdown", "true"],
    ],
  };

  return new URLSearchParams([
    ...defaultQueryParams,
    ...additionalQueries[page],
  ]).toString();
};

export default getTxnQueryParams;
