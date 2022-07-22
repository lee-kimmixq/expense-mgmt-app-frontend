import useSWR from "swr";
import fetcher from "./fetcher.mjs";

const useUsers = () => {
  const { data, error, mutate } = useSWR(
    `${process.env.REACT_APP_BACKEND_URL}/users/current`,
    fetcher.get
  );

  return {
    data,
    error,
    isLoading: !error && !data,
    mutate,
  };
};

export default useUsers;
