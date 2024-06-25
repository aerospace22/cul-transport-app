import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { PageHeader } from "@/components/shared";

export const BaseLayout: React.FC<{
  headerTitle?: string;
  hasHeader?: boolean;
  children?: React.ReactNode;
}> = (props) => {
  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1">
        {props.hasHeader && props.headerTitle ? (
          <PageHeader title={props.headerTitle} />
        ) : null}

        {props.children}
      </SafeAreaView>
    </SafeAreaProvider>
  );
};
