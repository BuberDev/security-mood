export type CategoryId = "home-security" | "personal-safety" | "cyber-shield" | "emergency-prep";

export type Category = {
  id: CategoryId;
  name: string;
  description: string;
  image: string;
  heroLine: string;
};

export type Product = {
  id: string;
  name: string;
  categoryId: CategoryId;
  benefit: string;
  description: string;
  trustSignal: "Top rated" | "Popular" | "Editor favorite";
  image: string;
  imageAlt: string;
  amazonUrl: string;
};

export type ProductProof = {
  rating: number;
  reviews: string;
  socialProof:
    | "Popular right now"
    | "Limited-time favorite"
    | "Trending on social media"
    | "Most saved on Pinterest this week"
    | "Most loved by routine creators";
  highlights: string[];
};

export type TopPickBadge = "Best Seller" | "Trending" | "Most Loved";

export type RoutineStep = {
  step: number;
  title: string;
  timing: string;
  description: string;
  productId: string;
};

export type ArticleSection = {
  id: string;
  title: string;
  copy: string;
  productId: string;
};

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  intro: string;
  heroImage: string;
  heroAlt: string;
  categoryId: CategoryId;
  readTime: string;
  publishedAt: string;
  pinHook: string;
  sections: ArticleSection[];
};

export const siteMeta = {
  name: "Security Mood",
  tagline: "Your trusted guide to safety in uncertain times.",
  description:
    "We curate essential gear for home security, personal protection, and emergency preparedness, providing direct Amazon links for high-conversion safety solutions.",
  keywords: [
    "home security",
    "personal protection gear",
    "prepping gear",
    "survival tools",
    "cybersecurity tools",
    "emergency preparedness",
    "safety essentials",
    "home defense systems",
    "everyday carry",
    "tactical gear",
    "privacy tools",
    "survival prepping",
    "escaping war",
    "survival skills",
    "bug out bag essentials",
    "tactical equipment",
    "self defense tools",
    "water purification methods",
    "long term food storage",
    "urban survival guide",
    "wilderness survival techniques",
    "first aid kit checklist",
    "personal safety alarms",
    "bulletproof vests",
    "gas masks for civilians",
    "nuclear fallout protection",
    "EMP protection for electronics",
    "solar power backup",
    "hand crank radio",
    "survival candles",
    "emergency blankets",
    "fire starting kits",
    "bushcraft tools",
    "bunker construction",
    "perimeter security",
    "driveway alarms",
    "smart door locks",
    "window security film",
    "reinforced doors",
    "security cameras solar powered",
    "hidden safes",
    "portable safes for travel",
    "travel safety gear",
    "non-lethal self defense",
    "pepper spray gel",
    "tactical flashlights",
    "personal locator beacons",
    "satellite communicators",
    "off-grid communication",
    "amateur radio for beginners",
    "walkie talkies long range",
    "emergency light sticks",
    "potassium iodide tablets",
    "radiation detectors",
    "geiger counters",
    "hazardous material suit",
    "body armor levels",
    "tactical backpacks",
    "everyday carry tools",
    "multi-tools for survival",
    "folding knives for edc",
    "survival hatchets",
    "modular sleep systems",
    "0 degree sleeping bags",
    "emergency shelter tents",
    "tarp shelters bushcraft",
    "water filtration straws",
    "reverse osmosis for camping",
    "desalination kits",
    "heirloom seeds for gardening",
    "vertical farming at home",
    "canning and preserving food",
    "freeze dried meals",
    "mres meals ready to eat",
    "emergency fuel storage",
    "dual fuel generators",
    "portable power stations",
    "battery backup for home",
    "faraday cages for phones",
    "rfid blocking wallets",
    "cybersecurity for preppers",
    "encrypted communication apps",
    "vpn for privacy",
    "hardware security keys",
    "privacy screens for laptops",
    "webcam covers",
    "home fortification tips",
    "safe room design",
    "panic room essentials",
    "home defense gear",
    "tactical training for civilians",
    "situational awareness techniques",
    "de-escalation skills",
    "escaping kidnapping",
    "restraint escape tools",
    "locksmithing for emergencies",
    "lock pick sets legal use",
    "door barricades",
    "alarm systems no monthly fee",
    "covert surveillance cameras",
    "thermal imaging cameras",
    "night vision goggles",
    "tactical clothing",
    "moisture wicking fabric",
    "fire resistant clothing",
    "steel toe boots survival",
    "survival gardening",
    "composting toilets off grid",
    "solar ovens",
    "rainwater harvesting",
    "well water pumps manual",
    "defensive landscaping",
    "guard dogs for home security",
    "disaster recovery plan",
    "evacuation routes",
    "bug out vehicle setup",
    "overlanding gear",
    "4x4 recovery tools",
    "emergency tire repair kit",
    "jump starters portable",
    "cb radio for trucks",
    "scanner radios for police fire",
    "survival community building",
    "bartering items for collapse",
    "precious metals for survival",
    "gold and silver coins",
    "tactical medical training",
    "tourniquets application",
    "chest seals first aid",
    "hemostatic agents",
    "suture kits",
    "natural remedies survival",
    "foraging for wild edibles",
    "hunting and trapping for food",
    "fishing survival kits",
    "bow and arrow for defense",
    "slingshots for small game",
    "survivalist mindset",
    "psychological preparedness",
    "stress management in crisis",
    "self-reliance skills",
    "minimalism for survival",
    "grey man theory",
    "blending in during riots",
    "civil unrest safety tips",
    "active shooter response",
    "bomb threat procedure",
    "home fire safety equipment",
    "fire extinguishers for home",
    "smoke and carbon monoxide detectors",
    "escape ladders for windows",
    "flood protection for basement",
    "sandbags for flooding",
    "hurricane shutters",
    "storm shelters",
    "tornado safety gear",
    "earthquake kits",
    "wildfire evacuation plan",
    "winter storm survival",
  ],
  plKeywords: [
    "bezpieczeństwo domu",
    "ochrona osobista",
    "akcesoria survivalowe",
    "prepping polska",
    "narzędzia cyberbezpieczeństwa",
    "zestaw przetrwania",
    "gadżety taktyczne",
    "prywatność w sieci",
    "ucieczka przed wojną",
    "umiejętności przetrwania",
    "systemy bezpieczeństwa domu",
    "przygotowanie na sytuacje awaryjne",
    "sprzęt dla preppersów",
    "wyposażenie plecaka ucieczkowego",
    "sprzęt taktyczny",
    "narzędzia do samoobrony",
    "metody oczyszczania wody",
    "długoterminowe przechowywanie żywności",
    "przewodnik przetrwania w mieście",
    "techniki survivalowe w dziczy",
    "lista apteczki pierwszej pomocy",
    "alarmy osobiste",
    "kamizelki kuloodporne",
    "maski przeciwgazowe dla cywilów",
    "ochrona przed opadem nuklearnym",
    "ochrona EMP dla elektroniki",
    "zasilanie słoneczne awaryjne",
    "radio na korbkę",
    "świece survivalowe",
    "koce ratunkowe",
    "zestawy do rozpalania ognia",
    "narzędzia bushcraftowe",
    "budowa bunkra",
    "ochrona obwodowa",
    "alarmy podjazdowe",
    "inteligentne zamki do drzwi",
    "folia ochronna na okna",
    "drzwi wzmocnione",
    "kamery bezpieczeństwa solarne",
    "ukryte sejfy",
    "sejfy przenośne do podróży",
    "sprzęt bezpieczeństwa w podróży",
    "nieagresywna samoobrona",
    "gaz pieprzowy w żelu",
    "latarki taktyczne",
    "osobiste nadajniki lokalizacyjne",
    "komunikatory satelitarne",
    "łączność poza siecią",
    "radioamatorstwo dla początkujących",
    "krótkofalówki dalekiego zasięgu",
    "światła chemiczne awaryjne",
    "tabletki z jodkiem potasu",
    "detektory promieniowania",
    "liczniki Geigera",
    "kombinezon hazmat",
    "poziomy pancerza",
    "plecaki taktyczne",
    "narzędzia EDC codzienne",
    "multitool survivalowy",
    "noże składane EDC",
    "siekiery survivalowe",
    "modułowe systemy spania",
    "śpiwory ekstremalne",
    "namioty ratunkowe",
    "schronienia z tarpu",
    "słomki do filtrowania wody",
    "odwrócona osmoza kempingowa",
    "zestawy do odsalania",
    "nasiona tradycyjne",
    "rolnictwo pionowe w domu",
    "wekowanie żywności",
    "liofilizowana żywność",
    "racje żywnościowe MRE",
    "przechowywanie paliwa awaryjnego",
    "generatory dwupaliwowe",
    "przenośne stacje zasilania",
    "domowy backup bateryjny",
    "klatki Faradaya na telefon",
    "portfele blokujące RFID",
    "cyberbezpieczeństwo dla preppersów",
    "szyfrowane aplikacje komunikacyjne",
    "VPN dla prywatności",
    "klucze bezpieczeństwa sprzętowe",
    "filtry prywatności na laptopa",
    "osłonki na kamerkę",
    "porady fortyfikacji domu",
    "projektowanie bezpiecznego pokoju",
    "wyposażenie panic room",
    "sprzęt do obrony domu",
    "szkolenia taktyczne dla cywilów",
    "techniki świadomości sytuacyjnej",
    "umiejętności deeskalacji",
    "ucieczka przed porwaniem",
    "narzędzia do uwalniania się z więzów",
    "ślusarstwo awaryjne",
    "zestawy do otwierania zamków",
    "barykady drzwiowe",
    "systemy alarmowe bez abonamentu",
    "ukryte kamery monitoringu",
    "kamery termowizyjne",
    "gogle noktowizyjne",
    "odzież taktyczna",
    "tkaniny odprowadzające wilgoć",
    "odzież ognioodporna",
    "buty ze stalowymi noskami",
    "ogrodnictwo survivalowe",
    "toalety kompostujące",
    "piece słoneczne",
    "zbieranie wody deszczowej",
    "ręczne pompy do studni",
    "architektura obronna krajobrazu",
    "psy obronne do domu",
    "plan odzyskiwania po katastrofie",
    "trasy ewakuacyjne",
    "pojazd ucieczkowy",
    "sprzęt overlandingowy",
    "narzędzia 4x4",
    "naprawa opon awaryjna",
    "przenośne urządzenia rozruchowe",
    "radio CB do ciężarówek",
    "skanery radiowe służb",
    "społeczność survivalowa",
    "przedmioty na handel barter",
    "metale szlachetne survival",
    "złote i srebrne monety",
    "taktyczne szkolenia medyczne",
    "nakładanie staz taktycznych",
    "opatrunki wentylowe klatki",
    "środki hemostatyczne",
    "zestawy do szycia ran",
    "naturalne lekarstwa survivalowe",
    "zbieranie roślin jadalnych",
    "polowanie i pułapki",
    "survivalowe zestawy wędkarskie",
    "łuk i strzały do obrony",
    "proce na drobną zwierzynę",
    "mentalność survivalisty",
    "przygotowanie psychologiczne",
    "zarządzanie stresem w kryzysie",
    "umiejętności samowystarczalności",
    "minimalizm w survivalu",
    "teoria grey man",
    "wtapianie się w tłum",
    "porady bezpieczeństwa niepokoje",
    "reakcja na aktywnego strzelca",
    "procedura zagrożenia bombowego",
    "sprzęt przeciwpożarowy domowy",
    "gaśnice domowe",
    "czujniki dymu i czadu",
    "drabiny ewakuacyjne do okien",
    "ochrona przeciwpowodziowa piwnicy",
    "worki z piaskiem na powódź",
    "okiennice antyhuraganowe",
    "schrony burzowe",
    "bezpieczeństwo na tornado",
    "zestawy na trzęsienie ziemi",
    "plan ewakuacji przed pożarem",
    "przetrwanie burzy śnieżnej",
  ],
};

