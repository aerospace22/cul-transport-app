import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { View, Text, TextInput, Pressable, Image, Alert } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { ImageAssets } from "@/assets/index";
import { AuthService } from "@/services/auth.service";
import type { TStackParamsList } from "@/types/navigation";

type TScreenProps = {
  navigation: StackNavigationProp<TStackParamsList, "HOME_SCREEN">;
};

export const LoginScreen: React.FC<TScreenProps> = (props) => {
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
  });

  const handleLogin = async () => {
    if (Object.values(formData).filter((val) => !val).length > 0) {
      return Alert.alert("Please complete all fields");
    }

    if (await AuthService.login({ ...formData, email: formData.email.toLowerCase() })) {
      props.navigation.navigate("HOME_SCREEN");
    }
  };

  const setValue = (key: string, value: string) => {
    setFormData({
      ...formData,
      [key]: value,
    });
  };

  React.useEffect(() => {
    (async () => {
      if ((await AsyncStorage.getItem("user")) || (await AsyncStorage.getItem("token"))) {
        props.navigation.navigate("HOME_SCREEN");
      }
    })();
  }, []);

  return (
    <View className="flex-1 justify-center bg-yellow-300 px-10">
      <View className="w-full items-center mb-10">
        <Image source={ImageAssets.brandLogo} resizeMethod="resize" resizeMode="contain" className="w-[120px] h-[120px] mt-[40px]" />
      </View>

      <Text className="text-2xl font-bold mb-2">Log In</Text>
      <Text className="text-xs text-gray-800">Find routes - book seemlessly - pay hassle-free - enjoy your travel</Text>

      <View className="w-full flex flex-col gap-y-5 mt-4">
        <TextInput
          className="w-full h-[50px] text-sm border border-gray-700 rounded-xl px-4"
          onChangeText={(value) => setValue("email", value)}
          placeholder="Enter e-mail"
        />
        <TextInput
          className="w-full h-[50px] text-sm border border-gray-700 rounded-xl px-4"
          onChangeText={(value) => setValue("password", value)}
          placeholder="Enter password"
        />
        <Pressable className="w-full h-[50px] bg-red-700 justify-center items-center rounded-xl" onPress={handleLogin}>
          <Text className="text-md text-white font-bold">LOG IN</Text>
        </Pressable>
        <Pressable
          className="w-full h-[50px] border border-gray-700 justify-center items-center rounded-xl"
          onPress={() => props.navigation.navigate("SIGNUP_SCREEN")}
        >
          <Text className="text-md text-black font-bold">CREATE ACCOUNT</Text>
        </Pressable>
      </View>
    </View>
  );
};
