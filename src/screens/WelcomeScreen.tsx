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

  const goToSignup = () => {
    props.navigation.navigate("LOGIN_SCREEN");
  };

  return (
    <View className="flex-1 justify-between items-center bg-slate-50">
      <Image source={ImageAssets.brandLogo} className="w-[160px] h-[160px] mt-[80px]" />

      <View className="flex-1 justify-end px-4">
        <View className="flex flex-row gap-x-2">
          <Pressable className="flex basis-1/2 border bg-red-700 border-red-700 rounded py-3 px-2" onPress={goToLogin}>
            <Text className="self-center text-white">Log In</Text>
          </Pressable>
          <Pressable className="flex basis-1/2 border border-red-700 rounded py-3 px-2" onPress={goToSignup}>
            <Text className="self-center">Sign Up</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};
