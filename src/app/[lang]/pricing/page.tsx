import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { resolveLang, langStaticParams } from "@/lib/lang";
import { siteConfig, availableLangs, type Lang } from "@/lib/site.config";
import { t } from "@/lib/copy";
import { getPricing } from "@/lib/pricing";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageCTA } from "@/components/PageCTA";

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
  const c = siteConfig[validated]!;
  const tt = t(validated);
  const titleByLang = {
    fr: `Combien coûte un débarras à ${siteConfig.city} ? — ${c.brandName}`,
    en: `How much does junk removal cost in ${siteConfig.city}? — ${c.brandName}`,
  };
  return {
    title: titleByLang[validated],
    description: tt.pricingIntro + " " + siteConfig.city,
    alternates: {
      canonical: `/${validated}/pricing`,
      languages: Object.fromEntries(availableLangs().map(l => [l, `/${l}/pricing`])),
    },
  };
}

export default async function PricingPage({ params }: Props) {
  const { lang } = await params;
  const validated = resolveLang(lang);
  if (!validated) notFound();
  const c = siteConfig[validated]!;
  const tt = t(validated);
  const p = getPricing(validated);

  const altPath: Partial<Record<Lang, string>> = {};
  for (const l of availableLangs()) altPath[l] = `/${l}/pricing`;

  const headlineByLang = {
    fr: `Combien coûte un débarras à ${siteConfig.city} ?`,
    en: `How much does junk removal cost in ${siteConfig.city}?`,
  };

  return (
    <>
      <Header lang={validated} altPath={altPath} />
      <main className="bg-white">
        <section className="pt-12 md:pt-16 pb-6">
          <div className="mx-auto max-w-3xl px-6">
            <h1 className="font-bold text-3xl md:text-5xl leading-tight mb-3">
              {headlineByLang[validated]}
            </h1>
            <p className="text-[#1a1a1a] text-base md:text-lg leading-relaxed">
              {p.intro}
            </p>
          </div>
        </section>

        <section className="py-8 md:py-12">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="font-display text-2xl md:text-3xl mb-4">{p.howWePriceHeading}</h2>
            <div className="space-y-4 text-[#1a1a1a] leading-relaxed">
              {p.howWePriceParas.map((para, i) => <p key={i}>{para}</p>)}
            </div>
          </div>
        </section>

        <section className="py-8 md:py-12 bg-[#fafafa]">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="font-display text-2xl md:text-3xl mb-6">{p.tiersHeading}</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {p.tiers.map((tier, i) => (
                <div
                  key={i}
                  className="bg-white border border-[#e6e6e6] rounded-md p-5 flex flex-col"
                >
                  <div className="text-sm uppercase tracking-wide text-[#5a5a5a] mb-1">
                    {tier.fraction}
                  </div>
                  <div className="font-display text-xl mb-1">{tier.label}</div>
                  <div className="text-2xl font-bold text-[#16a34a] mb-3">{tier.priceRange}</div>
                  <p className="text-sm text-[#1a1a1a] leading-relaxed">{tier.fits}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-8 md:py-12">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="font-display text-2xl md:text-3xl mb-4">{p.factorsHeading}</h2>
            <div className="space-y-4 text-[#1a1a1a] leading-relaxed">
              {p.factorsParas.map((para, i) => <p key={i}>{para}</p>)}
            </div>
          </div>
        </section>

        <section className="py-8 md:py-12 bg-[#fafafa]">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="font-display text-2xl md:text-3xl mb-4">{p.noSurpriseHeading}</h2>
            <div className="space-y-4 text-[#1a1a1a] leading-relaxed">
              {p.noSurpriseParas.map((para, i) => <p key={i}>{para}</p>)}
            </div>
          </div>
        </section>

        <PageCTA lang={validated} />
      </main>
      <Footer lang={validated} />
    </>
  );
}
