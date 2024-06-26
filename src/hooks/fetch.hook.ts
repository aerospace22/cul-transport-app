import React from "react";
import httpClient from "@/api";

type Props = {
  queryFn: () => any;
};

export const useFetch = (props: Props) => {
  const [data, setData] = React.useState<any>(null);
  const [isLoading, setLoading] = React.useState<boolean>(false);
  const [isError, setError] = React.useState<boolean>(false);

  const fetchData = async () => {
    await props.queryFn();
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return {
    refetch: fetchData(),
    data,
    isLoading,
    isError,
  };
};
