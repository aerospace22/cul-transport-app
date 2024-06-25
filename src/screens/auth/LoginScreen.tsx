import React from "react";
import { ScrollView } from "react-native";
import { BaseLayout } from "@/layouts";
import { LoginForm } from "@/components/domains";

export const LoginScreen = () => {
  return (
    <BaseLayout headerTitle="Log In" hasHeader>
      <ScrollView showsHorizontalScrollIndicator={false} className="flex-1 px-5">
        <LoginForm />
      </ScrollView>
    </BaseLayout>
  );
};
