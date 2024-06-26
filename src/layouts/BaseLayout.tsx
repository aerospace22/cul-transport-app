import React from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { View } from "react-native";
import { PageHeader } from "@/components/shared";
import { useAuthHook } from "@/hooks";
import { Toast } from "react-native-toast-alert";

export const BaseLayout: React.FC<{
  headerTitle?: string;
  hasHeader?: boolean;
  hideBack?: boolean;
  authGuard?: boolean;
  children?: React.ReactNode;
}> = (props) => {
  const { isAuthenticated } = useAuthHook();
  const { navigate } = useNavigation();

  React.useEffect(() => {
    console.log("baselayout-isAuthenticated", isAuthenticated);

    if (props.authGuard) {
      if (!isAuthenticated) {
        Toast.error("You must login");

        // @ts-ignore
        navigate("LOGIN_SCREEN");
      }
    }
  }, []);

  return (
    <SafeAreaProvider>
      <SafeAreaView edges={["top"]} className="bg-red-700 border-0" />
      <SafeAreaView edges={["left", "right", "bottom"]} className="flex-1 bg-white">
        {props.hasHeader && props.headerTitle ? (
          <PageHeader title={props.headerTitle} hideBack={props.hideBack} />
        ) : null}

        <View className="flex-1 bg-slate-50">{props.children}</View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};
