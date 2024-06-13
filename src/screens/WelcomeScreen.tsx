import React from "react";
import { View, Text, Pressable, Image } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { ImageAssets } from "@/assets/index";
import type { TStackParamsList } from "@/types/navigation";

type TScreenProps = {
  navigation: StackNavigationProp<TStackParamsList, "WELCOME_SCREEN">;
};

export const WelcomeScreen: React.FC<TScreenProps> = (props) => {
  const goToLogin = () => {
    props.navigation.navigate("LOGIN_SCREEN");
  };

  const goToCreateAccount = () => {
    props.navigation.navigate("SIGNUP_SCREEN");
  };

  return (
    <View className="flex-1 items-center justify-between bg-yellow-300">
      <Image source={ImageAssets.brandLogo} resizeMethod="resize" resizeMode="contain" className="w-[250px] h-[250px] mt-[40px]" />

      <View className="w-full flex flex-col gap-y-3 p-8">
        <Pressable className="w-full h-[50px] bg-red-700 justify-center items-center rounded-xl border border-red-700" onPress={goToLogin}>
          <Text className="text-white font-bold">LOG IN</Text>
        </Pressable>
        <Pressable className="w-full h-[50px] justify-center items-center rounded-xl border border-gray-800" onPress={goToCreateAccount}>
          <Text className="font-bold">CREATE ACCOUNT</Text>
        </Pressable>
      </View>
    </View>
  );
};
