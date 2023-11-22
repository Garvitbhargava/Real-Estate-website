import React from "react";
import { useQueries } from "react-query";
import { getAllProperties } from "../utils/api";

const useProperties = () => {
  const { data, isError, isLoading, refetch } = useQueries(
    "allProperties",
    getAllProperties,
    { refetchOnWindowFocus: false }
  );

  return {
    data,
    isError,
    isLoading,
    refetch,
  };
};

export default useProperties;
