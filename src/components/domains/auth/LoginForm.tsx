import React from "react";
import Checkbox from "expo-checkbox";
import { useForm, Controller } from "react-hook-form";
import { View, Text, Pressable } from "react-native";
import { BaseInput, BaseButton } from "@/components/base";
import { AuthService } from "@/services";

export const LoginForm: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = React.useState<boolean>(false);

  const handleLogin = handleSubmit(async (formData) => {
    setLoading(true);

    return AuthService.loginAccount(formData, setLoading);
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

      <BaseButton
        title={loading ? "..." : "LOG IN"}
        onPress={handleLogin}
        classNames={loading ? "bg-red-400" : ""}
        disabled={loading}
      />
    </View>
  );
};
