import type { Metadata } from "next";
import { siteConfig } from "@/lib/site.config";
import "./globals.css";

const primary = siteConfig[siteConfig.primaryLang]!;

export const metadata: Metadata = {
  metadataBase: new URL(`https://${siteConfig.domain}`),
  title: { default: primary.seoTitle, template: `%s | ${primary.brandName}` },
  description: primary.seoDescription,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const ldJson = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: primary.brandName,
    description: primary.seoDescription,
    url: `https://${siteConfig.domain}`,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.city,
      addressRegion: siteConfig.state,
      addressCountry: "CA",
    },
    areaServed: siteConfig.locationNames.map(name => ({ "@type": "City", name })),
  };

  return (
    <html lang={siteConfig.primaryLang}>
      <body>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJson) }} />
      </body>
    </html>
  );
}
