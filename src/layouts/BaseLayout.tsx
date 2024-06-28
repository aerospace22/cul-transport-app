import React from "react";
import { useNavigation, useRoute, NavigationProp } from "@react-navigation/native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { View, Text, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { PageHeader } from "@/components/shared";
import { useAuth } from "@/hooks";
import { Toast } from "react-native-toast-alert";

const BottomNav: React.FC<{ navigate: NavigationProp<any>["navigate"] }> = (props) => {
  const route = useRoute();

  const goToScreen = (screenName: string) => {
    // @ts-ignore
  };

  const NavButton: React.FC<{
    screenName: string;
    icon: string;
  }> = (props) => {
    const getButtonColor = () => {
      const isActive = route.name === props.screenName;

      if (isActive) {
        return {
          iconColor: "lightcoral",
          labelColor: "text-red-400",
        };
      }

      return {
        iconColor: "#777",
        labelColor: "text-gray-500",
      };
    };

    const { iconColor, labelColor } = getButtonColor();

    return (
      <Pressable className="flex flex-col items-center gap-y-2">
        <Ionicons name={props.icon as any} size={24} color={iconColor} />
        <Text className={`text-xs text-center uppercase font-medium ${labelColor}`}>
          Home
        </Text>
      </Pressable>
    );
  };

  const buttons = [
    {
      name: "HOME_SCREEN",
      label: "Home",
      icon: "home-outline",
    },
    {
      name: "TICKETS_SCREEN",
      label: "Tickets",
      icon: "ticket-outline",
    },
    {
      name: "PAYMENT_HISTORY_SCREEN",
      label: "Payments",
      icon: "card-outline",
    },
    {
      name: "MY_ACCOUNT_SCREEN",
      label: "Account",
      icon: "person-outline",
    },
  ];

  return (
    <View
      className="w-full h-[70px] flex flex-row justify-between items-center fixed bottom-0 border-gray-300 px-5"
      style={{ borderTopWidth: 1 }}
    >
      {buttons.map((button) => (
        <NavButton icon={button.icon} screenName={button.name} />
      ))}
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

        <View className="flex-1 bg-slate-50 relative">{props.children}</View>

        {props.hasFooter ? <BottomNav navigate={navigate} /> : null}
      </SafeAreaView>
      <SafeAreaView edges={["bottom"]} className="bg-white" />
    </SafeAreaProvider>
  );
};
