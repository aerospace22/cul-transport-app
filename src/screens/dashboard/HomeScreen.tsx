import React from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { View } from "react-native";
import { BaseLayout } from "@/layouts";
import { HeaderNav } from "@/components/domains";
import type { StackParamsList } from "@/types/navigation";

type Props = {
  navigation: StackNavigationProp<StackParamsList, "LOGIN_SCREEN">;
};

export const HomeScreen: React.FC<Props> = (props) => {
  return (
    <BaseLayout>
      <View className="flex-1">
        <HeaderNav />
      </View>
    </BaseLayout>
  );
};
