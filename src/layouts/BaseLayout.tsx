import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export const BaseLayout: React.FC<{
  isWelcome: boolean;
}> = (props) => {
  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1"></SafeAreaView>
    </SafeAreaProvider>
  );
};
