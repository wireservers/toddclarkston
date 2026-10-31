import React from "react";
import { Pressable, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Feather } from "@expo/vector-icons";
import {
  Avatar,
  AvatarBadge,
  AvatarImage,
  Badge,
  BadgeText,
  Card,
  Container,
  Heading,
  HStack,
  Link,
  LinkText,
  Progress,
  ProgressFilledTrack,
  Stat,
  StatLabel,
  StatNumber,
  Text,
  Tooltip,
  TooltipContent,
  TooltipText,
  VStack,
} from "@wireservers/react-natives";
import { certifications, competencies, earlierCareer, experience, products, profile, shortSummary, skills, stats } from "../data/resume";
import { Anchor, PageShell, openUrl, useBreakpoint } from "../components/layout";
import { Bullets, ContactButtons, ContactList, DownloadList, TagCloud } from "../components/shared";
import { palette } from "../themes";

const c = palette.bento;

/**
 * Grid tile. `span` is the number of columns it occupies out of the current
 * column count (4 on desktop, 2 on tablet, 1 on phone).
 */
function Tile({
  span = 1,
  cols,
  children,
  className,
  tone = "default",
}: {
  span?: number;
  cols: number;
  children: React.ReactNode;
  className?: string;
  tone?: "default" | "accent" | "dark";
}) {
  const s = Math.min(span, cols);
  const toneClass =
    tone === "accent" ? "bg-primary-600 border-primary-600" : tone === "dark" ? "bg-typography-900 border-typography-900" : "bg-background-0 border-outline-200";
  return (
    <View style={{ width: `${(s / cols) * 100}%` }} className="p-2">
      <Card variant="outline" size="lg" className={`h-full rounded-3xl ${toneClass} ${className ?? ""}`}>
        {children}
      </Card>
    </View>
  );
}

function TileLabel({ icon, children, light }: { icon: React.ComponentProps<typeof Feather>["name"]; children: string; light?: boolean }) {
  return (
    <HStack space="sm" className="mb-4 items-center">
      <Feather name={icon} size={14} color={light ? "rgba(255,255,255,0.8)" : c.muted} />
      <Text size="xs" weight="semibold" className={`uppercase tracking-widest ${light ? "text-white/80" : "text-typography-500"}`}>
        {children}
      </Text>
    </HStack>
  );
}

// Self-ratings carried over from the skill bars on the v1 site.
const skillLevels: { name: string; value: number }[] = [
  { name: "C#", value: 90 },
  { name: "ASP.NET / .NET Core", value: 90 },
  { name: "Claude Code & agentic AI", value: 85 },
  { name: "Azure", value: 80 },
  { name: "SQL", value: 80 },
  { name: "TypeScript", value: 80 },
];

