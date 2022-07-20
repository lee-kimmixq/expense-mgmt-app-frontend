import useSWR from "swr";
import fetcher from "./fetcher.mjs";

const useBudgets = (showInDashboard) => {
  const { data, error, mutate } = useSWR(
    `${process.env.REACT_APP_BACKEND_URL}/budgets${
      showInDashboard ? "?showInDashboard=true" : ""
    }`,
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
