import React from "react";
import moment from "moment";
import { StackNavigationProp } from "@react-navigation/stack";
import { View, Text, Pressable, ScrollView } from "react-native";
import { BaseInput, BaseButton } from "@/components/base";
import { BaseLayout } from "@/layouts";
import { useAuthHook } from "@/hooks";
import { checkAuth } from "@/utils";
import { BusRoutesService } from "@/services";

import type { TStackParamsList } from "@/types/navigation";

type TScreenProps = {
  navigation: StackNavigationProp<TStackParamsList, "HOME_SCREEN">;
};

export const HomeScreen: React.FC<TScreenProps> = (props) => {
  const { authUser } = useAuthHook();
  const userFullname = authUser ? `${authUser?.firstName} ${authUser?.lastName}` : "User";

  const [busRoutes, setBusRoutes] = React.useState<any>([]);
  const [loading, setLoading] = React.useState<boolean>(false);

  const goToBrowseBusRoutes = () => {
    props.navigation.navigate("BUS_ROUTES_LIST_SCREEN");
  };

  const goToViewAllRoutes = () => {
    props.navigation.navigate("BUS_ROUTES_LIST_SCREEN");
  };

  const fetchBusRoutes = async () => {
    setLoading(true);

    await BusRoutesService.getRoutesList()
      .then((busRoutes) => setBusRoutes(busRoutes))
      .finally(() => setLoading(false));
  };

  const formatDate = (date: string) => {
    return moment(date).format("MMMM DD, YYYY");
  };

  React.useEffect(() => {
    checkAuth();
    fetchBusRoutes();
  }, []);

  return (
    <BaseLayout>
      <View className="flex-1 bg-slate-50">
        <View className="flex flex-row justify-between py-2 px-5 mt-3 mb-4">
          <View>
            <Text className="text-lg font-semibold">Hello, {userFullname}</Text>
            <Text className="text-xs text-gray-600">Book your travel now!</Text>
          </View>

          <View className="w-[50px] h-[50px] bg-gray-300 rounded-full" />
        </View>

        <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
          <View className="w-full flex flex-col bg-red-700 py-3 pb-6 px-5">
            <View className="flex flex-row justify-between items-start">
              <Text className="text-white font-bold mb-5">Search for bus routes</Text>
              <Pressable onPress={goToBrowseBusRoutes}>
                <Text className="text-xs text-white underline">Browse All</Text>
              </Pressable>
            </View>
            <BaseInput
              label="From"
              labelClassnames="text-white"
              classNames="h-[40px] bg-transparent border border-red-400 mb-3"
            />
            <BaseInput
              label="To"
              labelClassnames="text-white"
              classNames="h-[40px] bg-transparent border border-red-400 mb-3"
            />
            <View className="flex flex-row gap-x-3">
              <View className="basis-1/2">
                <BaseInput
                  label="Departure (Date)"
                  labelClassnames="text-white"
                  classNames="basis-1 w-3/4 h-[40px] bg-transparent border border-red-400 mb-3"
                />
              </View>
              <View className="basis-1/2">
                <BaseInput
                  label="Departure (Time)"
                  labelClassnames="text-white"
                  classNames="basis-1 w-3/4 h-[40px] bg-transparent border border-red-400 mb-3"
                />
              </View>
            </View>
            <BaseButton title="SEARCH" classNames="w-full h-[40px] bg-yellow-400 mt-2" />
          </View>

          <View className="mt-5 px-5">
            <View className="flex flex-row justify-between mb-2">
              <Text className="text-sm text-black font-bold mb-2">
                Recent Posted Routes
              </Text>
              <Pressable onPress={goToViewAllRoutes}>
                <Text className="text-xs text-blue-700 underline">View All</Text>
              </Pressable>
            </View>
            {!loading && busRoutes.length ? (
              busRoutes.splice(0, 5).map((busRoute: any) => (
                <View
                  className="w-full flex flex-col bg-slate-200 rounded-md p-4 mb-4"
                  key={`bus-route-${busRoute.id}`}
                >
                  <View className="flex flex-row justify-between items-end mb-2">
                    <View>
                      <Text className="text-[10px] font-bold mb-1">ROUTE FROM</Text>
                      <Text className="text-[12px]">{busRoute.routeFrom}</Text>
                    </View>
                    <View>
                      <Text className="text-[10px] font-bold mb-1  text-right">
                        ROUTE TO
                      </Text>
                      <Text className="text-[12px] text-right">{busRoute.routeTo}</Text>
                    </View>
                  </View>
                  <View className="flex flex-row justify-between items-end mb-2">
                    <View>
                      <Text className="text-[10px] font-bold mb-1">DEPARTURE DATE</Text>
                      <Text className="text-[12px]">
                        {formatDate(busRoute.departureDate)}
                      </Text>
                    </View>
                    <View>
                      <Text className="text-[10px] font-bold text-right mb-1">
                        ARRIVAL DATE
                      </Text>
                      <Text className="text-[12px] text-right">
                        {formatDate(busRoute.arrivalDate)}
                      </Text>
                    </View>
                  </View>
                  <View className="flex flex-row justify-between items-end mb-2">
                    <View>
                      <Text className="text-[10px] font-bold mb-1">DEPARTURE TIME</Text>
                      <Text className="text-[12px]">{busRoute.departureTime}</Text>
                    </View>
                    <View>
                      <Text className="text-[10px] font-bold mb-1  text-right">
                        ARRIVAL TIME
                      </Text>
                      <Text className="text-[12px] text-right">
                        {busRoute.arrivalTime}
                      </Text>
                    </View>
                  </View>

                  <View className="flex flex-row justify-between border-t-2 border-gray-300 pt-4">
                    <Text className="text-[12px] text-right">Ticket Price: ₱575.00</Text>
                    <Pressable>
                      <Text className="text-xs text-blue-700 font-bold">
                        BOOK THIS ROUTE
                      </Text>
                    </Pressable>
                  </View>
                </View>
              ))
            ) : !busRoutes.length ? (
              <Text className="text-xs text-gray-700 text-center mt-10">
                No data available
              </Text>
            ) : (
              <Text className="text-xs text-gray-700 text-center mt-10">
                There are no data available
              </Text>
            )}
          </View>

          <View className="mt-5 px-5">
            <Text className="text-sm text-black font-bold">My Recent Travels</Text>
            <Text className="text-xs text-gray-700 text-center mt-10">
              There are no data available
            </Text>
          </View>
        </ScrollView>
      </View>
    </BaseLayout>
  );
};