export default function Bento() {
  const { bp, isMobile } = useBreakpoint();
  const cols = bp === "sm" ? 1 : bp === "md" ? 2 : 4;
  const current = experience[0];

  return (
    <PageShell variant="bento" className="bg-background-100">
      <Container size="xl" centered className="px-2 py-6 pb-28 md:px-6 md:py-10">
        <View className="flex-row flex-wrap">
          {/* Intro */}
          <Tile span={2} cols={cols}>
            <Anchor id="about">
              <HStack space="lg" className="items-center pb-6">
                <Avatar size="2xl" className="h-20 w-20">
                  <AvatarImage source={{ uri: profile.photo }} alt="Todd Clarkston" />
                  <AvatarBadge className="h-5 w-5 border-2 border-background-0 bg-success-500" />
                </Avatar>
                <VStack className="flex-1">
                  <Heading accessibilityRole="header" aria-level={1} size="3xl" className="font-display tracking-tight text-typography-900">
                    Todd Clarkston
                  </Heading>
                  <Text weight="medium" className="text-primary-600">
                    {profile.title}
                  </Text>
                </VStack>
              </HStack>
              <Text size="lg" className="pb-6 leading-8 text-typography-700">
                {shortSummary}
              </Text>
              <ContactButtons ink={c.ink} solidClassName="rounded-xl" outlineClassName="rounded-xl border-outline-300" outlineTextClassName="text-typography-800" />
            </Anchor>
          </Tile>

          {/* Current role */}
          <Tile span={2} cols={cols} tone="dark">
            <TileLabel icon="briefcase" light>
              Now
            </TileLabel>
            <Heading size="2xl" className="font-display text-white">
              {current.company}
            </Heading>
            <Text size="sm" className="pb-4 text-white/70">
              {current.role} · {current.dates}
            </Text>
            <Bullets items={current.highlights.slice(0, 4)} markerClassName="bg-tertiary-400" textClassName="text-white/85" />
            <View className="pt-5">
              <TagCloud items={current.tags} action="muted" variant="outline" className="border-white/25 bg-white/5" textClassName="text-white/85" />
            </View>
          </Tile>

          {/* Stats */}
          {stats.slice(0, 4).map((s, i) => (
            <Tile key={s.label} cols={cols} span={1} tone={i === 0 ? "accent" : "default"}>
              <Stat>
                <StatNumber className={`font-display text-5xl tracking-tight ${i === 0 ? "text-white" : "text-typography-900"}`}>{s.value}</StatNumber>
                <StatLabel className={`pt-2 text-sm font-semibold ${i === 0 ? "text-white" : "text-typography-800"}`}>{s.label}</StatLabel>
                <Text size="sm" className={i === 0 ? "text-white/75" : "text-typography-500"}>
                  {s.detail}
                </Text>
              </Stat>
            </Tile>
          ))}

          {/* Products */}
          {products.map((p, i) => {
            const oss = p.id === "react-natives";
            const icon = oss ? "box" : p.id === "bringthebudget" ? "dollar-sign" : p.id === "bringthediet" ? "heart" : "server";
            return (
            <Tile key={p.id} span={2} cols={cols}>
              <Anchor id={i === 0 ? "products" : `product-${p.id}`}>
                <HStack className="items-start justify-between pb-3">
                  <TileLabel icon={icon}>{oss ? "Open source" : "Product"}</TileLabel>
                  <Badge variant="subtle" action={oss ? "success" : "info"} size="sm" className="rounded-full">
                    <BadgeText>{p.metric.value}</BadgeText>
                  </Badge>
                </HStack>
                <Heading size="2xl" className="font-display text-typography-900">
                  {p.name}
                </Heading>
                <Text size="sm" className="pb-3 text-typography-500">
                  {p.metric.label}
                </Text>
                <Text className="pb-4 leading-7 text-typography-700">{p.summary}</Text>
                <TagCloud items={p.tags} action="primary" variant="subtle" />
                <Link onPress={() => openUrl(p.url)} className="pt-4">
                  <LinkText className="text-sm font-semibold text-primary-600 no-underline">{p.urlLabel} →</LinkText>
                </Link>
              </Anchor>
            </Tile>
            );
          })}

          {/* Experience */}
          <Tile span={cols >= 4 ? 3 : 2} cols={cols}>
            <Anchor id="experience">
              <TileLabel icon="layers">Experience</TileLabel>
              <VStack space="lg">
                {experience.map((r) => (
                  <View key={r.id} className={`border-b border-outline-100 pb-4 ${isMobile ? "gap-1" : "flex-row gap-6"}`}>
                    <Text size="sm" weight="semibold" className={`text-primary-600 ${isMobile ? "" : "w-[130px]"}`}>
                      {r.dates}
                    </Text>
                    <VStack className="flex-1">
                      <Text weight="semibold" className="text-typography-900">
                        {r.company}
                      </Text>
                      <Text size="sm" className="pb-1 text-typography-600">
                        {r.role}
                      </Text>
                      <Text size="sm" className="leading-6 text-typography-500">
                        {r.summary}
                      </Text>
                    </VStack>
                  </View>
                ))}
                <Text size="sm" className="leading-6 text-typography-500">
                  <Text size="sm" weight="semibold" className="text-typography-700">
                    Earlier:{" "}
                  </Text>
                  {earlierCareer.map((e) => e.company).join(" · ")}
                </Text>
              </VStack>
            </Anchor>
          </Tile>

          {/* Skill meters */}
          <Tile span={1} cols={cols}>
            <Anchor id="skills">
              <TileLabel icon="activity">Strengths</TileLabel>
              <VStack space="md">
                {skillLevels.map((s) => (
                  <VStack key={s.name} space="xs">
                    <Text size="sm" weight="medium" className="text-typography-800">
                      {s.name}
                    </Text>
                    <Progress value={s.value} size="sm" className="bg-background-100">
                      <ProgressFilledTrack className="bg-primary-500" />
                    </Progress>
                  </VStack>
                ))}
              </VStack>
            </Anchor>
          </Tile>

          {/* Competencies */}
          <Tile span={cols} cols={cols}>
            <TileLabel icon="cpu">Core competencies</TileLabel>
            <View className="-mx-3 flex-row flex-wrap">
              {competencies.map((g) => (
                <View key={g.area} className="w-full px-3 pb-5 md:w-1/2 lg:w-1/3">
                  <Text size="sm" weight="semibold" className="pb-2 text-typography-900">
                    {g.area}
                  </Text>
                  <TagCloud items={g.items.slice(0, 7)} />
                </View>
              ))}
            </View>
          </Tile>

          {/* Toolbox years */}
          <Tile span={2} cols={cols}>
            <TileLabel icon="tool">Experience by area</TileLabel>
            <View className="flex-row flex-wrap">
              {skills
                .filter((g) => g.years)
                .map((g) => (
                  <View key={g.group} className="w-1/2 py-2 pr-3">
                    <Tooltip
                      placement="top"
                      trigger={(triggerProps: any) => (
                        <Pressable {...triggerProps} accessibilityLabel={`${g.group}: ${g.years}`}>
                          <Text className="font-display text-xl text-typography-900">{g.years}</Text>
                          <Text size="sm" className="text-typography-500">
                            {g.group}
                          </Text>
                        </Pressable>
                      )}
                    >
                      <TooltipContent>
                        <TooltipText>{g.items.slice(0, 5).join(", ")}</TooltipText>
                      </TooltipContent>
                    </Tooltip>
                  </View>
                ))}
            </View>
          </Tile>

          {/* Certifications */}
          <Tile span={2} cols={cols}>
            <TileLabel icon="award">Certifications</TileLabel>
            <Bullets items={certifications} markerClassName="bg-tertiary-500" />
          </Tile>

          {/* Contact */}
          <View style={{ width: "100%" }} className="p-2">
            <Anchor id="contact">
              <LinearGradient colors={["#4f46e5", "#4338ca", "#0e7490"]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={{ borderRadius: 24 }}>
                <View className={`p-8 md:p-10 ${cols >= 4 ? "flex-row gap-10" : "gap-8"}`}>
                  <VStack space="md" className="flex-1">
                    <TileLabel icon="send" light>
                      Contact
                    </TileLabel>
                    <Heading size="3xl" className="font-display text-white">
                      Let's talk about your platform.
                    </Heading>
                    <Text className="text-white/80">
                      {profile.availability} · {profile.location}
                    </Text>
                    <View className="pt-3">
                      <ContactList color="rgba(255,255,255,0.85)" textClassName="text-white" />
                    </View>
                  </VStack>
                  <View className="flex-1 rounded-2xl bg-background-0 p-6">
                    <Text weight="semibold" className="pb-4 text-typography-900">
                      Download résumé
                    </Text>
                    <DownloadList ink={c.ink} labelClassName="text-typography-900" buttonClassName="border-outline-300" buttonTextClassName="text-typography-800" />
                  </View>
                </View>
              </LinearGradient>
            </Anchor>
          </View>
        </View>
        <Text size="xs" className="pt-6 text-center text-typography-400">
          © {new Date().getFullYear()} WireServers LLC · Built with React Native Web & @wireservers/react-natives
        </Text>
      </Container>
    </PageShell>
  );
}
