import React from "react";
import { LinearGradient } from "expo-linear-gradient";

export const WelcomeLayout: React.FC<{
  children: React.ReactNode;
}> = (props) => {
  return (
    <LinearGradient className="flex-1" colors={["#e32f22", "#d94d43", "#f25549"]}>
      {props.children}
    </LinearGradient>
  );
};
