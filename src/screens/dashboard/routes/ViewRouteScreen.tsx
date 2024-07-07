import React from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { View } from "react-native";
import { useFetch } from "@/hooks";
import { BaseLayout } from "@/layouts";
import { LoadingData } from "@/components/shared";
import { BusRoutesService } from "@/services";
import type { StackParamsList } from "@/types/navigation";

type Props = {
  navigation: StackNavigationProp<StackParamsList, "VIEW_ROUTE_SCREEN">;
};

export const ViewRouteScreen: React.FC<Props> = (props) => {
  const { isLoading, data, refetch } = useFetch({
    queryFn: async () => await BusRoutesService.getRouteByRouteNo("2"),
  });

  return (
    <BaseLayout headerTitle="VIEW ROUTE" hasFooter hasHeader>
      {isLoading ? <LoadingData /> : null}
      <View className="px-3"></View>
    </BaseLayout>
  );
};
