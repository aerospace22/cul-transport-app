import React from "react";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { View, Text, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { PageHeader } from "@/components/shared";
import { useAuth } from "@/hooks";
import { Toast } from "react-native-toast-alert";

const BottomNav: React.FC<{ navigate: NavigationProp<any>["navigate"] }> = (props) => {
  const iconStyle = { size: 28, color: "#666" };

  const goToScreen = (screenName: string) => {
    // @ts-ignore
  };

  return (
    <View className="w-full h-[70px] flex flex-row justify-between items-center fixed bottom-0 border-t-2 border-gray-100 px-5">
      <Pressable className="flex flex-col gap-y-2">
        <AntDesign name="home" size={iconStyle.size} color={iconStyle.color} />
        <Text className="text-xs text-gray-600">Home</Text>
      </Pressable>
      <Pressable className="flex flex-col gap-y-2">
        <Ionicons name="ticket-outline" size={iconStyle.size} color={iconStyle.color} />
        <Text className="text-xs text-gray-600">Ticket</Text>
      </Pressable>
      <Pressable className="flex flex-col gap-y-2">
        <AntDesign name="home" size={iconStyle.size} color={iconStyle.color} />
        <Text className="text-xs text-gray-600">Home</Text>
      </Pressable>
      <Pressable className="flex flex-col gap-y-2">
        <AntDesign name="user" size={iconStyle.size} color={iconStyle.color} />
        <Text className="text-xs text-gray-600">Home</Text>
      </Pressable>
      <Pressable className="flex flex-col gap-y-2">
        <AntDesign name="user" size={iconStyle.size} color={iconStyle.color} />
        <Text className="text-xs text-gray-600">Account</Text>
      </Pressable>
    </View>
  );
};

export const BaseLayout: React.FC<{
  headerTitle?: string;
  hasHeader?: boolean;
  hasFooter?: boolean;
  hideBack?: boolean;
  authGuard?: boolean;
  children?: React.ReactNode;
}> = (props) => {
  const { isAuthenticated } = useAuth();
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
      <SafeAreaView edges={["top"]} className="bg-red-700" />
      <SafeAreaView edges={["left", "right"]} className="flex-1 bg-white relativ">
        {props.hasHeader && props.headerTitle ? (
          <PageHeader title={props.headerTitle} hideBack={props.hideBack} />
        ) : null}

        <View className="flex-1 bg-slate-50">{props.children}</View>

        {props.hasFooter ? <BottomNav navigate={navigate} /> : null}
      </SafeAreaView>
      <SafeAreaView edges={["bottom"]} className="bg-white" />
    </SafeAreaProvider>
  );
};
