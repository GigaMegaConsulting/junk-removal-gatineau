import type { Lang } from "./site.config";

export interface FaqEntry {
  q: string;
  a: string;
}

// FAQ content per language — written for long-tail SEO. Questions match
// real search queries we want to rank for (e.g. "combien coûte un débarras
// à Gatineau", "combien de temps prend un débarras", "que prennent-ils").
//
// The page renders these as both visible content AND a FAQPage JSON-LD
// schema block so Google can produce a rich snippet in SERP.

const FAQ: Record<Lang, FaqEntry[]> = {
  fr: [
    {
      q: "Combien coûte un débarras à Gatineau ?",
      a: "Le prix dépend du volume occupé dans notre camion, mesuré en fraction (1/8, 1/4, 1/2, plein camion). Pour donner un ordre de grandeur, un débarras résidentiel typique de quelques meubles et électroménagers se situe entre 150 $ et 350 $. Une vidange complète de sous-sol ou un débarras de succession peut aller de 400 $ à 800 $. Nous donnons toujours un prix fixe sur place avant de commencer — pas de surprises.",
    },
    {
      q: "Combien de temps prend un débarras ?",
      a: "La majorité des débarras résidentiels se font en 30 à 90 minutes, du moment où l'équipe arrive jusqu'au départ. Une maison complète ou une succession peut prendre une demi-journée. Notre équipe travaille rapidement et efficacement — chaque minute supplémentaire est du temps que vous ne récupérez pas, alors nous ne traînons pas.",
    },
    {
      q: "Que ramassez-vous, et que ne ramassez-vous pas ?",
      a: "Nous ramassons presque tout : meubles, électroménagers, matelas, télés, équipement électronique, articles de jardin, débris de rénovation, vêtements, jouets, vaisselle, matériaux de construction. Ce que nous ne pouvons PAS prendre : produits chimiques dangereux (peinture liquide, huile, solvants, batteries de voiture), explosifs, déchets médicaux, contenants sous pression. Si vous n'êtes pas certain, appelez-nous et on vous le confirme en 30 secondes.",
    },
    {
      q: "Devez-vous descendre les objets au rez-de-chaussée vous-même ?",
      a: "Non. Notre équipe se rend partout dans la maison — sous-sol, étages supérieurs, garage, cabanon. Vous nous montrez ce qui doit partir, on s'occupe du reste. Pas besoin de tout déplacer avant notre arrivée.",
    },
    {
      q: "Pouvez-vous venir le jour même ?",
      a: "Souvent, oui. Notre disponibilité de jour-même dépend du volume des appels et de la zone à Gatineau, mais nous offrons un service le jour-même dans environ 70 % des cas pour les demandes reçues le matin. Pour les urgences (déménagement, fermeture de vente), appelez directement plutôt que de remplir le formulaire.",
    },
    {
      q: "Puis-je obtenir une soumission gratuite avant de réserver ?",
      a: "Oui, et c'est sans engagement. Vous pouvez remplir notre formulaire de soumission gratuite ou appeler directement. Pour les gros projets (succession, vidange complète), nous pouvons faire une visite sur place sans frais avant de fixer le prix. Notre prix est toujours confirmé avant que nous commencions à charger.",
    },
    {
      q: "Quels modes de paiement acceptez-vous ?",
      a: "Argent comptant, virement Interac (e-Transfer), carte de crédit Visa et Mastercard, et carte de débit. Le paiement se fait à la fin du débarras, une fois que vous êtes satisfait du travail.",
    },
    {
      q: "Êtes-vous assurés ?",
      a: "Oui, notre équipe est entièrement assurée. Nous portons une couverture en responsabilité civile pour tout dommage potentiel à votre propriété pendant le chargement. Cela vous protège, et nous protège aussi — c'est non-négociable dans notre secteur.",
    },
    {
      q: "Que faites-vous des objets ramassés ?",
      a: "Nous ne jetons pas tout au dépotoir. Notre processus : 1) Articles encore utilisables → donnés à des organismes de charité locaux à Gatineau (meubles, vêtements, électroménagers fonctionnels). 2) Matériaux recyclables → centres de recyclage appropriés (métal, bois non traité, électronique). 3) Le reste → site d'enfouissement régional. Cette approche réduit notre empreinte environnementale tout en aidant la communauté.",
    },
    {
      q: "Desservez-vous tout le secteur de Gatineau ?",
      a: "Oui, nous desservons l'ensemble de la ville de Gatineau (Hull, Aylmer, Buckingham, Masson-Angers, Pointe-Gatineau, Templeton, Limbour) ainsi que les municipalités environnantes : Cantley, Chelsea, Val-des-Monts et La Pêche. Notre service couvre toute la région de l'Outaouais.",
    },
  ],
  en: [
    {
      q: "How much does junk removal cost in Gatineau?",
      a: "Pricing is based on the volume your items occupy in our truck, measured in fractions (1/8, 1/4, 1/2, full truck). For reference, a typical residential pickup of a few furniture pieces and appliances runs between $150 and $350. A full basement cleanout or estate clearing usually falls between $400 and $800. We always give you a firm price on-site before we start loading — no surprises.",
    },
    {
      q: "How long does a junk removal take?",
      a: "Most residential pickups are done in 30 to 90 minutes from arrival to departure. A whole-home cleanout or estate job can take half a day. Our crew works fast and efficiently — every extra minute is time you don't get back, so we don't waste it.",
    },
    {
      q: "What do you take, and what don't you take?",
      a: "We take almost everything: furniture, appliances, mattresses, TVs, electronics, yard items, renovation debris, clothing, toys, dishes, construction materials. What we CAN'T take: hazardous chemicals (liquid paint, oil, solvents, car batteries), explosives, medical waste, pressurized containers. If you're not sure, call us and we'll confirm in 30 seconds.",
    },
    {
      q: "Do I have to bring items down to the ground floor myself?",
      a: "No. Our crew goes anywhere in the home — basement, upper floors, garage, shed. You show us what's leaving, we handle the rest. No need to stage anything before we arrive.",
    },
    {
      q: "Can you come the same day?",
      a: "Often, yes. Our same-day availability depends on call volume and the area within Gatineau, but we accommodate same-day requests roughly 70% of the time when the call comes in by morning. For urgent jobs (moving day, real-estate closing), call directly instead of using the form.",
    },
    {
      q: "Can I get a free quote before booking?",
      a: "Yes, and it's no-obligation. You can use our free quote form or call directly. For large jobs (estate clearings, whole-home cleanouts), we can do an on-site walkthrough at no cost before pricing. The final price is always confirmed before we start loading.",
    },
    {
      q: "What payment methods do you accept?",
      a: "Cash, Interac e-Transfer, Visa, Mastercard, and debit card. Payment is collected at the end of the job, once you're satisfied with the work.",
    },
    {
      q: "Are you insured?",
      a: "Yes, our crew is fully insured. We carry liability coverage for any potential damage to your property during loading. That protects you and us — it's non-negotiable in this industry.",
    },
    {
      q: "What happens to the items you pick up?",
      a: "We don't dump everything at the landfill. Our process: 1) Reusable items → donated to local Gatineau charities (furniture, clothing, working appliances). 2) Recyclable materials → appropriate recycling centres (metal, untreated wood, electronics). 3) The rest → regional landfill. This approach lowers our environmental footprint while helping the community.",
    },
    {
      q: "Do you serve all of Gatineau?",
      a: "Yes, we serve the entire city of Gatineau (Hull, Aylmer, Buckingham, Masson-Angers, Pointe-Gatineau, Templeton, Limbour) and surrounding municipalities: Cantley, Chelsea, Val-des-Monts, and La Pêche. Our service covers the entire Outaouais region.",
    },
  ],
};

export function getFaq(lang: Lang): FaqEntry[] {
  return FAQ[lang] ?? [];
}
