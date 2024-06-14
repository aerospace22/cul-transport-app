import React from "react";
import { View, Text, TextInput, Pressable, Image, ScrollView, Alert } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { ImageAssets } from "@/assets/index";
import { AuthService } from "@/services/auth.service";
import type { TStackParamsList } from "@/types/navigation";

type TScreenProps = {
  navigation: StackNavigationProp<TStackParamsList, "HOME_SCREEN">;
};

export const SignupScreen: React.FC<TScreenProps> = (props) => {
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    passwordConfirmation: "",
  });

  const handleSignup = async () => {
    if (formData.password !== formData.passwordConfirmation) {
      return Alert.alert("Passwords must match");
    }

    if (Object.values(formData).filter((val) => !val).length > 0) {
      return Alert.alert("Please complete all fields");
    }

    if (await AuthService.signup(formData)) {
      props.navigation.navigate("LOGIN_SCREEN");
    }
  };

  const setValue = (key: string, value: string) => {
    setFormData({
      ...formData,
      [key]: value,
    });
  };

  return (
    <View className="flex-1 justify-center bg-yellow-300 px-10">
      <ScrollView>
        <View className="w-full items-center mb-10">
          <Image source={ImageAssets.brandLogo} resizeMethod="resize" resizeMode="contain" className="w-[120px] h-[120px] mt-[40px]" />
        </View>

        <Text className="text-2xl font-bold mb-2">Create Account</Text>
        <Text className="text-xs text-gray-800">Find routes - book seemlessly - pay hassle-free - enjoy your travel</Text>

        <View className="w-full flex flex-col gap-y-5 mt-4">
          <TextInput
            className="w-full h-[50px] text-sm border border-gray-700 rounded-xl px-4"
            onChangeText={(value) => setValue("firstName", value)}
            placeholder="Enter first name"
            autoCapitalize="none"
          />
          <TextInput
            className="w-full h-[50px] text-sm border border-gray-700 rounded-xl px-4"
            onChangeText={(value) => setValue("lastName", value)}
            placeholder="Enter last name"
            autoCapitalize="none"
          />
          <TextInput
            className="w-full h-[50px] text-sm border border-gray-700 rounded-xl px-4"
            onChangeText={(value) => setValue("email", value)}
            placeholder="Enter e-mail"
            autoCapitalize="none"
          />
          <TextInput
            className="w-full h-[50px] text-sm border border-gray-700 rounded-xl px-4"
            onChangeText={(value) => setValue("password", value)}
            placeholder="Enter password"
            autoCapitalize="none"
          />
          <TextInput
            className="w-full h-[50px] text-sm border border-gray-700 rounded-xl px-4"
            onChangeText={(value) => setValue("passwordConfirmation", value)}
            placeholder="Enter password confirmation"
            autoCapitalize="none"
          />
          <Pressable className="w-full h-[50px] bg-red-700 justify-center items-center rounded-xl" onPress={handleSignup}>
            <Text className="text-md text-white font-bold">CREATE ACCOUNT</Text>
          </Pressable>
          <Pressable
            className="w-full h-[50px] border border-gray-700 justify-center items-center rounded-xl"
            onPress={() => props.navigation.navigate("LOGIN_SCREEN")}
          >
            <Text className="text-md text-black font-bold">GO TO LOGIN</Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
};
