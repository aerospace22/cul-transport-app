import React from "react";
import { View } from "react-native";
import { BaseLayout } from "@/layouts";

export const BusBookingScreen = () => {
  return (
    <BaseLayout headerTitle="Bus Ticket(s) Booking" hasHeader>
      <View className="flex-1 bg-slate-50"></View>
    </BaseLayout>
  );
};
