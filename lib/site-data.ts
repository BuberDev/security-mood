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

export type LandingPage = {
  slug: string;
  title: string;
  description: string;
  excerpt?: string;
  intro: string;
  eyebrow: string;
  heroImage: string;
  heroAlt: string;
  categoryId: CategoryId;
  readTime: string;
  publishedAt: string;
  pinHook: string;
  bestFor: string[];
  featuredProductIds: string[];
  supportingArticleSlugs: string[];
  sections?: ArticleSection[];
  priorityOrder?: string[];
  audiencePaths?: {
    label: string;
    description: string;
    productId: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
};

export const siteMeta = {
  name: "Security Mood",
  tagline: "SEO-ready buying guides for home security, crisis readiness, privacy, and emergency preparedness.",
  description:
    "We curate Amazon-ready safety products and high-intent buying guides for home security, crisis readiness, blackout prep, personal protection, cyber privacy, and emergency preparedness.",
  keywords: [
    "home security products",
    "Amazon security finds",
    "Pinterest home security ideas",
    "emergency preparedness essentials",
    "crisis readiness gear",
    "blackout preparedness",
    "civil unrest preparedness",
    "evacuation essentials",
    "wartime preparedness",
    "cyber privacy tools",
    "personal safety gear",
    "travel safety accessories",
    "outdoor security lighting",
    "window alarm sensors",
    "door wedge alarm",
    "hidden camera detector",
    "portable power station",
    "RFID passport wallet",
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
    "crisis survival kit",
    "emergency evacuation checklist",
    "blackout survival kit",
    "civil unrest safety gear",
    "war preparedness supplies",
    "home emergency kit",
    "shelter in place kit",
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
    "home security products",
    "Amazon security accessories",
    "Pinterest home security ideas",
    "emergency preparedness gear",
    "digital privacy tools",
    "personal safety equipment",
    "travel safety accessories",
    "motion sensor outdoor lighting",
    "window alarm",
    "door wedge alarm",
    "hidden camera detector",
    "portable power station",
    "RFID passport wallet",
    "home protection",
    "personal protection",
    "Amazon prepping gear",
    "survival gear",
    "cyber privacy",
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
      "https://plus.unsplash.com/premium_photo-1682088920151-b9b2923c03b6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
      "/Birdie–The Original_Personal_Safety_Alarm.png",
    imageAlt: "Personal safety alarm in charcoal grey",
    amazonUrl: "https://amzn.to/4dTPuaj",
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
      "/Yubico-YubiKey_5C_NFC.png",
    imageAlt: "Yubikey hardware security key on a desk",
    amazonUrl: "https://amzn.to/4cQxPz9",
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
    image: "/pepper_spray.png",
    imageAlt: "Pepper spray container being held",
    amazonUrl: "https://www.amazon.com/s?k=SABRE+Red+Pepper+Spray+Gel",
  },
  {
    id: "door-security-bar",
    name: "Door Security Bar for Home & Apartment | Adjustable Door Jammer ",
    categoryId: "home-security",
    benefit: "Mechanical reinforcement against forced entry.",
    description:
      "A heavy-duty steel bar that provides physical resistance to swinging and sliding doors.",
    trustSignal: "Popular",
    image: "/AceMining_Upgraded_Door_Security.png",
    imageAlt: "Security bar propping a door closed",
    amazonUrl: "https://amzn.to/4cMJspO",
  },
  {
    id: "water-filtration-straw",
    name: "LifeStraw Personal Water Filter",
    categoryId: "emergency-prep",
    benefit: "Access to safe drinking water in any environment.",
    description:
      "Removes 99.9999% of waterborne bacteria and parasites, essential for wilderness and urban survival.",
    trustSignal: "Top rated",
    image: "/water_filter_straw.png",
    imageAlt: "LifeStraw being used in a stream",
    amazonUrl: "https://www.amazon.com/s?k=LifeStraw+Personal+Water+Filter",
  },
  {
    id: "faraday-bag",
    name: "Mission Darkness Faraday Bag",
    categoryId: "cyber-shield",
    benefit: "Total RF shielding for phones and key fobs.",
    description:
      "Blocks all wireless signals (WiFi, Cellular, GPS, RFID) to prevent tracking and remote hacking.",
    trustSignal: "Popular",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Small black faraday bag on a table",
    amazonUrl: "https://www.amazon.com/s?k=Mission+Darkness+Faraday+Bag",
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
    image: "https://images.unsplash.com/photo-1584347209146-da42cce486f0?auto=format&fit=crop&w=900&q=80",
    imageAlt: "White portable safe locked to a chair",
    amazonUrl: "https://www.amazon.com/s?k=SAFEGO+Portable+Safe",
  },
  {
    id: "webcam-covers",
    name: "CloudValley Webcam Cover Slide",
    categoryId: "cyber-shield",
    benefit: "Physical assurance against camera hacking.",
    description:
      "Ultra-thin covers that slide to block your camera, ensuring your privacy is never compromised.",
    trustSignal: "Top rated",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Small webcam cover on a laptop",
    amazonUrl: "https://www.amazon.com/s?k=CloudValley+Webcam+Cover+Slide",
  },
  {
    id: "rfid-wallet",
    name: "Ridge Minimalist RFID Wallet",
    categoryId: "personal-safety",
    benefit: "Protects against digital pickpocketing and skimming.",
    description:
      "A slim, aerospace-grade aluminum wallet that blocks RFID scanners while maintaining a modern aesthetic.",
    trustSignal: "Popular",
    image: "/Ridge_Wallet_for_Men.png",
    imageAlt: "Metal minimalist wallet with cards",
    amazonUrl: "https://amzn.to/41GLeDB",
  },
  {
    id: "privacy-screen",
    name: "Kensington Magnetic Privacy Screen",
    categoryId: "cyber-shield",
    benefit: "Prevents visual hacking in public workspaces.",
    description:
      "Narrows the viewing angle of your laptop screen so only you can see your sensitive information.",
    trustSignal: "Editor favorite",
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=900&q=80",
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
    image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Tactical gear layout with red elements",
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
    image: "https://images.unsplash.com/photo-1473186578172-c141e6798cf4?auto=format&fit=crop&w=900&q=80",
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
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1200&q=80",
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
    image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Reflective emergency blanket folded",
    amazonUrl: "https://amzn.to/3ObFRt3",
  },
  {
    id: "solar-motion-light",
    name: "Hawkray Solar Motion Sensor Light",
    categoryId: "home-security",
    benefit: "Bright perimeter lighting that discourages unwanted approach after dark.",
    description:
      "A weather-resistant solar light with motion activation for driveways, fences, and side entrances.",
    trustSignal: "Top rated",
    image:
      "https://images.unsplash.com/photo-1512891369909-0f2c5f8f8c8d?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Outdoor wall light illuminating a house exterior at night",
    amazonUrl: "https://www.amazon.com/s?k=solar+motion+sensor+light",
  },
  {
    id: "window-alarm-kit",
    name: "GE Personal Security Window and Door Alarm",
    categoryId: "home-security",
    benefit: "Budget-friendly first-line alert for windows, patio doors, and rentals.",
    description:
      "A simple peel-and-stick alarm set that adds instant sound-based deterrence without tools or drilling.",
    trustSignal: "Popular",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Close-up of a window latch in a modern home",
    amazonUrl: "https://www.amazon.com/s?k=window+door+alarm",
  },
  {
    id: "door-wedge-alarm",
    name: "Sabre Door Wedge Alarm",
    categoryId: "home-security",
    benefit: "Fast, rental-friendly protection for bedroom doors and hotel stays.",
    description:
      "A compact wedge alarm that reinforces an entry point and sounds a loud alert when pressure is applied.",
    trustSignal: "Editor favorite",
    image:
      "https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "A hotel-style doorway with modern trim and locked handle",
    amazonUrl: "https://www.amazon.com/s?k=door+wedge+alarm",
  },
  {
    id: "hidden-camera-detector",
    name: "SABRE Hidden Camera Detector",
    categoryId: "cyber-shield",
    benefit: "Quick visual privacy checks for rentals, changing rooms, and travel stays.",
    description:
      "A portable detector that helps reveal suspicious lenses so you can stay confident in unfamiliar spaces.",
    trustSignal: "Top rated",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Dark room with a small LED device used for privacy scanning",
    amazonUrl: "https://www.amazon.com/s?k=hidden+camera+detector",
  },
  {
    id: "rfid-passport-wallet",
    name: "Travelambo RFID Passport Wallet",
    categoryId: "cyber-shield",
    benefit: "Protects passports, cards, and travel documents in one slim organizer.",
    description:
      "A slim RFID-blocking wallet built for airports, hotels, and everyday carry when you want secure, organized travel.",
    trustSignal: "Popular",
    image:
      "https://images.unsplash.com/photo-1455849318743-b2233052fcff?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Travel wallet beside a passport and boarding pass",
    amazonUrl: "https://www.amazon.com/s?k=RFID+passport+wallet",
  },
  {
    id: "portable-power-station",
    name: "Anker SOLIX C300 Portable Power Station",
    categoryId: "emergency-prep",
    benefit: "Backup charging for phones, lights, and comms during outages.",
    description:
      "A compact rechargeable power station that keeps your essentials running when the grid is unreliable.",
    trustSignal: "Top rated",
    image:
      "/Anker_SOLIX_C300.png",
    imageAlt: "Portable power station with cables on a table",
    amazonUrl: "https://amzn.to/4cN4GUg",
  },
  {
    id: "emergency-car-kit",
    name: "Everlit Survival Car Emergency Kit",
    categoryId: "emergency-prep",
    benefit: "Roadside readiness with jumper cables, tools, and practical essentials.",
    description:
      "A compact car kit designed for winter commutes, road trips, and everyday confidence behind the wheel.",
    trustSignal: "Popular",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Car emergency supplies laid out on a trunk mat",
    amazonUrl: "https://www.amazon.com/s?k=emergency+car+kit",
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
  "solar-motion-light": {
    rating: 4.7,
    reviews: "18,200+ reviews",
    socialProof: "Popular right now",
    highlights: [
      "Brightens dark entry points automatically",
      "Helps deter unwanted approach after sunset",
      "Weather-ready for outdoor security coverage",
    ],
  },
  "window-alarm-kit": {
    rating: 4.6,
    reviews: "21,500+ reviews",
    socialProof: "Trending on social media",
    highlights: [
      "Adds instant sound-based deterrence",
      "Works well for rentals and sliding doors",
      "Installs in minutes with no drilling",
    ],
  },
  "door-wedge-alarm": {
    rating: 4.8,
    reviews: "9,800+ reviews",
    socialProof: "Limited-time favorite",
    highlights: [
      "Portable protection for hotel and bedroom doors",
      "Loud siren activates when pressure is applied",
      "Ideal for travel safety and apartment living",
    ],
  },
  "hidden-camera-detector": {
    rating: 4.5,
    reviews: "7,600+ reviews",
    socialProof: "Most saved on Pinterest this week",
    highlights: [
      "Helps reveal suspicious lenses in unfamiliar spaces",
      "Perfect for rentals, changing rooms, and hotels",
      "Simple privacy scan for peace of mind on the go",
    ],
  },
  "rfid-passport-wallet": {
    rating: 4.7,
    reviews: "11,100+ reviews",
    socialProof: "Popular right now",
    highlights: [
      "Keeps travel documents organized and protected",
      "Blocks RFID skimming in airports and transit hubs",
      "Slim profile fits easily into carry-on bags",
    ],
  },
  "portable-power-station": {
    rating: 4.9,
    reviews: "14,400+ reviews",
    socialProof: "Most loved by routine creators",
    highlights: [
      "Keeps phones and lights charged through outages",
      "Great for apartments, cabins, and road trips",
      "Reliable backup power for essential devices",
    ],
  },
  "emergency-car-kit": {
    rating: 4.8,
    reviews: "6,900+ reviews",
    socialProof: "Limited-time favorite",
    highlights: [
      "Makes winter driving and road trips feel safer",
      "Helps you stay prepared for jump-starts and flats",
      "Compact kit for everyday vehicle readiness",
    ],
  },
};

export const topPicks = [
  { productId: "portable-power-station", badge: "Most Loved" as const },
  { productId: "solar-emergency-radio", badge: "Best Seller" as const },
  { productId: "first-aid-kit", badge: "Most Loved" as const },
  { productId: "water-filtration-straw", badge: "Trending" as const },
  { productId: "emergency-car-kit", badge: "Trending" as const },
  { productId: "smart-door-lock", badge: "Best Seller" as const },
  { productId: "solar-motion-light", badge: "Trending" as const },
  { productId: "hidden-camera-detector", badge: "Trending" as const },
  { productId: "rfid-passport-wallet", badge: "Most Loved" as const },
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
  {
    slug: "best-home-security-upgrades-for-renters",
    title: "Best Home Security Upgrades for Renters Who Need Fast Protection",
    excerpt:
      "The best renter-friendly security upgrades are the ones you can install fast, remove cleanly, and trust every day.",
    intro:
      "Renters often need more security, not more renovation. This guide focuses on quick-install products that improve deterrence, visibility, and peace of mind without permanent changes.",
    heroImage:
      "https://images.unsplash.com/photo-1560185008-b033106af74a?auto=format&fit=crop&w=2200&q=80",
    heroAlt: "Apartment doorway with a smart lock and entryway light",
    categoryId: "home-security",
    readTime: "7 min read",
    publishedAt: "2026-04-12",
    pinHook: "Renter-friendly security that actually feels doable.",
    sections: [
      {
        id: "door-deterrence",
        title: "Start With the Door",
        copy: "A door wedge alarm gives renters instant protection because it is fast to deploy and easy to remove when you move.",
        productId: "door-wedge-alarm",
      },
      {
        id: "window-alerts",
        title: "Add Window Alerts Next",
        copy: "Window alarms are one of the easiest upgrades for apartments because they create noise-based deterrence without drilling.",
        productId: "window-alarm-kit",
      },
      {
        id: "lighting-layer",
        title: "Use Light as a Deterrent",
        copy: "Motion lighting makes entry points less attractive after dark and is especially useful for side paths and parking spots.",
        productId: "solar-motion-light",
      },
    ],
  },
  {
    slug: "best-window-alarm-kit-for-apartments",
    title: "Best Window Alarm Kit for Apartments: What Actually Works",
    excerpt:
      "A practical look at apartment-friendly window alarms and how to choose the one that gives you fast, affordable protection.",
    intro:
      "If your apartment has weak windows, the right alarm kit can give you faster alerts without complicated installation. Here is how to choose one that fits your space.",
    heroImage:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=2200&q=80",
    heroAlt: "Apartment window with daylight and sheer curtains",
    categoryId: "home-security",
    readTime: "6 min read",
    publishedAt: "2026-04-11",
    pinHook: "The simplest way to protect apartment windows tonight.",
    sections: [
      {
        id: "why-window-alarms",
        title: "Why Window Alarms Convert So Well",
        copy: "They solve a real problem quickly: weak windows, easy installation, and instant noise when tampered with.",
        productId: "window-alarm-kit",
      },
      {
        id: "supporting-layer",
        title: "Pair It With Better Exterior Visibility",
        copy: "Window alarms work better when your exterior is visible, so motion lighting adds a useful second layer.",
        productId: "solar-motion-light",
      },
      {
        id: "night-routine",
        title: "Make It Part of Your Night Routine",
        copy: "A security habit only converts when it is easy to repeat. Check the alarm before sleep, then let the system do the work.",
        productId: "door-wedge-alarm",
      },
    ],
  },
  {
    slug: "how-to-use-a-hidden-camera-detector",
    title: "How to Use a Hidden Camera Detector in Hotels and Rentals",
    excerpt:
      "A simple guide for scanning hotel rooms, rentals, and private spaces with more confidence before you settle in.",
    intro:
      "Travel privacy is a growing search intent because people want to feel safe in unfamiliar rooms. This guide shows how a detector fits into a quick arrival checklist.",
    heroImage:
      "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=2200&q=80",
    heroAlt: "Modern hotel room with bed and soft lighting",
    categoryId: "cyber-shield",
    readTime: "5 min read",
    publishedAt: "2026-04-10",
    pinHook: "A privacy check you can do in under five minutes.",
    sections: [
      {
        id: "arrival-scan",
        title: "Start With a Room Scan",
        copy: "Use the detector to check mirrors, outlets, smoke detectors, and other places where suspicious lenses could hide.",
        productId: "hidden-camera-detector",
      },
      {
        id: "keep-documents-safe",
        title: "Keep Documents Protected",
        copy: "Once the room checks out, keep passports and cards in an RFID-safe wallet so your travel setup stays organized.",
        productId: "rfid-passport-wallet",
      },
      {
        id: "layer-your-privacy",
        title: "Layer Your Privacy",
        copy: "A privacy screen is useful when you are working from shared spaces and want to reduce visual exposure.",
        productId: "privacy-screen",
      },
    ],
  },
  {
    slug: "portable-power-station-outage-guide",
    title: "Portable Power Station Guide: What to Keep Charged During an Outage",
    excerpt:
      "The easiest way to stay prepared for outages is not owning everything, but knowing which devices need backup first.",
    intro:
      "When the power goes out, a portable power station can keep the essentials running. This guide explains what to charge first and why it matters.",
    heroImage:
      "https://images.unsplash.com/photo-1612810806695-30f7c6fef3b0?auto=format&fit=crop&w=2200&q=80",
    heroAlt: "Portable battery station on a desk with charging cable",
    categoryId: "emergency-prep",
    readTime: "6 min read",
    publishedAt: "2026-04-09",
    pinHook: "Backup power that turns panic into a plan.",
    sections: [
      {
        id: "first-load",
        title: "Charge the Devices You Need Most",
        copy: "Start with phones, lights, and communication devices before you plug in anything else.",
        productId: "portable-power-station",
      },
      {
        id: "vehicle-readiness",
        title: "Keep Your Car Ready Too",
        copy: "Roadside issues become easier to manage when you also keep a compact emergency car kit in the trunk.",
        productId: "emergency-car-kit",
      },
      {
        id: "communication-layer",
        title: "Do Not Lose the Information Layer",
        copy: "A solar radio helps you stay informed when the grid is down and the internet is unreliable.",
        productId: "solar-emergency-radio",
      },
    ],
  },
  {
    slug: "rfid-passport-wallet-travel-checklist",
    title: "RFID Passport Wallet Travel Checklist for Safer Trips",
    excerpt:
      "A simple RFID wallet checklist that helps keep passports, cards, and travel documents organized on the move.",
    intro:
      "Travel gear converts well when it solves one clear problem. This checklist focuses on reducing friction and keeping important documents protected during trips.",
    heroImage:
      "https://images.unsplash.com/photo-1455849318743-b2233052fcff?auto=format&fit=crop&w=2200&q=80",
    heroAlt: "Passport, boarding pass, and wallet on a travel table",
    categoryId: "cyber-shield",
    readTime: "4 min read",
    publishedAt: "2026-04-08",
    pinHook: "A clean travel wallet setup that keeps the essentials together.",
    sections: [
      {
        id: "passport-storage",
        title: "Start with the Passport",
        copy: "A passport wallet keeps the most important document in one place and helps prevent last-minute rummaging at security.",
        productId: "rfid-passport-wallet",
      },
      {
        id: "cash-and-cards",
        title: "Add Cards and Cash",
        copy: "A slim RFID-blocking setup also helps keep your cards and cash organized in the same place.",
        productId: "rfid-wallet",
      },
      {
        id: "backup-storage",
        title: "Keep a Backup Safe",
        copy: "A portable safe works well in cars, hotels, or short-term rentals when you want one secure place for valuables.",
        productId: "portable-safe",
      },
    ],
  },
];

export const landingPages: LandingPage[] = [
  {
    slug: "crisis-readiness-kit",
    title: "Crisis Readiness Kit for Blackouts, Civil Unrest, and Evacuation",
    description:
      "A focused preparedness page for power outages, civil unrest, and fast evacuation planning with the most practical Amazon-ready gear.",
    intro:
      "When people search for crisis preparedness, they usually want a simple answer: what to buy first, what keeps the family safer, and what helps in the first 72 hours. This page gives that answer without noise.",
    eyebrow: "Crisis Preparedness",
    heroImage:
      "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=2200&q=80",
    heroAlt: "Emergency gear laid out for preparedness with radio, power station, and first aid supplies",
    categoryId: "emergency-prep",
    readTime: "6 min read",
    publishedAt: "2026-04-18",
    pinHook: "The essential kit for power cuts, unrest, and emergency departure.",
    bestFor: [
      "Families building a 72-hour kit",
      "Households worried about outages or unrest",
      "Buyers who want a calm, prioritized prep list",
    ],
    featuredProductIds: [
      "solar-emergency-radio",
      "portable-power-station",
      "first-aid-kit",
      "water-filtration-straw",
    ],
    supportingArticleSlugs: [
      "ultimate-survival-kit-checklist-2026",
      "portable-power-station-outage-guide",
      "five-minute-home-security-audit",
    ],
    priorityOrder: [
      "Backup power and light",
      "Communication and weather alerts",
      "Water and medical supplies",
      "Home defense and evacuation readiness",
    ],
    audiencePaths: [
      {
        label: "Renters",
        description:
          "Start with portable essentials that move with you and do not require permanent installation.",
        productId: "portable-power-station",
      },
      {
        label: "Homeowners",
        description:
          "Add the home-based layers that keep your property safer if the outage lasts longer than expected.",
        productId: "solar-emergency-radio",
      },
      {
        label: "Families",
        description:
          "Build the full 72-hour household kit so everyone has water, communication, and care covered.",
        productId: "first-aid-kit",
      },
    ],
    faqs: [
      {
        question: "What should be in a crisis readiness kit first?",
        answer:
          "Start with power, communication, water, and basic medical supplies. Those four layers cover the most common disruption scenarios.",
      },
      {
        question: "Is this page meant for war preparation?",
        answer:
          "It is focused on practical readiness for blackouts, unrest, and evacuation planning rather than extreme scenarios. The goal is to help people prepare responsibly and calmly.",
      },
      {
        question: "Why does this convert well from search and Pinterest?",
        answer:
          "The intent is very clear. Visitors are not browsing broadly; they want a concrete list of essentials, which makes the shopping flow much easier.",
      },
    ],
  },
  {
    slug: "bug-out-bag-essentials",
    title: "Bug Out Bag Essentials for Fast Evacuation",
    description:
      "A practical evacuation kit page focused on the first items you actually need if you have to leave fast.",
    intro:
      "Bug out content converts well because it removes guesswork. This page keeps the list tight, actionable, and centered on the essentials that matter when time is limited.",
    eyebrow: "Evacuation Prep",
    heroImage:
      "https://images.unsplash.com/photo-1532634896-26909d0d7d2d?auto=format&fit=crop&w=2200&q=80",
    heroAlt: "Packed survival backpack with flashlight, map, and emergency gear",
    categoryId: "emergency-prep",
    readTime: "5 min read",
    publishedAt: "2026-04-18",
    pinHook: "The first bag to build if you need to leave fast.",
    bestFor: [
      "Families preparing an evacuation bag",
      "People who want a simple 72-hour starter kit",
      "Buyers who prefer essentials over overpacking",
    ],
    featuredProductIds: [
      "water-filtration-straw",
      "solar-emergency-radio",
      "emergency-blanket-set",
      "first-aid-kit",
    ],
    supportingArticleSlugs: [
      "crisis-readiness-72-hour-checklist",
      "ultimate-survival-kit-checklist-2026",
      "portable-power-station-outage-guide",
    ],
    priorityOrder: [
      "Water and filtration",
      "Communication and radio",
      "Warmth and first aid",
      "Fast-grab evacuation gear",
    ],
    audiencePaths: [
      {
        label: "Renters",
        description:
          "Choose portable survival basics that are easy to pack and easy to move when your lease changes.",
        productId: "water-filtration-straw",
      },
      {
        label: "Homeowners",
        description: "Build a more complete bag that also supports longer-term household readiness.",
        productId: "solar-emergency-radio",
      },
      {
        label: "Families",
        description:
          "Focus on the essentials that help the whole household leave fast without forgetting critical supplies.",
        productId: "first-aid-kit",
      },
    ],
    faqs: [
      {
        question: "What should go in a bug out bag first?",
        answer:
          "Water, communication, warmth, and basic medical gear are the first layers because they solve the most immediate problems in an evacuation.",
      },
      {
        question: "How heavy should a bug out bag be?",
        answer:
          "Light enough to carry without slowing you down. The bag should help you move, not turn into a burden.",
      },
      {
        question: "Why is this a strong landing page for Pinterest?",
        answer:
          "Because the user intent is specific and urgent. People searching for evacuation essentials want a fast, trustworthy shortlist, not a long generic article.",
      },
    ],
  },
  {
    slug: "shelter-in-place-kit",
    title: "Shelter-in-Place Kit for Blackouts and Civil Unrest",
    description:
      "A home-first preparedness page for staying safer indoors when the outside environment becomes unstable.",
    intro:
      "Sometimes the right move is not to leave but to lock down, reduce exposure, and wait things out. This page focuses on the tools that support that decision.",
    eyebrow: "Home Lockdown",
    heroImage:
      "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=2200&q=80",
    heroAlt: "Darkened home exterior with lighting and security camera",
    categoryId: "home-security",
    readTime: "6 min read",
    publishedAt: "2026-04-18",
    pinHook: "Prepare the home before the next outage or disruption.",
    bestFor: [
      "Homeowners who want to stay put safely",
      "Renters building layered security",
      "Households preparing for storms or unrest",
    ],
    featuredProductIds: [
      "door-security-bar",
      "window-alarm-kit",
      "solar-motion-light",
      "portable-power-station",
    ],
    supportingArticleSlugs: [
      "five-minute-home-security-audit",
      "best-window-alarm-kit-for-apartments",
      "crisis-readiness-72-hour-checklist",
    ],
    priorityOrder: [
      "Reinforce the main door",
      "Add window alarms",
      "Increase exterior visibility",
      "Keep backup power ready",
    ],
    faqs: [
      {
        question: "What is the first shelter-in-place upgrade to buy?",
        answer:
          "Door reinforcement is often the first move because it protects the main entry point and gives you immediate peace of mind.",
      },
      {
        question: "Should I add power backup to a shelter-in-place kit?",
        answer:
          "Yes. Even a small backup power solution helps you keep phones charged, lights on, and communication available during an outage.",
      },
      {
        question: "Why is this useful for civil unrest or storms?",
        answer:
          "It focuses on staying safer indoors, reducing visibility, and keeping the home functional during events when leaving is not the best option.",
      },
    ],
  },
  {
    slug: "emergency-vehicle-kit",
    title: "Emergency Vehicle Kit for Winter, Road Closures, and Evacuation",
    description:
      "A car-ready preparedness page built for roadside safety, winter travel, and quick movement during emergency evacuations.",
    intro:
      "Vehicle kits are one of the easiest preparedness purchases because they solve a real problem every driver understands. This page focuses on the gear that matters first in the trunk.",
    eyebrow: "Vehicle Readiness",
    heroImage:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=2200&q=80",
    heroAlt: "Emergency gear and road supplies laid out in the trunk of a car",
    categoryId: "emergency-prep",
    readTime: "5 min read",
    publishedAt: "2026-04-18",
    pinHook: "The trunk kit every driver should build before bad weather hits.",
    bestFor: [
      "Winter commuters",
      "Families driving long distances",
      "Drivers who want evacuation-ready trunk storage",
    ],
    featuredProductIds: [
      "emergency-car-kit",
      "first-aid-kit",
      "portable-power-station",
      "solar-emergency-radio",
    ],
    supportingArticleSlugs: [
      "portable-power-station-outage-guide",
      "crisis-readiness-72-hour-checklist",
      "ultimate-survival-kit-checklist-2026",
    ],
    priorityOrder: [
      "Jumper and roadside basics",
      "First aid and emergency warmth",
      "Backup power and charging",
      "Radio and communication",
    ],
    faqs: [
      {
        question: "What belongs in an emergency vehicle kit first?",
        answer:
          "Jumper and roadside basics, first aid, backup power, and communication are the main priorities because they solve common roadside problems fast.",
      },
      {
        question: "Is this only for winter?",
        answer:
          "No. It is useful for winter, road closures, long drives, and emergency evacuation when a car is part of the plan.",
      },
      {
        question: "Why does this page help monetization?",
        answer:
          "Vehicle preparedness has clear intent and a practical purchase path, which usually leads to stronger clicks and better conversions.",
      },
    ],
  },
  {
    slug: "home-security-renters",
    title: "Best Home Security Upgrades for Renters",
    description:
      "Fast, removable apartment security upgrades that improve entry-point protection, visibility, and confidence without drilling.",
    intro:
      "Renters usually need security that installs fast and leaves no damage behind. This page narrows the decision to the renter-friendly upgrades that create the biggest jump in peace of mind.",
    eyebrow: "Renter-Friendly Security",
    heroImage:
      "https://images.unsplash.com/photo-1560185008-b033106af74a?auto=format&fit=crop&w=2200&q=80",
    heroAlt: "Apartment entryway with modern security lighting and door hardware",
    categoryId: "home-security",
    readTime: "5 min read",
    publishedAt: "2026-04-18",
    pinHook: "Fast upgrades for apartments, rentals, and shared spaces.",
    bestFor: [
      "Apartment dwellers who cannot drill",
      "Travelers who want hotel-style safety",
      "Budget buyers who want the quickest payoff",
    ],
    featuredProductIds: [
      "door-wedge-alarm",
      "window-alarm-kit",
      "solar-motion-light",
      "smart-door-lock",
    ],
    supportingArticleSlugs: [
      "best-home-security-upgrades-for-renters",
      "best-window-alarm-kit-for-apartments",
      "five-minute-home-security-audit",
    ],
    faqs: [
      {
        question: "What is the best renter-friendly security upgrade to start with?",
        answer:
          "A door wedge alarm or window alarm kit usually gives the fastest improvement because both are easy to install, easy to remove, and create immediate sound-based deterrence.",
      },
      {
        question: "Can I use these products in a temporary lease?",
        answer:
          "Yes. The products featured here are chosen for low-friction installation so they are practical for rentals, sublets, and short-term living arrangements.",
      },
      {
        question: "Why does this page convert well from Pinterest?",
        answer:
          "Because it answers a narrow intent quickly: renters want security they can deploy tonight without complicated setup or permanent changes.",
      },
    ],
  },
  {
    slug: "travel-privacy-kit",
    title: "Travel Privacy Kit for Hotels, Airports, and Rentals",
    description:
      "A compact privacy-first travel setup for RFID protection, hidden camera checks, and secure document storage on the move.",
    intro:
      "Travel searches convert best when they solve a real anxiety. This kit focuses on privacy, organization, and low-stress travel routines that keep your important items protected.",
    eyebrow: "Travel Privacy",
    heroImage:
      "https://images.unsplash.com/photo-1455849318743-b2233052fcff?auto=format&fit=crop&w=2200&q=80",
    heroAlt: "Passport, wallet, and travel essentials laid out beside a carry-on bag",
    categoryId: "cyber-shield",
    readTime: "6 min read",
    publishedAt: "2026-04-18",
    pinHook: "The privacy kit you pack before the flight.",
    bestFor: [
      "Frequent flyers",
      "Hotel and Airbnb guests",
      "People who want stronger privacy on the road",
    ],
    featuredProductIds: [
      "hidden-camera-detector",
      "rfid-passport-wallet",
      "rfid-wallet",
      "portable-safe",
    ],
    supportingArticleSlugs: [
      "how-to-use-a-hidden-camera-detector",
      "rfid-passport-wallet-travel-checklist",
      "digital-privacy-cyber-shield-guide",
    ],
    faqs: [
      {
        question: "What should I pack first for travel privacy?",
        answer:
          "Start with a passport wallet and a hidden camera detector. Those two items solve the most common privacy and organization concerns in one lightweight setup.",
      },
      {
        question: "Is RFID blocking still useful for travel?",
        answer:
          "Yes. It adds a simple layer of protection for cards and passports and helps keep your travel essentials organized in one place.",
      },
      {
        question: "Should I check hotel rooms every time?",
        answer:
          "A quick scan on arrival is a smart habit if privacy matters to you. It takes only a few minutes and can significantly reduce uncertainty.",
      },
    ],
  },
  {
    slug: "power-outage-readiness",
    title: "Portable Power and Outage Readiness",
    description:
      "Backup power, communication, and vehicle readiness products for outages, storms, and everyday emergency planning.",
    intro:
      "When the grid gets unreliable, buyers want simple priorities. This page focuses on which essentials to charge, pack, and keep ready first so your response feels calm instead of chaotic.",
    eyebrow: "Outage Preparedness",
    heroImage:
      "https://images.unsplash.com/photo-1612810806695-30f7c6fef3b0?auto=format&fit=crop&w=2200&q=80",
    heroAlt: "Portable power station with charging cables and emergency gear",
    categoryId: "emergency-prep",
    readTime: "5 min read",
    publishedAt: "2026-04-18",
    pinHook: "Backup power that feels practical, not overwhelming.",
    bestFor: [
      "Apartment and house outages",
      "Car emergency kits",
      "Off-grid weekends and storm prep",
    ],
    featuredProductIds: [
      "portable-power-station",
      "solar-emergency-radio",
      "emergency-car-kit",
      "emergency-blanket-set",
    ],
    supportingArticleSlugs: [
      "portable-power-station-outage-guide",
      "ultimate-survival-kit-checklist-2026",
      "best-home-security-upgrades-for-renters",
    ],
    faqs: [
      {
        question: "What should I power first during an outage?",
        answer:
          "Start with phones, lights, and communication gear. Those items help you stay informed and make better decisions before moving to comfort or convenience devices.",
      },
      {
        question: "Is a portable power station worth it for apartments?",
        answer:
          "Yes. Compact units are especially useful in apartments because they provide backup charging without requiring a generator or permanent setup.",
      },
      {
        question: "What makes this page buyer-friendly?",
        answer:
          "It removes the usual overwhelm and shows a simple priority order, which helps visitors move from curiosity to action faster.",
      },
    ],
  },
  {
    slug: "solo-travel-edc-safety",
    title: "Solo Travel EDC Safety Kit",
    description:
      "A compact everyday carry setup for commuting, solo travel, and late-night confidence with a focus on visible deterrence and fast access.",
    intro:
      "The highest-converting EDC pages are the ones that help people feel prepared immediately. This kit combines simple deterrents, utility tools, and privacy protection in one clean plan.",
    eyebrow: "Personal Safety",
    heroImage:
      "https://plus.unsplash.com/premium_photo-1682088920151-b9b2923c03b6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    heroAlt: "Minimal everyday carry safety gear arranged on a dark surface",
    categoryId: "personal-safety",
    readTime: "4 min read",
    publishedAt: "2026-04-18",
    pinHook: "A smarter EDC setup for real life, not fantasy gear.",
    bestFor: [
      "Solo commuters",
      "Night-shift workers",
      "Travelers who want quick-access safety tools",
    ],
    featuredProductIds: [
      "personal-safety-alarm",
      "pepper-spray-gel",
      "tactical-flashlight",
      "rfid-wallet",
    ],
    supportingArticleSlugs: [
      "edc-essentials-solo-travelers",
      "how-to-use-a-hidden-camera-detector",
      "digital-privacy-cyber-shield-guide",
    ],
    faqs: [
      {
        question: "What belongs in a solo travel EDC kit?",
        answer:
          "A personal alarm, a compact light, a dependable wallet setup, and a simple defensive tool usually cover the most common real-world needs.",
      },
      {
        question: "Why keep the kit small?",
        answer:
          "Small kits get used. The best safety setup is the one you will actually carry every day without thinking about it.",
      },
      {
        question: "Does this help Pinterest traffic convert?",
        answer:
          "Yes, because it pairs a clear use case with instantly understandable products and a low-friction shopping decision.",
      },
    ],
  },
  {
    slug: "crisis-readiness-72-hour-checklist",
    title: "72-Hour Crisis Readiness Checklist for Blackouts and Civil Unrest",
    description:
      "A focused preparedness page for power outages, civil unrest, and emergency evacuation with the most practical Amazon-ready gear.",
    excerpt:
      "A calm, practical checklist for the first 72 hours of a blackout, evacuation, or sudden disruption.",
    intro:
      "The best crisis plans are simple enough to use under stress. This checklist focuses on water, communication, power, medical basics, and home security so you can act fast without overbuying.",
    eyebrow: "Crisis Preparedness",
    heroImage:
      "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=2200&q=80",
    heroAlt: "Emergency preparedness gear arranged in a clear survival checklist",
    categoryId: "emergency-prep",
    readTime: "7 min read",
    publishedAt: "2026-04-07",
    pinHook: "The first 72 hours are easier when your checklist is already done.",
    bestFor: [
      "Families building a 72-hour kit",
      "Households preparing for outages or unrest",
      "Buyers who want a calm, prioritized prep list",
    ],
    featuredProductIds: [
      "portable-power-station",
      "solar-emergency-radio",
      "water-filtration-straw",
      "first-aid-kit",
    ],
    supportingArticleSlugs: [
      "ultimate-survival-kit-checklist-2026",
      "portable-power-station-outage-guide",
      "five-minute-home-security-audit",
    ],
    sections: [
      {
        id: "power-and-comms",
        title: "Keep Power and Communication Alive",
        copy: "Start with a portable power station and a weather radio so you can charge devices and stay informed when the grid or internet fails.",
        productId: "portable-power-station",
      },
      {
        id: "water-security",
        title: "Secure Water First",
        copy: "A water filtration straw is one of the fastest ways to protect your first 72 hours because it keeps the most important resource available.",
        productId: "water-filtration-straw",
      },
      {
        id: "medical-basics",
        title: "Keep Basic Medical Supplies Ready",
        copy: "A waterproof first aid kit helps you handle small injuries, organize supplies, and avoid scrambling when stress is already high.",
        productId: "first-aid-kit",
      },
      {
        id: "home-and-evacuation",
        title: "Protect the Home or Leave Fast",
        copy: "Door reinforcement and an emergency car kit help you either stay safer in place or move quickly if evacuation becomes necessary.",
        productId: "door-security-bar",
      },
    ],
    faqs: [
      {
        question: "What should be in a crisis readiness kit first?",
        answer:
          "Start with power, communication, water, and basic medical supplies. Those four layers cover the most common disruption scenarios.",
      },
      {
        question: "Is this page meant for war preparation?",
        answer:
          "It is focused on practical readiness for blackouts, unrest, and evacuation planning rather than extreme scenarios. The goal is to help people prepare responsibly and calmly.",
      },
      {
        question: "Why does this convert well from search and Pinterest?",
        answer:
          "The intent is very clear. Visitors are not browsing broadly; they want a concrete list of essentials, which makes the shopping flow much easier.",
      },
    ],
  },
  {
    slug: "bug-out-bag-essentials-checklist",
    title: "Bug Out Bag Essentials: 10 Items to Pack First",
    description:
      "A focused evacuation landing page for the first items to pack when you need a practical bug out bag.",
    excerpt:
      "A simple, buyer-friendly evacuation checklist that keeps the bag light, practical, and ready fast.",
    intro:
      "Bug out bags convert well because the intent is clear: people want the first essentials, not a giant fantasy loadout. This guide keeps the list short and actionable so it is easier to buy and easier to use.",
    eyebrow: "Evacuation Prep",
    heroImage:
      "https://images.unsplash.com/photo-1532634896-26909d0d7d2d?auto=format&fit=crop&w=2200&q=80",
    heroAlt: "Packed backpack with emergency gear laid out on a table",
    categoryId: "emergency-prep",
    readTime: "6 min read",
    publishedAt: "2026-04-06",
    pinHook: "The fastest checklist for a real evacuation bag.",
    bestFor: [
      "Families building a 72-hour evacuation bag",
      "Buyers who want the first essentials in order",
      "People preparing for fast departure scenarios",
    ],
    featuredProductIds: [
      "water-filtration-straw",
      "solar-emergency-radio",
      "emergency-blanket-set",
      "first-aid-kit",
    ],
    supportingArticleSlugs: [
      "crisis-readiness-72-hour-checklist",
      "ultimate-survival-kit-checklist-2026",
      "portable-power-station-outage-guide",
    ],
    priorityOrder: [
      "Water and filtration",
      "Communication and alerts",
      "Warmth and medical basics",
      "Fast-grab evacuation gear",
    ],
    sections: [
      {
        id: "water-first",
        title: "Start with Water",
        copy: "Pack a filtration straw first so the bag gives you access to safe water without adding much weight.",
        productId: "water-filtration-straw",
      },
      {
        id: "stay-informed",
        title: "Stay Informed",
        copy: "A solar emergency radio gives you the information layer when the internet or grid is unreliable.",
        productId: "solar-emergency-radio",
      },
      {
        id: "warmth-and-medical",
        title: "Add Warmth and Medical Basics",
        copy: "Emergency blankets and a waterproof first aid kit give you the simplest comfort and care layer for the first 72 hours.",
        productId: "emergency-blanket-set",
      },
    ],
    faqs: [
      {
        question: "What should I pack first in a bug out bag?",
        answer:
          "Start with water, communication, warmth, and basic medical gear because those items solve the most immediate problems in an evacuation.",
      },
      {
        question: "Why keep the bag light?",
        answer:
          "A lighter bag is easier to grab, carry, and trust under stress, which makes it far more likely to be used when it matters.",
      },
      {
        question: "Does this page help sales?",
        answer:
          "Yes. It presents a focused, ordered solution to a clear problem, which tends to convert better than broad survival content.",
      },
    ],
  },
  {
    slug: "shelter-in-place-readiness-guide",
    title: "Shelter in Place Readiness: What to Buy Before the Next Outage",
    description:
      "A home-first landing page that helps people secure the house and stay functional when staying put is the safest move.",
    excerpt:
      "A home-first preparedness guide for blackouts, storms, and moments when staying put is the safest move.",
    intro:
      "Sometimes the best decision is to stay home, lock down, and reduce exposure. This guide focuses on the products that help a home stay functional and harder to disturb when conditions get worse.",
    eyebrow: "Home Lockdown",
    heroImage:
      "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=2200&q=80",
    heroAlt: "Modern house exterior at night with bright security lighting",
    categoryId: "home-security",
    readTime: "7 min read",
    publishedAt: "2026-04-05",
    pinHook: "The home readiness checklist for staying safer indoors.",
    bestFor: [
      "Homeowners who want to stay put safely",
      "Renters building layered security",
      "Households preparing for storms or unrest",
    ],
    featuredProductIds: [
      "door-security-bar",
      "window-alarm-kit",
      "solar-motion-light",
      "portable-power-station",
    ],
    supportingArticleSlugs: [
      "five-minute-home-security-audit",
      "best-window-alarm-kit-for-apartments",
      "crisis-readiness-72-hour-checklist",
    ],
    priorityOrder: [
      "Reinforce the main door",
      "Add window alarms",
      "Increase exterior visibility",
      "Keep backup power ready",
    ],
    audiencePaths: [
      {
        label: "Renters",
        description:
          "Use removable layers that strengthen the apartment without drilling or permanent changes.",
        productId: "window-alarm-kit",
      },
      {
        label: "Homeowners",
        description:
          "Combine door reinforcement with smarter perimeter visibility for a more complete lockdown plan.",
        productId: "door-security-bar",
      },
      {
        label: "Families",
        description:
          "Keep the home functional during extended outages while reducing stress for everyone inside.",
        productId: "portable-power-station",
      },
    ],
    sections: [
      {
        id: "hardening",
        title: "Harden the Main Entry",
        copy: "A door security bar is one of the quickest ways to make a main entry feel more secure right away.",
        productId: "door-security-bar",
      },
      {
        id: "visibility",
        title: "Improve Exterior Visibility",
        copy: "Solar motion lighting makes it easier to see movement outside and can discourage unwanted approach after dark.",
        productId: "solar-motion-light",
      },
      {
        id: "backup-power",
        title: "Keep Backup Power Ready",
        copy: "A portable power station helps keep phones, lights, and essential devices charged during long outages.",
        productId: "portable-power-station",
      },
    ],
    faqs: [
      {
        question: "What is the first shelter-in-place upgrade to buy?",
        answer:
          "Door reinforcement is often the first move because it protects the main entry and gives you immediate peace of mind.",
      },
      {
        question: "Should I add backup power?",
        answer:
          "Yes. Even a small backup power solution helps keep phones charged, lights on, and communication available during an outage.",
      },
      {
        question: "Why does this page convert?",
        answer:
          "Because it solves a very specific problem with a short ordered list, which makes the purchase feel more manageable.",
      },
    ],
  },
  {
    slug: "emergency-vehicle-kit-winter-guide",
    title: "Emergency Vehicle Kit Checklist for Winter Roads and Evacuations",
    description:
      "A vehicle readiness landing page built for roadside safety, winter travel, and evacuation-ready driving.",
    excerpt:
      "A practical trunk kit guide for winter commutes, road closures, and evacuation-ready driving.",
    intro:
      "Vehicle kits are easy wins because they solve problems drivers already understand. This checklist focuses on the items that keep you warm, informed, and mobile if the car becomes your fallback plan.",
    eyebrow: "Vehicle Readiness",
    heroImage:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=2200&q=80",
    heroAlt: "Emergency gear laid out in a car trunk for winter readiness",
    categoryId: "emergency-prep",
    readTime: "5 min read",
    publishedAt: "2026-04-04",
    pinHook: "Build the trunk kit before the roads turn bad.",
    bestFor: [
      "Winter commuters",
      "Families driving long distances",
      "Drivers who want evacuation-ready trunk storage",
    ],
    featuredProductIds: [
      "emergency-car-kit",
      "first-aid-kit",
      "portable-power-station",
      "solar-emergency-radio",
    ],
    supportingArticleSlugs: [
      "portable-power-station-outage-guide",
      "crisis-readiness-72-hour-checklist",
      "ultimate-survival-kit-checklist-2026",
    ],
    priorityOrder: [
      "Roadside basics",
      "Warmth and safety",
      "Backup power and charging",
      "Radio and communication",
    ],
    audiencePaths: [
      {
        label: "Renters",
        description: "Keep a trunk kit that covers the basics without taking much space in a smaller car.",
        productId: "emergency-car-kit",
      },
      {
        label: "Homeowners",
        description:
          "Build a vehicle fallback plan that complements the rest of your home preparedness setup.",
        productId: "portable-power-station",
      },
      {
        label: "Families",
        description:
          "Prioritize the items that keep kids and adults safer during winter travel or evacuation.",
        productId: "first-aid-kit",
      },
    ],
    sections: [
      {
        id: "roadside-basics",
        title: "Roadside Basics First",
        copy: "Start with a purpose-built emergency car kit so you have the trunk essentials in one place.",
        productId: "emergency-car-kit",
      },
      {
        id: "warmth",
        title: "Add Warmth and Safety",
        copy: "Emergency blankets help keep body heat in while you wait for help or move through a cold-weather stop.",
        productId: "emergency-blanket-set",
      },
      {
        id: "power",
        title: "Keep a Backup Charge",
        copy: "A portable power station keeps phones and lights available if the car is stranded longer than expected.",
        productId: "portable-power-station",
      },
    ],
    faqs: [
      {
        question: "What belongs in an emergency vehicle kit first?",
        answer:
          "Jumper and roadside basics, first aid, backup power, and communication are the main priorities because they solve common roadside problems fast.",
      },
      {
        question: "Is this only for winter?",
        answer:
          "No. It is useful for winter, road closures, long drives, and emergency evacuation when a car is part of the plan.",
      },
      {
        question: "Why does this page help monetization?",
        answer:
          "Vehicle preparedness has clear intent and a practical purchase path, which usually leads to stronger clicks and better conversions.",
      },
    ],
  },
  {
    slug: "blackout-home-security-plan",
    title: "Blackout Home Security Plan: What to Secure When the Grid Goes Down",
    description:
      "A blackout-focused home security landing page that helps people secure the house before lights and routines fail.",
    excerpt:
      "A blackout changes the risk profile fast. This guide focuses on the first home security upgrades to make before lights and routines fail.",
    intro:
      "When power goes out, visibility, access control, and deterrence become more important. This plan keeps the home safer without turning it into a construction project.",
    eyebrow: "Blackout Prep",
    heroImage:
      "https://images.unsplash.com/photo-1560185008-b033106af74a?auto=format&fit=crop&w=2200&q=80",
    heroAlt: "House exterior at dusk with exterior lights and closed blinds",
    categoryId: "home-security",
    readTime: "6 min read",
    publishedAt: "2026-04-03",
    pinHook: "What to secure before the lights go out.",
    bestFor: [
      "Families preparing for outages",
      "Homeowners who want better deterrence",
      "Buyers who need a simple blackout security plan",
    ],
    featuredProductIds: [
      "smart-door-lock",
      "solar-motion-light",
      "outdoor-security-camera",
      "portable-power-station",
    ],
    supportingArticleSlugs: [
      "portable-power-station-outage-guide",
      "crisis-readiness-72-hour-checklist",
      "shelter-in-place-readiness-guide",
    ],
    priorityOrder: [
      "Lock down entry points",
      "Restore perimeter visibility",
      "Keep eyes on the property",
      "Maintain backup power",
    ],
    audiencePaths: [
      {
        label: "Renters",
        description:
          "Start with easy, removable upgrades that give you protection without permanent installation.",
        productId: "window-alarm-kit",
      },
      {
        label: "Homeowners",
        description: "Add the strongest home-based layers to protect the property when the grid goes down.",
        productId: "smart-door-lock",
      },
      {
        label: "Families",
        description:
          "Keep the house lit, monitored, and usable so everyone stays calmer during the outage.",
        productId: "portable-power-station",
      },
    ],
    sections: [
      {
        id: "entry-control",
        title: "Lock Down Entry Points",
        copy: "A smart lock helps keep the main entry easier to control when visibility is low and routines are disrupted.",
        productId: "smart-door-lock",
      },
      {
        id: "perimeter-lighting",
        title: "Restore Perimeter Visibility",
        copy: "Solar motion lights give you quick visibility around entry points and can make the property less inviting after dark.",
        productId: "solar-motion-light",
      },
      {
        id: "monitoring",
        title: "Keep Eyes on the Property",
        copy: "An indoor or outdoor security camera helps you verify movement and monitor the home if the blackout lasts.",
        productId: "outdoor-security-camera",
      },
    ],
    faqs: [
      {
        question: "What should I secure first during a blackout?",
        answer:
          "Focus on the main entry, perimeter visibility, and backup power because those layers provide the most immediate protection.",
      },
      {
        question: "Can a blackout make a home more vulnerable?",
        answer:
          "Yes. Reduced visibility and disrupted routines can make a property easier to approach, so simple prep steps matter a lot.",
      },
      {
        question: "Does this page help with sales?",
        answer:
          "Yes. It gives buyers a clear order of action and ties each step to a specific product, which improves purchase confidence.",
      },
    ],
  },
];

export const featuredArticleSlugs = [
  "crisis-readiness-72-hour-checklist",
  "bug-out-bag-essentials-checklist",
  "shelter-in-place-readiness-guide",
  "emergency-vehicle-kit-winter-guide",
  "blackout-home-security-plan",
  "best-home-security-upgrades-for-renters",
  "how-to-use-a-hidden-camera-detector",
  "portable-power-station-outage-guide",
  "rfid-passport-wallet-travel-checklist",
];

export const articlePriorityOrder = [
  "crisis-readiness-72-hour-checklist",
  "bug-out-bag-essentials-checklist",
  "shelter-in-place-readiness-guide",
  "emergency-vehicle-kit-winter-guide",
  "blackout-home-security-plan",
  "best-home-security-upgrades-for-renters",
  "how-to-use-a-hidden-camera-detector",
  "portable-power-station-outage-guide",
  "rfid-passport-wallet-travel-checklist",
];

export const amazonFavoriteProductIds = [
  "outdoor-motion-alarm",
  "outdoor-security-camera",
  "door-security-bar",
  "smart-door-lock",
  "solar-motion-light",
  "window-alarm-kit",
  "door-wedge-alarm",
  "water-filtration-straw",
  "solar-emergency-radio",
  "emergency-blanket-set",
  "portable-power-station",
  "emergency-car-kit",
  "hardware-security-key",
  "personal-safety-alarm",
  "tactical-pen",
  "pepper-spray-gel",
  "faraday-bag",
  "hidden-camera-detector",
  "rfid-passport-wallet",
  "portable-safe",
];

export const favoriteCollections = [
  {
    id: "home-fortress",
    title: "Home Fortress Essentials",
    description: "Top-performing mechanical, lighting, and alert upgrades to secure doors, windows, and dark entry points.",
    categoryId: "home-security" as const,
    productIds: [
      "door-security-bar",
      "outdoor-motion-alarm",
      "outdoor-security-camera",
      "smart-door-lock",
      "solar-motion-light",
      "window-alarm-kit",
      "door-wedge-alarm",
    ],
  },
  {
    id: "edc-safety",
    title: "Urban EDC Safety",
    description: "Non-lethal personal protection tools for commuting, solo travel, and late-night confidence.",
    categoryId: "personal-safety" as const,
    productIds: ["personal-safety-alarm", "tactical-pen", "pepper-spray-gel", "rfid-wallet"],
  },
  {
    id: "emergency-prep",
    title: "Emergency Readiness",
    description: "Critical gear for survival, off-grid communication, backup power, and vehicle preparedness.",
    categoryId: "emergency-prep" as const,
    productIds: [
      "solar-emergency-radio",
      "water-filtration-straw",
      "emergency-blanket-set",
      "first-aid-kit",
      "portable-power-station",
      "emergency-car-kit",
    ],
  },
  {
    id: "cyber-shield",
    title: "Cyber Shield Digital Defense",
    description: "Hardened hardware for digital identity, travel privacy, and smart home protection.",
    categoryId: "cyber-shield" as const,
    productIds: [
      "hardware-security-key",
      "faraday-bag",
      "privacy-screen",
      "webcam-covers",
      "hidden-camera-detector",
      "rfid-passport-wallet",
    ],
  },
  {
    id: "travel-privacy",
    title: "Travel Privacy Kit",
    description: "A compact travel-ready mix of RFID protection, hidden camera checks, and portable safety tools.",
    categoryId: "personal-safety" as const,
    productIds: [
      "rfid-passport-wallet",
      "portable-safe",
      "personal-safety-alarm",
      "hidden-camera-detector",
      "tactical-flashlight",
      "rfid-wallet",
    ],
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
  return sortArticlesByPriority(getArticlesBySlugs(featuredArticleSlugs));
}

export function getLandingPageBySlug(slug: string) {
  return landingPages.find((page) => page.slug === slug);
}

export function getLandingPages() {
  return landingPages.map((page) => ({
    ...page,
    products: getProductsByIds(page.featuredProductIds),
    articles: getArticlesBySlugs(page.supportingArticleSlugs),
  }));
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

export function sortArticlesByPriority(input: Article[]) {
  return [...input].sort((a, b) => {
    const aIndex = articlePriorityOrder.indexOf(a.slug);
    const bIndex = articlePriorityOrder.indexOf(b.slug);

    if (aIndex === -1 && bIndex === -1) {
      return b.publishedAt.localeCompare(a.publishedAt);
    }

    if (aIndex === -1) {
      return 1;
    }

    if (bIndex === -1) {
      return -1;
    }

    return aIndex - bIndex;
  });
}

export function getAmazonFavorites() {
  return getProductsByIds(amazonFavoriteProductIds);
}

export function getFavoritesCollections() {
  const collectionPriorityOrder = [
    "emergency-prep",
    "home-fortress",
    "cyber-shield",
    "travel-privacy",
    "edc-safety",
  ];

  return [...favoriteCollections]
    .sort((a, b) => {
      const aIndex = collectionPriorityOrder.indexOf(a.id);
      const bIndex = collectionPriorityOrder.indexOf(b.id);

      if (aIndex === -1 && bIndex === -1) {
        return a.title.localeCompare(b.title);
      }

      if (aIndex === -1) {
        return 1;
      }

      if (bIndex === -1) {
        return -1;
      }

      return aIndex - bIndex;
    })
    .map((collection) => ({
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
