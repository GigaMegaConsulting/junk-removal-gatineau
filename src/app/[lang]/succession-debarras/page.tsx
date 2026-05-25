import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { resolveLang, langStaticParams } from "@/lib/lang";
import { availableLangs, type Lang } from "@/lib/site.config";
import { getEstateCleanoutGuide } from "@/lib/long-tail-content";
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
  const c = getEstateCleanoutGuide(validated);
  return {
    title: c.title,
    description: c.metaDescription,
    alternates: {
      canonical: `/${validated}/succession-debarras`,
      languages: Object.fromEntries(availableLangs().map(l => [l, `/${l}/succession-debarras`])),
    },
  };
}

export default async function EstateCleanoutPage({ params }: Props) {
  const { lang } = await params;
  const validated = resolveLang(lang);
  if (!validated) notFound();
  const altPath: Partial<Record<Lang, string>> = {};
  for (const l of availableLangs()) altPath[l] = `/${l}/succession-debarras`;
  return (
    <LongFormPage
      lang={validated}
      slug="succession-debarras"
      content={getEstateCleanoutGuide(validated)}
      altPath={altPath}
    />
  );
}
