import React from "react";

type Props = {
  queryFn: () => Promise<unknown>;
};

export const useFetch = (props: Props) => {
  const [data, setData] = React.useState<any>(null);
  const [isLoading, setLoading] = React.useState<boolean>(false);
  const [isError, setError] = React.useState<boolean>(false);

  const fetchData = async () => {
    setLoading(true);

    await props
      .queryFn()
      .then((result: unknown) => {
        setData(result);
      })
      .catch((error) => {
        console.log(error);
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return {
    refetch: fetchData,
    data,
    isLoading,
    isError,
  };
};
