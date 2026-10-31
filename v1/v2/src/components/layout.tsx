import React from "react";
import { Linking, Platform, ScrollView, View, useWindowDimensions } from "react-native";
import { ThemeScope } from "@wireservers/react-natives";
import { themes, type VariantKey } from "../themes";
import { VariantSwitcher } from "./VariantSwitcher";

export type Breakpoint = "sm" | "md" | "lg" | "xl";

/**
 * Static export renders at width 0 (phone layout). Report that same width
 * until after mount so hydration matches the server HTML, then switch to the
 * real width — React won't patch className-only mismatches during hydration.
 */
export function useBreakpoint() {
  const { width: windowWidth } = useWindowDimensions();
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);
  const width = mounted ? windowWidth : 0;
  const bp: Breakpoint = width >= 1280 ? "xl" : width >= 1024 ? "lg" : width >= 768 ? "md" : "sm";
  return { width, bp, isMobile: bp === "sm", isDesktop: bp === "lg" || bp === "xl" };
}

/** Opens mailto/tel in place and http(s)/files in a new tab on web. */
export function openUrl(url: string) {
  if (Platform.OS === "web" && typeof window !== "undefined") {
    if (/^(mailto|tel):/.test(url)) {
      window.location.href = url;
    } else {
      window.open(encodeURI(url), "_blank", "noopener,noreferrer");
    }
    return;
  }
  Linking.openURL(url);
}

export function scrollToSection(id: string) {
  if (Platform.OS === "web" && typeof document !== "undefined") {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

/** Anchorable section wrapper — `id` becomes the DOM id on web. */
export function Anchor({ id, children, className }: { id: string; children: React.ReactNode; className?: string }) {
  return (
    <View nativeID={id} className={className}>
      {children}
    </View>
  );
}

/** Root for every variant: theme tokens, page background, scroll, switcher. */
export function PageShell({
  variant,
  children,
  className,
  scroll = true,
}: {
  variant: VariantKey;
  children: React.ReactNode;
  className?: string;
  scroll?: boolean;
}) {
  return (
    <ThemeScope vars={themes[variant]} style={{ flex: 1 }}>
      <View className={`flex-1 bg-background-0 ${className ?? ""}`}>
        {scroll ? (
          <ScrollView contentContainerClassName="min-h-full">{children}</ScrollView>
        ) : (
          children
        )}
        <VariantSwitcher current={variant} />
      </View>
    </ThemeScope>
  );
}
