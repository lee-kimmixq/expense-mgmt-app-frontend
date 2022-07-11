import useSWR from "swr";
import fetcher from "./fetcher.mjs";
import getFirstLastDates from "./getFirstLastDates.mjs";

const getQueryParams = (page, type, firstDate, lastDate) => {
  const isIncomeVal = type === "income";

  const queryParams = {
    dashboard: `?fields=id&fields=title&fields=amount&fields=category&fields=txnDate&sort=txnDate:DESC&txnDateMin=${firstDate}&txnDateMax=${lastDate}&isIncome=${isIncomeVal}&includeUser=true&includeTotal=true&includeBreakdown=true&includeTransactions=true`,
    transactions: `?fields=id&fields=title&fields=amount&fields=category&fields=txnDate&sort=txnDate:DESC&txnDateMin=${firstDate}&txnDateMax=${lastDate}&includeTransactions=true`,
    reports: `?fields=id&fields=title&fields=amount&fields=category&fields=txnDate&txnDateMin=${firstDate}&txnDateMax=${lastDate}&isIncome=${isIncomeVal}&includeUser=true&includeBreakdown=true&includeTotal=true`,
    breakdown: `?fields=id&fields=title&fields=amount&fields=category&fields=txnDate&txnDateMin=${firstDate}&txnDateMax=${lastDate}&isIncome=${isIncomeVal}&includeBreakdown=true&includeTotal=true`,
  };

  return queryParams[page];
};

const useTxns = (queryParamType, dataType, dateType, currDate) => {
  const { firstDate, lastDate } = getFirstLastDates(dateType, currDate);

  const { data, error, mutate } = useSWR(
    `${process.env.REACT_APP_BACKEND_URL}/transactions${getQueryParams(
      queryParamType,
      dataType,
      firstDate,
      lastDate
    )}`,
    fetcher.get
  );

  return {
    data,
    error,
    isLoading: !error && !data,
    mutate,
  };
};

export default useTxns;