export const categories: Category[] = [
  {
    id: "home-security",
    name: "Home Fortification",
    description: "Indoor and outdoor security solutions that turn your home into a fortress.",
    image:
      "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1200&q=80",
    heroLine: "Peace of mind starts at your front door.",
  },
  {
    id: "personal-safety",
    name: "Personal Safety",
    description: "Everyday carry (EDC) essentials and non-lethal defense for total confidence.",
    image:
      "https://images.unsplash.com/photo-1611210405187-73907c1b5900?auto=format&fit=crop&w=1200&q=80",
    heroLine: "Preparedness you can carry with you.",
  },
  {
    id: "cyber-shield",
    name: "Cyber Shield",
    description: "Digital privacy and security tools to protect your most valuable data.",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80",
    heroLine: "Your digital life, fully protected.",
  },
  {
    id: "emergency-prep",
    name: "Emergency Prep",
    description: "Survival kits and backup systems for when the unexpected happens.",
    image:
      "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=1200&q=80",
    heroLine: "Readiness for the real world.",
  },
];

export const products: Product[] = [
  {
    id: "outdoor-security-camera",
    name: "TP-Link Tapo Smart Home Camera",
    categoryId: "home-security",
    benefit: "Monitor your baby, pet, and home from anywhere.",
    description:
      "A high-definition indoor smart camera with 30ft night vision, motion detection, and 2-way audio for total peace of mind.",
    trustSignal: "Top rated",
    image: "/smart_camera.png",
    imageAlt: "TP-Link Tapo Smart Home Camera with app interface",
    amazonUrl: "https://amzn.to/3OccnLE",
  },
  {
    id: "personal-safety-alarm",
    name: "Birdie Personal Safety Alarm",
    categoryId: "personal-safety",
    benefit: "Instant deterrent with 130dB siren and strobe light.",
    description:
      "A compact, stylish alarm that helps detour potential threats and draw attention in emergency situations.",
    trustSignal: "Popular",
    image:
      "https://images.unsplash.com/photo-1585145199013-bc593006764a?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Personal safety alarm in charcoal grey",
    amazonUrl: "https://www.amazon.com/",
  },
  {
    id: "hardware-security-key",
    name: "YubiKey 5C NFC Security Key",
    categoryId: "cyber-shield",
    benefit: "Unkillable account protection through hardware 2FA.",
    description:
      "The gold standard for digital security, providing physical proof of identity for all your sensitive accounts.",
    trustSignal: "Editor favorite",
    image:
      "https://images.unsplash.com/photo-1633265485768-3069cc8fc581?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Yubikey hardware security key on a desk",
    amazonUrl: "https://www.amazon.com/",
  },
  {
    id: "solar-emergency-radio",
    name: "NOAA Emergency 5-Way Powered Weather Radio",
    categoryId: "emergency-prep",
    benefit: "Critical communication and power during grid failures.",
    description:
      "A 5000mAh monster with 5-way power (Solar, Crank, USB, AAA, Internal), AM/FM/Shortwave, and a built-in LED flashlight.",
    trustSignal: "Top rated",
    image: "/radio_survival.png",
    imageAlt: "Orange NOAA survival radio with solar panel and hand crank",
    amazonUrl: "https://amzn.to/47W82D1",
  },
  {
    id: "smart-door-lock",
    name: "Wyze Auto-Lock Bolt v2",
    categoryId: "home-security",
    benefit: "Fingerprint keyless entry and Wi-Fi access control.",
    description:
      "A smart door lock with AI learning fingerprint scanner, auto-locking technology, and 8-month battery life for superior home security.",
    trustSignal: "Top rated",
    image: "/Cover_Wyze_Auto-Lock_Bolt.png",
    imageAlt: "Wyze Auto-Lock Bolt v2 smart lock with fingerprint scanner",
    amazonUrl: "https://amzn.to/4tM6JyH",
  },
  {
    id: "tactical-pen",
    name: "Clip-and-Carry Kydex Multitool Sheath",
    categoryId: "personal-safety",
    benefit: "Instant access and secure carry for your Leatherman.",
    description:
      "Custom-molded Kydex sheath for Leatherman Wave+. Made in the USA with adjustable retention and a lifetime warranty.",
    trustSignal: "Top rated",
    image: "/Kydex Multitool Sheath.png",
    imageAlt: "Kydex sheath on a belt holding a Leatherman multitool",
    amazonUrl: "https://amzn.to/4enMhzK",
  },
  {
    id: "pepper-spray-gel",
    name: "SABRE Red Pepper Spray Gel",
    categoryId: "personal-safety",
    benefit: "Long-range protection with zero wind blowback.",
    description:
      "Maximum strength protection with a targeted gel formula that stays on target and off bystanders.",
    trustSignal: "Editor favorite",
    image:
      "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Pepper spray container being held",
    amazonUrl: "https://www.amazon.com/",
  },
  {
    id: "door-security-bar",
    name: "Master Lock Door Security Bar",
    categoryId: "home-security",
    benefit: "Mechanical reinforcement against forced entry.",
    description:
      "A heavy-duty steel bar that provides physical resistance to swinging and sliding doors.",
    trustSignal: "Popular",
    image:
      "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Security bar propping a door closed",
    amazonUrl: "https://www.amazon.com/",
  },
  {
    id: "water-filtration-straw",
    name: "LifeStraw Personal Water Filter",
    categoryId: "emergency-prep",
    benefit: "Access to safe drinking water in any environment.",
    description:
      "Removes 99.9999% of waterborne bacteria and parasites, essential for wilderness and urban survival.",
    trustSignal: "Top rated",
    image:
      "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=900&q=80",
    imageAlt: "LifeStraw being used in a stream",
    amazonUrl: "https://www.amazon.com/",
  },
  {
    id: "faraday-bag",
    name: "Mission Darkness Faraday Bag",
    categoryId: "cyber-shield",
    benefit: "Total RF shielding for phones and key fobs.",
    description:
      "Blocks all wireless signals (WiFi, Cellular, GPS, RFID) to prevent tracking and remote hacking.",
    trustSignal: "Popular",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Small black faraday bag on a table",
    amazonUrl: "https://www.amazon.com/",
  },
  {
    id: "emergency-food-supply",
    name: "Prepper's Long-Term Survival Guide",
    categoryId: "emergency-prep",
    benefit: "The blueprint for off-grid living and food security.",
    description:
      "A comprehensive guide to food storage, sustainable living, and home defense in extreme survival scenarios.",
    trustSignal: "Editor favorite",
    image: "/Preppers_long_term_book.png",
    imageAlt: "Prepper's Long-Term Survival Guide book cover",
    amazonUrl: "https://amzn.to/4sriLfW",
  },
  {
    id: "portable-safe",
    name: "SAFEGO Portable Indoor/Outdoor Safe",
    categoryId: "home-security",
    benefit: "Security for valuables in high-traffic or travel areas.",
    description:
      "A lightweight but rugged lockbox that anchors to fixed objects, perfect for travel and dorm rooms.",
    trustSignal: "Top rated",
    image:
      "https://images.unsplash.com/photo-1510070112810-d4e9a46d9e91?auto=format&fit=crop&w=900&q=80",
    imageAlt: "White portable safe locked to a chair",
    amazonUrl: "https://www.amazon.com/",
  },
  {
    id: "webcam-covers",
    name: "CloudValley Webcam Cover Slide",
    categoryId: "cyber-shield",
    benefit: "Physical assurance against camera hacking.",
    description:
      "Ultra-thin covers that slide to block your camera, ensuring your privacy is never compromised.",
    trustSignal: "Top rated",
    image: "/webcam_cover.png",
    imageAlt: "Small webcam cover on a laptop",
    amazonUrl: "https://amzn.to/480WDBY",
  },
  {
    id: "rfid-wallet",
    name: "Ridge Minimalist RFID Wallet",
    categoryId: "personal-safety",
    benefit: "Protects against digital pickpocketing and skimming.",
    description:
      "A slim, aerospace-grade aluminum wallet that blocks RFID scanners while maintaining a modern aesthetic.",
    trustSignal: "Popular",
    image: "/ridge_wallet.png",
    imageAlt: "Metal minimalist wallet with cards",
    amazonUrl: "https://amzn.to/41WZCaT",
  },
  {
    id: "privacy-screen",
    name: "Kensington Magnetic Privacy Screen",
    categoryId: "cyber-shield",
    benefit: "Prevents visual hacking in public workspaces.",
    description:
      "Narrows the viewing angle of your laptop screen so only you can see your sensitive information.",
    trustSignal: "Editor favorite",
    image: "/privacy_screen.png",
    imageAlt: "Laptop with privacy screen filtered view",
    amazonUrl: "https://amzn.to/4vogHrF",
  },
  {
    id: "first-aid-kit",
    name: "Surviveware Waterproof First Aid Kit",
    categoryId: "emergency-prep",
    benefit: "Comprehensive medical readiness for any terrain.",
    description:
      "An organized, waterproof kit with labeled compartments for fast deployment in high-stress moments.",
    trustSignal: "Top rated",
    image: "/first_aid_kit.png",
    imageAlt: "Red waterproof first aid kit open",
    amazonUrl: "https://amzn.to/4sFqWpd",
  },
  {
    id: "tactical-flashlight",
    name: "Olight Imini 2 EDC Keychain Flashlight",
    categoryId: "personal-safety",
    benefit: "Ultra-compact lighting with instant magnetic activation.",
    description:
      "A 50-lumen magnetic EDC flashlight with instant USB charging and a rugged, reliable chassis.",
    trustSignal: "Popular",
    image: "/OLIGHT_2_Pack_IMINI2EDC.png",
    imageAlt: "Two mini Olight flashlights on a keychain",
    amazonUrl: "https://amzn.to/4c0ZSdu",
  },
  {
    id: "fire-starter-set",
    name: "Bayite Survival Ferrocerium Rod",
    categoryId: "emergency-prep",
    benefit: "Reliable fire starting in any weather conditions.",
    description:
      "A thick ferro rod that throws 5,500°F sparks to ignite tinder instantly, even when wet.",
    trustSignal: "Editor favorite",
    image: "/ferro_rod.png",
    imageAlt: "Ferro rod creating sparks",
    amazonUrl: "https://amzn.to/4bY0MZC",
  },
  {
    id: "outdoor-motion-alarm",
    name: "Guardline Driveway Alarm & Sensor",
    categoryId: "home-security",
    benefit: "Early warning system for perimeter breaches.",
    description:
      "Long-range wireless motion sensors that alert you before someone reaches your front door.",
    trustSignal: "Popular",
    image: "/driveway_alarm.png",
    imageAlt: "Motion sensor mounted on a post",
    amazonUrl: "https://amzn.to/4cnPAnV",
  },
  {
    id: "emergency-blanket-set",
    name: "Swiss Safe Emergency Mylar Blankets",
    categoryId: "emergency-prep",
    benefit: "Prevents hypothermia by retaining 90% of body heat.",
    description:
      "Space-age blankets that are compact, waterproof, and windproof—essential for every car and go-bag.",
    trustSignal: "Popular",
    image: "/emergency_blanket.png",
    imageAlt: "Reflective emergency blanket folded",
    amazonUrl: "https://amzn.to/3ObFRt3",
  },
];

