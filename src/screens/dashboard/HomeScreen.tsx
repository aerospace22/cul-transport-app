import React from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { View, Text, ScrollView } from "react-native";
import { BaseLayout } from "@/layouts";
import { HeaderNav } from "@/components/domains";
import type { StackParamsList } from "@/types/navigation";
import { EmptyData } from "@/components/shared";

type Props = {
  navigation: StackNavigationProp<StackParamsList, "HOME_SCREEN">;
};

export const HomeScreen: React.FC<Props> = (props) => {
  return (
    <BaseLayout>
      <HeaderNav />
      <View className="flex-1 flex-col gap-y-4">
        <ScrollView
          className="flex-col gap-4 px-3"
          showsHorizontalScrollIndicator={false}
        >
          <View>
            <Text className="text-gray-700 font-medium">My Upcoming Travels</Text>
            <EmptyData />
          </View>
        </ScrollView>
      </View>
    </BaseLayout>
  );
};
