import useSWR from "swr";
import fetcher from "./fetcher.mjs";

const useBudgets = () => {
  const { data, error, mutate } = useSWR(
    `${process.env.REACT_APP_BACKEND_URL}/budgets`,
    fetcher.get
  );

  return {
    data,
    error,
    isLoading: !error && !data,
    mutate,
  };
};

export default useBudgets;
