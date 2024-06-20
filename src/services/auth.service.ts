import httpClient from "@/api";
import { Toast } from "react-native-toast-alert";

export const AuthService = {
  signupAccount: async function (payload: any) {
    return await httpClient
      .post("/auth/account/signup", payload)
      .then((response) => {
        Toast.success("Account created, please login");
      })
      .catch((error) => {
        console.log("signupAccount.error", error.response?.data);
        Toast.error("Failed to create account");
      });
  },
};
