import React from "react";
import { LinearGradient } from "expo-linear-gradient";

export const WelcomeScreen: React.FC = () => {
  return (
    <LinearGradient className="flex-1" colors={["#e32f22", "#d94d43"]}></LinearGradient>
  );
};
