import React from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";
import { View, Text, Pressable } from "react-native";
import { useFetch } from "@/hooks";
import { BusRoutesService } from "@/services";
import { BaseLayout } from "@/layouts";
import { EmptyData, LoadingData } from "@/components/shared";
import type { StackParamsList } from "@/types/navigation";
import { BusRouteInformation } from "@/components/domains";

type Props = {
  navigation: StackNavigationProp<StackParamsList, "BOOK_TICKETS_SCREEN">;
  route: RouteProp<StackParamsList, "BOOK_TICKETS_SCREEN">;
};

export const BookTicketsScreen: React.FC<Props> = (props) => {
  const { routeNo } = props.route.params;

  const { isLoading, data } = useFetch({
    queryFn: async () => await BusRoutesService.getRouteByRouteNo(routeNo),
  });

  const handleProceedPay = () => {
    console.log("handleProceedPay");
  };

  return (
    <BaseLayout headerTitle="TICKETS BOOKING" hasFooter hasHeader>
      {isLoading ? (
        <LoadingData />
      ) : data ? (
        <View className="flex-1 relative">
          <BusRouteInformation busRoute={data} />

          <View className="w-full absolute bottom-3 px-2">
            <Pressable
              className="w-full h-[40px] bg-green-600 justify-center items-center rounded-lg"
              onPress={handleProceedPay}
            >
              <Text className="text-white font-bold">PROCEED TO PAY (via Paymongo)</Text>
            </Pressable>
          </View>
        </View>
      ) : (
        <EmptyData />
      )}
    </BaseLayout>
  );
};
