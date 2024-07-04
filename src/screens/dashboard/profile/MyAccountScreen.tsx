import React from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { View, Text, Pressable } from "react-native";
import { BaseLayout } from "@/layouts";
import type { StackParamsList } from "@/types/navigation";

type Props = {
  navigation: StackNavigationProp<StackParamsList, "MY_PROFILE_SCREEN">;
};

export const MyProfileScreen: React.FC<Props> = (props) => {
  return (
    <BaseLayout headerTitle="MY PROFILE" hasFooter hasHeader>
      <View className="px-3"></View>
    </BaseLayout>
  );
};
