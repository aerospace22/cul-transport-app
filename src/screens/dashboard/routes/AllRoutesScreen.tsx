import React from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { View, Text, TextInput, Pressable, ScrollView } from "react-native";
import { BaseLayout } from "@/layouts";
import { BusRoutesList } from "@/components/domains";
import type { StackParamsList } from "@/types/navigation";

type Props = {
  navigation: StackNavigationProp<StackParamsList, "ALL_ROUTES_SCREEN">;
};

export const AllRoutesScreen: React.FC<Props> = (props) => {
  return (
    <BaseLayout headerTitle="FIND YOUR BUS" hasFooter hasHeader>
      <View className="w-full bg-white p-3 hidden">
        <View className="flex flex-col items-center space-y-2">
          <TextInput
            className="w-full h-[45px] rounded-lg bg-gray-100 text-xs font-bold px-2"
            placeholder="ROUTE FROM"
          />
          <TextInput
            className="w-full h-[45px] rounded-lg bg-gray-100 text-xs font-bold px-2"
            placeholder="ROUTE TO"
          />
          <Pressable className="w-full h-[35px] bg-green-600 rounded-lg items-center justify-center">
            <Text className="text-xs text-white font-bold">SEARCH</Text>
          </Pressable>
        </View>
      </View>
      <ScrollView className="flex-1 pt-4 px-3" showsHorizontalScrollIndicator={false}>
        <BusRoutesList />
      </ScrollView>
    </BaseLayout>
  );
};
