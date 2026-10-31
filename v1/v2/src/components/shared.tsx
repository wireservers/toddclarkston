import React from "react";
import { View } from "react-native";
import { Feather } from "@expo/vector-icons";
import {
  Button,
  ButtonIcon,
  ButtonText,
  HStack,
  Icon,
  Link,
  LinkText,
  Tag,
  TagText,
  Text,
  VStack,
  useToast,
} from "@wireservers/react-natives";
import { downloads, profile } from "../data/resume";
import { openUrl } from "./layout";

type FeatherName = React.ComponentProps<typeof Feather>["name"];

/**
 * Feather icon bound for the library's `as` prop pattern. The library passes
 * a Tailwind className, which a glyph font can't use for color on web, so the
 * color is fixed here instead.
 */
export const icon = (name: FeatherName, color: string, size = 16) => {
  const C = ({ className: _className, ...p }: any) => <Feather name={name} size={size} color={color} {...p} />;
  C.displayName = `Feather(${name})`;
  return C;
};

export const contactItems: { key: string; label: string; href: string; icon: FeatherName }[] = [
  { key: "email", label: profile.email, href: profile.emailHref, icon: "mail" },
  { key: "phone", label: profile.phone, href: profile.phoneHref, icon: "phone" },
  { key: "linkedin", label: profile.linkedinLabel, href: profile.linkedin, icon: "linkedin" },
  { key: "github", label: profile.githubLabel, href: profile.github, icon: "github" },
];

/** Vertical list of contact links with icons. */
export function ContactList({ color, textClassName }: { color: string; textClassName?: string }) {
  return (
    <VStack space="md">
      {contactItems.map((c) => (
        <Link key={c.key} onPress={() => openUrl(c.href)} accessibilityLabel={c.label}>
          <HStack space="sm" className="items-center">
            <Icon as={icon(c.icon, color)} size={16} />
            <LinkText className={`no-underline ${textClassName ?? "text-typography-700"}`}>{c.label}</LinkText>
          </HStack>
        </Link>
      ))}
    </VStack>
  );
}

/** Primary CTA pair: email + LinkedIn. */
export function ContactButtons({
  size = "md",
  ink,
  onAccent = "#ffffff",
  solidClassName,
  outlineClassName,
  outlineTextClassName,
}: {
  size?: "sm" | "md" | "lg";
  /** Icon color on the outline button. */
  ink: string;
  /** Icon color on the solid button. */
  onAccent?: string;
  solidClassName?: string;
  outlineClassName?: string;
  outlineTextClassName?: string;
}) {
  const toast = useToast();
  return (
    <HStack space="sm" className="flex-wrap gap-y-2">
      <Button
        size={size}
        className={solidClassName}
        onPress={() => {
          openUrl(profile.emailHref);
          toast.show({ title: "Opening email", description: profile.email, status: "info", duration: 2500 });
        }}
      >
        <ButtonIcon as={icon("mail", onAccent)} />
        <ButtonText>Get in touch</ButtonText>
      </Button>
      <Button size={size} variant="outline" action="secondary" className={outlineClassName} onPress={() => openUrl(profile.linkedin)}>
        <ButtonIcon as={icon("linkedin", ink)} />
        <ButtonText className={outlineTextClassName}>LinkedIn</ButtonText>
      </Button>
    </HStack>
  );
}

/** Resume downloads: each format offers PDF and Word. */
export function DownloadList({
  ink,
  compact = false,
  labelClassName,
  buttonClassName,
  buttonTextClassName,
}: {
  /** Icon color on the outline buttons. */
  ink: string;
  compact?: boolean;
  labelClassName?: string;
  buttonClassName?: string;
  buttonTextClassName?: string;
}) {
  return (
    <VStack space={compact ? "sm" : "md"}>
      {downloads.map((d) => (
        <View key={d.label} className="flex-row flex-wrap items-center justify-between gap-2">
          <VStack className="min-w-[110px] flex-1">
            <Text size="sm" weight="semibold" className={labelClassName}>
              {d.label} CV
            </Text>
            {!compact && (
              <Text size="xs" className="text-typography-500">
                {d.description}
              </Text>
            )}
          </VStack>
          <HStack space="xs">
            <Button size="xs" variant="outline" action="secondary" className={buttonClassName} onPress={() => openUrl(d.pdf)} accessibilityLabel={`Download ${d.label} CV as PDF`}>
              <ButtonIcon as={icon("download", ink, 14)} />
              <ButtonText className={buttonTextClassName}>PDF</ButtonText>
            </Button>
            <Button size="xs" variant="outline" action="secondary" className={buttonClassName} onPress={() => openUrl(d.docx)} accessibilityLabel={`Download ${d.label} CV as Word`}>
              <ButtonIcon as={icon("file-text", ink, 14)} />
              <ButtonText className={buttonTextClassName}>Word</ButtonText>
            </Button>
          </HStack>
        </View>
      ))}
    </VStack>
  );
}

/** Wrapping cluster of tags. */
export function TagCloud({
  items,
  action = "muted",
  variant = "subtle",
  size = "sm",
  className,
  textClassName,
}: {
  items: string[];
  action?: React.ComponentProps<typeof Tag>["action"];
  variant?: React.ComponentProps<typeof Tag>["variant"];
  size?: React.ComponentProps<typeof Tag>["size"];
  className?: string;
  textClassName?: string;
}) {
  return (
    <View className="flex-row flex-wrap gap-2">
      {items.map((t) => (
        <Tag key={t} action={action} variant={variant} size={size} className={className}>
          <TagText className={textClassName}>{t}</TagText>
        </Tag>
      ))}
    </View>
  );
}

/** Bulleted list with a themed marker. */
export function Bullets({ items, markerClassName = "bg-primary-500", textClassName = "text-typography-700" }: { items: string[]; markerClassName?: string; textClassName?: string }) {
  return (
    <VStack space="sm">
      {items.map((b, i) => (
        <HStack key={i} space="sm" className="items-start">
          <View className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${markerClassName}`} />
          <Text size="sm" className={`flex-1 leading-6 ${textClassName}`}>
            {b}
          </Text>
        </HStack>
      ))}
    </VStack>
  );
}
