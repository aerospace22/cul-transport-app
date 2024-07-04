import React from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { View, ScrollView } from "react-native";
import { BaseLayout } from "@/layouts";
import { BusRoutesList } from "@/components/domains";
import type { StackParamsList } from "@/types/navigation";

type Props = {
  navigation: StackNavigationProp<StackParamsList, "ALL_ROUTES_SCREEN">;
};

export const AllRoutesScreen: React.FC<Props> = (props) => {
  return (
    <BaseLayout headerTitle="My Tickets" hasFooter hasHeader>
      <ScrollView className="flex-1 pt-2 px-3" showsHorizontalScrollIndicator={false}>
        <BusRoutesList />
      </ScrollView>
    </BaseLayout>
  );
};
