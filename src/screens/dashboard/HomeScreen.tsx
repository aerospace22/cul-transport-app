import React from "react";
import moment from "moment";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { View, Text, ScrollView, TextInput, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { StackNavigationProp } from "@react-navigation/stack";
import { BusRoutesService } from "@/services/bus-routes.service";
import type { TStackParamsList } from "@/types/navigation";

type TScreenProps = {
  navigation: StackNavigationProp<TStackParamsList, "HOME_SCREEN">;
};

export const HomeScreen: React.FC<TScreenProps> = (props) => {
  const [user, setUser] = React.useState<any>(null);
  const [busRoutes, setBusRoutes] = React.useState<any>([]);
  const [datetime, setDatetime] = React.useState("");

  const getUserData = async () => {
    const data = await AsyncStorage.getItem("user");
    setUser(JSON.parse(data!));
  };

  const getBusRoutes = async () => {
    BusRoutesService.getBusRoutesList().then((data) => setBusRoutes(data));
  };

  const handleLogout = () => {
    AsyncStorage.clear().then(() => props.navigation.navigate("LOGIN_SCREEN"));
  };

  React.useEffect(() => {
    getUserData();
    getBusRoutes();

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
          <View className="flex flex-row gap-x-3 absolute top-2 right-2">
            <AntDesign name="bells" size={20} color="black" />
            <Pressable onPress={handleLogout}>
              <AntDesign name="logout" size={20} color="black" />
            </Pressable>
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
          <View className="bg-white px-2 pb-4" style={{ zIndex: 999 }}>
            <TextInput className="w-full h-[50px] text-xs border border-gray-700 rounded px-2" placeholder="Search Destination" />
            <Text className="text-xs font-bold pt-4">Available Bus Routes:</Text>
          </View>
          <ScrollView showsVerticalScrollIndicator={false} className="flex flex-col gap-y-4 pb-[80px]">
            {busRoutes.length ? (
              busRoutes.map((route: any, index: number) => (
                <View key={`bus-route-${index}`} className="w-full h-[130px] bg-slate-50 border border-gray-300 rounded-lg p-3">
                  <View className="flex flex-row justify-between">
                    <View>
                      <View className="mb-2">
                        <Text className="text-[10px] text-gray-600">FROM</Text>
                        <Text className="text-xs text-gray-800 font-bold">{route.routeFrom}</Text>
                      </View>
                      <View className="mb-2">
                        <Text className="text-[10px] text-gray-600">TO</Text>
                        <Text className="text-xs text-gray-800 font-bold">{route.routeTo}</Text>
                      </View>
                      <View className="mb-2">
                        <Pressable className="w-[150px] bg-blue-600 rounded-md items-center py-2 px-3">
                          <Text className="text-xs text-white font-bold">BOOK TICKETS</Text>
                        </Pressable>
                      </View>
                    </View>
                    <View>
                      <View className="mb-2">
                        <Text className="text-[10px] text-gray-600">DEPARTURE DATETIME</Text>
                        <Text className="text-xs text-gray-800 font-bold">
                          {route.departureDate} {route.departureTime}
                        </Text>
                      </View>
                      <View className="mb-2">
                        <Text className="text-[10px] text-gray-600">ARRIVAL DATETIME</Text>
                        <Text className="text-xs text-gray-800 font-bold">
                          {route.arrivalDate} {route.arrivalTime}
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              ))
            ) : (
              <View className="h-[200px] flex-1 justify-center items-center">
                <Text className="text-xs text-gray-500">No routes posted at the moment</Text>
              </View>
            )}
          </ScrollView>
        </View>
      </View>
    </View>
  );
};
