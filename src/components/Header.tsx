import Link from "next/link";
import { siteConfig, availableLangs, type Lang } from "@/lib/site.config";
import { t } from "@/lib/copy";

interface Props {
  lang: Lang;
  // for the language switcher: optional mapping from current slug to the same
  // page in the other language (different slug per language).
  altPath?: Partial<Record<Lang, string>>;
}

export function Header({ lang, altPath }: Props) {
  const c = siteConfig[lang];
  if (!c) return null;
  const tt = t(lang);
  const langs = availableLangs();

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#e6e6e6]">
      <div className="mx-auto max-w-6xl px-4 md:px-6 h-[88px] flex items-center justify-between gap-4">
        {/* Phone chrome graphic (left) */}
        <a href={`tel:${siteConfig.phone}`} className="phone-chrome text-lg md:text-2xl">
          {siteConfig.phoneDisplay}
        </a>

        {/* Nav (right) */}
        <nav className="hidden md:flex items-center gap-6 text-sm uppercase tracking-wide text-[#0a0a0a]">
          <Link href={`/${lang}`} className="font-medium border border-[#0a0a0a] px-3 py-1.5 rounded">
            {tt.home}
          </Link>

          {/* Services dropdown.
              Two tricks to make the panel stay open as the cursor drops onto items:
              (1) The wrapping div has full header height (h-full) so hover state stays
                  active across the whole nav row, not just the trigger text.
              (2) The panel uses `top-full` (no margin gap) and a transparent pt-2
                  spacer inside, so cursor never crosses dead space between trigger
                  and panel. */}
          <div className="relative group h-full flex items-center">
            <span className="cursor-pointer uppercase">
              {tt.services}
            </span>
            <div className="absolute right-0 top-full pt-2 w-72 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition pointer-events-none group-hover:pointer-events-auto z-50">
              <ul className="bg-white border border-[#e6e6e6] rounded-md shadow-lg py-2">
                {c.services.map(s => (
                  <li key={s.slug}>
                    <Link
                      href={`/${lang}/${s.slug}`}
                      className="block px-4 py-2 text-[13px] normal-case tracking-normal text-[#0a0a0a] hover:bg-[#f5f5f5]"
                    >
                      {s.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <Link href={`/${lang}/about`} className="hover:underline">{tt.about}</Link>

          {/* Locations dropdown — same hover-bridge pattern as Services */}
          <div className="relative group h-full flex items-center">
            <span className="cursor-pointer uppercase">
              {tt.locations}
            </span>
            <div className="absolute right-0 top-full pt-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition pointer-events-none group-hover:pointer-events-auto z-50">
              <ul className="bg-white border border-[#e6e6e6] rounded-md shadow-lg py-2 max-h-[60vh] overflow-y-auto">
                {c.locations.map((loc, i) => (
                  <li key={loc.slug}>
                    <Link
                      href={`/${lang}/${loc.slug}`}
                      className="block px-4 py-2 text-[13px] normal-case tracking-normal text-[#0a0a0a] hover:bg-[#f5f5f5]"
                    >
                      {siteConfig.locationNames[i]}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <Link href={`/${lang}/contact`} className="hover:underline">{tt.contact}</Link>

          {/* Language switcher */}
          {langs.length > 1 && (
            <div className="flex items-center gap-1 text-xs ml-2 pl-4 border-l border-[#e6e6e6]">
              {langs.map(l => {
                const target = l === lang ? null : (altPath?.[l] ?? `/${l}`);
                const active = l === lang;
                return target ? (
                  <Link
                    key={l}
                    href={target}
                    className="px-1.5 hover:underline"
                  >
                    {l.toUpperCase()}
                  </Link>
                ) : (
                  <span key={l} className="px-1.5 font-bold underline">{l.toUpperCase()}</span>
                );
              })}
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}
