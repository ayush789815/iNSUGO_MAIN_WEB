import { useCallback, useEffect } from "react";
import { useFetchDataMutation } from "../store/CreateApi/dataApi";
// import { useFetchDataMutation } from "../redux/RTKQuery/dataApi";

const useFetchApi = (initialParams) => {
  const [fetchData, { data, isLoading, isError, error }] =
    useFetchDataMutation();
  const handleFetchData = useCallback(
    async (params = initialParams) => {
      try {
        await fetchData(params).unwrap();
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    },
    [initialParams]
  );

  useEffect(() => {
    handleFetchData();
  }, []);

  return {
    data,
    isLoading,
    isError,
    error,
    refetch: handleFetchData,
  };
};

export default useFetchApi;
