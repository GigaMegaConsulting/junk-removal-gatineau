import Link from "next/link";
import { type Lang } from "@/lib/site.config";
import {
  getMattressGuide,
  getFridgeGuide,
  getSofaGuide,
  getElectronicsGuide,
  getTvGuide,
  getTiresGuide,
  getPostRenoGuide,
  getMovingDayGuide,
  getPrepGuide,
} from "@/lib/long-tail-content";

interface Props {
  lang: Lang;
}

// Surfaces the long-tail "comment-jeter" + "debarras-*" guides on the
// homepage so Google sees them through the link graph (not just the
// sitemap) and visitors browsing the homepage find the high-intent
// informational content directly.
//
// Order matters: most common items first (mattress, fridge), then
// situational guides (renovation, moving), then operational (prep).
export function Guides({ lang }: Props) {
  const heading =
    lang === "fr"
      ? "Guides pour vous débarrasser des encombrants"
      : "Guides for getting rid of bulky items";
  const sub =
    lang === "fr"
      ? "Ce qui s'accepte, ce qui se recycle, et la manière la plus simple de s'en débarrasser à Gatineau."
      : "What's accepted, what's recycled, and the easiest way to get rid of it in Gatineau.";

  const items = [
    { slug: "comment-jeter-matelas", content: getMattressGuide(lang) },
    { slug: "comment-jeter-frigo", content: getFridgeGuide(lang) },
    { slug: "comment-jeter-sofa", content: getSofaGuide(lang) },
    { slug: "comment-jeter-electroniques", content: getElectronicsGuide(lang) },
    { slug: "comment-jeter-television", content: getTvGuide(lang) },
    { slug: "comment-jeter-pneus", content: getTiresGuide(lang) },
    { slug: "debarras-renovation", content: getPostRenoGuide(lang) },
    { slug: "debarras-demenagement", content: getMovingDayGuide(lang) },
    { slug: "preparation", content: getPrepGuide(lang) },
  ];

  return (
    <section id="guides" className="bg-[#fafafa] py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="font-display text-2xl md:text-4xl mb-3 leading-tight">{heading}</h2>
        <p className="text-[#1a1a1a] text-base md:text-lg mb-10 max-w-3xl leading-relaxed">{sub}</p>
        <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map(item => (
            <li key={item.slug}>
              <Link
                href={`/${lang}/${item.slug}`}
                className="block h-full bg-white rounded-md p-6 hover:shadow-md transition-shadow border border-[#ededed] hover:border-[#16a34a]"
              >
                <h3 className="font-display text-lg md:text-xl mb-2 leading-snug text-[#0a0a0a]">
                  {item.content.title}
                </h3>
                <p className="text-sm text-[#5a5a5a] leading-relaxed">{item.content.metaDescription}</p>
                <span className="mt-3 inline-block text-xs uppercase tracking-wide font-semibold text-[#16a34a]">
                  {lang === "fr" ? "Lire le guide" : "Read the guide"} →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
