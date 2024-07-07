import React from "react";
import moment from "moment";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";
import { View, Text, Pressable } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useFetch } from "@/hooks";
import { BaseLayout } from "@/layouts";
import { LoadingData } from "@/components/shared";
import { BusRoutesService } from "@/services";
import type { StackParamsList } from "@/types/navigation";

type Props = {
  navigation: StackNavigationProp<StackParamsList, "VIEW_ROUTE_SCREEN">;
  route: RouteProp<StackParamsList, "VIEW_ROUTE_SCREEN">;
};

export const ViewRouteScreen: React.FC<Props> = (props) => {
  const { routeNo } = props.route.params;

  const { isLoading, data } = useFetch({
    queryFn: async () => await BusRoutesService.getRouteByRouteNo(routeNo),
  });

  const formatDate = (date: string | undefined) => {
    return moment(date).format("MMMM DD, YYYY");
  };

  return (
    <BaseLayout headerTitle="VIEW ROUTE INFORMATION" hasFooter hasHeader>
      {isLoading ? <LoadingData /> : null}
      <View className="flex-1 relative pt-3">
        <View className="flex flex-col space-y-3 px-3">
          <View className="w-full bg-white rounded-lg">
            <View className="border-b-2 border-gray-100 p-4">
              <Text className="text-xs font-medium">Bus Route Details</Text>
            </View>
            <View className="flex flex-col space-y-3 p-5">
              <View className="flex flex-row justify-between">
                <Text className="text-xs text-gray-900 font-bold">
                  {formatDate(data?.departureDate)}
                </Text>
                <Text className="text-xs text-gray-900 font-bold">
                  {data?.departureTime}
                </Text>
              </View>
              <View className="flex flex-row justify-between items-center">
                <Text className="text-lg text-orange-400 font-bold">
                  {data?.routeFrom}
                </Text>
                <FontAwesome name="long-arrow-right" size={18} color="orange" />
                <Text className="text-lg text-orange-400 font-bold">{data?.routeTo}</Text>
              </View>
              <View className="flex flex-row justify-between items-center">
                <Text className="text-xs text-gray-700">
                  CUL TRANSPORT TERMINAL (EDSA)
                </Text>
                <View className="bg-green-500 rounded-md p-1">
                  <Text className="text-[10px] text-white font-bold uppercase">
                    {data?.bus ? data?.bus.type : "PREMIUM"}
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View className="w-full bg-white rounded-lg">
            <View className="border-b-2 border-gray-100 p-4">
              <Text className="text-xs font-medium">Ticket Pricing</Text>
            </View>
            <View className="p-5">
              <Text className="text-lg text-bold font-bold">₱ 0.00</Text>
            </View>
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
