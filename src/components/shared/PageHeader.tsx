import React from "react";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import { View, Text, Pressable, StyleSheet } from "react-native";

export const PageHeader: React.FC<{
  title: string;
}> = (props) => {
  const { goBack } = useNavigation();

  const handleGoBack = () => {
    goBack();
  };

  return (
    <View
      className="h-[60px] bg-red-700 flex flex-row justify-center items-center relative px-5"
      style={styles.shadow}
    >
      <Pressable className="absolute left-4 top-5" onPress={handleGoBack}>
        <FontAwesome name="long-arrow-left" size={24} color="white" />
      </Pressable>

      <Text className="text-lg text-white font-bold">{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  shadow: {
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
});
