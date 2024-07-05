import React from "react";
import { View, Text, Pressable } from "react-native";
import { FontAwesome, FontAwesome6 } from "@expo/vector-icons";
import { useFetch } from "@/hooks";
import { BusRoutesService } from "@/services";
import { EmptyData, LoadingData } from "@/components/shared";
import type { BusRoute, BusRouteTicket } from "@/types/models";

export const BusRoutesList: React.FC<{ limit?: number; triggerRefetch?: boolean }> = (
  props
) => {
  const { isLoading, data, refetch } = useFetch({
    queryFn: async () => await BusRoutesService.getRoutesList(),
  });

  const getTotalSeatsAvailable = (routeTickets: BusRouteTicket[]) => {
    if (!routeTickets.length) return 0;

    return 1;
  };

  const goToRoute = (routeNo: string) => {
    //
  };

  React.useEffect(() => {
    refetch();
  }, [props.triggerRefetch]);

  if (isLoading) return <LoadingData />;

  if (!data || !data?.length) return <EmptyData />;

  return (
    <View className="flex flex-col gap-y-4">
      {data.map((route: BusRoute) => (
        <Pressable key={`bus-route-${route.routeNo}`}>
          <View className="min-h-[60px] bg-white rounded-lg border border-gray-100 p-3">
            <View className="flex flex-row justify-between">
              <View>
                <Text>
                  {route.routeFrom} ===== {route.routeTo}
                </Text>
              </View>
            </View>
          </View>
        </Pressable>
      ))}
    </View>
  );
};
