import React from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { View, Text, ScrollView, RefreshControl } from "react-native";
import { BaseLayout } from "@/layouts";
import { HeaderNav } from "@/components/domains";
import type { StackParamsList } from "@/types/navigation";
import { EmptyData } from "@/components/shared";

type Props = {
  navigation: StackNavigationProp<StackParamsList, "HOME_SCREEN">;
};

export const HomeScreen: React.FC<Props> = (props) => {
  const [refetchLoading, setRefetchLoading] = React.useState<boolean>(false);

  const onRefresh = React.useCallback(() => {
    setRefetchLoading(true);

    setTimeout(() => {
      setRefetchLoading(false);
    }, 2000);
  }, []);

  return (
    <BaseLayout hasFooter>
      <HeaderNav />

      <View className="flex-1 px-3 mt-2">
        <ScrollView
          className="flex-col gap-y-4 pt-3"
          refreshControl={
            <RefreshControl refreshing={refetchLoading} onRefresh={onRefresh} />
          }
          showsHorizontalScrollIndicator={false}
        >
          <View>
            <Text className="text-xs text-gray-700 font-medium">
              Current Active Booking
            </Text>
            <EmptyData />
          </View>

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