export const productProofById: Record<string, ProductProof> = {
  "outdoor-security-camera": {
    rating: 4.4,
    reviews: "25,000+ reviews",
    socialProof: "Popular right now",
    highlights: [
      "Real-time alerts to your smartphone",
      "Crystal clear night vision up to 30 feet",
      "Seamless 2-way audio communication",
    ],
  },
  "personal-safety-alarm": {
    rating: 4.9,
    reviews: "22,400+ reviews",
    socialProof: "Trending on social media",
    highlights: [
      "Deafening alarm attracts immediate attention",
      "TSA-approved for safe air travel",
      "Swappable batteries last up to 40 minutes of use",
    ],
  },
  "hardware-security-key": {
    rating: 4.8,
    reviews: "10,500+ reviews",
    socialProof: "Most saved on Pinterest this week",
    highlights: [
      "Prevents 100% of remote phishing attacks",
      "Durable, crush-resistant construction",
      "Works with Google, AWS, and social media",
    ],
  },
  "solar-emergency-radio": {
    rating: 4.9,
    reviews: "13,000+ reviews",
    socialProof: "Limited-time favorite",
    highlights: [
      "Massive 5000mAh built-in battery",
      "5-way charging for total grid independence",
      "NOAA All Hazards weather alerts included",
    ],
  },
  "smart-door-lock": {
    rating: 4.8,
    reviews: "BHMA2 Certified",
    socialProof: "Popular right now",
    highlights: [
      "AI learning fingerprint scanner",
      "8-month battery life (IP53 rated)",
      "Wi-Fi front door lock with auto-lock",
    ],
  },
  "tactical-pen": {
    rating: 4.9,
    reviews: "USA-Made Quality",
    socialProof: "Most loved by routine creators",
    highlights: [
      "Custom-molded for perfect fit",
      "Adjustable retention and cant",
      "Backed by a lifetime warranty",
    ],
  },
  "pepper-spray-gel": {
    rating: 4.9,
    reviews: "35,000+ reviews",
    socialProof: "Popular right now",
    highlights: [
      "25 bursts with a 12-foot range",
      "UV marking dye for suspect identification",
      "Gel formula prevents indoor blowback",
    ],
  },
  "door-security-bar": {
    rating: 4.7,
    reviews: "14,600+ reviews",
    socialProof: "Limited-time favorite",
    highlights: [
      "Withstands up to 350 lbs of force",
      "Adjustable to fit most standard doors",
      "Padded foot prevents floor damage",
    ],
  },
  "water-filtration-straw": {
    rating: 4.8,
    reviews: "95,000+ reviews",
    socialProof: "Most saved on Pinterest this week",
    highlights: [
      "Filters up to 1,000 gallons of water",
      "No chemical taste or shelf-life limit",
      "Ultra-lightweight for any survival kit",
    ],
  },
  "faraday-bag": {
    rating: 4.7,
    reviews: "6,200+ reviews",
    socialProof: "Trending on social media",
    highlights: [
      "Double-shielded seams for total isolation",
      "Prevents key fob relay attacks at home",
      "Internal pocket for small cards or cash",
    ],
  },
  "emergency-food-supply": {
    rating: 4.9,
    reviews: "8,300+ reviews",
    socialProof: "Limited-time favorite",
    highlights: [
      "Covers off-grid power and sustainable living",
      "Comprehensive food storage strategies",
      "Practical home defense blueprints",
    ],
  },
  "portable-safe": {
    rating: 4.5,
    reviews: "7,800+ reviews",
    socialProof: "Most loved by routine creators",
    highlights: [
      "Water-resistant for beach or poolside use",
      "Customize with a 3-digit combination",
      "Large enough for phone, cash, and passport",
    ],
  },
  "webcam-covers": {
    rating: 4.8,
    reviews: "20,000+ reviews",
    socialProof: "Popular right now",
    highlights: [
      "Ultra-thin (0.027in) for laptop closure",
      "Stays in place with 3M adhesive",
      "Matches most modern device aesthetics",
    ],
  },
  "rfid-wallet": {
    rating: 4.7,
    reviews: "32,000+ reviews",
    socialProof: "Trending on social media",
    highlights: [
      "Blocks illegal RFID scanning devices",
      "Holds up to 12 cards without stretching",
      "Lifetime warranty on the metal frame",
    ],
  },
  "privacy-screen": {
    rating: 4.4,
    reviews: "5,500+ reviews",
    socialProof: "Popular right now",
    highlights: [
      "Reduces blue light by up to 22%",
      "Magnetic attachment for easy removal",
      "Anti-glare coating for outdoor use",
    ],
  },
  "first-aid-kit": {
    rating: 4.9,
    reviews: "15,000+ reviews",
    socialProof: "Most saved on Pinterest this week",
    highlights: [
      "ANSI and OSHA compliant medical supplies",
      "Internal organization for fast access",
      "Rugged 600D polyester case",
    ],
  },
  "tactical-flashlight": {
    rating: 4.8,
    reviews: "8,520 reviews",
    socialProof: "Trending on social media",
    highlights: [
      "Instant magnetic activation mechanism",
      "Rechargeable via integrated USB plug",
      "50 lumens of powerful keychain light",
    ],
  },
  "fire-starter-set": {
    rating: 4.8,
    reviews: "9,600+ reviews",
    socialProof: "Limited-time favorite",
    highlights: [
      "Lasts for over 12,000 strikes",
      "Works at any altitude or humidity",
      "Includes emergency whistle and lanyard",
    ],
  },
  "outdoor-motion-alarm": {
    rating: 4.5,
    reviews: "8,300+ reviews",
    socialProof: "Popular right now",
    highlights: [
      "1/4 mile wireless transmission range",
      "Weatherproof sensors (IP65 rated)",
      "Expandable with up to 16 sensors",
    ],
  },
  "emergency-blanket-set": {
    rating: 4.8,
    reviews: "12,900+ reviews",
    socialProof: "Most loved by routine creators",
    highlights: [
      "Durable, tear-resistant insulation",
      "Highly reflective for signal rescue",
      "Fits easily in glove box or pocket",
    ],
  },
};

