import React from "react";
import { ScrollView, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {
  Badge,
  BadgeText,
  Button,
  ButtonText,
  Card,
  Container,
  Heading,
  HStack,
  Image,
  Link,
  LinkText,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  TabText,
  Text,
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
  VStack,
} from "@wireservers/react-natives";
import { earlierCareer, experience, nav, products, profile, shortSummary, skills, stats, summary } from "../data/resume";
import { Anchor, PageShell, openUrl, scrollToSection, useBreakpoint } from "../components/layout";
import { Bullets, ContactButtons, ContactList, DownloadList, TagCloud } from "../components/shared";
import { palette } from "../themes";

const c = palette.bold;
const GRADIENT = ["#8b5cf6", "#6366f1", "#06b6d4"] as const;

/** 1px gradient border around dark content. */
function GlowFrame({ children, radius = 20, className }: { children: React.ReactNode; radius?: number; className?: string }) {
  return (
    <View className={className}>
      <LinearGradient colors={GRADIENT} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={{ flex: 1, borderRadius: radius, padding: 1 }}>
        <View className="flex-1 bg-background-50" style={{ borderRadius: radius - 1 }}>
          {children}
        </View>
      </LinearGradient>
    </View>
  );
}

function Kicker({ children }: { children: string }) {
  return (
    <Text size="xs" className="font-mono uppercase tracking-[4px] text-tertiary-400">
      {children}
    </Text>
  );
}

function SectionTitle({ kicker, title }: { kicker: string; title: string }) {
  return (
    <VStack space="sm" className="mb-10">
      <Kicker>{kicker}</Kicker>
      <Heading size="4xl" accessibilityRole="header" className="font-display text-typography-900">
        {title}
      </Heading>
    </VStack>
  );
}

export default function Bold() {
  const { isDesktop, isMobile, bp } = useBreakpoint();

  return (
    <PageShell variant="bold">
      {/* Ambient glow */}
      <LinearGradient
        colors={["rgba(139,92,246,0.28)", "rgba(6,182,212,0.08)", "rgba(8,10,20,0)"]}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        style={{ position: "absolute", top: 0, left: 0, right: 0, height: 900 }}
        pointerEvents="none"
      />

      {/* Nav */}
      <Container size="xl" centered className="flex-row items-center justify-between py-6 md:px-8">
        <HStack space="sm" className="items-center">
          <LinearGradient colors={GRADIENT} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={{ width: 36, height: 36, borderRadius: 10, alignItems: "center", justifyContent: "center" }}>
            <Text weight="bold" className="font-display text-white">
              TC
            </Text>
          </LinearGradient>
          {!isMobile && (
            <Text weight="semibold" className="font-display text-typography-900">
              todd clarkston
            </Text>
          )}
        </HStack>
        <HStack space="lg" className="items-center">
          {isDesktop &&
            nav.map((n) => (
              <Link key={n.id} onPress={() => scrollToSection(n.id)}>
                <LinkText className="font-mono text-xs uppercase tracking-widest text-typography-500 no-underline data-[hover=true]:text-typography-900">
                  {n.label}
                </LinkText>
              </Link>
            ))}
          <Button size="sm" variant="outline" action="secondary" className="border-outline-300 rounded-full" onPress={() => scrollToSection("contact")}>
            <ButtonText className="text-typography-900">Résumé</ButtonText>
          </Button>
        </HStack>
      </Container>

      {/* Hero */}
      <Anchor id="about">
        <Container size="xl" centered className="pb-16 pt-10 md:px-8 md:pt-20">
          <View className={isDesktop ? "flex-row items-center gap-16" : "gap-12"}>
            <VStack space="lg" className="flex-1">
              <HStack>
                <Badge variant="outline" action="success" size="md" className="rounded-full border-success-500/40 bg-success-500/10 px-3">
                  <BadgeText className="text-success-400">● {profile.availability}</BadgeText>
                </Badge>
              </HStack>
              <Text
                className="font-display font-bold text-typography-900"
                accessibilityRole="header"
                aria-level={1}
                style={{ fontSize: isMobile ? 46 : bp === "md" ? 64 : 84, lineHeight: isMobile ? 50 : bp === "md" ? 68 : 86, letterSpacing: -2 }}
              >
                Todd Clarkston
              </Text>
              <Text
                className="text-gradient font-display font-bold"
                style={{ fontSize: isMobile ? 30 : 44, lineHeight: isMobile ? 36 : 52, letterSpacing: -1 }}
              >
                Lead Software Architect.
              </Text>
              <Text size="lg" className="max-w-[600px] leading-8 text-typography-500">
                {shortSummary}
              </Text>
              <View className="pt-2">
                <ContactButtons
                  size="lg"
                  ink={c.ink}
                  onAccent="#0b1020"
                  solidClassName="rounded-full"
                  outlineClassName="rounded-full border-outline-300"
                  outlineTextClassName="text-typography-900"
                />
              </View>
            </VStack>
            <View className={isDesktop ? "" : "items-center"}>
              <LinearGradient colors={GRADIENT} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={{ borderRadius: 999, padding: 4 }}>
                <View className="rounded-full bg-background-0 p-2">
                  <Image
                    source={{ uri: profile.photo }}
                    alt="Portrait of Todd Clarkston"
                    className={isMobile ? "h-[220px] w-[220px] rounded-full" : "h-[340px] w-[340px] rounded-full"}
                  />
                </View>
              </LinearGradient>
            </View>
          </View>
        </Container>
      </Anchor>

      {/* Stats */}
      <Container size="xl" centered className="pb-24 md:px-8">
        <View className="-m-2 flex-row flex-wrap">
          {stats.map((s) => (
            <View key={s.label} className="w-1/2 p-2 md:w-1/3 lg:w-1/6">
              <Card variant="outline" size="md" className="h-full rounded-2xl border-outline-200 bg-background-50">
                <Stat>
                  <StatNumber className="font-display text-4xl text-typography-900">{s.value}</StatNumber>
                  <StatLabel className="font-mono text-[11px] uppercase tracking-widest text-tertiary-400">{s.label}</StatLabel>
                  <StatHelpText className="pt-1 text-typography-500">{s.detail}</StatHelpText>
                </Stat>
              </Card>
            </View>
          ))}
        </View>
      </Container>

      {/* Products */}
      <Anchor id="products">
        <Container size="xl" centered className="pb-24 md:px-8">
          <SectionTitle kicker="// shipping now" title="Products I built and run" />
          <View className={isDesktop ? "flex-row gap-6" : "gap-6"}>
            {products.map((p) => (
              <GlowFrame key={p.id} className="flex-1">
                <VStack space="md" className="p-7 md:p-9">
                  <HStack className="items-start justify-between">
                    <VStack space="xs" className="flex-1">
                      <Heading size="2xl" className="font-display text-typography-900">
                        {p.name}
                      </Heading>
                      <Text size="sm" className="text-typography-500">
                        {p.role}
                      </Text>
                    </VStack>
                    <VStack className="items-end">
                      <Text className="text-gradient font-display text-4xl font-bold">{p.metric.value}</Text>
                    </VStack>
                  </HStack>
                  <Text size="xs" className="font-mono text-tertiary-400">
                    {p.metric.label}
                  </Text>
                  <Text className="leading-7 text-typography-600">{p.summary}</Text>
                  <Bullets items={p.highlights} markerClassName="bg-tertiary-400" textClassName="text-typography-600" />
                  <TagCloud items={p.tags} action="primary" variant="outline" className="border-primary-500/40" />
                  <Link onPress={() => openUrl(p.url)} className="pt-2">
                    <LinkText className="font-mono text-sm text-primary-400 no-underline">↗ {p.urlLabel}</LinkText>
                  </Link>
                </VStack>
              </GlowFrame>
            ))}
          </View>
        </Container>
      </Anchor>

      {/* Experience timeline */}
      <Anchor id="experience">
        <Container size="xl" centered className="pb-24 md:px-8">
          <SectionTitle kicker="// career log" title="Experience" />
          <View className={isDesktop ? "flex-row gap-16" : ""}>
            {isDesktop && (
              <View className="w-[300px]">
                <Text className="leading-7 text-typography-500">{summary}</Text>
              </View>
            )}
            <Timeline className="flex-1">
              {experience.map((r, i) => (
                <TimelineItem key={r.id} isLast={i === experience.length - 1}>
                  <TimelineSeparator>
                    <TimelineDot className={`mt-2 h-4 w-4 ${i === 0 ? "bg-tertiary-400" : "bg-primary-500"}`} />
                    {i < experience.length - 1 && <TimelineConnector className="bg-outline-200" />}
                  </TimelineSeparator>
                  <TimelineContent className="flex-1 pb-10 pl-2">
                    <Text size="xs" className="font-mono uppercase tracking-widest text-tertiary-400">
                      {r.dates}
                    </Text>
                    <Heading size="xl" className="pt-1 font-display text-typography-900">
                      {r.company}
                    </Heading>
                    <Text size="sm" className="pb-3 text-typography-500">
                      {r.role} · {r.location}
                    </Text>
                    <Card variant="outline" size="md" className="rounded-2xl border-outline-200 bg-background-50">
                      <VStack space="md">
                        <Text className="leading-7 text-typography-600">{r.summary}</Text>
                        {r.highlights.length > 0 && (
                          <Bullets items={r.highlights.slice(0, 5)} markerClassName="bg-primary-400" textClassName="text-typography-600" />
                        )}
                        {r.tracks?.map((t) => (
                          <VStack key={t.title} space="sm">
                            <Text size="sm" weight="semibold" className="text-typography-800">
                              {t.title}
                            </Text>
                            <Bullets items={t.bullets.slice(0, 3)} markerClassName="bg-outline-400" textClassName="text-typography-600" />
                          </VStack>
                        ))}
                        <TagCloud items={r.tags} />
                      </VStack>
                    </Card>
                  </TimelineContent>
                </TimelineItem>
              ))}
            </Timeline>
          </View>
          <View className="mt-4 rounded-2xl border border-outline-200 p-6">
            <Text size="xs" className="mb-3 font-mono uppercase tracking-widest text-typography-500">
              Earlier · 2000 – 2014
            </Text>
            <Text size="sm" className="leading-7 text-typography-600">
              {earlierCareer.map((e) => `${e.company} (${e.dates})`).join("  ·  ")}
            </Text>
          </View>
        </Container>
      </Anchor>

      {/* Skills */}
      <Anchor id="skills">
        <Container size="xl" centered className="pb-24 md:px-8">
          <SectionTitle kicker="// stack" title="Technical skills" />
          <Tabs variant="rounded" defaultIndex={0}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <TabList className="rounded-full border border-outline-200 bg-background-50 p-1">
                {skills.map((g) => (
                  <Tab key={g.group} className="rounded-full px-4 py-2" activeClassName="bg-primary-500" inactiveClassName="bg-transparent">
                    <TabText className="text-sm text-typography-700">{g.group}</TabText>
                  </Tab>
                ))}
              </TabList>
            </ScrollView>
            <TabPanels className="pt-6">
              {skills.map((g, i) => (
                <TabPanel key={g.group} index={i}>
                  <Card variant="outline" size="lg" className="rounded-2xl border-outline-200 bg-background-50">
                    <HStack className="mb-5 items-baseline justify-between">
                      <Heading size="xl" className="font-display text-typography-900">
                        {g.group}
                      </Heading>
                      {!!g.years && <Text className="text-gradient font-display text-2xl font-bold">{g.years}</Text>}
                    </HStack>
                    <TagCloud items={g.items} size="md" action="primary" variant="outline" className="border-primary-500/40" />
                  </Card>
                </TabPanel>
              ))}
            </TabPanels>
          </Tabs>
        </Container>
      </Anchor>

      {/* Contact */}
      <Anchor id="contact">
        <Container size="xl" centered className="pb-32 md:px-8">
          <GlowFrame radius={28}>
            <View className={`p-8 md:p-12 ${isDesktop ? "flex-row gap-12" : "gap-10"}`}>
              <VStack space="md" className="flex-1">
                <Kicker>// let's talk</Kicker>
                <Heading size="4xl" className="font-display text-typography-900">
                  Need an architect who still ships code?
                </Heading>
                <Text className="leading-7 text-typography-500">{profile.location} · {profile.availability}</Text>
                <View className="pt-4">
                  <ContactList color={c.accent} textClassName="text-typography-800" />
                </View>
              </VStack>
              <View className="flex-1 rounded-2xl border border-outline-200 bg-background-0 p-6">
                <Text size="xs" className="mb-4 font-mono uppercase tracking-widest text-typography-500">
                  Download résumé
                </Text>
                <DownloadList ink={c.ink} labelClassName="text-typography-900" buttonClassName="border-outline-300" buttonTextClassName="text-typography-800" />
              </View>
            </View>
          </GlowFrame>
          <Text size="xs" className="pt-10 text-center font-mono text-typography-400">
            © {new Date().getFullYear()} WireServers LLC · react-native-web + @wireservers/react-natives
          </Text>
        </Container>
      </Anchor>
    </PageShell>
  );
}
