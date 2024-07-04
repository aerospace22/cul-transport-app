import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";

export const HeaderNav = () => {
  const { navigate } = useNavigation();

  const goToAllRoutes = () => {
    // @ts-ignore
    return navigate("ALL_ROUTES_SCREEN");
  };

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
          <Pressable
            className="h-[50px] w-full flex justify-center bg-white border-0 rounded-lg pl-10"
            onPress={goToAllRoutes}
          >
            <Text className="text-sm text-gray-600">SEARCH</Text>
          </Pressable>
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
