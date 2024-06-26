import React from "react";
import { View, Text } from "react-native";

export const UserAvatar: React.FC<{
  userFullname: string;
}> = (props) => {
  const getNameInitials = (name: string) => {
    return name;
  };

  return (
    <View className="w-[45px] h-[45px] bg-white rounded-full">
      <Text>{getNameInitials(props.userFullname)}</Text>
    </View>
  );
};
