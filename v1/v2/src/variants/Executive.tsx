import React from "react";
import { View } from "react-native";
import {
  Badge,
  BadgeText,
  Blockquote,
  Button,
  ButtonText,
  Card,
  Container,
  Divider,
  Heading,
  HStack,
  Image,
  Link,
  LinkText,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
  Text,
  VStack,
} from "@wireservers/react-natives";
import {
  certifications,
  competencies,
  earlierCareer,
  experience,
  industries,
  nav,
  products,
  profile,
  shortSummary,
  stats,
  summary,
} from "../data/resume";
import { Anchor, PageShell, openUrl, scrollToSection, useBreakpoint } from "../components/layout";
import { Bullets, ContactButtons, ContactList, DownloadList, TagCloud } from "../components/shared";
import { palette } from "../themes";

const c = palette.executive;

function Eyebrow({ children }: { children: string }) {
  return (
    <Text size="xs" weight="semibold" className="uppercase tracking-[3px] text-primary-600">
      {children}
    </Text>
  );
}

function SectionHeader({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <VStack space="sm" className="mb-10">
      <Eyebrow>{eyebrow}</Eyebrow>
      <Heading size="3xl" accessibilityRole="header" className="font-serif font-semibold text-typography-900 md:text-4xl">
        {title}
      </Heading>
    </VStack>
  );
}

