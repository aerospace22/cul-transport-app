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
    <BaseLayout hasFooter>
      <HeaderNav />

      <View className="px-3 mt-2">
        <View>
          <Text className="text-xs text-gray-700 font-medium">
            Current Active Booking
          </Text>
          <EmptyData />
        </View>

        <ScrollView
          className="flex-col gap-4 mt-2"
          showsHorizontalScrollIndicator={false}
        >
          <View>
            <Text className="text-xs text-gray-700 font-medium">
              Promos & Announcements
            </Text>
            <EmptyData />
          </View>
        </ScrollView>
      </View>
    </BaseLayout>
  );
};
