import httpClient from "@/api/index";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";

export const AuthService = {
  login: async function (credentials: any) {
    return await httpClient
      .post("/auth/login", credentials)
      .then(async (response) => {
        console.log(response.data);

        await AsyncStorage.setItem("user", JSON.stringify(response.data.user));
        await AsyncStorage.setItem("token", response.data.accessToken);

        return true;
      })
      .catch((error) => {
        console.log(error.response.data);

        Alert.alert("Invalid credentials");
      });
  },

  signup: async function (data: any) {
    return await httpClient
      .post("/auth/account/signup", data)
      .then((response) => {
        console.log(response.data);

        Alert.alert("Account created");

        return true;
      })
      .catch((error) => {
        console.log(error.response.data);

        Alert.alert("Failed to create account");
      });
  },
};
