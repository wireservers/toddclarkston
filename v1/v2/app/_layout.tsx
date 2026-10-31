import "../global.css";

import React from "react";
import { Stack } from "expo-router";
import Head from "expo-router/head";
import { StatusBar } from "expo-status-bar";
import { ToastProvider } from "@wireservers/react-natives";

export default function RootLayout() {
  return (
    <ToastProvider>
      <Head>
        <title>Todd Clarkston — Lead Software Architect</title>
      </Head>
      <StatusBar style="auto" />
      <Stack screenOptions={{ headerShown: false, animation: "fade" }} />
    </ToastProvider>
  );
}
