import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { resolveLang, langStaticParams } from "@/lib/lang";
import { availableLangs, type Lang } from "@/lib/site.config";
import { getCommercialCleanoutGuide } from "@/lib/long-tail-content";
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
  const c = getCommercialCleanoutGuide(validated);
  return {
    title: c.title,
    description: c.metaDescription,
    alternates: {
      canonical: `/${validated}/debarras-commercial`,
      languages: Object.fromEntries(availableLangs().map(l => [l, `/${l}/debarras-commercial`])),
    },
  };
}

export default async function CommercialCleanoutPage({ params }: Props) {
  const { lang } = await params;
  const validated = resolveLang(lang);
  if (!validated) notFound();
  const altPath: Partial<Record<Lang, string>> = {};
  for (const l of availableLangs()) altPath[l] = `/${l}/debarras-commercial`;
  return (
    <LongFormPage
      lang={validated}
      slug="debarras-commercial"
      content={getCommercialCleanoutGuide(validated)}
      altPath={altPath}
    />
  );
}
