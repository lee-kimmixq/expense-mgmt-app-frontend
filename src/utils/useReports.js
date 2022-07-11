import useSWR from "swr";
import fetcher from "./fetcher.mjs";
import getFirstLastDates from "./getFirstLastDates.mjs";

const useReports = (tabFocus, currDate) => {
  const tabFocusToDateType = { day: "month", week: "month", month: "year" };

  const { firstDate, lastDate } = getFirstLastDates(
    tabFocusToDateType[tabFocus],
    currDate
  );

  const { data, error, mutate } = useSWR(
    `${process.env.REACT_APP_BACKEND_URL}/transactions/reports?txnDateMin=${firstDate}&txnDateMax=${lastDate}&group=${tabFocus}`,
    fetcher.get
  );

  return {
    data,
    error,
    isLoading: !error && !data,
    mutate,
  };
};

export default useReports;
