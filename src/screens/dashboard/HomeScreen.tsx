import React from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { View, Text, Pressable, ScrollView, RefreshControl } from "react-native";
import { BaseLayout } from "@/layouts";
import { HeaderNav } from "@/components/domains";
import { BusRoutesList } from "@/components/domains";
import type { StackParamsList } from "@/types/navigation";

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
          className="flex-col gap-y-4 mt-1"
          refreshControl={
            <RefreshControl refreshing={refetchLoading} onRefresh={onRefresh} />
          }
          showsHorizontalScrollIndicator={false}
        >
          <View>
            <View className="flex flex-row justify-between gap-x-2">
              <Text className="text-xs font-medium mb-2">Routes Today</Text>
              <Pressable>
                <Text className="text-[10px] text-blue-700 underline">View All</Text>
              </Pressable>
            </View>
            <BusRoutesList limit={5} />
          </View>

          <View>
            <View className="flex flex-row justify-between gap-x-2">
              <Text className="text-xs font-medium mb-2">Other Routes (AFTER TODAY)</Text>
              <Pressable>
                <Text className="text-[10px] text-blue-700 underline">View All</Text>
              </Pressable>
            </View>
            <BusRoutesList limit={5} />
          </View>
        </ScrollView>
      </View>
    </BaseLayout>
  );
};
