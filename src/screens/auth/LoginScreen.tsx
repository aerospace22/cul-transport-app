import React from "react";
import { View, Text, TextInput, Pressable, Image } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { ImageAssets } from "@/assets/index";
import type { TStackParamsList } from "@/types/navigation";

type TScreenProps = {
  navigation: StackNavigationProp<TStackParamsList, "HOME_SCREEN">;
};

export const LoginScreen: React.FC<TScreenProps> = (props) => {
  return (
    <View className="flex-1 justify-center bg-yellow-300 px-10">
      <View className="w-full items-center mb-10">
        <Image source={ImageAssets.brandLogo} resizeMethod="resize" resizeMode="contain" className="w-[120px] h-[120px] mt-[40px]" />
      </View>

      <Text className="text-2xl font-bold mb-2">Log In</Text>
      <Text className="text-xs text-gray-800">Find routes - book seemlessly - pay hassle-free - enjoy your travel</Text>

      <View className="w-full flex flex-col gap-y-5 mt-4">
        <TextInput className="w-full h-[50px] text-sm border border-gray-700 rounded-xl pb-2 px-4" placeholder="Enter e-mail" />
        <TextInput className="w-full h-[50px] text-sm border border-gray-700 rounded-xl pb-2 px-4" placeholder="Enter password" />
        <Pressable className="w-full h-[50px] bg-red-700 justify-center items-center rounded-xl">
          <Text className="text-md text-white font-bold">LOG IN</Text>
        </Pressable>
        <Pressable
          className="w-full h-[50px] border border-gray-700 justify-center items-center rounded-xl"
          onPress={() => props.navigation.navigate("SIGNUP_SCREEN")}
        >
          <Text className="text-md text-black font-bold">CREATE ACCOUNT</Text>
        </Pressable>
      </View>
    </View>
  );
};
