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

const FRIDGE: Record<Lang, LongFormContent> = {
  fr: {
    title: "Comment se débarrasser d'un vieux frigo à Gatineau",
    metaDescription: "Le guide pour vous débarrasser d'un vieux réfrigérateur à Gatineau : pourquoi c'est encadré par la loi, le programme RECYC-FRIGO d'Hydro-Québec, et le ramassage à domicile.",
    intro: "Un réfrigérateur n'est pas un déchet ordinaire. Il contient des fluides frigorigènes (gaz HFC) qui doivent être récupérés selon une procédure encadrée par la loi avant la mise au rebut. Voici exactement comment vous en débarrasser correctement à Gatineau.",
    sections: [
      {
        heading: "Pourquoi c'est plus compliqué qu'on pense",
        paragraphs: [
          "Un frigo standard contient entre 100 et 200 grammes de fluide frigorigène. Ces gaz, lorsqu'ils s'échappent, ont un pouvoir de réchauffement plusieurs milliers de fois supérieur au CO₂. C'est pourquoi le Règlement sur les halocarbures du Québec interdit de simplement jeter un frigo : le fluide doit être récupéré par un technicien certifié.",
          "Un frigo pèse aussi 60 à 100 kg. Le déplacer dans une cage d'escalier sans matériel adapté est risqué pour le dos et pour les murs. La porte représente un autre danger — un enfant pourrait s'y enfermer si elle reste accessible.",
          "Bonne nouvelle : presque 95 % des matériaux d'un frigo sont recyclables. Acier, aluminium, cuivre des serpentins, plastiques — tout part dans des filières de récupération une fois le fluide retiré.",
        ],
      },
      {
        heading: "Le programme RECYC-FRIGO d'Hydro-Québec",
        paragraphs: [
          "Si votre frigo a 10 ans ou plus, fonctionne encore et est de taille standard, vous êtes admissible au programme RECYC-FRIGO d'Hydro-Québec. Ils viennent le ramasser GRATUITEMENT chez vous ET vous donnent un crédit sur votre facture d'électricité (généralement 60 $).",
          "L'inscription se fait en ligne sur le site d'Hydro-Québec. Le délai de prise de rendez-vous varie de quelques semaines à quelques mois selon la saison. Si votre frigo ne fonctionne plus ou si vous ne pouvez pas attendre, voir les autres options ci-dessous.",
        ],
      },
      {
        heading: "Vos autres options à Gatineau",
        paragraphs: [
          "1. Les écocentres de la Ville de Gatineau acceptent les électroménagers blancs (frigos, congélateurs, laveuses) gratuitement pour les résidents. Vous devez transporter l'appareil vous-même — ce qui demande une remorque ou un véhicule utilitaire.",
          "2. Le ramassage à domicile par un service privé : nous venons chez vous, sortons le frigo (peu importe l'étage), et le redirigeons vers un centre de récupération qui s'occupe du fluide frigorigène. C'est la solution rapide quand vous voulez juste que ça parte.",
          "3. Don ou revente : un frigo récent et en bon état (moins de 5 ans) peut être donné à des organismes communautaires comme La Ressourcerie, ou revendu sur Marketplace. Mais s'il est désuet ou bruyant, ce sera difficile de trouver preneur.",
          "4. Reprise au moment de l'achat : si vous achetez un frigo neuf, plusieurs détaillants reprennent l'ancien. Demandez au moment de la commande — c'est souvent gratuit.",
        ],
      },
      {
        heading: "Ce qu'il faut éviter",
        paragraphs: [
          "Ne mettez jamais un frigo au bord de la rue avec les ordures ordinaires. Il sera laissé sur place et vous risquez une amende municipale.",
          "Ne percez pas les serpentins ni le compresseur pour vider le fluide vous-même. C'est illégal au Québec et dangereux — les fluides peuvent causer des engelures sévères et leur libération est passible d'amendes importantes.",
          "Retirez ou neutralisez la porte avant le ramassage : utilisez une corde ou enlevez les charnières si vous laissez l'appareil dans un endroit accessible aux enfants. Plusieurs accidents tragiques sont arrivés ainsi.",
        ],
      },
      {
        heading: "Ramassage à domicile, sans tracas",
        paragraphs: [
          "Si vous voulez juste que le vieux frigo parte sans avoir à attendre des semaines ou à le transporter vous-même, notre service de débarras résidentiel est conçu pour ça. Nous venons chez vous (Hull, Aylmer, Buckingham, Pointe-Gatineau ou n'importe quel secteur), sortons l'appareil de la cuisine ou du sous-sol, et l'acheminons vers un centre de récupération approprié.",
          "On peut aussi prendre votre vieux congélateur, lave-vaisselle, four ou autres électroménagers en même temps. Demandez une soumission gratuite — sans engagement, et le prix est confirmé sur place avant qu'on commence.",
        ],
      },
    ],
    closing: "Un vieux frigo qui occupe le sous-sol depuis trois ans, c'est de l'espace utile en moins. Appelez ou remplissez le formulaire pour planifier un ramassage rapide à Gatineau.",
  },
  en: {
    title: "How to Get Rid of an Old Refrigerator in Gatineau",
    metaDescription: "Complete guide to disposing of an old refrigerator in Gatineau: why it's regulated, Hydro-Québec's RECYC-FRIGO program, and at-home pickup options.",
    intro: "A refrigerator isn't ordinary trash. It contains refrigerant fluid (HFC gas) that must be recovered through a legally regulated procedure before disposal. Here's exactly how to get rid of one properly in Gatineau.",
    sections: [
      {
        heading: "Why it's more complicated than you'd think",
        paragraphs: [
          "A standard fridge contains 100–200 grams of refrigerant. These gases, when they escape, have a warming potential thousands of times greater than CO₂. That's why Quebec's Halocarbon Regulation makes it illegal to just throw out a fridge: the fluid has to be recovered by a certified technician first.",
          "A fridge also weighs 60–100 kg. Moving one through a stairwell without proper equipment is risky for backs and walls. The door is another hazard — a child could get trapped inside if it's left accessible.",
          "Good news: nearly 95% of a fridge's materials are recyclable. Steel, aluminum, copper from the coils, plastics — they all go into recovery streams once the refrigerant is pulled.",
        ],
      },
      {
        heading: "Hydro-Québec's RECYC-FRIGO program",
        paragraphs: [
          "If your fridge is 10+ years old, still works, and is standard-sized, you qualify for Hydro-Québec's RECYC-FRIGO program. They come pick it up FREE and give you a credit on your electricity bill (typically $60).",
          "Sign up online on the Hydro-Québec site. Wait time for an appointment ranges from a few weeks to a few months depending on the season. If your fridge no longer works or you can't wait, see the other options below.",
        ],
      },
      {
        heading: "Your other options in Gatineau",
        paragraphs: [
          "1. The City of Gatineau eco-centres accept white appliances (fridges, freezers, washers) free of charge for residents. You have to transport it yourself — which means a trailer or utility vehicle.",
          "2. At-home pickup by a private service: we come to your home, get the fridge out (any floor), and route it to a recovery centre that handles the refrigerant. This is the fast option when you just want it gone.",
          "3. Donate or resell: a recent fridge in good shape (under 5 years old) can be donated to community organizations like La Ressourcerie, or resold on Marketplace. But if it's outdated or noisy, it'll be hard to find a taker.",
          "4. Trade-in at purchase: if you buy a new fridge, many retailers will take the old one. Ask at order time — it's often free.",
        ],
      },
      {
        heading: "What to avoid",
        paragraphs: [
          "Never put a fridge at the curb with regular trash. It'll be left on-site and you risk a municipal fine.",
          "Don't pierce the coils or compressor to vent the refrigerant yourself. It's illegal in Quebec and dangerous — the fluids can cause severe frostbite and releasing them carries hefty fines.",
          "Remove or disable the door before pickup: tie it shut or remove the hinges if you're leaving the appliance somewhere accessible to children. Several tragic accidents have happened this way.",
        ],
      },
      {
        heading: "Hassle-free at-home pickup",
        paragraphs: [
          "If you just want the old fridge gone without waiting weeks or hauling it yourself, our residential junk removal service is built for this. We come to your home (Hull, Aylmer, Buckingham, Pointe-Gatineau, or any sector), get the appliance out of the kitchen or basement, and route it to an appropriate recovery centre.",
          "We can also take your old freezer, dishwasher, oven, or other appliances at the same time. Request a free quote — no obligation, and the price is confirmed on-site before we start.",
        ],
      },
    ],
    closing: "An old fridge taking up basement space for three years is usable square footage you're not getting back. Call or fill out the form to schedule a fast pickup in Gatineau.",
  },
};