export default function Executive() {
  const { isDesktop, isMobile } = useBreakpoint();

  return (
    <PageShell variant="executive">
      {/* Top bar */}
      <View className="border-b border-outline-100 bg-background-0">
        <Container size="xl" centered className="flex-row items-center justify-between py-4 md:px-8">
          <Text weight="semibold" className="font-serif text-lg text-typography-900">
            Todd Clarkston
          </Text>
          {isDesktop ? (
            <HStack space="xl" className="items-center">
              {nav.map((n) => (
                <Link key={n.id} onPress={() => scrollToSection(n.id)}>
                  <LinkText className="text-sm text-typography-600 no-underline data-[hover=true]:text-primary-700">{n.label}</LinkText>
                </Link>
              ))}
              <Button size="sm" onPress={() => openUrl(profile.emailHref)}>
                <ButtonText>Contact</ButtonText>
              </Button>
            </HStack>
          ) : (
            <Button size="sm" variant="outline" action="secondary" onPress={() => scrollToSection("contact")}>
              <ButtonText className="text-typography-800">Contact</ButtonText>
            </Button>
          )}
        </Container>
      </View>

      {/* Hero */}
      <Anchor id="about" className="bg-background-50">
        <Container size="xl" centered className="py-16 md:px-8 md:py-24">
          <View className={isDesktop ? "flex-row items-center gap-16" : "gap-10"}>
            <VStack space="lg" className="flex-1">
              <Eyebrow>{profile.title}</Eyebrow>
              <Heading
                accessibilityRole="header"
                aria-level={1}
                className="font-serif font-semibold leading-tight text-typography-900"
                style={{ fontSize: isMobile ? 44 : 68, lineHeight: isMobile ? 50 : 74 }}
              >
                Todd Clarkston
              </Heading>
              <Text size="lg" className="text-typography-600">
                {profile.headline}
              </Text>
              <Text size="lg" className="max-w-[620px] leading-8 text-typography-700">
                {shortSummary}
              </Text>
              <View className="pt-2">
                <ContactButtons ink={c.ink} outlineTextClassName="text-typography-800" />
              </View>
              <HStack space="sm" className="flex-wrap items-center gap-y-2 pt-2">
                <Badge action="success" variant="subtle" size="md">
                  <BadgeText>{profile.availability}</BadgeText>
                </Badge>
                <Text size="sm" className="text-typography-500">
                  {profile.location}
                </Text>
              </HStack>
            </VStack>
            <View className={isDesktop ? "w-[380px]" : "items-center"}>
              <View className="rounded-2xl border border-outline-200 bg-background-0 p-3 shadow-hard-2">
                <Image
                  source={{ uri: profile.photo }}
                  alt="Portrait of Todd Clarkston"
                  className={isMobile ? "h-[260px] w-[260px] rounded-xl" : "h-[354px] w-[354px] rounded-xl"}
                />
              </View>
            </View>
          </View>
        </Container>
      </Anchor>

      {/* Stats */}
      <View className="border-y border-outline-100 bg-background-0">
        <Container size="xl" centered className="py-10 md:px-8">
          <View className="flex-row flex-wrap">
            {stats.slice(0, 4).map((s, i) => (
              <View
                key={s.label}
                className={`w-1/2 py-4 md:w-1/4 md:px-6 ${i > 0 && !isMobile ? "md:border-l md:border-outline-100" : ""}`}
              >
                <Stat>
                  <StatNumber className="font-serif text-4xl font-semibold text-primary-700">{s.value}</StatNumber>
                  <StatLabel className="text-sm font-semibold uppercase tracking-wider text-typography-800">{s.label}</StatLabel>
                  <StatHelpText className="text-sm text-typography-500">{s.detail}</StatHelpText>
                </Stat>
              </View>
            ))}
          </View>
        </Container>
      </View>

      {/* Summary */}
      <Container size="xl" centered className="py-20 md:px-8">
        <View className={isDesktop ? "flex-row gap-16" : "gap-8"}>
          <View className={isDesktop ? "w-1/3" : ""}>
            <SectionHeader eyebrow="Profile" title="Architecture that ships." />
          </View>
          <VStack space="xl" className="flex-1">
            <Blockquote className="border-l-2 border-primary-600 pl-6">
              <Text size="xl" className="font-serif leading-9 text-typography-800">
                {summary}
              </Text>
            </Blockquote>
            <VStack space="sm">
              <Text size="xs" weight="semibold" className="uppercase tracking-widest text-typography-500">
                Industries
              </Text>
              <TagCloud items={industries} />
            </VStack>
          </VStack>
        </View>
      </Container>

      <Divider className="bg-outline-100" />

      {/* Experience */}
      <Anchor id="experience">
        <Container size="xl" centered className="py-20 md:px-8">
          <SectionHeader eyebrow="Experience" title="Where I've led." />
          <VStack space="2xl">
            {experience.map((r) => (
              <View key={r.id} className={isDesktop ? "flex-row gap-16" : "gap-3"}>
                <VStack space="xs" className={isDesktop ? "w-1/3" : ""}>
                  <Text weight="semibold" className="text-primary-700">
                    {r.dates}
                  </Text>
                  <Text size="sm" className="text-typography-500">
                    {r.location}
                  </Text>
                </VStack>
                <VStack space="md" className="flex-1 border-b border-outline-100 pb-12">
                  <VStack space="xs">
                    <Heading size="2xl" className="font-serif font-semibold text-typography-900">
                      {r.company}
                    </Heading>
                    <Text weight="medium" className="text-typography-700">
                      {r.role}
                    </Text>
                  </VStack>
                  <Text className="leading-7 text-typography-600">{r.summary}</Text>
                  {r.highlights.length > 0 && <Bullets items={r.highlights.slice(0, 6)} markerClassName="bg-primary-600" />}
                  {r.tracks?.map((t) => (
                    <VStack key={t.title} space="sm" className="pt-2">
                      <Text size="sm" weight="semibold" className="text-typography-900">
                        {t.title}
                      </Text>
                      <Bullets items={t.bullets} markerClassName="bg-outline-400" />
                    </VStack>
                  ))}
                  <TagCloud items={r.tags} action="primary" variant="outline" />
                </VStack>
              </View>
            ))}
          </VStack>

          <View className={`pt-12 ${isDesktop ? "flex-row gap-16" : "gap-4"}`}>
            <View className={isDesktop ? "w-1/3" : ""}>
              <Text weight="semibold" className="text-typography-900">
                Earlier career
              </Text>
              <Text size="sm" className="text-typography-500">
                2000 – 2014
              </Text>
            </View>
            <View className="flex-1 flex-row flex-wrap">
              {earlierCareer.map((e) => (
                <View key={e.company} className="w-full py-2 md:w-1/2 md:pr-6">
                  <Text size="sm" weight="semibold" className="text-typography-800">
                    {e.company}
                  </Text>
                  <Text size="sm" className="text-typography-500">
                    {e.role} · {e.dates}
                  </Text>
                </View>
              ))}
            </View>
          </View>
        </Container>
      </Anchor>

      {/* Products */}
      <Anchor id="products" className="bg-background-50">
        <Container size="xl" centered className="py-20 md:px-8">
          <SectionHeader eyebrow="Products & Open Source" title="Things I've built and run." />
          <View className={isDesktop ? "flex-row gap-8" : "gap-6"}>
            {products.map((p) => (
              <Card key={p.id} variant="outline" size="lg" className="flex-1 rounded-2xl border-outline-200 p-8">
                <VStack space="md">
                  <Text size="xs" weight="semibold" className="uppercase tracking-widest text-typography-500">
                    {p.role}
                  </Text>
                  <Heading size="2xl" className="font-serif font-semibold text-typography-900">
                    {p.name}
                  </Heading>
                  <Text className="leading-7 text-typography-600">{p.summary}</Text>
                  <HStack space="md" className="items-baseline">
                    <Text className="font-serif text-4xl font-semibold text-primary-700">{p.metric.value}</Text>
                    <Text size="sm" className="flex-1 text-typography-500">
                      {p.metric.label}
                    </Text>
                  </HStack>
                  <Bullets items={p.highlights} markerClassName="bg-primary-600" />
                  <TagCloud items={p.tags} />
                  <Link onPress={() => openUrl(p.url)} className="pt-2">
                    <LinkText className="font-semibold text-primary-700">{p.urlLabel} →</LinkText>
                  </Link>
                </VStack>
              </Card>
            ))}
          </View>
        </Container>
      </Anchor>

      {/* Competencies */}
      <Anchor id="skills">
        <Container size="xl" centered className="py-20 md:px-8">
          <SectionHeader eyebrow="Core Competencies" title="Depth across the stack." />
          <View className="-mx-4 flex-row flex-wrap">
            {competencies.map((g) => (
              <View key={g.area} className="w-full px-4 pb-10 md:w-1/2 lg:w-1/3">
                <Text weight="semibold" className="mb-3 border-b border-outline-200 pb-2 text-typography-900">
                  {g.area}
                </Text>
                <Text size="sm" className="leading-6 text-typography-600">
                  {g.items.join(" · ")}
                </Text>
              </View>
            ))}
          </View>
          <VStack space="sm" className="rounded-2xl bg-background-50 p-8">
            <Text weight="semibold" className="text-typography-900">
              Certifications & professional development
            </Text>
            <Bullets items={certifications} markerClassName="bg-tertiary-500" />
          </VStack>
        </Container>
      </Anchor>

      {/* Contact */}
      <Anchor id="contact" className="bg-primary-900">
        <Container size="xl" centered className="py-20 pb-32 md:px-8">
          <View className={isDesktop ? "flex-row gap-16" : "gap-10"}>
            <VStack space="md" className="flex-1">
              <Text size="xs" weight="semibold" className="uppercase tracking-[3px] text-primary-200">
                Contact
              </Text>
              <Heading size="4xl" className="font-serif font-semibold text-white">
                Let's build something durable.
              </Heading>
              <Text className="max-w-[480px] leading-7 text-primary-100">
                {profile.availability}. Based in {profile.location}.
              </Text>
              <View className="pt-4">
                <ContactList color="#c7d6ee" textClassName="text-white" />
              </View>
            </VStack>
            <View className="flex-1 rounded-2xl bg-background-0 p-6 md:p-8">
              <Text weight="semibold" className="mb-4 text-typography-900">
                Download résumé
              </Text>
              <DownloadList ink={c.ink} labelClassName="text-typography-900" buttonTextClassName="text-typography-800" />
            </View>
          </View>
          <Text size="xs" className="pt-16 text-primary-200">
            © {new Date().getFullYear()} WireServers LLC · Built with React Native Web & @wireservers/react-natives
          </Text>
        </Container>
      </Anchor>
    </PageShell>
  );
}
