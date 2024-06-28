import React from "react";
import { View, Text, Image } from "react-native";
import { ImageAssets } from "@/assets/index";

export const EmptyData: React.FC = () => {
  return (
    <View className="w-full bg-slate-100 border border-gray-200 rounded-lg flex flex-col justify-center items-center py-4 my-2">
      <Image
        source={ImageAssets.emptyData}
        resizeMethod="resize"
        resizeMode="contain"
        className="h-16 w-16"
      />
      <Text className="text-xs text-gray-500 text-center mt-2">No data available</Text>
    </View>
  );
};