const SOFA: Record<Lang, LongFormContent> = {
  fr: {
    title: "Comment se débarrasser d'un vieux sofa à Gatineau",
    metaDescription: "Le guide complet pour vous débarrasser d'un sofa à Gatineau : pourquoi c'est encombrant, options de don, écocentres, et ramassage à domicile.",
    intro: "Un sofa est l'un des meubles les plus difficiles à déplacer et à jeter. Trop volumineux pour rentrer dans une voiture standard, trop usé pour être donné dans bien des cas, et refusé par la collecte d'ordures hebdomadaire. Voici comment s'en débarrasser proprement à Gatineau.",
    sections: [
      {
        heading: "Pourquoi un sofa pose problème",
        paragraphs: [
          "Un sofa trois-places mesure typiquement 2 mètres de long, pèse entre 30 et 70 kg, et ne passe presque jamais par une porte d'appartement standard sans manipulation. Ajoutez un sectionnel ou un sofa-lit et c'est encore pire.",
          "À Gatineau, la collecte municipale n'accepte pas les meubles dans les ordures hebdomadaires. Comme les matelas, ils tombent dans la catégorie « encombrants » et nécessitent une approche différente : écocentre, don, ou service privé.",
          "Si le sofa est en bon état (pas de taches profondes, pas de déchirures, structure solide), il a encore une vie utile. Le problème, c'est de le faire sortir de chez vous sans abîmer les murs ni vous blesser.",
        ],
      },
      {
        heading: "Évaluez l'état du sofa avant de décider",
        paragraphs: [
          "État correct (moins de 10 ans, propre, structure intacte) : envisagez un don à un organisme local comme la Société Saint-Vincent-de-Paul ou Centraide Outaouais. Ils peuvent même offrir un ramassage gratuit. La Ressourcerie d'Aylmer accepte aussi les meubles en bon état.",
          "État moyen (taches superficielles, structure ok mais usé) : difficile à donner, mais parfois reprenable par certains organismes ou achetable à bas prix sur Marketplace. La majorité finissent au recyclage.",
          "Mauvais état (déchirures, ressorts qui sortent, odeur, dégât d'eau) : direction recyclage. Aucun organisme n'acceptera et la revente est exclue. C'est là que le ramassage à domicile devient pratiquement la seule option pratique.",
        ],
      },
      {
        heading: "Vos options à Gatineau",
        paragraphs: [
          "1. Don avec ramassage : la Société Saint-Vincent-de-Paul, Centraide Outaouais et la Ressourcerie d'Aylmer offrent souvent un ramassage gratuit pour les meubles en bon état. Le délai peut être de 2 à 4 semaines.",
          "2. Écocentres de la Ville de Gatineau : acceptent les meubles gratuitement pour les résidents. Vous devez transporter le sofa vous-même, ce qui demande au minimum une remorque ouverte ou un pick-up.",
          "3. Collecte d'encombrants municipale : Gatineau organise quelques journées par année par secteur. Calendrier disponible sur le site de la Ville. Gratuit, mais peu flexible et parfois éloigné de votre besoin.",
          "4. Ramassage à domicile par un service privé comme le nôtre : on vient chez vous, on sort le sofa peu importe l'étage et la difficulté d'accès, et on l'achemine vers le bon centre (don si possible, recyclage sinon). Service rapide, souvent disponible le jour-même ou le lendemain.",
          "5. Marketplace, Kijiji, groupes Facebook locaux : pour un sofa en bon état, vous trouverez peut-être preneur. Mais prévoyez d'attendre, de répondre à beaucoup de questions, et de gérer les rendez-vous.",
        ],
      },
      {
        heading: "Ce qu'il faut éviter",
        paragraphs: [
          "Ne laissez pas un sofa au bord de la rue les jours d'ordures normales — il sera abandonné sur place et vous risquez une amende.",
          "Ne le démontez pas vous-même pour le mettre dans des sacs à ordures. Les ressorts, les agrafes et les morceaux de tissu créent un vrai danger pour les éboueurs et le matériel de tri.",
          "Évitez de l'abandonner dans une ruelle, près d'un conteneur, ou dans un terrain vague. C'est considéré comme du dépôt sauvage à Gatineau et passible d'amendes salées.",
        ],
      },
      {
        heading: "Ramassage à domicile",
        paragraphs: [
          "Notre service de débarras résidentiel à Gatineau gère le sofa de A à Z. On vient chez vous (Hull, Aylmer, Buckingham, Pointe-Gatineau, n'importe quel secteur), on sort le sofa du salon, on le descend de l'étage si nécessaire, et on l'achemine vers le bon endroit selon son état.",
          "On peut prendre d'autres meubles en même temps : fauteuils, tables, chaises, lits, télés. Tout ce qui doit partir part dans le même voyage. Demandez une soumission gratuite — sans engagement, et on confirme le prix sur place avant de commencer.",
        ],
      },
    ],
    closing: "Un vieux sofa qui occupe la moitié du salon, c'est un projet qu'on remet à plus tard depuis trop longtemps. Appelez-nous ou remplissez le formulaire — on s'en charge cette semaine.",
  },
  en: {
    title: "How to Get Rid of an Old Sofa in Gatineau",
    metaDescription: "Complete guide to disposing of an old sofa in Gatineau: why it's bulky, donation options, eco-centres, and at-home pickup.",
    intro: "A sofa is one of the hardest pieces of furniture to move and throw out. Too bulky for a standard car, too worn to donate in many cases, and rejected by weekly trash pickup. Here's how to get rid of yours properly in Gatineau.",
    sections: [
      {
        heading: "Why a sofa is a problem",
        paragraphs: [
          "A three-seat sofa is typically 2 metres long, weighs 30 to 70 kg, and rarely fits through a standard apartment door without maneuvering. Add a sectional or a pull-out sofa bed and it gets worse.",
          "In Gatineau, weekly municipal trash collection doesn't accept furniture. Like mattresses, sofas fall under the \"bulky items\" category and need a different approach: eco-centre, donation, or private service.",
          "If the sofa is in good shape (no deep stains, no tears, solid frame), it still has a useful life. The challenge is getting it out of your home without damaging the walls or hurting yourself.",
        ],
      },
      {
        heading: "Assess the sofa's condition first",
        paragraphs: [
          "Good condition (under 10 years old, clean, intact frame): consider donating to a local organization like Société Saint-Vincent-de-Paul or Centraide Outaouais. They may even offer free pickup. La Ressourcerie d'Aylmer also accepts furniture in good shape.",
          "Average condition (surface stains, frame ok but worn): hard to donate, but sometimes accepted by certain organizations or sold cheap on Marketplace. Most end up recycled.",
          "Poor condition (tears, springs sticking out, odour, water damage): straight to recycling. No organization will accept it and resale is off the table. This is where at-home pickup becomes practically the only viable option.",
        ],
      },
      {
        heading: "Your options in Gatineau",
        paragraphs: [
          "1. Donation with pickup: Société Saint-Vincent-de-Paul, Centraide Outaouais, and La Ressourcerie d'Aylmer often offer free pickup for furniture in good condition. Wait time can be 2 to 4 weeks.",
          "2. City of Gatineau eco-centres: accept furniture free of charge for residents. You have to transport the sofa yourself, which requires at minimum an open trailer or pickup truck.",
          "3. Municipal bulky-item pickup: Gatineau runs a few collection days per year per sector. Schedule on the City website. Free but inflexible and often misaligned with your timing.",
          "4. At-home pickup by a private service like ours: we come to your home, get the sofa out regardless of which floor and how tricky the access, and route it to the right place (donation if possible, recycling otherwise). Fast service, often available same-day or next-day.",
          "5. Marketplace, Kijiji, local Facebook groups: for a sofa in good shape, you may find a taker. But expect to wait, answer lots of questions, and coordinate appointments.",
        ],
      },
      {
        heading: "What to avoid",
        paragraphs: [
          "Don't leave a sofa at the curb on normal trash days — it'll be left on-site and you risk a fine.",
          "Don't break it down yourself to fit in trash bags. The springs, staples, and fabric pieces are a real hazard for sanitation workers and sorting equipment.",
          "Don't dump it in an alley, near a commercial bin, or in a vacant lot. That's illegal dumping in Gatineau and carries hefty fines.",
        ],
      },
      {
        heading: "At-home pickup",
        paragraphs: [
          "Our residential junk removal service in Gatineau handles sofas end-to-end. We come to your home (Hull, Aylmer, Buckingham, Pointe-Gatineau, any sector), get the sofa out of the living room, down the stairs if needed, and route it to the right destination based on its condition.",
          "We can take other furniture at the same time: armchairs, tables, chairs, beds, TVs. Anything that needs to go, goes in the same trip. Request a free quote — no obligation, and we confirm the price on-site before we start.",
        ],
      },
    ],
    closing: "An old sofa taking up half the living room is a project you've been putting off too long. Call us or fill out the form — we handle it this week.",
  },
};

