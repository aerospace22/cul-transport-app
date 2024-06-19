import React from "react";
import { Pressable, Text, type PressableProps } from "react-native";

export const BaseButton: React.FC<{ classNames?: string; title: string } & PressableProps> = (props) => {
  const classStr = `${props.classNames} w-full h-[50px] bg-red-700 rounded-md justify-center`;

  return (
    <Pressable {...props} className={classStr}>
      <Text className="text-white font-medium self-center uppercase">{props.title}</Text>
    </Pressable>
  );
};
