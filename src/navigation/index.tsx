import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import type { TStackParamsList } from "@/types/navigation";

import { WelcomeScreen, LoginScreen, SignupScreen } from "@/screens";

const { Navigator, Screen } = createStackNavigator<TStackParamsList>();

const navigationOpts = {
  headerShown: false,
};

export const AppNavigation: React.FC = () => {
  return (
    <NavigationContainer>
      <Navigator screenOptions={navigationOpts} initialRouteName="WELCOME_SCREEN">
        <Screen name="WELCOME_SCREEN" component={WelcomeScreen} />
        <Screen name="LOGIN_SCREEN" component={LoginScreen} />
        <Screen name="SIGNUP_SCREEN" component={SignupScreen} />
      </Navigator>
    </NavigationContainer>
  );
};
