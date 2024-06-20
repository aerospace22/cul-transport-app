import httpClient from "@/api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Toast } from "react-native-toast-alert";
import { NavigationService } from "./navigation.service";

export const AuthService = {
  signupAccount: async function (
    payload: any,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) {
    return await httpClient
      .post("/auth/account/signup", payload)
      .then((response) => {
        Toast.success("Account created, please login");

        NavigationService.navigate("LOGIN_SCREEN");
      })
      .catch((error) => {
        console.log("signupAccount.error", error.response?.data);
        if (error.response?.data.message === "USER_ALREADY_EXIST") {
          return Toast.error("E-mail address already in use");
        }

        Toast.error("Failed to create account");
      })
      .finally(() => setLoading(false));
  },

  loginAccount: async function (
    payload: any,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) {
    return await httpClient
      .post("/auth/login", payload)
      .then(async (response) => {
        await AsyncStorage.setItem("isAuthenticated", "1");
        await AsyncStorage.setItem("authToken", response.data.accessToken);
        await AsyncStorage.setItem("authUser", JSON.stringify(response.data.user));

        Toast.success("Welcome to CUL Transport App");
        NavigationService.navigate("HOME_SCREEN");
      })
      .catch((error) => {
        console.log("loginAccount.error", payload, error);
        Toast.error("Invalid credentials provided");
      })
      .finally(() => setLoading(false));
  },
};
