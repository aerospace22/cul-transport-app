import React from "react";
import { ScrollView } from "react-native";
import { BaseLayout } from "@/layouts";
import { RequestOtpForm } from "@/components/domains";

export const RequestOtpScreen = () => {
  return (
    <BaseLayout headerTitle="Reset Password" hasHeader>
      <ScrollView showsHorizontalScrollIndicator={false} className="flex-1 px-5">
        <RequestOtpForm />
      </ScrollView>
    </BaseLayout>
  );
};
