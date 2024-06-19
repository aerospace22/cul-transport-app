import React from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { View, Text, ScrollView } from "react-native";
import type { TStackParamsList } from "@/types/navigation";

type TScreenProps = {
  navigation: StackNavigationProp<TStackParamsList, "HOME_SCREEN">;
};

export const HomeScreen: React.FC<TScreenProps> = (props) => {
  return (
    <View className="flex-1 bg-slate-50">
      <View className="flex flex-row justify-between py-2 px-5 mt-3">
        <View>
          <Text className="text-lg font-semibold">Hello, Noah Policarpio</Text>
          <Text className="text-xs text-gray-600">Book your travel now!</Text>
        </View>

        <View className="w-[50px] h-[50px] bg-green-500 rounded-full" />
      </View>

      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        <View className="flex-1 flex-col gap-y-4 px-4 mt-1">
          <View className="w-full h-[150px] rounded-xl bg-red-900 mb-4"></View>
          <View className="w-full min-h-[150px]">
            <Text className="font-bold">CATEGORIES</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
