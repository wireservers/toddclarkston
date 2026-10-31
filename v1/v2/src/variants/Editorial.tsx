import React from "react";
import { ScrollView, View } from "react-native";
import {
  Accordion,
  AccordionContent,
  AccordionIcon,
  AccordionItem,
  AccordionTitleText,
  AccordionTrigger,
  Badge,
  BadgeText,
  Divider,
  Heading,
  HStack,
  Image,
  Link,
  LinkText,
  Text,
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
  VStack,
} from "@wireservers/react-natives";
import {
  certifications,
  earlierCareer,
  experience,
  industries,
  nav,
  products,
  profile,
  skills,
  stats,
  summary,
} from "../data/resume";
import { Anchor, PageShell, openUrl, scrollToSection, useBreakpoint } from "../components/layout";
import { Bullets, ContactButtons, ContactList, DownloadList, TagCloud } from "../components/shared";
import { palette } from "../themes";

const c = palette.editorial;

function Chapter({ n, title }: { n: string; title: string }) {
  return (
    <HStack space="md" className="mb-8 items-baseline">
      <Text className="font-serif text-lg italic text-primary-600">{n}</Text>
      <Heading size="3xl" accessibilityRole="header" className="font-serif font-semibold text-typography-900">
        {title}
      </Heading>
    </HStack>
  );
}

/** Profile column — fixed beside the content on desktop, a header on mobile. */
function Sidebar({ desktop }: { desktop: boolean }) {
  return (
    <VStack space="xl" className={desktop ? "h-full justify-between p-10" : "px-5 pb-10 pt-8"}>
      <VStack space="lg">
        <Image
          source={{ uri: profile.photoAlt }}
          alt="Portrait of Todd Clarkston"
          className={desktop ? "h-[112px] w-[112px] rounded-full" : "h-[96px] w-[96px] rounded-full"}
        />
        <VStack space="xs">
          <Heading accessibilityRole="header" aria-level={1} className="font-serif text-4xl font-semibold text-typography-900">
            Todd Clarkston
          </Heading>
          <Text weight="medium" className="text-primary-700">
            {profile.title}
          </Text>
          <Text size="sm" className="leading-6 text-typography-500">
            {profile.headline}
          </Text>
        </VStack>
        <HStack>
          <Badge variant="subtle" action="success" size="md" className="rounded-full">
            <BadgeText>Available · {profile.location.split(" (")[0]}</BadgeText>
          </Badge>
        </HStack>
        {desktop && (
          <VStack space="xs" className="pt-2">
            {nav.map((n, i) => (
              <Link key={n.id} onPress={() => scrollToSection(n.id)} className="py-1">
                <HStack space="sm" className="items-center">
                  <Text size="xs" className="w-6 font-serif italic text-typography-400">
                    0{i + 1}
                  </Text>
                  <LinkText className="text-sm font-medium text-typography-700 no-underline data-[hover=true]:text-primary-700">{n.label}</LinkText>
                </HStack>
              </Link>
            ))}
          </VStack>
        )}
      </VStack>
      <VStack space="lg">
        <ContactList color={c.accent} textClassName="text-sm text-typography-700" />
        <Divider className="bg-outline-200" />
        <DownloadList compact ink={c.ink} labelClassName="text-typography-800" buttonClassName="border-outline-300" buttonTextClassName="text-typography-700" />
      </VStack>
    </VStack>
  );
}