export const topPicks = [
  { productId: "outdoor-security-camera", badge: "Best Seller" as const },
  { productId: "personal-safety-alarm", badge: "Trending" as const },
  { productId: "hardware-security-key", badge: "Most Loved" as const },
  { productId: "solar-emergency-radio", badge: "Best Seller" as const },
  { productId: "tactical-pen", badge: "Most Loved" as const },
  { productId: "faraday-bag", badge: "Trending" as const },
  { productId: "water-filtration-straw", badge: "Most Loved" as const },
  { productId: "smart-door-lock", badge: "Best Seller" as const },
];

export const glowRoutineSteps: RoutineStep[] = [
  {
    step: 1,
    title: "Layer 1: The Perimeter",
    timing: "2 min",
    description: "Establish early warning with motion sensors that alert you before an entry point is tested.",
    productId: "outdoor-motion-alarm",
  },
  {
    step: 2,
    title: "Layer 2: Visual Deterrence",
    timing: "5 min",
    description: "Install smart home surveillance to ensure 24/7 visibility and monitoring of your most vulnerable areas.",
    productId: "outdoor-security-camera",
  },
  {
    step: 3,
    title: "Layer 3: Physical Barrier",
    timing: "4 min",
    description: "Reinforce entry points with mechanical bars that resist thousands of pounds of force.",
    productId: "door-security-bar",
  },
  {
    step: 4,
    title: "Layer 4: Access Control",
    timing: "1 min",
    description: "Deploy secondary smart locks that automatically secure your home the moment you leave.",
    productId: "smart-door-lock",
  },
];

