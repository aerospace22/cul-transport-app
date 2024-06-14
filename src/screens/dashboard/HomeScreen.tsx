import React from "react";
import moment from "moment";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { View, Text } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import type { TStackParamsList } from "@/types/navigation";

type TScreenProps = {
  navigation: StackNavigationProp<TStackParamsList, "HOME_SCREEN">;
};

export const HomeScreen: React.FC<TScreenProps> = (props) => {
  const [user, setUser] = React.useState<any>(null);
  const [datetime, setDatetime] = React.useState("");

  const getUserData = async () => {
    const data = await AsyncStorage.getItem("user");
    setUser(JSON.parse(data!));
  };

  React.useEffect(() => {
    getUserData();

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
        <View className="w-full flex flex-col justify-between">
          <View className="flex flex-row items-center gap-x-3">
            <View className="w-[48px] h-[48px] bg-slate-800 rounded-full" />
            <View>
              <Text className="text-md font-bold">{user ? `${user.firstName} ${user.lastName}` : null}</Text>
              <Text className="text-xs text-gray-500 font-medium">Ready to travel?</Text>
            </View>
          </View>

          <Text className="text-xs text-gray-600 font-medium mt-2">{datetime}</Text>
        </View>
      </View>

      <View className="w-full flex-1 px-2 py-5"></View>
    </View>
  );
};