const ELECTRONICS: Record<Lang, LongFormContent> = {
  fr: {
    title: "Comment se débarrasser d'électroniques à Gatineau",
    metaDescription: "Guide pour vous débarrasser de vos vieux électroniques à Gatineau : télés, ordinateurs, imprimantes — pourquoi c'est encadré, points de dépôt, et ramassage à domicile.",
    intro: "Vieux ordinateurs, télés, imprimantes, consoles : les électroniques (ce qu'on appelle les DEEE — déchets d'équipements électriques et électroniques) ne peuvent pas être jetés avec les ordures ordinaires au Québec. Voici exactement comment vous en débarrasser correctement à Gatineau.",
    sections: [
      {
        heading: "Pourquoi les électroniques sont traités à part",
        paragraphs: [
          "Un vieux téléviseur, un PC ou une imprimante contient des matériaux précieux (or, argent, cuivre, terres rares) ET des substances dangereuses (plomb, mercure, brome retardateur de flamme). Jeter un appareil au dépotoir, c'est gaspiller les premiers et libérer les seconds dans l'environnement.",
          "Le Québec a mis en place le programme ARPE-Québec, financé par les fabricants, qui prend en charge GRATUITEMENT le recyclage de plus de 25 catégories d'appareils. Le résident n'a qu'à les apporter au bon endroit.",
          "C'est aussi important pour la sécurité de vos données. Un disque dur de PC ou un téléphone non effacé contient potentiellement des photos, courriels, mots de passe et données bancaires. Le bon canal de recyclage les détruit; un dépotoir ordinaire ne le garantit pas.",
        ],
      },
      {
        heading: "Ce qui est accepté gratuitement",
        paragraphs: [
          "Catégories couvertes par ARPE-Québec, sans frais : téléviseurs, ordinateurs (de bureau et portables), tablettes, imprimantes, cartouches d'encre, téléphones (cellulaires et fixes), routeurs, modems, claviers, souris, écrans, hauts-parleurs, consoles de jeux, lecteurs DVD/Blu-Ray, appareils photo, GPS, et plus encore.",
          "Petits appareils également : montres connectées, écouteurs, manettes, batteries de portable, câbles. Mettez-les dans une boîte et apportez-les en lot — c'est plus efficace que de les apporter un par un.",
          "À NOTER : les piles ordinaires (AA, AAA, etc.) suivent un autre canal — la plupart des Bureau en Gros, Home Depot et Canadian Tire ont des bacs de récupération à l'entrée du magasin.",
        ],
      },
      {
        heading: "Vos options à Gatineau",
        paragraphs: [
          "1. Points de dépôt ARPE-Québec : Best Buy, Bureau en Gros, Canadian Tire, et plusieurs autres détaillants à Gatineau acceptent les électroniques gratuitement, sans achat requis. Vérifiez la liste complète sur le site recyclermeselectroniques.ca.",
          "2. Écocentres de la Ville de Gatineau : tous les écocentres acceptent les DEEE des résidents (preuve de résidence requise). C'est gratuit et bien organisé.",
          "3. Don : un PC ou un téléphone récent peut être donné à des organismes comme Renaissance ou des écoles locales. Effacez vos données d'abord (mode usine + outil de wipe pour les disques durs).",
          "4. Ramassage à domicile par notre service : si vous avez un gros volume (vieux PC du bureau, télé tube cathodique, lot d'imprimantes après une fermeture), on vient chez vous et on s'occupe du tri et du transport. Service rapide, sans tracas.",
        ],
      },
      {
        heading: "Avant de jeter : protégez vos données",
        paragraphs: [
          "PC et portables : faites un reset d'usine et idéalement un wipe avec un outil comme DBAN ou la commande native de Windows/macOS. Pour les disques avec données très sensibles, retirez le disque et gardez-le (ou faites-le détruire physiquement).",
          "Téléphones et tablettes : faites une réinitialisation d'usine, déconnectez-vous des comptes (Apple ID, Google), retirez la carte SIM et la carte SD. Pour les iPhones, utilisez « Effacer contenu et réglages » avant de débrancher de l'iCloud.",
          "Imprimantes : retirez les cartouches (à recycler séparément, gratuit chez la plupart des détaillants). Si l'imprimante a un disque interne (modèles bureau), faites un reset d'usine également.",
        ],
      },
      {
        heading: "Ramassage à domicile pour gros volumes",
        paragraphs: [
          "Si vous avez 10 ans de matériel informatique accumulé dans le sous-sol, ou si votre entreprise renouvelle son parc et a 30 vieux PC à sortir, le transport à l'écocentre est un cauchemar. Notre service de débarras résidentiel et commercial à Gatineau s'en occupe.",
          "On vient chez vous ou au bureau, on charge le tout, et on s'assure que les appareils sont acheminés vers les bons centres ARPE-Québec ou recycleurs accrédités. On peut aussi prendre d'autres encombrants en même temps. Soumission gratuite avant qu'on commence.",
        ],
      },
    ],
    closing: "Un placard plein de vieux téléphones, fils et ordinateurs n'a aucune raison d'exister. Appelez-nous ou utilisez le formulaire — on libère votre espace cette semaine.",
  },
  en: {
    title: "How to Dispose of Electronics in Gatineau",
    metaDescription: "Guide to disposing of old electronics in Gatineau: TVs, computers, printers — why it's regulated, drop-off points, and at-home pickup.",
    intro: "Old computers, TVs, printers, consoles: electronics (a.k.a. WEEE — waste electrical and electronic equipment) can't be thrown out with regular trash in Quebec. Here's exactly how to dispose of them properly in Gatineau.",
    sections: [
      {
        heading: "Why electronics get separate treatment",
        paragraphs: [
          "An old TV, PC, or printer contains valuable materials (gold, silver, copper, rare earth metals) AND hazardous substances (lead, mercury, brominated flame retardants). Tossing one in a landfill wastes the first and releases the second into the environment.",
          "Quebec runs the ARPE-Québec program, funded by manufacturers, which takes care of recycling for FREE across 25+ categories of devices. Residents just need to bring them to the right place.",
          "It also matters for your data security. A PC hard drive or phone that hasn't been wiped can contain photos, emails, passwords, and banking info. The proper recycling channel destroys them; a regular landfill doesn't guarantee that.",
        ],
      },
      {
        heading: "What's accepted free of charge",
        paragraphs: [
          "Categories covered by ARPE-Québec, no fee: TVs, computers (desktop and laptop), tablets, printers, ink cartridges, phones (cell and landline), routers, modems, keyboards, mice, monitors, speakers, gaming consoles, DVD/Blu-Ray players, cameras, GPS units, and more.",
          "Small devices too: smartwatches, earbuds, controllers, laptop batteries, cables. Put them in a box and drop them off in bulk — more efficient than one at a time.",
          "NOTE: standard household batteries (AA, AAA, etc.) follow a different channel — most Staples, Home Depot, and Canadian Tire stores have collection bins at the entrance.",
        ],
      },
      {
        heading: "Your options in Gatineau",
        paragraphs: [
          "1. ARPE-Québec drop-off points: Best Buy, Staples, Canadian Tire, and several other retailers in Gatineau accept electronics free of charge, no purchase needed. Full list at recyclermeselectroniques.ca.",
          "2. City of Gatineau eco-centres: all eco-centres accept WEEE from residents (proof of residency required). Free and well-organized.",
          "3. Donation: a recent PC or phone can be donated to organizations like Renaissance or local schools. Wipe your data first (factory reset + wipe tool for hard drives).",
          "4. At-home pickup by our service: if you have high volume (old office PCs, CRT TVs, batch of printers after a closure), we come to you and handle sorting and transport. Fast, hassle-free service.",
        ],
      },
      {
        heading: "Before you dispose: protect your data",
        paragraphs: [
          "PCs and laptops: factory reset and ideally a wipe with a tool like DBAN or the native Windows/macOS command. For drives with highly sensitive data, remove the drive and keep it (or have it physically destroyed).",
          "Phones and tablets: factory reset, sign out of accounts (Apple ID, Google), remove SIM and SD cards. For iPhones, use \"Erase All Content and Settings\" before unlinking from iCloud.",
          "Printers: remove cartridges (recycle separately, free at most retailers). If the printer has an internal drive (office models), factory reset that too.",
        ],
      },
      {
        heading: "At-home pickup for high volume",
        paragraphs: [
          "If you have 10 years of IT gear accumulated in the basement, or your business is refreshing its fleet and has 30 old PCs to clear out, transporting them to an eco-centre is a nightmare. Our residential and commercial junk removal service in Gatineau handles it.",
          "We come to your home or office, load it all, and make sure the devices reach the correct ARPE-Québec centres or accredited recyclers. We can take other unwanted items at the same time. Free quote before we start.",
        ],
      },
    ],
    closing: "A closet full of old phones, cables, and computers has no reason to exist. Call us or use the form — we'll free up your space this week.",
  },
};

