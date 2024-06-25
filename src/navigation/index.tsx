import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationService } from "@/services";
import type { StackParamsList } from "@/types/navigation";

import {
  WelcomeScreen,
  SignupScreen,
  LoginScreen,
  RequestOtpScreen,
  VerifyOtpScreen,
} from "@/screens";

const { Navigator, Screen } = createStackNavigator<StackParamsList>();

const navigationOpts = {
  headerShown: false,
};

export const AppNavigation: React.FC = () => {
  return (
    <NavigationContainer ref={NavigationService.navigationRef}>
      <Navigator screenOptions={navigationOpts} initialRouteName="WELCOME_SCREEN">
        <Screen name="WELCOME_SCREEN" component={WelcomeScreen} />
        <Screen name="SIGNUP_SCREEN" component={SignupScreen} />
        <Screen name="LOGIN_SCREEN" component={LoginScreen} />
        <Screen name="REQUEST_OTP_SCREEN" component={RequestOtpScreen} />
        <Screen name="VERIFY_OTP_SCREEN" component={VerifyOtpScreen} />
      </Navigator>
    </NavigationContainer>
  );
};
