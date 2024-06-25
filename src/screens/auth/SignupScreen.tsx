import React from "react";
import { View, ScrollView } from "react-native";
import { BaseLayout } from "@/layouts";
import { SignupForm } from "@/components/domains";

export const SignupScreen = () => {
  return (
    <BaseLayout headerTitle="Create Account" hasHeader>
      <ScrollView showsHorizontalScrollIndicator={false} className="flex-1 px-5">
        <SignupForm />
      </ScrollView>
    </BaseLayout>
  );
};
