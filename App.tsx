import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Text } from "react-native";
import ToastManager from "react-native-toast-alert";
import { AppNavigation } from "@/navigation";

const App: React.FC = () => {
  return (
    <GestureHandlerRootView>
      <ToastManager />
      <SafeAreaProvider>
        <SafeAreaView className="bg-slate-50 flex-1 relative">
          <AppNavigation />
          <Text className="text-[10px] text-black absolute left-3 bottom-10">App Version 1.0.0.1 (BETA)</Text>
        </SafeAreaView>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

export default App;
