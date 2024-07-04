import React from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { View } from "react-native";
import { BaseLayout } from "@/layouts";
import type { StackParamsList } from "@/types/navigation";

type Props = {
  navigation: StackNavigationProp<StackParamsList, "VIEW_ROUTE_SCREEN">;
};

export const ViewRouteScreen: React.FC<Props> = (props) => {
  return (
    <BaseLayout headerTitle="VIEW ROUTE" hasFooter hasHeader>
      <View className="px-3"></View>
    </BaseLayout>
  );
};
