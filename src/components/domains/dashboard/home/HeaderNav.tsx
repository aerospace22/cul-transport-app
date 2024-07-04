import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { BaseInput } from "@/components/base";

export const HeaderNav = () => {
  return (
    <View style={styles.headerContainer}>
      <View className="bg-red-700 flex flex-col justify-between gap-y-4 py-4 px-3">
        <View className="flex flex-row justify-between items-center">
          <View>
            <Text className="text-lg text-white font-semibold">Hello, John Doe</Text>
            <Text className="text-xs text-gray-100">Book your travel now!</Text>
          </View>

          <SimpleLineIcons name="menu" size={24} color="#fff" />
        </View>

        <View className="w-full relative">
          <View className="absolute top-3 left-2 z-50">
            <AntDesign name="search1" size={24} color="#999" />
          </View>
          <BaseInput classNames="h-[50px] border-0 pl-10" placeholder="Search Routes" />
        </View>
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
    zIndex: 999,
  },
});