export const articles: Article[] = [
  {
    slug: "five-minute-home-security-audit",
    title: "The 5-Minute Home Security Audit Every Homeowner Needs",
    excerpt:
      "I found 3 major flaws in my security in under 5 minutes. Here's how to fix them and turn your home into a fortress.",
    intro:
      "Home security isn't about expensive gadgets; it's about eliminating vulnerability. This 5-minute audit focuses on the three layers of protection that stop a breach before it starts.",
    heroImage:
      "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=2200&q=80",
    heroAlt: "Front door with modern security camera and reinforced locks",
    categoryId: "home-security",
    readTime: "6 min read",
    publishedAt: "2026-04-17",
    pinHook: "Deter, detect, and defend. Your 5-minute blueprint.",
    sections: [
      {
        id: "entry-point-check",
        title: "Step 1: The Physical Entry Audit",
        copy: "A lock is only as good as the door it's on. Inspect your frames for weakness and add mechanical reinforcement to prevent forced entry through sliding or swinging doors.",
        productId: "door-security-bar",
      },
      {
        id: "perimeter-warning",
        title: "Step 2: Early Warning Systems",
        copy: "Smart security starts at the perimeter. Use long-range motion sensors to get alerts before a visitor reaches your lock. This gives you time to verify and respond.",
        productId: "outdoor-motion-alarm",
      },
      {
        id: "surveillance-verification",
        title: "Step 3: Verification through Visuals",
        copy: "Don't guess who is at the door or in your home. Use high-definition smart cameras to verify threats and monitor activity in real-time with crystal clear night vision.",
        productId: "outdoor-security-camera",
      },
    ],
  },
  {
    slug: "ultimate-survival-kit-checklist-2026",
    title: "Survival Kit Checklist: 10 Items That Could Save Your Life in 2026",
    excerpt:
      "Most people buy the wrong gear. These are the 10 essentials you actually need for a real-world emergency or grid failure.",
    intro:
      "Preparedness is a mindset, but it's supported by the right tools. When the grid fails, your survival depends on three pillars: water, communication, and heat.",
    heroImage:
      "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=2200&q=80",
    heroAlt: "Survival gear including radio, water filter, and emergency blankets on a rugged surface",
    categoryId: "emergency-prep",
    readTime: "8 min read",
    publishedAt: "2026-04-16",
    pinHook: "Don't wait for the crisis. Build your readiness kit today.",
    sections: [
      {
        id: "water-security",
        title: "Secure Your Most Critical Resource",
        copy: "During a grid failure or natural disaster, municipal water is often the first thing compromised. A personal filtration straw ensures you can safely drink from any source.",
        productId: "water-filtration-straw",
      },
      {
        id: "information-life-line",
        title: "Maintain an Information Life Line",
        copy: "When the internet goes down, NOAA radio becomes your primary source of truth. A 5-way powered hand crank radio ensures you stay informed under any conditions.",
        productId: "solar-emergency-radio",
      },
      {
        id: "biological-warmth",
        title: "Retain Biological Body Heat",
        copy: "Hypothermia is a risk even in moderate climates if you are wet or exposed. Mylar blankets are lightweight essentials that reflect 90% of body heat back to you.",
        productId: "emergency-blanket-set",
      },
    ],
  },
  {
    slug: "digital-privacy-cyber-shield-guide",
    title: "Digital Privacy 101: How to Build Your Personal Cyber Shield",
    excerpt:
      "A hacker doesn't need a crowbar; they need your password. Reclaim your digital privacy with these 3 essential tools.",
    intro:
      "Your digital front door is tested thousands of times a day. If you don't have a hardware barrier between your data and the net, you are at risk. This guide simplifies digital self-defense.",
    heroImage:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=2200&q=80",
    heroAlt: "Laptop with hardware security key and privacy screen in a dark room",
    categoryId: "cyber-shield",
    readTime: "7 min read",
    publishedAt: "2026-04-15",
    pinHook: "Privacy is your greatest asset. Protect it like it's your home.",
    sections: [
      {
        id: "hardware-authentication",
        title: "The Gold Standard: Hardware Authentication",
        copy: "Stop relying on SMS codes that can be intercepted. Use a physical security key to ensure that only you—with the physical device—can access your accounts.",
        productId: "hardware-security-key",
      },
      {
        id: "rf-shielding",
        title: "RF Shielding for Your Physical Tokens",
        copy: "Modern theft happens over the air. Use Faraday bags and RFID-blocking wallets to prevent hackers from skimming your phone or credit card data in public.",
        productId: "rfid-wallet",
      },
      {
        id: "visual-privacy",
        title: "Maintain Visual Privacy in Public",
        copy: "Visual hacking is the simplest way to steal data. A magnetic privacy screen ensures that your work stays yours, even in the busiest coffee shops or airports.",
        productId: "privacy-screen",
      },
    ],
  },
  {
    slug: "edc-essentials-solo-travelers",
    title: "Everyday Carry (EDC) Essentials for Solo Travelers",
    excerpt:
      "Peace of mind in your pocket. These are the non-lethal tools I never leave home without for travel or urban safety.",
    intro:
      "Solo travel is empowering, but it requires a heightened sense of readiness. Your EDC should focus on deterrents and multi-purpose survival tools that pass security audits.",
    heroImage:
      "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&w=2200&q=80",
    heroAlt: "Flat lay of EDC gear: Kydex multitool sheath, alarm, and RFID wallet",
    categoryId: "personal-safety",
    readTime: "5 min read",
    publishedAt: "2026-04-14",
    pinHook: "Travel with confidence. The EDC blueprint for smarter safety.",
    sections: [
      {
        id: "instant-detour",
        title: "The Instant Detour: Personal Alarms",
        copy: "Deterrence is about drawing unwanted attention to a threat. A high-decibel alarm is the most effective way to alert bystanders and disorient an aggressor.",
        productId: "personal-safety-alarm",
      },
      {
        id: "discrete-defense",
        title: "Discrete Utility: Kydex Multitool Sheath",
        copy: "A multitool is your primary survival kit in one. A Kydex sheath ensures you have quick, one-handed access on your belt, providing immediate utility for repairs or defense.",
        productId: "tactical-pen",
      },
      {
        id: "protection-at-distance",
        title: "Distance Protection: Pepper Gel",
        copy: "Maximum strength gel gives you distance from a threat. Unlike spray, gel doesn't drift, making it safer to use in urban or windy environments.",
        productId: "pepper-spray-gel",
      },
    ],
  },
  {
    slug: "secure-your-smart-home-guide",
    title: "How to Secure Your Smart Home Without Sacrificing Privacy",
    excerpt:
      "Your smart devices are security risks. Learn how to layer your network and hardware for total digital protection.",
    intro:
      "Every smart device is a potential back door into your private life. Securing your smart home requires a balance of physical barriers and digital network hygiene.",
    heroImage:
      "https://images.unsplash.com/photo-1557053910-d9eadeed1c58?auto=format&fit=crop&w=2200&q=80",
    heroAlt: "Smart home dashboard and security camera setup",
    categoryId: "home-security",
    readTime: "9 min read",
    publishedAt: "2026-04-13",
    pinHook: "Smart homes need smarter security. Here is the layer guide.",
    sections: [
      {
        id: "physical-camera-blocks",
        title: "Use Physical Blocks for Indoor Cameras",
        copy: "Digital security can fail. Use physical webcam covers on laptops and indoor cameras to ensure that even a hacked device cannot record your private space.",
        productId: "webcam-covers",
      },
      {
        id: "hardware-gatekeeper",
        title: "Secure Your Accounts with a Gatekeeper",
        copy: "Protect your smart home hub with hardware 2FA. If your hub is compromised, your entire home is at risk. Use a physical key for the ultimate gatekeeper.",
        productId: "hardware-security-key",
      },
      {
        id: "entry-alert-layer",
        title: "The Entry Alert Layer",
        copy: "Add motion sensors to your smart home ecosystem that work independently of your main hub to ensure alerts always reach your phone.",
        productId: "outdoor-motion-alarm",
      },
    ],
  },
];

