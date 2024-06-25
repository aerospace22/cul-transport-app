import React from "react";
import { ScrollView } from "react-native";
import { BaseLayout } from "@/layouts";
import { VerifyOtpForm } from "@/components/domains";

export const VerifyOtpScreen = () => {
  return (
    <BaseLayout headerTitle="Reset Password" hasHeader>
      <ScrollView showsHorizontalScrollIndicator={false} className="flex-1 px-5">
        <VerifyOtpForm />
      </ScrollView>
    </BaseLayout>
  );
};
