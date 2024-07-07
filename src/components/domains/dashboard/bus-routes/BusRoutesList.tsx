import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Pressable, Image } from "react-native";
import { useFetch } from "@/hooks";
import { ImageAssets } from "@/assets/index";
import { BusRoutesService } from "@/services";
import { EmptyData, LoadingData } from "@/components/shared";
import type { BusRoute } from "@/types/models";

export const BusRoutesList: React.FC<{ limit?: number; triggerRefetch?: boolean }> = (
  props
) => {
  const { navigate } = useNavigation();

  const { isLoading, data, refetch } = useFetch({
    queryFn: async () => await BusRoutesService.getRoutesList(),
  });

  const goToRoute = (routeNo: string) => {
    // @ts-ignore
    return navigate("VIEW_ROUTE_SCREEN");
  };

  React.useEffect(() => {
    refetch();
  }, [props.triggerRefetch]);

  if (isLoading) return <LoadingData />;

  if (!data || !data?.length) return <EmptyData />;

  return (
    <View className="flex flex-col gap-y-2">
      {data.map((route: BusRoute) => (
        <Pressable
          key={`bus-route-${route.routeNo}`}
          onPress={() => goToRoute(route.routeNo)}
        >
          <View className="min-h-[60px] bg-white rounded-lg border border-gray-100 p-3">
            <View className="flex flex-row justify-between">
              <View className="flex basis-1/4">
                <Image
                  source={ImageAssets.busLogo}
                  resizeMethod="scale"
                  resizeMode="contain"
                  className="h-16 w-16"
                />
              </View>
              <View className="w-full flex flex-row basis-2/4 ">
                <View className="flex basis-1/2">
                  <Text className="text-[9px] text-red-500 font-bold">FROM</Text>
                  <Text className="text-xs mb-2">{route.routeFrom} </Text>

                  <Text className="text-[9px] text-red-500 font-bold">DEPARTURE</Text>
                  <Text className="text-[11px]">
                    {route.departureDate} {route.departureTime}
                  </Text>
                </View>
                <View className="flex items-end basis-1/2">
                  <Text className="text-[9px] text-red-500 font-bold">TO</Text>
                  <Text className="text-xs text-right mb-2">{route.routeTo} </Text>

                  <Text className="text-[9px] text-red-500 font-bold">ARRIVAL</Text>
                  <Text className="text-[11px] text-right">
                    {route.arrivalDate} {route.arrivalTime}
                  </Text>
                </View>
              </View>
              <View className="flex basis-1/4">
                <View className="mb-2">
                  <Text className="text-[9px] text-right text-black font-bold">
                    PREMIUM
                  </Text>
                  <Text className="text-right">₱ 0.00</Text>
                </View>
                <View className="mb-2">
                  <Text className="text-[9px] text-right text-black font-bold">
                    ORDINARY
                  </Text>
                  <Text className="text-right">₱ 0.00</Text>
                </View>
              </View>
            </View>
          </View>
        </Pressable>
      ))}
    </View>
  );
};
