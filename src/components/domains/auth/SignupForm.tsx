import React from "react";
import Checkbox from "expo-checkbox";
import { useForm, Controller } from "react-hook-form";
import { View, Text, Pressable } from "react-native";
import { BaseInput, BaseButton } from "@/components/base";

export const SignupForm: React.FC = () => {
  const {
    control,
    formState: { errors },
  } = useForm();

  return (
    <View className="flex flex-col gap-y-4">
      <BaseInput placeholder="Full Name" />
      <BaseInput placeholder="Contact No." keyboardType="phone-pad" secureTextEntry />
      <BaseInput placeholder="E-mail Address" />
      <BaseInput placeholder="Password" />
      <BaseInput placeholder="Confirm Password" />
      <View className="flex flex-row gap-x-2 items-center">
        <Checkbox className="border border-gray-400 rounded h-[15px] w-[15px]" />
        <Text className="text-[10px] text-gray-600 font-medium">
          By checking, I agree to the <Text className="text-blue-700 underline">policy</Text> and{" "}
          <Text className="text-blue-700 underline">terms & condition</Text>
        </Text>
      </View>
      <BaseButton title="Sign Up" />
    </View>
  );
};
