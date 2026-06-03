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
  shopifyUrl: string; // Purchase destination: Shopify checkout, affiliate redirect, or curated kit page.
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
    name: "Olight Imini 2 EDC Keychain Flashlight",
    tagline: "Pocket-sized light that is always on your keys.",
    description:
      "A compact magnetic EDC flashlight for daily carry, power cuts, late arrivals, and emergency bags. It is small enough to keep on your keychain and simple enough to use under stress.",
    price: 19.99,
    compareAtPrice: 29.99,
    currency: "USD",
    image: "/OLIGHT_2_Pack_IMINI2EDC.png",
    imageAlt: "Two compact Olight Imini 2 EDC keychain flashlights",
    badge: "Best Seller",
    rating: 4.8,
    reviews: "2 847",
    benefits: [
      "Magnetic tailcap activates instantly when detached",
      "Ultra-compact form factor for keys, bags, and glove boxes",
      "USB rechargeable with simple everyday charging",
      "Durable aluminum body for daily carry",
      "Useful for blackouts, parking lots, travel, and inspections",
      "Low-friction upgrade for every emergency kit",
    ],
    howToUse: [
      "Attach it to your primary keychain",
      "Detach the light from the magnetic cap to turn it on",
      "Recharge it regularly so it is ready for outages",
      "Keep a second unit in a go-bag or car kit",
      "Use it for door locks, dark walkways, and quick inspections",
    ],
    faq: [
      {
        q: "Is the battery replaceable?",
        a: "This compact EDC model uses a built-in rechargeable battery for simple daily use.",
      },
      {
        q: "How far does the beam reach?",
        a: "It is built for close-range everyday visibility: keys, doors, bags, cars, and dark rooms.",
      },
      {
        q: "Is it legal to carry?",
        a: "Yes, flashlights are legal everyday carry (EDC) items globally.",
      },
    ],
    shopifyUrl: "/go/tactical-flashlight?placement=shop-detail",
    category: "gear",
    isBestSeller: true,
  },
  {
    id: "emp-shield-radio",
    name: "NOAA Emergency 5-Way Powered Weather Radio",
    tagline: "Weather alerts, backup light, and emergency charging.",
    description:
      "A practical emergency radio for blackouts, storms, evacuation prep, and shelter-in-place kits. It combines multiple charging options with weather alerts and backup lighting.",
    price: 49.99,
    compareAtPrice: 69.99,
    currency: "USD",
    image: "/radio_survival.png",
    imageAlt: "Orange NOAA emergency weather radio with solar panel and hand crank",
    badge: "Essential Prep",
    rating: 4.9,
    reviews: "1 624",
    benefits: [
      "NOAA weather alerts for storms and emergencies",
      "Multiple charging methods for backup resilience",
      "Built-in flashlight for nighttime power cuts",
      "Useful charging reserve for small devices",
      "Compact enough for home, car, and go-bag storage",
      "Simple controls for stressful situations",
    ],
    howToUse: [
      "Keep the internal battery charged for daily readiness",
      "In an emergency, place it in direct sunlight or use the hand crank",
      "Extend antenna fully for best NOAA reception",
      "Use the built-in light during power cuts",
      "Plug small devices into the charging port for emergency top-ups",
    ],
    faq: [
      {
        q: "What is EMP shielding?",
        a: "This page focuses on practical emergency communication and backup charging. For RF shielding, use a dedicated Faraday bag.",
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
    shopifyUrl: "/go/solar-emergency-radio?placement=shop-detail",
    category: "gear",
    isNew: true,
  },
  {
    id: "shelter-in-place-bundle",
    name: "72-Hour Shelter-In-Place Checklist Kit",
    tagline: "A guided buying path for your first 72 hours at home.",
    description:
      "A curated kit path that helps you assemble water, lighting, communication, first aid, and basic home security without guessing what to buy first.",
    price: 0,
    compareAtPrice: 0,
    currency: "USD",
    image: "/Everlit_Survival_Car_Emergency_Kit.png",
    imageAlt: "Organized emergency readiness kit with tools and first aid items",
    badge: "Best Value",
    rating: 4.9,
    reviews: "836",
    benefits: [
      "Prioritized checklist for the first 72 hours",
      "Lighting, water, first aid, communication, and security layers",
      "Links to vetted individual gear picks",
      "Designed for families, renters, and homeowners",
      "Avoids overbuying before the basics are covered",
      "Good starting point for shelter-in-place planning",
    ],
    howToUse: [
      "Open the checklist and review each category",
      "Buy the missing essentials in priority order",
      "Store items in one accessible home location",
      "Review the kit every 6 months and replace expired supplies",
    ],
    faq: [
      {
        q: "Is there food included?",
        a: "It is a curated buying path, not a single boxed bundle. That keeps the recommendations flexible and lets you choose the right quantity for your household.",
      },
      {
        q: "How large is the kit?",
        a: "Start with one shelf, bin, or backpack dedicated to your 72-hour essentials.",
      },
      {
        q: "Do you ship internationally?",
        a: "Currently, we only ship these kits within the US due to shipping regulations on trauma supplies.",
      },
    ],
    shopifyUrl: "/landing/shelter-in-place-kit",
    category: "bundle",
    isBestSeller: true,
  },
  {
    id: "door-barricade-lock",
    name: "AceMining Upgraded Door Security Bar",
    tagline: "A mechanical first line of defense for doors and sliders.",
    description:
      "A heavy-duty adjustable door security bar designed to add visible, physical resistance to forced entry attempts. A practical upgrade for apartments, rentals, and home entry points.",
    price: 34.99,
    compareAtPrice: 49.99,
    currency: "USD",
    image: "/AceMining_Upgraded_Door_Security.png",
    imageAlt: "AceMining adjustable door security bar bracing a door",
    badge: "High Demand",
    rating: 4.8,
    reviews: "2 147",
    benefits: [
      "Adjustable fit for many hinged and sliding doors",
      "Adds a visible physical deterrent at night",
      "No smart home setup or batteries required",
      "Useful for apartments, rentals, dorms, and travel stays",
      "Quick to place and remove from inside the room",
      "Simple mechanical backup to your existing lock",
    ],
    howToUse: [
      "Adjust the bar length to the door or slider track",
      "Place the padded end securely against the floor",
      "Check that the door cannot open inward under pressure",
      "Store it next to the entry point for nightly use",
      "Remove it before exiting or in any emergency evacuation",
    ],
    faq: [
      {
        q: "Does it work on outward-swinging doors?",
        a: "It is best used on standard inward-opening doors and many sliding doors. Always confirm fit with your specific door style.",
      },
      {
        q: "Can intruders pick it from the outside?",
        a: "It does not replace a lock, but it adds an interior physical barrier that cannot be unlocked from outside like a normal latch.",
      },
      {
        q: "What if I have carpet?",
        a: "Performance depends on floor grip and door geometry. Test it after placement and avoid slick surfaces without a stable contact point.",
      },
    ],
    shopifyUrl: "/go/door-security-bar?placement=shop-detail",
    category: "security",
    isNew: true,
    gallery: [
      {
        url: "/AceMining_Upgraded_Door_Security.png",
        label: "Door Brace",
        badge: "Mechanical Defense",
        desc: "Adjustable door security bar for an extra physical barrier",
      },
      {
        url: "/images/products/ge-window-door-alarm.png",
        label: "Layered Entry Alert",
        badge: "Add an Alarm",
        desc: "Pair physical reinforcement with a simple window or door alarm",
      },
    ],
  },
];

export function getShopProductById(id: string): ShopProduct | undefined {
  return shopProducts.find((p) => p.id === id);
}
