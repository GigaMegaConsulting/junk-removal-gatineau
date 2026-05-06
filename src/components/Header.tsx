"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { siteConfig, availableLangs, type Lang } from "@/lib/site.config";
import { t } from "@/lib/copy";

interface Props {
  lang: Lang;
  altPath?: Partial<Record<Lang, string>>;
}

export function Header({ lang, altPath }: Props) {
  const c = siteConfig[lang];
  if (!c) return null;
  const tt = t(lang);
  const langs = availableLangs();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#e6e6e6]">
      <div className="mx-auto max-w-6xl px-4 md:px-6 h-[88px] flex items-center justify-between gap-4">
        {/* Phone (left) */}
        <a href={`tel:${siteConfig.phone}`} className="phone-chrome text-lg md:text-2xl">
          {siteConfig.phoneDisplay}
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm uppercase tracking-wide text-[#0a0a0a]">
          <Link href={`/${lang}`} className="font-medium border border-[#0a0a0a] px-3 py-1.5 rounded">
            {tt.home}
          </Link>

          {/* Services dropdown */}
          <div className="relative group">
            <button className="hover:underline inline-flex items-center gap-1 cursor-pointer">
              {tt.services}
              <span aria-hidden className="text-xs">▾</span>
            </button>
            <div className="absolute right-0 mt-2 w-72 bg-white border border-[#e6e6e6] rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition pointer-events-none group-hover:pointer-events-auto z-50">
              <ul className="py-2">
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

          {/* Locations dropdown */}
          <div className="relative group">
            <button className="hover:underline inline-flex items-center gap-1 cursor-pointer">
              {tt.locations}
              <span aria-hidden className="text-xs">▾</span>
            </button>
            <div className="absolute right-0 mt-2 w-64 bg-white border border-[#e6e6e6] rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition pointer-events-none group-hover:pointer-events-auto z-50 max-h-[60vh] overflow-y-auto">
              <ul className="py-2">
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
                return target ? (
                  <Link key={l} href={target} className="px-1.5 hover:underline">
                    {l.toUpperCase()}
                  </Link>
                ) : (
                  <span key={l} className="px-1.5 font-bold underline">{l.toUpperCase()}</span>
                );
              })}
            </div>
          )}
        </nav>

        {/* Hamburger button (mobile only) */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5"
          onClick={() => setOpen(o => !o)}
          aria-label="Menu"
          aria-expanded={open}
        >
          <span className={`block w-6 h-0.5 bg-[#0a0a0a] transition-transform duration-200 ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block w-6 h-0.5 bg-[#0a0a0a] transition-opacity duration-200 ${open ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-[#0a0a0a] transition-transform duration-200 ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {/* Mobile menu drawer */}
      {open && (
        <div className="md:hidden border-t border-[#e6e6e6] bg-white max-h-[calc(100dvh-88px)] overflow-y-auto overscroll-contain">
          <nav className="flex flex-col px-4 py-4 gap-1 text-sm text-[#0a0a0a]">
            <Link
              href={`/${lang}`}
              className="py-2.5 px-3 font-semibold border border-[#0a0a0a] rounded text-center uppercase tracking-wide"
              onClick={() => setOpen(false)}
            >
              {tt.home}
            </Link>

            <div className="pt-2 pb-1 px-3 text-xs uppercase tracking-widest text-[#888]">{tt.services}</div>
            {c.services.map(s => (
              <Link
                key={s.slug}
                href={`/${lang}/${s.slug}`}
                className="py-2 px-3 rounded hover:bg-[#f5f5f5]"
                onClick={() => setOpen(false)}
              >
                {s.title}
              </Link>
            ))}

            <Link
              href={`/${lang}/about`}
              className="py-2 px-3 rounded hover:bg-[#f5f5f5] uppercase tracking-wide"
              onClick={() => setOpen(false)}
            >
              {tt.about}
            </Link>

            <div className="pt-2 pb-1 px-3 text-xs uppercase tracking-widest text-[#888]">{tt.locations}</div>
            {c.locations.map((loc, i) => (
              <Link
                key={loc.slug}
                href={`/${lang}/${loc.slug}`}
                className="py-2 px-3 rounded hover:bg-[#f5f5f5]"
                onClick={() => setOpen(false)}
              >
                {siteConfig.locationNames[i]}
              </Link>
            ))}

            <Link
              href={`/${lang}/contact`}
              className="py-2 px-3 rounded hover:bg-[#f5f5f5] uppercase tracking-wide"
              onClick={() => setOpen(false)}
            >
              {tt.contact}
            </Link>

            {/* Language switcher */}
            {langs.length > 1 && (
              <div className="flex items-center gap-2 pt-3 mt-1 border-t border-[#e6e6e6] px-3">
                {langs.map(l => {
                  const target = l === lang ? null : (altPath?.[l] ?? `/${l}`);
                  return target ? (
                    <Link key={l} href={target} className="text-xs hover:underline" onClick={() => setOpen(false)}>
                      {l.toUpperCase()}
                    </Link>
                  ) : (
                    <span key={l} className="text-xs font-bold underline">{l.toUpperCase()}</span>
                  );
                })}
              </div>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
