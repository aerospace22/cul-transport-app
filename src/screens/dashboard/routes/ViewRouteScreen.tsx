import React from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";
import { View, Text, Pressable } from "react-native";
import { useFetch } from "@/hooks";
import { BaseLayout } from "@/layouts";
import { LoadingData } from "@/components/shared";
import { BusRoutesService } from "@/services";
import type { StackParamsList } from "@/types/navigation";

type Props = {
  navigation: StackNavigationProp<StackParamsList, "VIEW_ROUTE_SCREEN">;
  route: RouteProp<StackParamsList, "VIEW_ROUTE_SCREEN">;
};

type TimelineData = { time: string; title: string; description?: string }[];

export const ViewRouteScreen: React.FC<Props> = (props) => {
  const { routeNo } = props.route.params;

  const { isLoading, data } = useFetch({
    queryFn: async () => await BusRoutesService.getRouteByRouteNo(routeNo),
  });

  return (
    <BaseLayout headerTitle="VIEW ROUTE INFORMATION" hasFooter hasHeader>
      {isLoading ? <LoadingData /> : null}
      <View className="flex-1 relative pt-3">
        <View className="flex flex-row space-y-3 px-4">
          <View className="w-full h-[200px] bg-white rounded-lg p-3">
            <Text className="font-medium mb-3">Route Details</Text>
          </View>
        </View>
        <View className="w-full absolute bottom-3 px-2">
          <Pressable className="w-full h-[40px] bg-blue-600 justify-center items-center rounded-lg">
            <Text className="text-white font-bold">BOOK AND BUY TICKETS</Text>
          </Pressable>
        </View>
      </View>
    </BaseLayout>
  );
};
