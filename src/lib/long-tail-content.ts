// Bilingual long-tail SEO landing pages. Each entry is a self-contained
// guide that answers a high-intent query Google sees ("comment se debarrasser
// d'un matelas a Gatineau", "how to prepare for junk removal pickup"...).
//
// Pricing references are deliberately omitted — see the no-pricing memory.

import type { Lang } from "./site.config";

export interface LongFormSection {
  heading: string;
  paragraphs: string[];
}

export interface LongFormContent {
  title: string;
  metaDescription: string;
  intro: string;
  sections: LongFormSection[];
  closing: string;
}

const MATTRESS: Record<Lang, LongFormContent> = {
  fr: {
    title: "Comment se débarrasser d'un matelas à Gatineau",
    metaDescription: "Le guide complet pour vous débarrasser d'un vieux matelas à Gatineau : ce que la collecte municipale accepte, les centres de recyclage, et le ramassage à domicile.",
    intro: "Un vieux matelas est l'un des objets les plus difficiles à jeter. Il est trop volumineux pour la collecte ordinaire, plusieurs municipalités le refusent comme déchet régulier, et le transporter sans véhicule adapté est presque impossible. Voici exactement vos options à Gatineau.",
    sections: [
      {
        heading: "Pourquoi c'est compliqué de jeter un matelas",
        paragraphs: [
          "Un matelas double pèse environ 25 kg, un matelas queen approche les 35 kg, et un king peut dépasser 50 kg. Ajoutez à ça un sommier (box spring) et vous avez deux gros morceaux qui ne rentrent pas dans une voiture standard.",
          "À Gatineau comme dans la plupart des villes québécoises, la collecte municipale n'accepte pas les matelas dans les ordures hebdomadaires. Ils sont considérés comme des « encombrants » qui nécessitent une collecte spéciale, un dépôt à l'écocentre, ou un service privé.",
          "En plus, environ 90 % d'un matelas peut être recyclé : le métal des ressorts, le bois du cadre, la mousse, le tissu. C'est pourquoi il existe maintenant des filières de recyclage spécialisées dans la région.",
        ],
      },
      {
        heading: "Vos options à Gatineau",
        paragraphs: [
          "1. Les écocentres de la Ville de Gatineau acceptent les matelas gratuitement pour les résidents. Vous devez les transporter vous-même et présenter une preuve de résidence. C'est l'option la moins chère mais nécessite un véhicule adapté.",
          "2. La collecte des encombrants : Gatineau offre quelques collectes annuelles d'encombrants par secteur. Il faut sortir le matelas la veille au bord de la rue et respecter le calendrier de votre quartier. C'est gratuit mais peu flexible.",
          "3. Le ramassage à domicile par un service privé comme le nôtre : nous venons chez vous, sortons le matelas (peu importe l'étage), le chargeons et le redirigeons vers un centre de recyclage spécialisé. C'est l'option la plus rapide et sans effort. Soumission gratuite par téléphone ou formulaire.",
          "4. Don : si le matelas est en bon état (moins de 8 ans, pas de taches ni de déchirures), certains organismes de charité l'acceptent. Mais la plupart refusent maintenant les matelas usagés pour des raisons d'hygiène.",
        ],
      },
      {
        heading: "Ce qu'il faut éviter",
        paragraphs: [
          "Ne mettez pas un matelas dans le bac à ordures ordinaire — il sera laissé sur place et vous risquez une amende municipale.",
          "N'abandonnez jamais un matelas dans une ruelle, un terrain vague ou près d'un conteneur commercial. C'est considéré comme du dépôt sauvage à Gatineau et passible d'amendes salées.",
          "Évitez de couper le matelas en morceaux pour le faire entrer dans un sac à ordures — les ressorts et la mousse créent un danger pour les éboueurs et le matériel de recyclage.",
        ],
      },
      {
        heading: "Ramassage de matelas à domicile",
        paragraphs: [
          "Notre service de débarras résidentiel à Gatineau est conçu pour exactement ce genre de situation. Nous venons chez vous (Hull, Aylmer, Buckingham, Pointe-Gatineau, ou n'importe quel secteur), sortons le matelas peu importe l'étage, et l'acheminons vers un centre de recyclage approprié.",
          "Nous pouvons aussi prendre votre vieux sommier en même temps, et n'importe quel autre encombrant que vous voulez voir disparaître : meubles de chambre, tables, chaises, électroménagers. Demandez une soumission gratuite — sans engagement, et nous donnons le prix sur place avant de commencer.",
        ],
      },
    ],
    closing: "Un matelas qui dort dans un coin du sous-sol depuis trois ans, c'est de l'espace que vous ne récupérez pas. Appelez-nous ou remplissez le formulaire de soumission gratuite pour planifier un ramassage à votre convenance.",
  },
  en: {
    title: "How to Get Rid of a Mattress in Gatineau",
    metaDescription: "Complete guide to disposing of an old mattress in Gatineau: what municipal pickup accepts, recycling centres, and at-home pickup options.",
    intro: "An old mattress is one of the hardest items to get rid of. It's too bulky for regular trash pickup, several municipalities refuse it as standard waste, and moving it without a proper vehicle is nearly impossible. Here's exactly what your options are in Gatineau.",
    sections: [
      {
        heading: "Why mattresses are hard to throw out",
        paragraphs: [
          "A double mattress weighs about 25 kg, a queen approaches 35 kg, and a king can top 50 kg. Add a box spring and you have two large pieces that don't fit in a standard car.",
          "In Gatineau, as in most Quebec cities, weekly municipal trash pickup does NOT accept mattresses. They're classified as bulky items that require special pickup, drop-off at an eco-centre, or a private hauling service.",
          "Plus, about 90% of a mattress is actually recyclable: the metal in the springs, wood in the frame, foam, and fabric. That's why specialized recycling streams now exist in the region.",
        ],
      },
      {
        heading: "Your options in Gatineau",
        paragraphs: [
          "1. The City of Gatineau eco-centres accept mattresses free of charge for residents. You have to transport it yourself and show proof of residency. Cheapest option but requires a suitable vehicle.",
          "2. Bulky-item collection: Gatineau offers a few annual bulky-item pickup days per sector. You leave the mattress at the curb the night before and follow your neighbourhood's schedule. Free but inflexible.",
          "3. At-home pickup by a private service like ours: we come to your home, carry the mattress out (any floor), load it up, and route it to a specialized recycling centre. Fastest, zero-effort option. Free quote by phone or form.",
          "4. Donation: if the mattress is in good condition (under 8 years old, no stains or tears), some charities accept it. But most now refuse used mattresses for hygiene reasons.",
        ],
      },
      {
        heading: "What to avoid",
        paragraphs: [
          "Don't put a mattress in the regular trash bin — it'll be left on site and you risk a municipal fine.",
          "Never dump a mattress in an alley, vacant lot, or near a commercial bin. That's illegal dumping in Gatineau and carries hefty fines.",
          "Don't cut the mattress into pieces to fit it in a trash bag — the springs and foam create hazards for sanitation workers and recycling equipment.",
        ],
      },
      {
        heading: "At-home mattress pickup",
        paragraphs: [
          "Our residential junk removal service in Gatineau is built for exactly this kind of situation. We come to your home (Hull, Aylmer, Buckingham, Pointe-Gatineau, or any sector), get the mattress out regardless of which floor it's on, and route it to an appropriate recycling centre.",
          "We can also take your old box spring at the same time, plus any other unwanted item you want gone: bedroom furniture, tables, chairs, appliances. Request a free quote — no obligation, and we give the price on-site before we start.",
        ],
      },
    ],
    closing: "A mattress that's been sitting in your basement corner for three years is space you're not getting back. Call us or fill out the free quote form to schedule a pickup at your convenience.",
  },
};

