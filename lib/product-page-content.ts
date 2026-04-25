import type { CategoryId, Product, ProductProof } from "@/lib/site-data";

type DetailedBenefit = {
  title: string;
  description: string;
};

type RitualStep = {
  title: string;
  description: string;
};

type CategoryNarrative = {
  emotionalHook: string;
  bestFor: string;
  heroBenefits: string[];
  quickBenefits: string[];
  problemHeadline: string;
  problemParagraph: string;
  solutionParagraph: string;
  detailedBenefits: DetailedBenefit[];
  ritualTitle: string;
  ritualSteps: RitualStep[];
  socialProofLine: string;
  faqs: {
    question: string;
    answer: string;
  }[];
};

export type ProductPageContent = CategoryNarrative & {
  socialHeadline: string;
  socialRatingLabel: string;
};

const categoryNarratives: Record<CategoryId, CategoryNarrative> = {
  "home-security": {
    emotionalHook: "A practical home security upgrade that helps you harden entry points, improve visibility, and sleep with less stress.",
    bestFor: "Best for homeowners, renters, and anyone securing doors, windows, and entry lighting.",
    heroBenefits: [
      "Reinforces doors, windows, and dark entry points before problems start",
      "Adds early warning alerts before someone reaches the lock",
      "Creates a visible deterrent that makes the home feel less exposed",
    ],
    quickBenefits: ["Forced entry resistance", "Early warning", "Perimeter visibility", "Daily peace of mind"],
    problemHeadline: "Is your home security setup actually complete?",
    problemParagraph:
      "A standard deadbolt is only as strong as the frame it's on. Without secondary reinforcement, exterior lighting, and perimeter detection, you are leaving common entry points easier to test.",
    solutionParagraph:
      "building a visible, mechanical, and alert-based layer of protection that makes your home feel more secure from the curb to the bedroom.",
    detailedBenefits: [
      {
        title: "Perimeter first",
        description: "Focuses on visible deterrence and early warning so you can react before someone reaches the door.",
      },
      {
        title: "Mechanical strength",
        description: "Uses reinforcement tools and layered barriers designed to make forced entry harder and more time-consuming.",
      },
      {
        title: "Visible deterrence",
        description: "Lighting, cameras, and alarms signal that the property is monitored and prepared.",
      },
    ],
    ritualTitle: "Your Home Security Checklist",
    ritualSteps: [
      {
        title: "Step 1: Check the perimeter",
        description: "Start with motion sensors, window alarms, and lighting around the most exposed entry points.",
      },
      {
        title: "Step 2: Reinforce the frame",
        description: "Add mechanical barriers to doors and sliding points so the entry structure is better protected.",
      },
      {
        title: "Step 3: Verify and rest",
        description: "Use your camera feed or door check to confirm the home is secured before you settle in.",
      },
    ],
    socialProofLine: "Trusted by homeowners who want a simple, high-intent home security setup that actually gets used.",
    faqs: [
      {
        question: "Is this a good first home security upgrade?",
        answer: "Yes. These products are ideal if you want a practical first step that improves visibility, alerts, and physical deterrence.",
      },
      {
        question: "Can renters use these products too?",
        answer: "Absolutely. Several of these picks are renter-friendly because they install quickly and do not require permanent changes.",
      },
      {
        question: "What should I buy first?",
        answer: "Start with the weakest entry point in your home, usually a front door, side door, or dark exterior approach path.",
      },
    ],
  },
  "personal-safety": {
    emotionalHook: "An everyday carry safety upgrade that helps you feel more prepared during commuting, travel, and late-night routines.",
    bestFor: "Best for commuting, solo travel, late-night walks, and everyday carry confidence.",
    heroBenefits: [
      "Provides non-lethal distance and faster access in unpredictable situations",
      "Fits discreetly into daily carry, bags, and travel kits",
      "Builds confidence for commutes, rideshares, and solo travel",
    ],
    quickBenefits: ["Non-lethal defense", "Discrete carry", "Solo travel safety", "Instant deterrence"],
    problemHeadline: "Do you have a real personal safety plan for daily life?",
    problemParagraph:
      "Whether you are walking to your car, using public transit, or travelling alone, most people still rely on hope instead of a visible, reachable safety tool.",
    solutionParagraph:
      "supporting awareness and fast reaction with tools that are legal, compact, and easy to reach when seconds matter.",
    detailedBenefits: [
      {
        title: "Maximum leverage",
        description: "Designed to draw immediate attention or create distance when you need it most.",
      },
      {
        title: "Frictionless carry",
        description: "Lightweight, compact tools make it easier to keep protection with you every day.",
      },
      {
        title: "Stress-ready design",
        description: "Simple activation and intuitive forms help the tool work when stress is high.",
      },
    ],
    ritualTitle: "Your EDC Readiness Routine",
    ritualSteps: [
      {
        title: "Step 1: Inspect your gear",
        description: "Check that your safety tools are accessible before you leave the house.",
      },
      {
        title: "Step 2: Mirror check",
        description: "Make sure your carry stays discreet, comfortable, and easy to reach.",
      },
      {
        title: "Step 3: Plan your route",
        description: "Choose the safest path and keep your tools in the same place every time.",
      },
    ],
    socialProofLine: "Loved by commuters and travelers who want compact protection that still feels practical and polished.",
    faqs: [
      {
        question: "What makes a good personal safety product?",
        answer: "The best tools are compact, easy to reach, and simple to use under stress.",
      },
      {
        question: "Is this useful for travel?",
        answer: "Yes. These picks are especially useful for rideshares, hotel stays, and new cities where you want extra peace of mind.",
      },
      {
        question: "Should I carry more than one item?",
        answer: "A layered setup is smarter, because each tool solves a different problem such as attention, deterrence, or access control.",
      },
    ],
  },
  "cyber-shield": {
    emotionalHook: "A digital privacy upgrade that helps protect your data, devices, and travel documents without slowing you down.",
    bestFor: "Best for remote workers, travelers, and anyone protecting accounts, devices, or travel documents.",
    heroBenefits: [
      "Blocks RF signals to help reduce skimming risk in public spaces",
      "Adds hardware MFA to harden email and important accounts",
      "Supports privacy checks for devices, travel, and rentals",
    ],
    quickBenefits: ["Signal blocking", "MFA hardware", "Privacy shielding", "Travel privacy"],
    problemHeadline: "Is your digital privacy easier to breach than you think?",
    problemParagraph:
      "You do not need a broken laptop to suffer a privacy problem. Public Wi-Fi, weak passwords, and hidden devices can all expose the details you wanted to keep private.",
    solutionParagraph:
      "pairing physical signal shielding, hardware authentication, and simple visibility checks to create a cleaner digital defense layer around your life.",
    detailedBenefits: [
      {
        title: "Physical isolation",
        description: "Uses Faraday-style protection and blocking sleeves when your devices are not in use.",
      },
      {
        title: "Unhackable logins",
        description: "Hardware keys make it much harder for attackers to take over an account without the device.",
      },
      {
        title: "Visual privacy",
        description: "Privacy screens and camera checks help protect your screen and private space from unwanted eyes.",
      },
    ],
    ritualTitle: "Your Digital Lockdown Checklist",
    ritualSteps: [
      {
        title: "Step 1: Shield your tokens",
        description: "Store cards, passports, and phones in RFID-safe protection when you are on the move.",
      },
      {
        title: "Step 2: Authenticate",
        description: "Use your hardware security key to protect primary accounts and recovery access.",
      },
      {
        title: "Step 3: Cover the lens",
        description: "Run a quick camera and lens check before you settle into a hotel room or workspace.",
      },
    ],
    socialProofLine: "The essential collection for privacy-focused travelers, remote workers, and smart home owners.",
    faqs: [
      {
        question: "Do I really need hardware security keys?",
        answer: "If you care about account security, hardware keys are one of the strongest ways to protect important logins.",
      },
      {
        question: "Are privacy screens useful outside the office?",
        answer: "Yes. They are helpful in airports, coffee shops, coworking spaces, and anywhere nearby screens can be seen.",
      },
      {
        question: "What is the easiest privacy upgrade first?",
        answer: "A security key or RFID protection is often the easiest low-friction starting point.",
      },
    ],
  },
  "emergency-prep": {
    emotionalHook: "A practical emergency readiness baseline that keeps you informed, charged, and safer when normal routines break.",
    bestFor: "Best for outages, storms, road trips, winter commutes, and basic household preparedness.",
    heroBenefits: [
      "Keeps communication available through radio and backup power",
      "Supports clean hydration with portable filtration options",
      "Maintains critical body heat during outages and severe weather",
    ],
    quickBenefits: ["Off-grid comms", "Water security", "Thermal stability", "Backup power"],
    problemHeadline: "Are you ready for the next outage, storm, or roadside delay?",
    problemParagraph:
      "Disasters do not schedule an appointment. When the lights go out, the road closes, or the weather turns, missing basics can turn inconvenience into panic.",
    solutionParagraph:
      "building a high-performance readiness baseline that protects your most important needs when infrastructure fails.",
    detailedBenefits: [
      {
        title: "Absolute autonomy",
        description: "Gear that works without depending on local power or internet service.",
      },
      {
        title: "Biological priority",
        description: "Focuses on the core requirements of readiness: water, warmth, and information.",
      },
      {
        title: "Rapid deployment",
        description: "Lightweight and organized so you can grab what matters quickly.",
      },
    ],
    ritualTitle: "Your Readiness Drill",
    ritualSteps: [
      {
        title: "Step 1: Power audit",
        description: "Test your radio, lights, and backup power before you actually need them.",
      },
      {
        title: "Step 2: Hydration check",
        description: "Verify your water tools and keep them accessible in the same storage spot.",
      },
      {
        title: "Step 3: Thermal prep",
        description: "Store blankets and heat-support tools where you can grab them fast.",
      },
    ],
    socialProofLine: "Trusted by preparedness readers who want a simple, reliable starting point for real-world emergencies.",
    faqs: [
      {
        question: "What is the most useful emergency item to start with?",
        answer: "A backup power, water, and communication combo is usually the smartest starting point.",
      },
      {
        question: "Do I need a full survival kit?",
        answer: "You do not need everything at once; a compact, layered setup is more realistic and easier to maintain.",
      },
      {
        question: "Is this only for severe disasters?",
        answer: "No. These products are useful for outages, weather events, and everyday vehicle or home disruptions.",
      },
    ],
  },
};

export function getProductPageContent(product: Product, proof: ProductProof): ProductPageContent {
  const narrative = categoryNarratives[product.categoryId];

  return {
    ...narrative,
    socialHeadline: `Top-rated pick for ${product.name.toLowerCase()}`,
    socialRatingLabel: `${proof.rating.toFixed(1)} average rating`,
  };
}
