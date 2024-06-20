import httpClient from "@/api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Toast } from "react-native-toast-alert";

export const AuthService = {
  signupAccount: async function (
    payload: any,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) {
    return await httpClient
      .post("/auth/account/signup", payload)
      .then((response) => {
        Toast.success("Account created, please login");
      })
      .catch((error) => {
        console.log("signupAccount.error", error.response?.data);
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
        await AsyncStorage.setItem("authToken", response.data.authToken);
        await AsyncStorage.setItem("authUser", JSON.stringify(response.data.user));

        Toast.success("Welcome to CUL Transport App");
      })
      .catch((error) => {
        console.log("loginAccount.error", error.response?.data);
        Toast.error("Invalid credentials provided");
      })
      .finally(() => setLoading(false));
  },
};