const PREP: Record<Lang, LongFormContent> = {
  fr: {
    title: "Comment préparer un débarras à Gatineau",
    metaDescription: "Guide pratique pour bien préparer votre débarras à Gatineau : trier, accès, items spéciaux, et ce que notre équipe gère sur place.",
    intro: "Un débarras bien préparé prend deux fois moins de temps et garantit qu'on ne laisse rien derrière. Voici exactement ce qu'il faut faire (et ne pas faire) avant que notre équipe arrive chez vous.",
    sections: [
      {
        heading: "Triez ce qui part vs ce qui reste",
        paragraphs: [
          "La meilleure préparation, c'est mentale : décidez clairement ce que vous gardez et ce qui part. Pas besoin de déplacer les articles — juste savoir lesquels partent.",
          "Si certains articles vous font hésiter, mettez-les dans une zone séparée. Notre équipe ne touche jamais à un objet sans confirmation, et au moment du débarras vous pouvez décider à la dernière minute.",
          "Pour les meubles avec des tiroirs ou des armoires, jetez un œil rapide à l'intérieur pour récupérer documents importants, bijoux, et papiers — c'est le moment idéal pour le faire.",
        ],
      },
      {
        heading: "Vérifiez l'accès",
        paragraphs: [
          "Notre camion mesure environ 6 mètres de long. Si votre entrée de garage est étroite ou si une voiture bloque, prévoyez de la déplacer pour qu'on puisse stationner directement devant l'entrée principale.",
          "Si les articles sont au sous-sol ou aux étages supérieurs, ne vous inquiétez pas — notre équipe se rend partout. Mais si l'escalier a un virage serré ou si une porte étroite va causer un blocage avec un sofa, mentionnez-le au téléphone pour qu'on prévoie le bon équipement.",
          "Pour les condos et appartements, réservez l'ascenseur si possible (la majorité des immeubles le permettent pour les déménagements et débarras). Sinon, prévenez le concierge qu'on arrive.",
        ],
      },
      {
        heading: "Articles qui demandent une attention spéciale",
        paragraphs: [
          "Les piles, batteries de voiture, peinture liquide, solvants, et produits chimiques ne peuvent PAS être ramassés avec le reste. Ils doivent aller dans un écocentre municipal. Si vous en avez, mettez-les de côté et nous pouvons vous indiquer où les déposer.",
          "Les électroniques (vieux ordinateurs, télévisions, consoles) sont les bienvenus mais nécessitent un tri spécial pour le recyclage. Sortez-les en vue pour qu'on les sépare du reste.",
          "Les objets très lourds (piano, coffre-fort, machine industrielle) sont gérables mais demandent parfois une équipe de plus. Mentionnez-le à la soumission pour qu'on prévoie le personnel adéquat.",
        ],
      },
      {
        heading: "Ce qu'on gère pour vous le jour J",
        paragraphs: [
          "Vous n'avez pas à descendre les meubles au rez-de-chaussée. Notre équipe se rend partout dans la maison.",
          "Vous n'avez pas à protéger les murs ou les planchers. On manipule chaque article avec soin et nos chariots ont des roues protégées.",
          "Vous n'avez pas à balayer après. On ramasse les petits débris laissés par le passage de nos articles avant de partir.",
          "Vous n'avez pas à trier pour le recyclage ou la donation. On le fait nous-mêmes au centre de tri après le ramassage.",
        ],
      },
    ],
    closing: "Pas de stress de préparation. Réservez un créneau via le formulaire de soumission gratuite ou par téléphone, et concentrez-vous sur le reste de votre journée — on s'occupe de tout le reste.",
  },
  en: {
    title: "How to Prepare for Junk Removal in Gatineau",
    metaDescription: "A practical guide to preparing for junk removal in Gatineau: sorting, access, special items, and what our crew handles on-site.",
    intro: "A well-prepared pickup runs in half the time and guarantees we don't leave anything behind. Here's exactly what to do (and not do) before our crew arrives.",
    sections: [
      {
        heading: "Decide what's leaving vs what stays",
        paragraphs: [
          "The best prep is mental: clearly decide what you're keeping and what's going. No need to move items around — just know which ones are leaving.",
          "If you're unsure about certain items, put them in a separate spot. Our crew never touches anything without confirmation, and at pickup time you can decide last-minute.",
          "For furniture with drawers or cabinets, take a quick look inside to pull out important documents, jewelry, and papers — this is the ideal moment to do it.",
        ],
      },
      {
        heading: "Check access",
        paragraphs: [
          "Our truck is roughly 6 metres long. If your driveway is narrow or a car is in the way, plan to move it so we can park directly in front of the main entrance.",
          "If the items are in the basement or on upper floors, don't worry — our crew goes everywhere. But if the staircase has a tight turn or a narrow doorway will cause a sofa jam, mention it on the call so we can bring the right equipment.",
          "For condos and apartments, reserve the elevator if possible (most buildings allow it for moves and cleanouts). Otherwise, give the concierge a heads-up that we're coming.",
        ],
      },
      {
        heading: "Items that need special attention",
        paragraphs: [
          "Batteries, car batteries, liquid paint, solvents, and chemicals CANNOT be picked up with the rest. They have to go to a municipal eco-centre. If you have any, set them aside and we can point you to where to drop them.",
          "Electronics (old computers, TVs, consoles) are welcome but require separate handling for recycling. Set them out so we can separate them from the rest.",
          "Very heavy items (piano, safe, industrial machine) are manageable but sometimes need an extra crew member. Flag it at quote time so we can plan staffing.",
        ],
      },
      {
        heading: "What we handle for you on pickup day",
        paragraphs: [
          "You don't need to bring furniture down to the ground floor. Our crew goes anywhere in the home.",
          "You don't need to protect walls or floors. We handle every item carefully and our dollies have protective wheels.",
          "You don't need to sweep after. We collect small debris left from moving items before we leave.",
          "You don't need to sort for recycling or donation. We do that ourselves at the sorting centre after pickup.",
        ],
      },
    ],
    closing: "No prep stress. Book a slot via the free quote form or by phone, and focus on the rest of your day — we handle everything else.",
  },
};

export function getMattressGuide(lang: Lang): LongFormContent {
  return MATTRESS[lang];
}

export function getPrepGuide(lang: Lang): LongFormContent {
  return PREP[lang];
}
