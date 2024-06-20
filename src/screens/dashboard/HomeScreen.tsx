import React from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { View, Text, ScrollView } from "react-native";
import { BaseInput, BaseButton } from "@/components/base";
import { BaseLayout } from "@/layouts";
import type { TStackParamsList } from "@/types/navigation";

type TScreenProps = {
  navigation: StackNavigationProp<TStackParamsList, "HOME_SCREEN">;
};

export const HomeScreen: React.FC<TScreenProps> = (props) => {
  return (
    <BaseLayout>
      <View className="flex-1 bg-slate-50">
        <View className="flex flex-row justify-between py-2 px-5 mt-3 mb-4">
          <View>
            <Text className="text-lg font-semibold">Hello, Noah Policarpio</Text>
            <Text className="text-xs text-gray-600">Book your travel now!</Text>
          </View>

          <View className="w-[50px] h-[50px] bg-gray-300 rounded-full" />
        </View>

        <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
          <View className="w-full flex flex-col bg-red-700 py-3 pb-6 px-5">
            <Text className="text-white font-bold mb-5">Search for bus routes</Text>
            <BaseInput
              label="From"
              labelClassnames="text-white"
              classNames="h-[40px] bg-transparent border border-red-400 mb-3"
            />
            <BaseInput
              label="To"
              labelClassnames="text-white"
              classNames="h-[40px] bg-transparent border border-red-400 mb-3"
            />
            <View className="flex flex-row gap-x-3">
              <View className="basis-1/2">
                <BaseInput
                  label="Departure (Date)"
                  labelClassnames="text-white"
                  classNames="basis-1 w-3/4 h-[40px] bg-transparent border border-red-400 mb-3"
                />
              </View>
              <View className="basis-1/2">
                <BaseInput
                  label="Departure (Time)"
                  labelClassnames="text-white"
                  classNames="basis-1 w-3/4 h-[40px] bg-transparent border border-red-400 mb-3"
                />
              </View>
            </View>
            <BaseButton title="SEARCH" classNames="w-full h-[40px] bg-yellow-400 mt-2" />
          </View>

          <View className="mt-5 px-5">
            <Text className="text-sm text-black font-bold">My Recent Travels</Text>
            <Text className="text-xs text-gray-700 text-center mt-10">No data found</Text>
          </View>
        </ScrollView>
      </View>
    </BaseLayout>
  );
};