const TV: Record<Lang, LongFormContent> = {
  fr: {
    title: "Comment se débarrasser d'une vieille télévision à Gatineau",
    metaDescription: "Le guide pour vous débarrasser d'une vieille télé à Gatineau : pourquoi c'est encadré, ARPE-Québec gratuit, points de dépôt et ramassage à domicile.",
    intro: "Une vieille télévision n'est pas un déchet ordinaire. Les écrans cathodiques contiennent du plomb, les LCD du mercure, et même les modèles modernes contiennent des matériaux dangereux qui doivent être retirés avant la mise au rebut. Voici exactement comment vous en débarrasser correctement à Gatineau.",
    sections: [
      {
        heading: "Pourquoi les télés sont traitées à part",
        paragraphs: [
          "Une vieille télé à tube cathodique (CRT) peut contenir jusqu'à 4 kg de plomb dans le verre de l'écran. Les modèles LCD plus récents contiennent du mercure dans les rétroéclairages, et les LED des terres rares précieuses. Tous ces matériaux peuvent être récupérés OU contaminer l'environnement, selon où la télé finit.",
          "Au Québec, le programme ARPE-Québec couvre toutes les télévisions sans frais. C'est financé par les fabricants — vous n'avez rien à payer pour qu'un écran soit recyclé proprement, peu importe son âge ou son état.",
          "Les CRT sont aussi très lourds : un 27 pouces tube cathodique pèse facilement 35 à 50 kg, ce qui les rend pratiquement impossibles à transporter seul. C'est pourquoi le ramassage à domicile a souvent plus de sens qu'un déplacement vers l'écocentre.",
        ],
      },
      {
        heading: "Vos options gratuites à Gatineau",
        paragraphs: [
          "1. Points de dépôt ARPE-Québec : Best Buy, Bureau en Gros, Canadian Tire, Brault & Martineau et d'autres détaillants à Gatineau acceptent les télés gratuitement, sans achat requis. Liste complète sur recyclermeselectroniques.ca.",
          "2. Écocentres de la Ville de Gatineau : tous acceptent les télés des résidents (preuve de résidence requise). Pratique si vous y allez déjà pour autre chose.",
          "3. Don : si la télé fonctionne encore et n'est pas trop vieille (LED de moins de 7 ans), elle peut être donnée à La Ressourcerie d'Aylmer, Renaissance, ou des familles via Facebook Marketplace gratuit.",
          "4. Reprise au moment de l'achat : si vous achetez un nouveau téléviseur, plusieurs détaillants reprennent l'ancien. Demandez à la commande.",
        ],
      },
      {
        heading: "Ramassage à domicile (option payante mais sans tracas)",
        paragraphs: [
          "Si vous avez plusieurs écrans (vieux PC + télé du salon + télé du sous-sol) ou un écran cathodique trop lourd à transporter, notre service de débarras à Gatineau vient chez vous. On sort la télé peu importe l'étage et on l'achemine vers le bon centre de recyclage ARPE.",
          "C'est aussi pratique si vous vous débarrassez en même temps d'autres encombrants : meubles, électroménagers, débris de rénovation. Tout part dans le même voyage. Demandez une soumission gratuite — le prix est confirmé sur place avant qu'on commence.",
        ],
      },
      {
        heading: "Ce qu'il faut éviter",
        paragraphs: [
          "Ne mettez jamais une télé au bord de la rue avec les ordures ordinaires. Elle sera laissée sur place, vous risquez une amende, et vous gaspillez le potentiel de recyclage gratuit.",
          "Ne tentez pas de démonter une télé vous-même. Les CRT contiennent une charge électrique résiduelle dangereuse même débranchés depuis des semaines. Les écrans LCD ont des néons fragiles contenant du mercure.",
          "N'abandonnez pas une télé dans une ruelle ou près d'un conteneur commercial. C'est du dépôt sauvage, passible d'amendes salées.",
        ],
      },
    ],
    closing: "Une vieille télé qui dort dans un placard ou un sous-sol depuis des années, c'est de l'espace utile en moins. Apportez-la à un point ARPE gratuit, ou appelez-nous si vous voulez juste qu'elle parte sans avoir à la transporter.",
  },
  en: {
    title: "How to Get Rid of an Old TV in Gatineau",
    metaDescription: "Complete guide to disposing of an old television in Gatineau: why it's regulated, free ARPE-Québec drop-offs, and at-home pickup.",
    intro: "An old TV isn't ordinary waste. CRT screens contain lead, LCDs contain mercury, and even modern models contain hazardous materials that must be removed before disposal. Here's exactly how to get rid of one properly in Gatineau.",
    sections: [
      {
        heading: "Why TVs get separate treatment",
        paragraphs: [
          "An old CRT (tube) TV can contain up to 4 kg of lead in the screen glass. Newer LCD models contain mercury in the backlights, and LEDs contain valuable rare earth metals. All of these can be recovered OR contaminate the environment, depending on where the TV ends up.",
          "In Quebec, the ARPE-Québec program covers all TVs at no cost. It's funded by manufacturers — you pay nothing to have a screen properly recycled, regardless of age or condition.",
          "CRTs are also very heavy: a 27-inch tube TV easily weighs 35–50 kg, making it nearly impossible to transport alone. That's why at-home pickup often makes more sense than hauling to an eco-centre.",
        ],
      },
      {
        heading: "Your free options in Gatineau",
        paragraphs: [
          "1. ARPE-Québec drop-off points: Best Buy, Staples, Canadian Tire, Brault & Martineau, and other retailers in Gatineau accept TVs free of charge, no purchase required. Full list at recyclermeselectroniques.ca.",
          "2. City of Gatineau eco-centres: all accept TVs from residents (proof of residency required). Convenient if you're going there for something else anyway.",
          "3. Donation: if the TV still works and isn't too old (LED under 7 years), it can be donated to La Ressourcerie d'Aylmer, Renaissance, or families via free Facebook Marketplace.",
          "4. Trade-in at purchase: if you buy a new TV, many retailers will take the old one. Ask at order time.",
        ],
      },
      {
        heading: "At-home pickup (paid option, hassle-free)",
        paragraphs: [
          "If you have multiple screens (old PC + living room TV + basement TV) or a CRT too heavy to transport, our junk removal service in Gatineau comes to you. We get the TV out regardless of which floor and route it to the right ARPE recycling centre.",
          "Convenient if you're also clearing out other unwanted items: furniture, appliances, renovation debris. It all goes in the same trip. Request a free quote — the price is confirmed on-site before we start.",
        ],
      },
      {
        heading: "What to avoid",
        paragraphs: [
          "Never put a TV at the curb with regular trash. It'll be left on-site, you risk a fine, and you waste the free recycling potential.",
          "Don't try to take a TV apart yourself. CRTs hold a dangerous residual electrical charge even after weeks unplugged. LCD screens have fragile mercury-containing fluorescent tubes.",
          "Don't dump a TV in an alley or near a commercial bin. That's illegal dumping and carries hefty fines.",
        ],
      },
    ],
    closing: "An old TV sitting in a closet or basement for years is usable space you're not getting back. Drop it at a free ARPE point, or call us if you just want it gone without having to move it.",
  },
};

