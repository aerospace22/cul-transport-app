import React from "react";
import moment from "moment";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { View, Text, ScrollView, TextInput } from "react-native";
import { AntDesign } from "@expo/vector-icons";
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
        <View className="w-full flex flex-col justify-between relative">
          <View className="absolute top-2 right-2">
            <AntDesign name="bells" size={24} color="black" />
          </View>

          <View className="flex flex-row items-center gap-x-3">
            <View className="w-[48px] h-[48px] bg-slate-800 rounded-full" />
            <View>
              <Text className="text-md font-bold">{user ? `${user.firstName} ${user.lastName}` : null}</Text>
              <Text className="text-xs text-gray-500 font-medium">Ready to travel?</Text>
            </View>
          </View>

          <Text className="text-xs text-gray-600 font-medium mt-2">{datetime}</Text>
        </View>

        <Text className="text-xs text-gray-700 font-medium mt-5">Your Current Booking &mdash;</Text>
        <Text className="text-sm text-red-700 font-bold mt-2">N/A</Text>
      </View>

      <View className="w-full flex-1 px-2 py-5">
        <View className="flex-1">
          <View className="bg-white pb-4" style={{ zIndex: 999 }}>
            <TextInput className="w-full h-[50px] text-xs border border-gray-700 rounded px-2" placeholder="Search Destination" />
            <Text className="text-xs font-bold pt-4">Available Bus Routes:</Text>
          </View>
          <ScrollView showsVerticalScrollIndicator={false} className="flex flex-col gap-y-4 pb-[80px]">
            <View className="w-full h-[130px] bg-slate-50 border border-gray-300 rounded-lg"></View>
            <View className="w-full h-[130px] bg-slate-50 border border-gray-300 rounded-lg"></View>
            <View className="w-full h-[130px] bg-slate-50 border border-gray-300 rounded-lg"></View>
            <View className="w-full h-[130px] bg-slate-50 border border-gray-300 rounded-lg"></View>
            <View className="w-full h-[130px] bg-slate-50 border border-gray-300 rounded-lg"></View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};
