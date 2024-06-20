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
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { navigate } = useNavigation();

  const goToHome = () => {
    // @ts-ignore
    navigate("HOME_SCREEN");
  };

  const handleLogin = handleSubmit(async (formData) => {
    console.log(formData);
  });

  return (
    <View className="flex flex-col gap-y-4">
      <View className="flex flex-col gap-y-1">
        <Controller
          name="email"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <BaseInput
              placeholder="E-mail Address"
              value={field.value}
              onChangeText={field.onChange}
              onBlur={field.onBlur}
            />
          )}
        />
        {errors.email && <Text className="text-xs text-red-700">Field is required</Text>}
      </View>
      <View className="flex flex-col gap-y-1">
        <Controller
          name="password"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <BaseInput
              secureTextEntry={true}
              placeholder="Password"
              value={field.value}
              onChangeText={field.onChange}
              onBlur={field.onBlur}
            />
          )}
        />
        {errors.password && (
          <Text className="text-xs text-red-700">Field is required</Text>
        )}
      </View>

      <View className="flex flex-row justify-between items-center">
        <View className="flex flex-row gap-x-2 items-center">
          <Checkbox className="border border-gray-400 rounded h-[15px] w-[15px]" />
          <Text className="text-[10px] text-gray-600 font-medium">Remember Me</Text>
        </View>

        <Pressable>
          <Text className="text-[10px] text-blue-700 font-bold">
            Forgot your password?
          </Text>
        </Pressable>
      </View>

      <BaseButton title="Log In" onPress={handleLogin} />
    </View>
  );
};
