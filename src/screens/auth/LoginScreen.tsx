import React from "react";
import { View, Text, Image } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { ImageAssets } from "@/assets/index";
import { LoginForm } from "@/components/domains";
import type { TStackParamsList } from "@/types/navigation";

type TScreenProps = {
  navigation: StackNavigationProp<TStackParamsList, "LOGIN_SCREEN">;
};

export const LoginScreen: React.FC<TScreenProps> = (props) => {
  return (
    <View className="flex-1 bg-slate-50 px-5">
      <Image source={ImageAssets.brandLogo} className="w-[130px] h-[130px] mt-[80px] mb-10 mx-auto" />
      <View className="mb-5">
        <Text className="text-2xl font-semibold mb-2">Log In</Text>
        <Text className="text-xs text-gray-700">Book your trip with us and enjoy the travel</Text>
      </View>
      <LoginForm />
    </View>
  );
};
