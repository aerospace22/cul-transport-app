import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Pressable } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { PageHeader } from "@/components/shared";

export const BottomNav: React.FC<{}> = (props) => {
  const ICON_COLOR = "#222";
  const navigation = useNavigation();

  const handleRedirect = (screenName: string) => {
    // @ts-ignore
    navigation.navigate(screenName);
  };

  return (
    <View className="w-full h-[60px] flex flex-row justify-between items-center bg-slate-100 border-t-2 border-gray-100 px-10 fixed bottom-0">
      <Pressable onPress={() => handleRedirect(`HOME_SCREEN`)}>
        <View className="flex flex-col items-center gap-1">
          <Feather name="home" size={18} color={ICON_COLOR} />
          <Text className="text-xs">Home</Text>
        </View>
      </Pressable>
      <Pressable onPress={() => handleRedirect("CUSTOMER_HOME_SCREEN")}>
        <View className="flex flex-col items-center gap-1">
          <Ionicons name="ticket-outline" size={18} color={ICON_COLOR} />
          <Text className="text-xs">Tickets</Text>
        </View>
      </Pressable>
      <Pressable onPress={() => handleRedirect("CUSTOMER_HOME_SCREEN")}>
        <View className="flex flex-col items-center gap-1">
          <Feather name="map-pin" size={18} color={ICON_COLOR} />
          <Text className="text-xs">Terminals</Text>
        </View>
      </Pressable>
      <Pressable onPress={() => handleRedirect("CUSTOMER_HOME_SCREEN")}>
        <View className="flex flex-col items-center gap-1">
          <Feather name="user" size={18} color={ICON_COLOR} />
          <Text className="text-xs">Account</Text>
        </View>
      </Pressable>
    </View>
  );
};

export const BaseLayout: React.FC<{
  children: React.ReactNode;
  hasHeader?: boolean;
  headerTitle?: string;
}> = (props) => {
  return (
    <View className="flex-1 relative">
      {props.hasHeader && props.headerTitle ? (
        <PageHeader title={props.headerTitle} />
      ) : null}

      <View className="flex-1">{props.children}</View>

      <BottomNav />
    </View>
  );
};
