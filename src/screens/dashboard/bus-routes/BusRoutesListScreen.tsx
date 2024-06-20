import React from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { View, Text, ScrollView, ActivityIndicator } from "react-native";
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
              <View
                className="w-full h-[100px] flex flex-row justify-between bg-slate-200 rounded-md p-3 mb-4"
                key={`bus-route-${busRoute.id}`}
              ></View>
            ))}
          </ScrollView>
        )}
      </View>
    </BaseLayout>
  );
};
