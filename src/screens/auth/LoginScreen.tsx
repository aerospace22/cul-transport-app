import React from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { ScrollView } from "react-native";
import { BaseLayout } from "@/layouts";
import { LoginForm } from "@/components/domains";
import { useAuthHook } from "@/hooks";
import type { StackParamsList } from "@/types/navigation";

type Props = {
  navigation: StackNavigationProp<StackParamsList, "LOGIN_SCREEN">;
};

export const LoginScreen: React.FC<Props> = (props) => {
  const { isAuthenticated } = useAuthHook();

  return (
    <BaseLayout headerTitle="Log In" hasHeader>
      <ScrollView showsHorizontalScrollIndicator={false} className="flex-1 px-5">
        <LoginForm />
      </ScrollView>
    </BaseLayout>
  );
};