function Content({ desktop }: { desktop: boolean }) {
  return (
    <View className={desktop ? "max-w-[860px] px-16 py-16 pb-32" : "px-5 pb-32"}>
      {/* About */}
      <Anchor id="about" className="pb-16">
        <Chapter n="i." title="About" />
        <Text className="font-serif text-2xl leading-10 text-typography-800 md:text-[28px] md:leading-[44px]">
          {summary}
        </Text>
        <View className="mt-10 flex-row flex-wrap border-t border-outline-200">
          {stats.slice(0, 4).map((s) => (
            <View key={s.label} className="w-1/2 border-b border-outline-200 py-5 pr-4 md:w-1/4">
              <Text className="font-serif text-3xl font-semibold text-primary-700">{s.value}</Text>
              <Text size="xs" className="pt-1 uppercase tracking-wider text-typography-500">
                {s.label}
              </Text>
            </View>
          ))}
        </View>
      </Anchor>

      {/* Experience */}
      <Anchor id="experience" className="pb-16">
        <Chapter n="ii." title="Experience" />
        <Timeline>
          {experience.map((r, i) => (
            <TimelineItem key={r.id} isLast={i === experience.length - 1}>
              <TimelineSeparator>
                <TimelineDot variant={i === 0 ? "solid" : "outline"} className="mt-1.5 h-3.5 w-3.5" />
                {i < experience.length - 1 && <TimelineConnector className="bg-outline-200" />}
              </TimelineSeparator>
              <TimelineContent className="flex-1 pb-8 pl-3">
                <Text size="xs" weight="semibold" className="uppercase tracking-widest text-primary-600">
                  {r.dates}
                </Text>
                <Heading size="xl" className="pt-1 font-serif font-semibold text-typography-900">
                  {r.company}
                </Heading>
                <Text size="sm" className="text-typography-600">
                  {r.role}
                </Text>
                <Text size="xs" className="pb-3 text-typography-400">
                  {r.location}
                </Text>
                <Text className="leading-7 text-typography-700">{r.summary}</Text>
                <Accordion type="multiple" defaultValue={i === 0 ? ["details"] : []} variant="unfilled" size="sm" className="mt-3">
                  <AccordionItem value="details" className="border-b-0 border-t border-outline-200">
                    <AccordionTrigger className="px-0">
                      <AccordionTitleText className="text-sm font-semibold text-primary-700">Key contributions</AccordionTitleText>
                      <AccordionIcon className="text-primary-700" />
                    </AccordionTrigger>
                    <AccordionContent className="px-0 pb-2">
                      <VStack space="md">
                        {r.highlights.length > 0 && <Bullets items={r.highlights} markerClassName="bg-primary-600" />}
                        {r.tracks?.map((t) => (
                          <VStack key={t.title} space="sm">
                            <Text size="sm" className="font-serif italic text-typography-900">
                              {t.title}
                            </Text>
                            <Bullets items={t.bullets} markerClassName="bg-outline-400" />
                          </VStack>
                        ))}
                        <TagCloud items={r.tags} />
                      </VStack>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
        <View className="mt-4 rounded-xl bg-background-100 p-6">
          <Text size="sm" weight="semibold" className="pb-3 text-typography-900">
            Earlier career, 2000 – 2014
          </Text>
          {earlierCareer.map((e) => (
            <HStack key={e.company} className="justify-between border-b border-outline-200 py-2">
              <Text size="sm" className="flex-1 pr-3 text-typography-800">
                {e.company} <Text size="sm" className="text-typography-500">· {e.role}</Text>
              </Text>
              <Text size="sm" className="text-typography-500">
                {e.dates}
              </Text>
            </HStack>
          ))}
        </View>
      </Anchor>

      {/* Products */}
      <Anchor id="products" className="pb-16">
        <Chapter n="iii." title="Products" />
        <VStack space="xl">
          {products.map((p) => (
            <View key={p.id} className="border-t-2 border-typography-900 pt-5">
              <HStack className="flex-wrap items-baseline justify-between gap-2">
                <Heading size="2xl" className="font-serif font-semibold text-typography-900">
                  {p.name}
                </Heading>
                <Text className="font-serif text-2xl text-primary-700">
                  {p.metric.value} <Text size="sm" className="text-typography-500">{p.metric.label}</Text>
                </Text>
              </HStack>
              <Text size="sm" className="pb-3 italic text-typography-500">
                {p.role}
              </Text>
              <Text className="pb-3 leading-7 text-typography-700">{p.summary}</Text>
              <Bullets items={p.highlights} markerClassName="bg-primary-600" />
              <Link onPress={() => openUrl(p.url)} className="pt-3">
                <LinkText className="text-sm font-semibold text-primary-700">{p.urlLabel} ↗</LinkText>
              </Link>
            </View>
          ))}
        </VStack>
      </Anchor>

      {/* Skills */}
      <Anchor id="skills" className="pb-16">
        <Chapter n="iv." title="Skills" />
        <View className="border-t border-outline-200">
          {skills.map((g) => (
            <View key={g.group} className={`border-b border-outline-200 py-4 ${desktop ? "flex-row gap-6" : "gap-1"}`}>
              <View className={desktop ? "w-[200px]" : ""}>
                <Text weight="semibold" className="text-typography-900">
                  {g.group}
                </Text>
                {!!g.years && (
                  <Text size="xs" className="text-primary-600">
                    {g.years}
                  </Text>
                )}
              </View>
              <Text size="sm" className="flex-1 leading-6 text-typography-600">
                {g.items.join(", ")}
              </Text>
            </View>
          ))}
        </View>
        <VStack space="sm" className="pt-8">
          <Text weight="semibold" className="text-typography-900">
            Certifications
          </Text>
          <Bullets items={certifications} markerClassName="bg-tertiary-500" />
        </VStack>
        <VStack space="sm" className="pt-8">
          <Text weight="semibold" className="text-typography-900">
            Industries
          </Text>
          <TagCloud items={industries} />
        </VStack>
      </Anchor>

      {/* Contact */}
      <Anchor id="contact">
        <Chapter n="v." title="Contact" />
        <Text className="pb-6 font-serif text-2xl leading-9 text-typography-800">
          {profile.availability}. The fastest way to reach me is email.
        </Text>
        <ContactButtons ink={c.ink} outlineTextClassName="text-typography-800" />
        <Text size="xs" className="pt-16 text-typography-400">
          © {new Date().getFullYear()} WireServers LLC · Built with React Native Web & @wireservers/react-natives
        </Text>
      </Anchor>
    </View>
  );
}

export default function Editorial() {
  const { isDesktop } = useBreakpoint();

  if (isDesktop) {
    return (
      <PageShell variant="editorial" scroll={false}>
        <View className="flex-1 flex-row">
          <View className="w-[360px] border-r border-outline-200 bg-background-50">
            <ScrollView contentContainerClassName="min-h-full">
              <Sidebar desktop />
            </ScrollView>
          </View>
          <ScrollView className="flex-1">
            <Content desktop />
          </ScrollView>
        </View>
      </PageShell>
    );
  }

  return (
    <PageShell variant="editorial">
      <View className="mb-10 border-b border-outline-200 bg-background-50">
        <Sidebar desktop={false} />
      </View>
      <Content desktop={false} />
    </PageShell>
  );
}
