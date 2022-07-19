import getFirstLastDates from "./getFirstLastDates.mjs";

const getTxnQueryParams = (page, type, dateType, currDate, filters) => {
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

  const combinedParams = new URLSearchParams([
    ...defaultQueryParams,
    ...additionalQueries[page],
  ]);

  if (!filters) return combinedParams.toString();

  console.log(filters);

  if (filters.sort) {
    combinedParams.delete("sort");
    combinedParams.set("sort", filters.sort);
  }

  if (filters.txnDateMin) {
    combinedParams.delete("txnDateMin");
    combinedParams.set("txnDateMin", filters.txnDateMin);
  }

  if (filters.txnDateMax) {
    combinedParams.delete("txnDateMax");
    combinedParams.set("txnDateMax", filters.txnDateMax);
  }

  if (filters.amountMin) combinedParams.set("amountMin", filters.amountMin);
  if (filters.amountMax) combinedParams.set("amountMax", filters.amountMax);

  if (filters.categories.length > 0)
    combinedParams.set("category", filters.categories);

  return combinedParams.toString();
};

export default getTxnQueryParams;
