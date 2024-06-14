import React from "react";
import moment from "moment";
import { View, Text, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import type { TStackParamsList } from "@/types/navigation";

type TScreenProps = {
  navigation: StackNavigationProp<TStackParamsList, "HOME_SCREEN">;
};

export const HomeScreen: React.FC<TScreenProps> = (props) => {
  const [datetime, setDatetime] = React.useState("");

  React.useEffect(() => {
    const interval = setInterval(() => {
      setDatetime(moment().format("MMMM D, Y hh:mm:ss A"));
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <View className="flex-1  bg-white">
      <View className="w-full h-[200px] bg-yellow-300 p-5">
        <Text className="text-lg font-bold">Welcome User!</Text>
        <Text className="text-xs text-gray-500 font-medium">Ready to travel?</Text>
      </View>

      <View className="w-full flex-1 px-2 py-5">
        <Text className="text-gray-800 font-bold">{datetime}</Text>
      </View>
    </View>
  );
};
