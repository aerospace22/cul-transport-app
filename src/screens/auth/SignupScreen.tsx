import React from "react";
import { View, Text, Image, Pressable, ScrollView } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { FontAwesome } from "@expo/vector-icons";
import { ImageAssets } from "@/assets/index";
import { BaseButton } from "@/components/base";
import { SignupForm } from "@/components/domains";
import type { TStackParamsList } from "@/types/navigation";

type TScreenProps = {
  navigation: StackNavigationProp<TStackParamsList, "SIGNUP_SCREEN">;
};

export const SignupScreen: React.FC<TScreenProps> = (props) => {
  const goToLogin = () => {
    props.navigation.navigate("LOGIN_SCREEN");
  };

  return (
    <View className="flex-1 bg-slate-50 px-5 relative">
      <Pressable className="absolute top-4 left-5" onPress={() => props.navigation.goBack()}>
        <FontAwesome name="long-arrow-left" size={24} color="black" />
      </Pressable>

      <ScrollView className="flex-1">
        <Image source={ImageAssets.brandLogo} className="w-[110px] h-[110px] mt-[80px] mb-10 mx-auto" />
        <View className="mb-5">
          <Text className="text-2xl font-semibold mb-2">Sign Up</Text>
          <Text className="text-xs text-gray-700">Create your account and start your travels with us!</Text>
        </View>
        <SignupForm />
        <BaseButton title="Go to log in" classNames="bg-transparent" labelClassnames="text-blue-800 font-bold" onPress={goToLogin} />
      </ScrollView>
    </View>
  );
};
