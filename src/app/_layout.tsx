import "@/unistyles";

import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { AppQueryProvider } from "@/db/providers";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <AppQueryProvider>
        <Stack />
      </AppQueryProvider>
    </SafeAreaProvider>
  );
}