export const featuredArticleSlugs = [
  "five-minute-home-security-audit",
  "ultimate-survival-kit-checklist-2026",
  "digital-privacy-cyber-shield-guide",
  "edc-essentials-solo-travelers",
];

export const amazonFavoriteProductIds = [
  "outdoor-motion-alarm",
  "outdoor-security-camera",
  "door-security-bar",
  "smart-door-lock",
  "water-filtration-straw",
  "solar-emergency-radio",
  "emergency-blanket-set",
  "hardware-security-key",
  "personal-safety-alarm",
  "tactical-pen",
  "pepper-spray-gel",
  "faraday-bag",
];

export const favoriteCollections = [
  {
    id: "home-fortress",
    title: "Home Fortress Essentials",
    description: "The top-performing mechanical and digital upgrades to secure your residence.",
    categoryId: "home-security" as const,
    productIds: ["door-security-bar", "outdoor-motion-alarm", "outdoor-security-camera", "smart-door-lock"],
  },
  {
    id: "edc-safety",
    title: "Urban EDC Safety",
    description: "Non-lethal personal protection tools for commuting and travel.",
    categoryId: "personal-safety" as const,
    productIds: ["personal-safety-alarm", "tactical-pen", "pepper-spray-gel", "rfid-wallet"],
  },
  {
    id: "emergency-prep",
    title: "Emergency Readiness",
    description: "Critical gear for survival, off-grid communication, and medical first aid.",
    categoryId: "emergency-prep" as const,
    productIds: ["solar-emergency-radio", "water-filtration-straw", "emergency-blanket-set", "first-aid-kit"],
  },
  {
    id: "cyber-shield",
    title: "Cyber Shield Digital Defense",
    description: "Hardened hardware for protecting your digital identity and smart home network.",
    categoryId: "cyber-shield" as const,
    productIds: ["hardware-security-key", "faraday-bag", "privacy-screen", "webcam-covers"],
  },
];

