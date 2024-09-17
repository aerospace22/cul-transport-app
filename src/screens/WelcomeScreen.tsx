import React from "react";
import { View, Text, Pressable, Image } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import type { TStackParamsList } from "@/types/navigation";

type TScreenProps = {
  navigation: StackNavigationProp<TStackParamsList, "WELCOME_SCREEN">;
};

export const WelcomeScreen: React.FC<TScreenProps> = (props) => {
  const goToLogin = () => {
    props.navigation.navigate("LOGIN_SCREEN");
  };

  const goToSignup = () => {
    props.navigation.navigate("SIGNUP_SCREEN");
  };

  return (
    <View className="flex-1 justify-center items-center bg-slate-50">
      {/* <Image source={ImageAssets.brandLogo} className="w-[230px] h-[230px] mt-[80px]" /> */}
      <Text className="text-2xl text-gray-900 font-bold mt-[30px]">
        PBAR Bus Booking App
      </Text>

      <View className="w-3/4 flex flex-col gap-y-3 mt-5">
        <Pressable
          className="bg-red-700 border-red-700 rounded py-4 px-2"
          onPress={goToLogin}
        >
          <Text className="self-center text-white">Log In</Text>
        </Pressable>
        <Pressable
          className="border border-red-700 rounded py-4 px-2"
          onPress={goToSignup}
        >
          <Text className="self-center">Sign Up</Text>
        </Pressable>
      </View>
    </View>
  );
};
