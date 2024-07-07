import React from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";
import { useFetch } from "@/hooks";
import { BusRoutesService } from "@/services";
import { BaseLayout } from "@/layouts";
import { BusRouteInformation } from "@/components/domains";
import { EmptyData, LoadingData } from "@/components/shared";
import type { StackParamsList } from "@/types/navigation";

type Props = {
  navigation: StackNavigationProp<StackParamsList, "BOOK_TICKETS_SCREEN">;
  route: RouteProp<StackParamsList, "BOOK_TICKETS_SCREEN">;
};

export const BookTicketsScreen: React.FC<Props> = (props) => {
  const { routeNo } = props.route.params;

  const { isLoading, data } = useFetch({
    queryFn: async () => await BusRoutesService.getRouteByRouteNo(routeNo),
  });

  return (
    <BaseLayout headerTitle="TICKETS BOOKING" hasFooter hasHeader>
      {isLoading ? (
        <LoadingData />
      ) : data ? (
        <BusRouteInformation busRoute={data} hideTicketPricing />
      ) : (
        <EmptyData />
      )}
    </BaseLayout>
  );
};