export function getCategoryById(id: CategoryId) {
  return categories.find((category) => category.id === id);
}

export function isCategoryId(value: string): value is CategoryId {
  return categories.some((category) => category.id === value);
}

export function getProductById(id: string) {
  return products.find((product) => product.id === id);
}

export function getProductsByIds(ids: string[]) {
  return ids
    .map((id) => getProductById(id))
    .filter((product): product is Product => Boolean(product));
}

export function getFeaturedArticles() {
  return getArticlesBySlugs(featuredArticleSlugs);
}

export function getArticlesBySlugs(slugs: string[]) {
  return slugs
    .map((slug) => getArticleBySlug(slug))
    .filter((article): article is Article => Boolean(article));
}

export function getArticleBySlug(slug: string) {
  return articles.find((article) => article.slug === slug);
}

export function getRelatedArticles(slug: string, categoryId: CategoryId) {
  return articles
    .filter((article) => article.slug !== slug && article.categoryId === categoryId)
    .slice(0, 3);
}

export function getAmazonFavorites() {
  return getProductsByIds(amazonFavoriteProductIds);
}

export function getFavoritesCollections() {
  return favoriteCollections.map((collection) => ({
    ...collection,
    products: getProductsByIds(collection.productIds),
  }));
}

export function getProductProof(productId: string): ProductProof {
  return (
    productProofById[productId] ?? {
      rating: 4.7,
      reviews: "4,000+ reviews",
      socialProof: "Popular right now",
      highlights: [
        "Built to simplify your daily routine",
        "Creates visible comfort and confidence",
        "Easy to maintain as a long-term habit",
      ],
    }
  );
}

