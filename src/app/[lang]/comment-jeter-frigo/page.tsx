import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { resolveLang, langStaticParams } from "@/lib/lang";
import { availableLangs, type Lang } from "@/lib/site.config";
import { getFridgeGuide } from "@/lib/long-tail-content";
import { LongFormPage } from "@/components/LongFormPage";

interface Props {
  params: Promise<{ lang: string }>;
}

export function generateStaticParams() {
  return langStaticParams();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const validated = resolveLang(lang);
  if (!validated) return {};
  const c = getFridgeGuide(validated);
  return {
    title: c.title,
    description: c.metaDescription,
    alternates: {
      canonical: `/${validated}/comment-jeter-frigo`,
      languages: Object.fromEntries(availableLangs().map(l => [l, `/${l}/comment-jeter-frigo`])),
    },
  };
}

export default async function FridgeDisposalPage({ params }: Props) {
  const { lang } = await params;
  const validated = resolveLang(lang);
  if (!validated) notFound();
  const altPath: Partial<Record<Lang, string>> = {};
  for (const l of availableLangs()) altPath[l] = `/${l}/comment-jeter-frigo`;
  return (
    <LongFormPage
      lang={validated}
      slug="comment-jeter-frigo"
      content={getFridgeGuide(validated)}
      altPath={altPath}
    />
  );
}
