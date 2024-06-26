import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { BaseInput } from "@/components/base";

export const HeaderNav = () => {
  return (
    <View style={styles.headerContainer}>
      <View className="bg-red-700 flex flex-col justify-between gap-y-4 py-4 px-5 mb-4">
        <View className="flex flex-row justify-between">
          <View>
            <Text className="text-lg text-white font-semibold">Hello, John Doe</Text>
            <Text className="text-xs text-gray-100">Book your travel now!</Text>
          </View>

          <View className="w-[45px] h-[45px] bg-white rounded-full" />
        </View>

        <BaseInput classNames="h-[40px] border-0" placeholder="Search Routes" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    shadowColor: "#ddd",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