export function getTopPickProducts() {
  return topPicks
    .map((pick) => {
      const product = getProductById(pick.productId);
      if (!product) {
        return null;
      }

      return {
        product,
        badge: pick.badge,
      };
    })
    .filter((item): item is { product: Product; badge: TopPickBadge } => Boolean(item));
}

export function getGlowRoutineSteps() {
  return glowRoutineSteps
    .map((step) => {
      const product = getProductById(step.productId);
      if (!product) {
        return null;
      }

      return {
        ...step,
        product,
      };
    })
    .filter(
      (step): step is RoutineStep & { product: Product } =>
        Boolean(step)
    );
}
export function getProductsByCategoryId(categoryId: CategoryId) {
  return products.filter((product) => product.id && product.categoryId === categoryId);
}

export function getTopPicksByCategory(categoryId: CategoryId, limit = 4) {
  const categoryProducts = getProductsByCategoryId(categoryId);

  // Group by badge priority or just take the first few
  const topPickIds = topPicks.map((tp) => tp.productId);

  return categoryProducts
    .sort((a, b) => {
      const aIsTop = topPickIds.includes(a.id);
      const bIsTop = topPickIds.includes(b.id);
      if (aIsTop && !bIsTop) return -1;
      if (!aIsTop && bIsTop) return 1;
      return 0;
    })
    .slice(0, limit)
    .map((product) => {
      const topPick = topPicks.find((tp) => tp.productId === product.id);
      return {
        product,
        badge: topPick?.badge,
      };
    });
}
