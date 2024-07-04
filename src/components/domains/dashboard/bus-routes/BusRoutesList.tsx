import React from "react";
import { View, Text } from "react-native";
import { FontAwesome, FontAwesome6 } from "@expo/vector-icons";
import { useFetch } from "@/hooks";
import { BusRoutesService } from "@/services";
import { EmptyData, LoadingData } from "@/components/shared";
import type { BusRoute, BusRouteTicket } from "@/types/models";

export const BusRoutesList: React.FC<{ limit?: number }> = (props) => {
  const { isLoading, isError, data } = useFetch({
    queryFn: async () => await BusRoutesService.getRoutesList(),
  });

  const getTotalSeatsAvailable = (routeTickets: BusRouteTicket[]) => {
    if (!routeTickets.length) return 0;

    return 1;
  };

  if (isLoading) return <LoadingData />;

  if (!data || !data?.length || isError) return <EmptyData />;

  return (
    <View className="flex flex-col gap-y-3">
      {data.map((route: BusRoute) => (
        <View className="bg-white rounded" key={`bus-route-${route.routeNo}`}>
          <View className="flex flex-row p-2">
            <View className="flex basis-3/4">
              <Text className="text-[10px] text-gray-500 uppercase mb-1">
                #{route.routeNo}
              </Text>
              <View className="flex flex-row items-center mb-1">
                <Text className="text-sm text-black font-medium">{route.routeFrom}</Text>
                <View className="flex flex-row items-center gap-x-2 mx-2">
                  <FontAwesome name="long-arrow-left" size={16} color="lightcoral" />
                  <FontAwesome6 name="bus-simple" size={14} color="lightcoral" />
                  <FontAwesome name="long-arrow-right" size={16} color="lightcoral" />
                </View>
                <Text className="text-sm text-black font-medium">{route.routeTo}</Text>
              </View>
              <Text className="text-[10px] text-gray-500 uppercase mb-1">
                Total Seats: {getTotalSeatsAvailable(route.busRouteTickets)}
              </Text>
              <Text className="text-[10px] text-gray-500 uppercase mb-1">
                Type: {route.bus.type}
              </Text>
            </View>
            <View className="flex basis-1/4">
              <Text className="text-xs text-gray-500">Ticket Price</Text>
              {route.busRouteTickets.length ? (
                <></>
              ) : (
                <Text className="text-xs text-gray-700">₱ N/A</Text>
              )}
            </View>
          </View>
        </View>
      ))}
    </View>
  );
};
