import React from "react";
import { TextInput, type TextInputProps } from "react-native";

export const BaseInput: React.FC<{ classNames?: string } & TextInputProps> = (props) => {
  const classStr = `${props.classNames} w-full h-[50px] bg-slate-100 text-xs rounded-lg border border-gray-200 px-3`;

  return (
    <TextInput
      {...props}
      autoCapitalize="none"
      placeholderTextColor="#999"
      className={classStr}
    />
  );
};
