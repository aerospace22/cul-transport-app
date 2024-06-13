import httpClient from "@/api/index";
import { Alert } from "react-native";

export const AuthService = {
  login: async function (credentials: any) {
    //
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
