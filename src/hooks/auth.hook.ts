import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const useAuthHook = () => {
  const [authData, setAuthData] = React.useState<any>({
    user: null,
    accessToken: null,
  });

  const retrieveData = async () => {
    const user = await AsyncStorage.getItem("authUser");
    const accessToken = await AsyncStorage.getItem("authToken");

    // @ts-ignore
    setAuthData({ user: JSON.parse(user), accessToken });
  };

  React.useEffect(() => {
    retrieveData();
  }, []);

  return {
    isAuthenticated: false,
    authUser: authData.user,
    authToken: authData.accessToken,
  };
};
