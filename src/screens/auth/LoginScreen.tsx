import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { ImageAssets } from "@/assets/index";
import { BaseButton } from "@/components/base";
import { LoginForm } from "@/components/domains";
import type { TStackParamsList } from "@/types/navigation";

type TScreenProps = {
  navigation: StackNavigationProp<TStackParamsList, "LOGIN_SCREEN">;
};

export const LoginScreen: React.FC<TScreenProps> = (props) => {
  const goToSignup = () => {
    props.navigation.navigate("SIGNUP_SCREEN");
  };

  return (
    <View className="flex-1 bg-slate-50 px-5">
      <Image source={ImageAssets.brandLogo} className="w-[130px] h-[130px] mt-[80px] mb-10 mx-auto" />
      <View className="mb-5">
        <Text className="text-2xl font-semibold mb-2">Log In</Text>
        <Text className="text-xs text-gray-700">Book your trip with us!</Text>
      </View>
      <LoginForm />
      <View className="w-full flex items-center border-t-2 border-gray-200 relative my-6">
        <Text className="text-sm text-gray-700 bg-slate-50 p-1 px-3 absolute -top-4">Or</Text>
      </View>
      <BaseButton title="Create an Account" classNames="bg-transparent" labelClassnames="text-blue-800 font-bold" onPress={goToSignup} />
    </View>
  );
};
