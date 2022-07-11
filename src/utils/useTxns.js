import useSWR from "swr";
import fetcher from "./fetcher.mjs";
import getFirstLastDates from "./getFirstLastDates.mjs";

const getQueryParams = (type, firstDate, lastDate) => {
  const queryParams = {
    dashboardExp: `?fields=id&fields=title&fields=amount&fields=category&fields=txnDate&sort=txnDate:DESC&txnDateMin=${firstDate}&txnDateMax=${lastDate}&isIncome=false&includeUser=true&includeTotal=true&includeBreakdown=true&includeTransactions=true`,
    dashboardInc: `?fields=id&fields=title&fields=amount&fields=category&fields=txnDate&sort=txnDate:DESC&txnDateMin=${firstDate}&txnDateMax=${lastDate}&isIncome=true&includeUser=true&includeTotal=true&includeBreakdown=true&includeTransactions=true`,
  };

  return queryParams[type];
};

const useTxns = (shouldFetch, queryParamType, dateType) => {
  const { firstDate, lastDate } = getFirstLastDates(dateType);

  const { data, error, mutate } = useSWR(
    shouldFetch
      ? `${process.env.REACT_APP_BACKEND_URL}/transactions${getQueryParams(
          queryParamType,
          firstDate,
          lastDate
        )}`
      : null,
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
