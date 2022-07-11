import useSWR from "swr";
import fetcher from "./fetcher.mjs";
import getFirstLastDates from "./getFirstLastDates.mjs";

const useReports = (dateType, currDate) => {
  const { firstDate, lastDate } = getFirstLastDates(dateType, currDate);

  const { data, error, mutate } = useSWR(
    `${process.env.REACT_APP_BACKEND_URL}/transactions/reports?txnDateMin=${firstDate}&txnDateMax=${lastDate}`,
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
