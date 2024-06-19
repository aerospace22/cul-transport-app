import React from "react";
import Checkbox from "expo-checkbox";
import { useNavigation } from "@react-navigation/native";
import { useForm, Controller } from "react-hook-form";
import { View, Text, Pressable } from "react-native";
import { Toast } from "react-native-toast-alert";
import { BaseInput, BaseButton } from "@/components/base";

export const LoginForm: React.FC = () => {
  const {
    control,
    formState: { errors },
  } = useForm();
  const { navigate } = useNavigation();

  const goToHome = () => {
    // @ts-ignore
    navigate("HOME_SCREEN");
  };

  const handleLogin = () => {
    Toast.warning("Connecting to server");
  };

  return (
    <View className="flex flex-col gap-y-4">
      <BaseInput placeholder="E-mail address" />
      <BaseInput placeholder="Password" secureTextEntry />

      <View className="flex flex-row justify-between items-center">
        <View className="flex flex-row gap-x-2 items-center">
          <Checkbox className="border border-gray-400 rounded h-[15px] w-[15px]" />
          <Text className="text-[10px] text-gray-600 font-medium">Remember Me</Text>
        </View>

        <Pressable>
          <Text className="text-[10px] text-blue-700 font-bold">Forgot your password?</Text>
        </Pressable>
      </View>

      <BaseButton title="Log In" onPress={goToHome} />
    </View>
  );
};
