import useSWR from "swr";
import fetcher from "./fetcher.mjs";

const useTxns = (queryParams) => {
  const { data, error, mutate } = useSWR(
    `${process.env.REACT_APP_BACKEND_URL}/transactions?${queryParams}`,
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
