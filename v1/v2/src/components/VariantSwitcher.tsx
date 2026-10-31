import React from "react";
import { View } from "react-native";
import { router } from "expo-router";
import { SegmentedControl, SegmentedControlItem } from "@wireservers/react-natives";
import type { VariantKey } from "../themes";

export const variants: { key: VariantKey; label: string; name: string; description: string }[] = [
  { key: "executive", label: "Executive", name: "Executive Minimal", description: "Light, serif, generous whitespace — a polished consulting profile." },
  { key: "bold", label: "Bold", name: "Dark Tech", description: "Dark theme, gradient type, headline metrics and a career timeline." },
  { key: "editorial", label: "Editorial", name: "Editorial Two-Column", description: "Sticky profile sidebar with a scrolling, expandable experience timeline." },
  { key: "bento", label: "Bento", name: "Bento Grid", description: "Modern card grid for highlights, products, skills and contact." },
];

/** Floating pill to flip between design variants while comparing them. */
export function VariantSwitcher({ current }: { current: VariantKey | "index" }) {
  return (
    <View
      pointerEvents="box-none"
      className="absolute bottom-4 left-0 right-0 items-center px-4"
      style={{ position: "fixed" as any }}
    >
      <View className="rounded-xl border border-outline-200 bg-background-0/95 p-1 shadow-hard-2" style={{ maxWidth: 520, width: "100%" }}>
        <SegmentedControl
          size="sm"
          value={current}
          onValueChange={(v) => router.push(v === "index" ? "/" : `/${v}`)}
          className="bg-background-100"
        >
          <SegmentedControlItem value="index">All</SegmentedControlItem>
          {variants.map((v) => (
            <SegmentedControlItem key={v.key} value={v.key}>
              {v.label}
            </SegmentedControlItem>
          ))}
        </SegmentedControl>
      </View>
    </View>
  );
}
