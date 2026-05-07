import type { Lang } from "./site.config";

export interface PricingTier {
  label: string;
  fraction: string; // visual hint
  priceRange: string;
  fits: string;
}

interface PricingContent {
  intro: string;
  howWePriceHeading: string;
  howWePriceParas: string[];
  tiersHeading: string;
  tiers: PricingTier[];
  factorsHeading: string;
  factorsParas: string[];
  noSurpriseHeading: string;
  noSurpriseParas: string[];
}

const PRICING: Record<Lang, PricingContent> = {
  fr: {
    intro: "Au lieu de tarifs cachés ou de surprises de dernière minute, notre prix est basé sur le volume réel que vos articles occupent dans notre camion. Voici exactement comment ça fonctionne — et combien vous devriez vous attendre à payer pour un débarras à Gatineau.",
    howWePriceHeading: "Comment nous calculons le prix",
    howWePriceParas: [
      "Notre camion est divisé visuellement en huit. Une fois vos articles chargés, nous mesurons l'espace réellement occupé : 1/8 du camion, 1/4, 1/3, 1/2, 5/8, 3/4, 7/8, ou plein. Le prix correspond à cette fraction.",
      "Nous donnons toujours un prix fixe AVANT de commencer le chargement. Vous voyez le prix, vous acceptez (ou pas), et seulement ensuite nous chargeons. Pas de \"oh finalement c'était plus que prévu\" en cours de route.",
      "Tous nos prix incluent le ramassage, le chargement, le transport, le tri pour recyclage et donation, et le dépôt final au site approprié. Pas de frais cachés pour la main-d'œuvre, le carburant ou l'élimination.",
    ],
    tiersHeading: "Tarifs typiques pour Gatineau",
    tiers: [
      { label: "Mini débarras", fraction: "1/8 — 1/4 du camion", priceRange: "75 $ — 175 $", fits: "Quelques chaises, un fauteuil, une télévision, un vélo, quelques boîtes." },
      { label: "Petit débarras", fraction: "1/4 — 1/2 du camion", priceRange: "175 $ — 325 $", fits: "Mobilier de chambre complet, gros électroménager (frigo, laveuse), matelas et sommier, plus quelques articles." },
      { label: "Moyen débarras", fraction: "1/2 — 3/4 du camion", priceRange: "325 $ — 500 $", fits: "Vidange de garage ou de cabanon. Salon complet (sofa, tables, télés). Petits débris de rénovation." },
      { label: "Gros débarras", fraction: "3/4 — plein camion", priceRange: "500 $ — 750 $", fits: "Vidange de sous-sol complet. Débarras de succession partiel. Démolition d'une cuisine." },
      { label: "Multi-camion", fraction: "2 camions et plus", priceRange: "À partir de 800 $", fits: "Débarras de propriété complète, succession majeure, gros chantier de rénovation." },
    ],
    factorsHeading: "Ce qui peut faire varier le prix",
    factorsParas: [
      "Articles très lourds (piano, coffre-fort, machinerie industrielle) peuvent ajouter un supplément de manutention si la main-d'œuvre supplémentaire est requise pour les manipuler de façon sécuritaire.",
      "Accès difficile (3e étage sans ascenseur, escalier extérieur étroit, propriété en retrait) peut ajouter du temps. Nous le mentionnons toujours dans le prix initial.",
      "Matériaux nécessitant une élimination spéciale (gros électroniques, matelas dans certaines municipalités) peuvent ajouter des frais de site spécifiques que nous facturons au coût réel.",
    ],
    noSurpriseHeading: "Notre garantie « pas de surprise »",
    noSurpriseParas: [
      "Le prix qu'on vous donne sur place est le prix final. Si vous trouvez un autre article à ajouter pendant qu'on charge, on ajuste à la hausse seulement avec votre accord. Si on charge moins de volume que prévu, on ajuste à la baisse — sans demander.",
      "Soumission gratuite, sans obligation. Vous pouvez nous appeler ou remplir le formulaire pour obtenir une estimation préliminaire en 5 minutes. Pour les gros projets, nous offrons une visite sur place gratuite avant de fixer le prix.",
    ],
  },
  en: {
    intro: "Instead of hidden fees or last-minute surprises, our pricing is based on the actual volume your items take up in our truck. Here's exactly how it works — and what you should expect to pay for a junk removal in Gatineau.",
    howWePriceHeading: "How we price",
    howWePriceParas: [
      "Our truck is visually divided into eighths. Once your items are loaded, we measure how much space they actually occupy: 1/8 of the truck, 1/4, 1/3, 1/2, 5/8, 3/4, 7/8, or full. The price matches that fraction.",
      "We always give you a firm price BEFORE we start loading. You see the price, you accept (or not), and only then do we start. No mid-job \"oh actually it's more than I thought\".",
      "All prices include pickup, loading, transport, sorting for recycling and donation, and final disposal at the proper site. No hidden labour, fuel, or disposal fees on top.",
    ],
    tiersHeading: "Typical pricing for Gatineau",
    tiers: [
      { label: "Mini pickup", fraction: "1/8 — 1/4 of truck", priceRange: "$75 — $175", fits: "A few chairs, an armchair, a TV, a bike, a handful of boxes." },
      { label: "Small pickup", fraction: "1/4 — 1/2 of truck", priceRange: "$175 — $325", fits: "Full bedroom set, a major appliance (fridge, washer), mattress and box spring, plus a few extras." },
      { label: "Medium pickup", fraction: "1/2 — 3/4 of truck", priceRange: "$325 — $500", fits: "Garage or shed cleanout. Full living room (sofa, tables, TVs). Small renovation debris." },
      { label: "Large pickup", fraction: "3/4 — full truck", priceRange: "$500 — $750", fits: "Whole basement cleanout. Partial estate clearing. Kitchen demolition." },
      { label: "Multi-truck", fraction: "2 trucks or more", priceRange: "From $800", fits: "Full property cleanout, major estate, large renovation job." },
    ],
    factorsHeading: "What can shift the price",
    factorsParas: [
      "Very heavy items (piano, safe, industrial machinery) may add a handling surcharge if extra crew is needed to move them safely.",
      "Difficult access (3rd floor with no elevator, narrow exterior staircase, set-back property) can add time. We always flag this in the initial quote.",
      "Materials needing special disposal (large electronics, mattresses in certain municipalities) may carry specific site fees that we pass through at cost.",
    ],
    noSurpriseHeading: "Our \"no surprise\" guarantee",
    noSurpriseParas: [
      "The price we quote on-site is the final price. If you find an extra item to add while we're loading, we'll only raise the price with your explicit OK. If we end up loading less volume than expected, we lower the price — without being asked.",
      "Free quote, no obligation. Call us or use the form for a preliminary estimate in 5 minutes. For large jobs, we offer a free on-site walkthrough before setting the price.",
    ],
  },
};

export function getPricing(lang: Lang): PricingContent {
  return PRICING[lang];
}
