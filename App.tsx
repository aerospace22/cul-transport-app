import React from "react";
import * as SplashScreen from "expo-splash-screen";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import ToastManager from "react-native-toast-alert";
import { AppNavigation } from "@/navigation";

SplashScreen.hideAsync();

const App: React.FC = () => {
  return (
    <GestureHandlerRootView>
      <ToastManager />
      <SafeAreaProvider>
        <SafeAreaView className="bg-slate-50 flex-1">
          <AppNavigation />
        </SafeAreaView>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

export default App;
