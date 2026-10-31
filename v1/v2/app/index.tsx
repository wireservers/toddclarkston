import React from "react";
import { Pressable, View } from "react-native";
import { router } from "expo-router";
import { Feather } from "@expo/vector-icons";
import {
  Avatar,
  AvatarImage,
  Badge,
  BadgeText,
  Card,
  Container,
  Heading,
  HStack,
  Text,
  ThemeScope,
  VStack,
} from "@wireservers/react-natives";
import { profile } from "../src/data/resume";
import { useBreakpoint } from "../src/components/layout";
import { VariantSwitcher, variants } from "../src/components/VariantSwitcher";
import { palette, themes, type VariantKey } from "../src/themes";

/** Miniature, theme-scoped preview of each variant's look. */
function Preview({ variant }: { variant: VariantKey }) {
  const dark = variant === "bold";
  return (
    <ThemeScope vars={themes[variant]}>
      <View className="h-[150px] overflow-hidden rounded-lg bg-background-0 p-4" style={{ backgroundColor: palette[variant].bg }}>
        {variant === "editorial" ? (
          <View className="flex-1 flex-row gap-3">
            <View className="w-1/3 gap-2 rounded-md bg-background-100 p-2">
              <View className="h-8 w-8 rounded-full bg-primary-500" />
              <View className="h-2 w-full rounded bg-typography-300" />
              <View className="h-2 w-2/3 rounded bg-typography-200" />
            </View>
            <View className="flex-1 gap-2 pt-1">
              {[0, 1, 2].map((i) => (
                <View key={i} className="flex-row items-center gap-2">
                  <View className="h-2.5 w-2.5 rounded-full bg-primary-500" />
                  <View className="h-2 flex-1 rounded bg-typography-200" />
                </View>
              ))}
            </View>
          </View>
        ) : variant === "bento" ? (
          <View className="flex-1 flex-row flex-wrap gap-2">
            <View className="h-[56px] w-[58%] rounded-md bg-primary-500" />
            <View className="h-[56px] flex-1 rounded-md bg-background-0 border border-outline-200" />
            <View className="h-[56px] w-[30%] rounded-md bg-background-0 border border-outline-200" />
            <View className="h-[56px] flex-1 rounded-md bg-tertiary-400" />
          </View>
        ) : (
          <VStack space="sm" className={dark ? "" : "items-center pt-2"}>
            <View className={`h-3 rounded ${dark ? "w-2/3 bg-primary-400" : "w-1/2 bg-typography-800"}`} />
            <View className={`h-2 rounded bg-typography-300 ${dark ? "w-1/2" : "w-2/3"}`} />
            <HStack space="sm" className="pt-3">
              {[0, 1, 2].map((i) => (
                <View key={i} className={`h-10 w-14 rounded-md ${dark ? "border border-outline-200 bg-background-100" : "bg-primary-50"}`} />
              ))}
            </HStack>
          </VStack>
        )}
      </View>
    </ThemeScope>
  );
}

export default function Gallery() {
  const { isMobile } = useBreakpoint();
  return (
    <View className="flex-1 bg-background-50">
      <Container size="xl" centered className="py-14 pb-32 md:px-8">
        <HStack space="md" className="mb-10 items-center">
          <Avatar size="xl">
            <AvatarImage source={{ uri: profile.photo }} alt="Todd Clarkston" />
          </Avatar>
          <VStack>
            <Heading size="2xl" accessibilityRole="header">
              Todd Clarkston — site redesign
            </Heading>
            <Text className="text-typography-500">Four design directions, one shared résumé data source. Pick one.</Text>
          </VStack>
        </HStack>

        <View className="-mx-3 flex-row flex-wrap">
          {variants.map((v, i) => (
            <View key={v.key} className={`${isMobile ? "w-full" : "w-1/2"} p-3`}>
              <Pressable onPress={() => router.push(`/${v.key}`)} accessibilityRole="link" accessibilityLabel={`Open ${v.name}`}>
                {({ hovered }: any) => (
                  <Card variant="outline" size="md" className={`rounded-2xl ${hovered ? "border-primary-400 shadow-hard-2" : ""}`}>
                    <Preview variant={v.key} />
                    <HStack className="items-center justify-between pt-4">
                      <VStack className="flex-1 pr-4">
                        <HStack space="sm" className="items-center">
                          <Text size="xs" weight="semibold" className="text-typography-400">
                            0{i + 1}
                          </Text>
                          <Heading size="lg">{v.name}</Heading>
                          {i === 0 && (
                            <Badge size="sm" variant="subtle" action="info">
                              <BadgeText>Recruiter-safe</BadgeText>
                            </Badge>
                          )}
                        </HStack>
                        <Text size="sm" className="pt-1 text-typography-500">
                          {v.description}
                        </Text>
                      </VStack>
                      <Feather name="arrow-right" size={20} color="#525252" />
                    </HStack>
                  </Card>
                )}
              </Pressable>
            </View>
          ))}
        </View>
      </Container>
      <VariantSwitcher current="index" />
    </View>
  );
}
