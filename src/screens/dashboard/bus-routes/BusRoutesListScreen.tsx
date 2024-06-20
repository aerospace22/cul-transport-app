import React from "react";
import moment from "moment";
import { StackNavigationProp } from "@react-navigation/stack";
import { View, Text, Pressable, ScrollView, ActivityIndicator } from "react-native";
import { BaseLayout } from "@/layouts";
import { BusRoutesService } from "@/services";
import type { TStackParamsList } from "@/types/navigation";

type TScreenProps = {
  navigation: StackNavigationProp<TStackParamsList, "BUS_ROUTES_LIST_SCREEN">;
};

export const BusRoutesListScreen: React.FC<TScreenProps> = (props) => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [busRoutes, setBusRoutes] = React.useState<any>([]);

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
    fetchBusRoutes();
  }, []);

  return (
    <BaseLayout headerTitle="Bus Routes List" hasHeader>
      <View className="flex-1 bg-slate-50">
        {loading ? (
          <View className="flex-1 flex-col gap-y-2 justify-center items-center">
            <ActivityIndicator color="red" />
            <Text className="text-xs text-gray-600 mt-4">Fetching data</Text>
          </View>
        ) : (
          <ScrollView className="flex-1 px-3" showsVerticalScrollIndicator={false}>
            {busRoutes.map((busRoute: any) => (
              <>
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

                  <View className="flex items-end border-t-2 border-gray-300 pt-4">
                    <Pressable>
                      <Text className="text-xs text-blue-700 font-bold">
                        BOOK THIS ROUTE
                      </Text>
                    </Pressable>
                  </View>
                </View>
              </>
            ))}
          </ScrollView>
        )}
      </View>
    </BaseLayout>
  );
};
