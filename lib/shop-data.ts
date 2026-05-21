export type ShopProduct = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  price: number;
  compareAtPrice: number;
  currency: string;
  image: string;
  imageAlt: string;
  badge: string;
  rating: number;
  reviews: string;
  benefits: string[];
  howToUse: string[];
  faq: { q: string; a: string }[];
  shopifyUrl: string; // Used for affiliate or direct checkout link
  category: "gear" | "security" | "bundle";
  isNew?: boolean;
  isBestSeller?: boolean;
  gallery?: {
    url: string;
    label: string;
    badge: string;
    desc: string;
    filter?: string;
  }[];
};

export const shopProducts: ShopProduct[] = [
  {
    id: "tactical-blackout-flashlight",
    name: "Tactical Blackout Flashlight Kit",
    tagline: "Military-grade illumination for grid-down scenarios.",
    description:
      "A rugged, waterproof 2000-lumen LED flashlight engineered for extreme conditions. Includes a rechargeable high-capacity battery and emergency strobe function. The ultimate perimeter defense and blackout readiness tool.",
    price: 39.99,
    compareAtPrice: 69.99,
    currency: "USD",
    image: "https://images.unsplash.com/photo-1584483756317-06830768e8cc?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Tactical flashlight resting on dark surface",
    badge: "Best Seller",
    rating: 4.8,
    reviews: "2 847",
    benefits: [
      "2000-lumen output blinds attackers instantly",
      "Aircraft-grade aluminum body (shatterproof)",
      "IP68 Waterproof — submersible up to 2 meters",
      "USB-C Rechargeable with 72-hour low-mode battery",
      "5 Modes: High, Med, Low, SOS, and Tactical Strobe",
      "Includes heavy-duty nylon belt holster",
    ],
    howToUse: [
      "Charge fully before first deployment",
      "Half-press the tail switch to cycle between modes",
      "Full-press to lock in the desired mode",
      "Use the crenelated bezel for self-defense if necessary",
      "Store in a cool, dry place like an emergency go-bag",
    ],
    faq: [
      {
        q: "Is the battery replaceable?",
        a: "Yes, it uses a standard rechargeable 18650 lithium-ion battery.",
      },
      {
        q: "How far does the beam reach?",
        a: "On high mode, the beam effectively illuminates targets up to 300 meters away.",
      },
      {
        q: "Is it legal to carry?",
        a: "Yes, flashlights are legal everyday carry (EDC) items globally.",
      },
    ],
    shopifyUrl: "#checkout",
    category: "gear",
    isBestSeller: true,
  },
  {
    id: "emp-shield-radio",
    name: "EMP-Shielded Comm Radio",
    tagline: "Stay connected when the grid goes permanently dark.",
    description:
      "A hand-cranked, solar-powered emergency radio with NOAA weather alerts, built-in EMP shielding, and a 10,000mAh power bank to charge essential devices during extended blackouts.",
    price: 89.99,
    compareAtPrice: 129.99,
    currency: "USD",
    image: "https://images.unsplash.com/photo-1588716301323-9eeafc7c13aa?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Emergency radio gear",
    badge: "⭐ Essential Prep",
    rating: 4.9,
    reviews: "1 624",
    benefits: [
      "Military-grade Faraday cage interior protects circuits",
      "4-way charging: Solar, Hand-crank, USB-C, AAA batteries",
      "Access to 7 NOAA weather bands and emergency AM/FM",
      "Massive 10,000mAh battery charges 2+ smartphones",
      "Integrated reading lamp and SOS alarm",
      "Durable drop-resistant rubberized casing",
    ],
    howToUse: [
      "Keep the internal battery charged via USB-C for daily readiness",
      "In an emergency, place in direct sunlight or use hand crank",
      "Extend antenna fully for best NOAA reception",
      "Press the SOS button to emit a 130dB siren in distress",
      "Plug devices into the USB-A port for emergency charging",
    ],
    faq: [
      {
        q: "What is EMP shielding?",
        a: "It features an internal conductive mesh that protects sensitive electronics from Electromagnetic Pulses.",
      },
      {
        q: "How much cranking is needed?",
        a: "1 minute of vigorous cranking provides roughly 15 minutes of radio playtime or 5 minutes of flashlight use.",
      },
      {
        q: "Is it waterproof?",
        a: "It is IPX5 water-resistant, meaning it can withstand heavy rain but should not be fully submerged.",
      },
    ],
    shopifyUrl: "#checkout",
    category: "gear",
    isNew: true,
  },
  {
    id: "shelter-in-place-bundle",
    name: "72-Hour Shelter-In-Place Kit",
    tagline: "The complete crisis lockdown solution.",
    description:
      "Everything you need to secure your perimeter and sustain your household for the critical first 72 hours of any emergency. Save $45 compared to sourcing items individually.",
    price: 149.99,
    compareAtPrice: 194.99,
    currency: "USD",
    image: "https://images.unsplash.com/photo-1596708761899-73e4a9e525a8?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Preparedness supplies and kits",
    badge: "Best Value",
    rating: 4.9,
    reviews: "836",
    benefits: [
      "Tactical Blackout Flashlight included",
      "EMP-Shielded Comm Radio included",
      "First Aid Trauma Kit (IFAK level)",
      "Water filtration straws (filters 99.9% of bacteria)",
      "Heavy-duty thermal emergency blankets (x4)",
      "Save $45 vs. buying separately",
    ],
    howToUse: [
      "Store kit in an easily accessible, climate-controlled location",
      "Review contents every 6 months to cycle out expiring items",
      "Deploy water filters immediately if municipal supply is compromised",
      "Use radio to monitor local emergency broadcasts",
    ],
    faq: [
      {
        q: "Is there food included?",
        a: "This specific kit focuses on gear, defense, and water filtration. Food rations are sold separately.",
      },
      {
        q: "How large is the kit?",
        a: "It comes in a compact, water-resistant 20L tactical backpack.",
      },
      {
        q: "Do you ship internationally?",
        a: "Currently, we only ship these kits within the US due to shipping regulations on trauma supplies.",
      },
    ],
    shopifyUrl: "#checkout",
    category: "bundle",
    isBestSeller: true,
  },
  {
    id: "door-barricade-lock",
    name: "Heavy Duty Door Barricade",
    tagline: "Stop home invasions before they breach the threshold.",
    description:
      "A military-grade aluminum baseplate that withstands up to 800 lbs of kick-in force. Installs in 5 minutes on inward-swinging doors for instant peace of mind.",
    price: 29.99,
    compareAtPrice: 49.99,
    currency: "USD",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Secure door lock and barricade",
    badge: "🔥 High Demand",
    rating: 4.8,
    reviews: "2 147",
    benefits: [
      "Withstands 800 lbs of forced entry pressure",
      "Solid industrial-grade aluminum construction",
      "Installs easily into the floorplate with 3 screws",
      "Low profile design prevents tripping hazards",
      "Child-proof and tamper-proof from the outside",
      "Compatible with carpet, tile, and concrete floors",
    ],
    howToUse: [
      "Align the baseplate directly under your closed door",
      "Mark the three drill holes on your floor",
      "Drill pilot holes and secure with included 3-inch masonry/wood screws",
      "Slide the heavy locking plate in at night or during emergencies",
      "Remove easily in one motion to exit",
    ],
    faq: [
      {
        q: "Does it work on outward-swinging doors?",
        a: "No, this design is exclusively for standard inward-swinging doors.",
      },
      {
        q: "Can intruders pick it from the outside?",
        a: "Absolutely not. There are no exterior mechanisms to pick or bypass.",
      },
      {
        q: "What if I have carpet?",
        a: "It works on carpet, though you must ensure the screws anchor deeply into the subfloor.",
      },
    ],
    shopifyUrl: "#checkout",
    category: "security",
    isNew: true,
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=800&q=80",
        label: "Secure Lock",
        badge: "800 lbs Force",
        desc: "Industrial-grade aluminum door barricade against forced entry",
      },
      {
        url: "https://images.unsplash.com/photo-1621644782012-78d10330364f?auto=format&fit=crop&w=800&q=80",
        label: "Easy Install",
        badge: "5 Min Setup",
        desc: "Includes 3-inch deep-anchor screws for maximum subfloor bite",
      },
    ],
  },
];

export function getShopProductById(id: string): ShopProduct | undefined {
  return shopProducts.find((p) => p.id === id);
}
