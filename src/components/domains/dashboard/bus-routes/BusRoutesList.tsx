import React from "react";
import { View, Text } from "react-native";
import { useFetch } from "@/hooks";
import { BusRoutesService } from "@/services";

export const BusRoutesList: React.FC<{ limit?: number }> = (props) => {
  const { isLoading, isError, data } = useFetch({
    queryFn: async () => await BusRoutesService.getRoutesList(),
  });

  // console.log({
  //   isLoading,
  //   isError,
  //   data,
  // });

  return <View></View>;
};