const TIRES: Record<Lang, LongFormContent> = {
  fr: {
    title: "Comment se débarrasser de vieux pneus à Gatineau",
    metaDescription: "Le guide pour vous débarrasser de vieux pneus à Gatineau : programme RECYC-QUÉBEC gratuit, garages, écocentres, et ramassage à domicile.",
    intro: "Au Québec, vous payez déjà pour le recyclage de vos pneus à chaque fois que vous en achetez de nouveaux — c'est inclus dans la taxe sur les pneus. Ça veut dire que vous ne devriez jamais payer une deuxième fois pour vous en débarrasser. Voici comment ça marche à Gatineau.",
    sections: [
      {
        heading: "Le système québécois de recyclage des pneus",
        paragraphs: [
          "Quand vous achetez un pneu neuf au Québec, vous payez une « écofrais » d'environ 3 $ par pneu. Cette taxe finance le programme provincial de récupération opéré par RECYC-QUÉBEC. C'est ce qui rend le recyclage gratuit pour vous quand vient le temps de vous débarrasser de vos vieux pneus.",
          "Le programme couvre les pneus de voiture, de camion léger et de motocyclette. Les pneus de tracteur, de machinerie agricole, ou industriels suivent un autre canal et peuvent avoir des frais.",
          "Environ 100 % des pneus québécois sont recyclés ou réutilisés : tapis de gym, surfaces de jeux, asphalte caoutchoutée, combustible alternatif. Aucun ne devrait finir à l'enfouissement.",
        ],
      },
      {
        heading: "Vos options gratuites à Gatineau",
        paragraphs: [
          "1. Le garage où vous changez vos pneus : c'est l'option la plus simple. La plupart des garages, concessionnaires et chaînes (Canadian Tire, Costco, Point S, etc.) acceptent vos vieux pneus quand ils en installent de nouveaux. Vous n'avez littéralement rien à faire.",
          "2. Garages indépendants : même sans achat, beaucoup de garages locaux acceptent vos vieux pneus gratuitement parce qu'ils sont remboursés par RECYC-QUÉBEC pour chaque pneu remis en circulation. Appelez avant pour confirmer.",
          "3. Écocentres de la Ville de Gatineau : tous les écocentres acceptent les pneus de résidents, gratuitement, jusqu'à 4 par visite (limite typique). Preuve de résidence requise.",
          "4. Points de collecte spéciaux : RECYC-QUÉBEC publie une liste de plus de 1 000 points de collecte au Québec sur leur site. Plusieurs sont à Gatineau et acceptent les pneus sans rendez-vous.",
        ],
      },
      {
        heading: "Quand notre ramassage à domicile fait sens",
        paragraphs: [
          "Si vous avez 4 pneus à transporter dans une voiture compacte sans coffre adapté, c'est jouable mais salissant. Si vous avez 8 pneus (été + hiver) après avoir vendu une voiture, ça devient un casse-tête. Et si vous avez 20 pneus (entreprise, garage à la maison, succession), c'est carrément impossible sans véhicule utilitaire.",
          "Notre service de débarras vient chez vous, charge les pneus, et les achemine au bon centre de récupération. C'est utile aussi quand les pneus s'accumulent avec d'autres encombrants à enlever — débarras de cabanon, de garage, de cour.",
        ],
      },
      {
        heading: "Ce qu'il faut éviter",
        paragraphs: [
          "Ne payez JAMAIS pour faire recycler un pneu de voiture standard au Québec. Si quelqu'un vous facture, c'est qu'il met le profit dans sa poche en plus du remboursement du programme — ou qu'il prévoit d'abandonner le pneu illégalement.",
          "N'abandonnez pas de pneus dans la nature, dans un terrain vague, dans une ruelle. C'est passible d'amendes très importantes au Québec parce que les pneus abandonnés sont des sites de reproduction du moustique culex (transmetteur du virus du Nil) et un risque d'incendie.",
          "Ne brûlez jamais de pneus. Au-delà de l'illégalité, la fumée contient des dioxines hautement toxiques.",
        ],
      },
    ],
    closing: "Quatre pneus dans le coin du garage qui traînent depuis l'an passé, c'est cinq minutes de travail au prochain changement. Si l'accumulation est plus grosse, on peut venir tout ramasser. Soumission gratuite par téléphone ou formulaire.",
  },
  en: {
    title: "How to Get Rid of Old Tires in Gatineau",
    metaDescription: "Complete guide to disposing of old tires in Gatineau: free RECYC-QUÉBEC program, garages, eco-centres, and at-home pickup.",
    intro: "In Quebec, you already paid for tire recycling every time you bought new ones — it's included in the tire eco-fee. That means you should NEVER pay a second time to get rid of them. Here's how it works in Gatineau.",
    sections: [
      {
        heading: "Quebec's tire recycling system",
        paragraphs: [
          "When you buy a new tire in Quebec, you pay an eco-fee of about $3 per tire. That tax funds the provincial recovery program operated by RECYC-QUÉBEC. That's what makes recycling free for you when the time comes to get rid of old tires.",
          "The program covers car, light-truck, and motorcycle tires. Tractor, farm machinery, and industrial tires follow a different channel and may carry fees.",
          "About 100% of Quebec tires are recycled or reused: gym mats, playground surfaces, rubberized asphalt, alternative fuel. None should end up in landfill.",
        ],
      },
      {
        heading: "Your free options in Gatineau",
        paragraphs: [
          "1. The garage where you change tires: easiest option. Most garages, dealers, and chains (Canadian Tire, Costco, Point S, etc.) take your old tires when they install new ones. You literally do nothing.",
          "2. Independent garages: even without a purchase, many local garages take old tires free because they're reimbursed by RECYC-QUÉBEC for each tire put back in circulation. Call ahead to confirm.",
          "3. City of Gatineau eco-centres: all eco-centres accept tires from residents free of charge, typically up to 4 per visit. Proof of residency required.",
          "4. Special collection points: RECYC-QUÉBEC publishes a list of 1,000+ collection points across Quebec on their website. Several are in Gatineau and accept tires without an appointment.",
        ],
      },
      {
        heading: "When our at-home pickup makes sense",
        paragraphs: [
          "If you have 4 tires to haul in a compact car without proper trunk space, it's doable but messy. If you have 8 tires (summer + winter) after selling a car, it becomes a hassle. And if you have 20 tires (business, home garage, estate), it's practically impossible without a utility vehicle.",
          "Our junk removal service comes to your home, loads the tires, and routes them to the right recovery centre. Useful too when the tires are piling up alongside other unwanted items — shed, garage, yard cleanouts.",
        ],
      },
      {
        heading: "What to avoid",
        paragraphs: [
          "NEVER pay to recycle a standard car tire in Quebec. If someone charges you, they're pocketing the program reimbursement on top — or planning to dump the tire illegally.",
          "Don't dump tires in nature, vacant lots, or alleys. Quebec carries very large fines for this because abandoned tires are breeding sites for Culex mosquitoes (West Nile vector) and a fire hazard.",
          "Never burn tires. Beyond being illegal, the smoke contains highly toxic dioxins.",
        ],
      },
    ],
    closing: "Four tires in the garage corner that have been sitting since last year is a five-minute task at the next tire change. If the pile is bigger, we can come pick it all up. Free quote by phone or form.",
  },
};

