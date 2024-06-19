import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const useAuthHook = () => {
  React.useEffect(() => {}, []);

  return {
    isAuthenticated: false,
    authUser: null,
  };
};