const POST_RENO: Record<Lang, LongFormContent> = {
  fr: {
    title: "Débarras après rénovation à Gatineau : comment vider un chantier",
    metaDescription: "Guide pratique pour évacuer les débris après une rénovation à Gatineau : que ramasser, ce qu'on peut donner, et comment minimiser les coûts.",
    intro: "Une rénovation termine rarement de façon « propre ». Il reste des débris partout : gypse, vieux comptoirs, planchers arrachés, restes de matériaux, vieux meubles à remplacer. Voici comment évacuer tout ça efficacement à Gatineau, sans transformer le projet en cauchemar logistique.",
    sections: [
      {
        heading: "Anticiper le débarras pendant la rénovation, pas après",
        paragraphs: [
          "L'erreur classique : laisser tous les débris s'accumuler jusqu'à la fin du projet. Résultat : un sous-sol bondé, des pièces inutilisables pendant des semaines, et une mauvaise surprise quand vient le temps d'évacuer.",
          "Mieux : prévoir le débarras AU MINIMUM en deux temps. Une première intervention quand la démolition est faite (gypse, anciens revêtements, vieux planchers), et une deuxième à la fin pour les meubles remplacés et les surplus de matériaux.",
          "Si la rénovation est importante (cuisine complète, sous-sol, plus d'une pièce), envisagez un débarras hebdomadaire pendant la durée du chantier. C'est plus efficace que de tout faire d'un coup à la fin, et ça garde le chantier sécuritaire.",
        ],
      },
      {
        heading: "Ce qui se trie après une rénovation",
        paragraphs: [
          "Bois non traité (planches de plancher, charpente, moulures non peintes) : recyclable. Plusieurs centres l'acceptent gratuitement.",
          "Bois traité, peint, contreplaqué, mélamine : pas recyclable comme bois propre, mais peut aller à l'enfouissement régional via les filières standard.",
          "Métal (vieux tuyaux, conduits, électroménagers, encadrement de porte) : 100 % recyclable et a même une valeur de revente pour les gros volumes. Si vous avez beaucoup de cuivre ou d'aluminium, ça vaut la peine de le mettre à part.",
          "Gypse (placoplatre) : recyclable dans les bons centres. À Gatineau, certains écocentres acceptent le gypse séparé de tout autre matériau.",
          "Tuiles, céramique, comptoirs en stratifié : direction enfouissement, pas recyclable.",
          "Vieux électroménagers : programme ARPE pour les petits, écocentres pour les blancs (frigo, cuisinière, laveuse).",
        ],
      },
      {
        heading: "Vos options à Gatineau",
        paragraphs: [
          "1. Écocentres de la Ville : pratiques pour les petits volumes (1-2 visites de pickup). Tri requis sur place. Limite de quantité par visite.",
          "2. Location d'un conteneur (« roll-off ») : pertinente pour les gros chantiers de plus de 2 semaines. Coût important, occupe une place de stationnement, mais permet de jeter en continu.",
          "3. Service de débarras résidentiel comme le nôtre : on vient chercher en quelques visites planifiées, pas besoin de conteneur, pas de tri à faire vous-même. Idéal pour les rénovations de 1-3 pièces.",
          "4. Combinaison : écocentre pour ce qui rentre dans votre coffre + un de nos passages pour les gros morceaux (vieux comptoirs, armoires complètes, vieux électros).",
        ],
      },
      {
        heading: "Comment notre équipe s'intègre dans votre chantier",
        paragraphs: [
          "On peut intervenir une seule fois (à la fin du chantier) ou plusieurs fois (pendant les phases). On vient chez vous (Hull, Aylmer, Buckingham, n'importe quel secteur de Gatineau), on évacue les débris, on trie au centre approprié.",
          "On peut aussi gérer les vieilles armoires de cuisine, le vieux comptoir, l'ancien lavabo, les vieux luminaires — tout ce que vous remplacez et qui doit partir. On intervient en soirée et la fin de semaine si vous voulez minimiser l'impact sur votre semaine de travail.",
          "Soumission gratuite par téléphone ou formulaire. Pour les gros chantiers, on peut faire une visite sur place avant de fixer le prix.",
        ],
      },
    ],
    closing: "Une rénovation se finit vraiment quand le chantier est vide, pas quand le dernier coup de pinceau est donné. Planifiez l'évacuation dès le départ — ça change tout.",
  },
  en: {
    title: "Post-Renovation Cleanup in Gatineau: How to Clear a Worksite",
    metaDescription: "Practical guide to clearing renovation debris in Gatineau: what to recycle, what to donate, and how to keep costs down.",
    intro: "A renovation rarely ends cleanly. Debris is everywhere: drywall, old countertops, ripped-up flooring, leftover materials, old furniture being replaced. Here's how to clear it all out efficiently in Gatineau without turning the project into a logistical nightmare.",
    sections: [
      {
        heading: "Plan disposal during the renovation, not after",
        paragraphs: [
          "Classic mistake: letting all the debris pile up until the end of the project. Result: a packed basement, unusable rooms for weeks, and a nasty surprise when it's time to evacuate.",
          "Better: plan disposal in AT LEAST two stages. A first cleanup once demolition is done (drywall, old finishes, old flooring), and a second at the end for replaced furniture and leftover materials.",
          "If the renovation is large (full kitchen, basement, more than one room), consider weekly cleanups during the project. More efficient than doing it all at the end, and keeps the worksite safe.",
        ],
      },
      {
        heading: "What sorts after a renovation",
        paragraphs: [
          "Untreated wood (floor planks, framing, unpainted trim): recyclable. Several centres accept it for free.",
          "Treated, painted, plywood, melamine wood: not recyclable as clean wood, but goes to regional landfill via standard streams.",
          "Metal (old pipes, ducts, appliances, door frames): 100% recyclable and has resale value for large volumes. If you have a lot of copper or aluminum, set it aside.",
          "Drywall: recyclable at the right centres. In Gatineau, some eco-centres accept drywall separated from other materials.",
          "Tile, ceramic, laminate countertops: landfill, not recyclable.",
          "Old appliances: ARPE program for small ones, eco-centres for white goods (fridge, stove, washer).",
        ],
      },
      {
        heading: "Your options in Gatineau",
        paragraphs: [
          "1. City eco-centres: practical for small volumes (1-2 pickup visits). Sorting required on-site. Quantity limit per visit.",
          "2. Renting a roll-off container: relevant for large projects over 2 weeks. Significant cost, takes a parking spot, but allows continuous dumping.",
          "3. Residential junk removal service like ours: we come for a few scheduled visits, no container needed, no sorting on your end. Ideal for 1-3 room renovations.",
          "4. Combination: eco-centre for what fits in your trunk + one of our visits for the big pieces (old countertops, full cabinets, old appliances).",
        ],
      },
      {
        heading: "How our crew fits into your project",
        paragraphs: [
          "We can come once (at the end) or multiple times (during phases). We come to your home (Hull, Aylmer, Buckingham, any Gatineau sector), haul out the debris, and sort at the right centre.",
          "We can also handle old kitchen cabinets, old countertops, old sinks, old light fixtures — anything you're replacing that needs to go. We can come evenings and weekends if you want to minimize disruption to your work week.",
          "Free quote by phone or form. For large projects, we can do an on-site walkthrough before pricing.",
        ],
      },
    ],
    closing: "A renovation truly ends when the worksite is empty, not when the last paint stroke lands. Plan the evacuation from the start — it changes everything.",
  },
};

const MOVING_DAY: Record<Lang, LongFormContent> = {
  fr: {
    title: "Débarras lors d'un déménagement à Gatineau",
    metaDescription: "Guide pratique pour le tri et l'évacuation des encombrants lors d'un déménagement à Gatineau : trier en amont, gérer ce qui reste, le 1er juillet.",
    intro: "Un déménagement, c'est aussi une occasion en or pour faire le tri. Le problème, c'est qu'on découvre à la dernière minute qu'on a 3 sofas, 2 télés et un sous-sol plein de boîtes qu'on ne veut pas emmener au prochain logement. Voici comment évacuer ce qui reste sans retarder le camion de déménagement.",
    sections: [
      {
        heading: "Triez 4 semaines avant, pas la veille",
        paragraphs: [
          "La règle d'or : tout ce qui n'est pas utilisé dans les 6 derniers mois ET qui n'a pas de valeur sentimentale claire est un candidat au débarras. Vieux vêtements, livres jamais relus, équipement de sport oublié, vaisselle en double, meubles qu'on remplace dans le nouveau logement.",
          "Faites trois piles : on garde, on donne, on jette. La pile « à donner » va aux organismes de charité (Société Saint-Vincent-de-Paul, Centraide, Renaissance) ou sur Marketplace. La pile « à jeter » est ce qui demande un débarras.",
          "Plus vous triez tôt, plus vous avez d'options pour la pile « à jeter ». Si vous attendez la veille, vous êtes bloqué avec ce qui reste sur la rue ou dans l'ancien logement.",
        ],
      },
      {
        heading: "Le 1er juillet à Gatineau : journée nationale du déménagement",
        paragraphs: [
          "Au Québec, le 1er juillet est traditionnellement la journée des déménagements parce que c'est la date d'expiration de la majorité des baux. Le résultat : tous les services de déménagement, débarras, et nettoyage sont saturés cette semaine-là.",
          "Si vous déménagez le 1er juillet, réservez votre débarras 3 à 4 semaines à l'avance. Si possible, planifiez le débarras 2-3 jours AVANT le déménagement, pas le jour même — ça libère de l'espace dans l'ancien logement et facilite le travail des déménageurs.",
          "Si vous déménagez à un autre moment de l'année, vous avez beaucoup plus de flexibilité et souvent une disponibilité le jour-même.",
        ],
      },
      {
        heading: "Ce qu'on voit le plus souvent rester",
        paragraphs: [
          "Vieux matelas qui ne rentrent pas dans le nouveau logement ou qu'on profite du déménagement pour remplacer.",
          "Sofas et fauteuils trop grands pour le nouvel espace, ou qui ont fait leur temps.",
          "Électroménagers du locataire qui partent (frigo additionnel, sécheuse vieillissante, lave-vaisselle d'appoint).",
          "Boîtes de souvenirs et papiers qu'on transporte de déménagement en déménagement sans jamais ouvrir. C'est le bon moment pour trier.",
          "Équipement saisonnier oublié dans le cabanon : vieille tondeuse, équipement de jardin, BBQ, articles de patio.",
        ],
      },
      {
        heading: "Notre service de débarras pour déménagement",
        paragraphs: [
          "On vient chez vous quelques jours avant ou le jour même du déménagement, on prend ce qui reste, et on libère l'espace pour que vous puissiez nettoyer ou remettre les clés au propriétaire suivant. Pratique aussi pour vider rapidement un logement après le départ des déménageurs s'il reste des choses.",
          "On peut intervenir dans les deux logements si nécessaire — l'ancien (pour ce qui reste) et le nouveau (pour les meubles que vous remplacez en arrivant).",
          "Soumission gratuite. Pour le 1er juillet et la fin juin, réservez tôt — la demande est très forte.",
        ],
      },
    ],
    closing: "Un déménagement, c'est l'opportunité parfaite pour ne pas transporter dans la prochaine maison ce qu'on devrait laisser derrière. Appelez-nous ou utilisez le formulaire pour planifier.",
  },
  en: {
    title: "Junk Removal During a Move in Gatineau",
    metaDescription: "Practical guide to sorting and clearing unwanted items during a move in Gatineau: planning ahead, July 1st, what gets left behind.",
    intro: "A move is also a golden opportunity to declutter. The problem is you discover at the last minute that you have 3 sofas, 2 TVs, and a basement full of boxes you don't want to bring to the next place. Here's how to clear out what's leaving without holding up the moving truck.",
    sections: [
      {
        heading: "Sort 4 weeks ahead, not the night before",
        paragraphs: [
          "Rule of thumb: anything you haven't used in the last 6 months AND has no clear sentimental value is a disposal candidate. Old clothes, books never re-read, forgotten sports gear, duplicate dishes, furniture you're replacing in the new place.",
          "Make three piles: keep, donate, dispose. The donate pile goes to charities (Société Saint-Vincent-de-Paul, Centraide, Renaissance) or Marketplace. The dispose pile is what needs hauling.",
          "The earlier you sort, the more options you have for the dispose pile. Wait until the night before and you're stuck with whatever's left in the old place or on the curb.",
        ],
      },
      {
        heading: "July 1st in Gatineau: national moving day",
        paragraphs: [
          "In Quebec, July 1st is traditionally moving day because most leases expire then. As a result, all moving, junk removal, and cleaning services are slammed that week.",
          "If you're moving July 1st, book your pickup 3 to 4 weeks ahead. If possible, schedule the pickup 2-3 days BEFORE the move, not on the day itself — it frees up space in the old place and makes the movers' job easier.",
          "If you're moving at another time of year, you have much more flexibility and often same-day availability.",
        ],
      },
      {
        heading: "What we see left behind most often",
        paragraphs: [
          "Old mattresses that don't fit the new place or that you're using the move to replace.",
          "Sofas and armchairs too big for the new space, or that have run their course.",
          "Tenant's appliances that are leaving (extra fridge, aging dryer, secondary dishwasher).",
          "Boxes of mementos and papers carted from move to move without ever being opened. This is the right moment to sort them.",
          "Seasonal gear forgotten in the shed: old lawnmower, garden equipment, BBQ, patio items.",
        ],
      },
      {
        heading: "Our moving-day pickup service",
        paragraphs: [
          "We come to your home a few days before or on moving day itself, take what's leaving, and free up the space so you can clean or hand the keys to the next owner. Also handy for clearing out a unit after the movers leave if anything remains.",
          "We can work both ends — the old place (for what stays) and the new place (for furniture you're replacing on arrival).",
          "Free quote. For July 1st and late June, book early — demand is very high.",
        ],
      },
    ],
    closing: "A move is the perfect chance to not haul into the next home what you should leave behind. Call us or use the form to plan.",
  },
};

export function getMattressGuide(lang: Lang): LongFormContent {
  return MATTRESS[lang];
}

export function getPrepGuide(lang: Lang): LongFormContent {
  return PREP[lang];
}

export function getFridgeGuide(lang: Lang): LongFormContent {
  return FRIDGE[lang];
}

export function getSofaGuide(lang: Lang): LongFormContent {
  return SOFA[lang];
}

export function getElectronicsGuide(lang: Lang): LongFormContent {
  return ELECTRONICS[lang];
}

export function getTvGuide(lang: Lang): LongFormContent {
  return TV[lang];
}

export function getTiresGuide(lang: Lang): LongFormContent {
  return TIRES[lang];
}

export function getPostRenoGuide(lang: Lang): LongFormContent {
  return POST_RENO[lang];
}

export function getMovingDayGuide(lang: Lang): LongFormContent {
  return MOVING_DAY[lang];
}
