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
  heroBenefits: string[];
  quickBenefits: string[];
  problemHeadline: string;
  problemParagraph: string;
  solutionParagraph: string;
  detailedBenefits: DetailedBenefit[];
  ritualTitle: string;
  ritualSteps: RitualStep[];
  socialProofLine: string;
};

export type ProductPageContent = CategoryNarrative & {
  socialHeadline: string;
  socialRatingLabel: string;
};

const categoryNarratives: Record<CategoryId, CategoryNarrative> = {
  "home-security": {
    emotionalHook: "A proactive perimeter strategy that gives you total peace of mind before the night begins.",
    heroBenefits: [
      "Eliminates entry point vulnerability with mechanical reinforcement",
      "Provides early warning alerts before a threat reaches your door",
      "Creates a visible deterrent that makes your home an unattractive target",
    ],
    quickBenefits: ["Forced entry resistance", "Early warning", "Perimeter visibility", "Durable materials"],
    problemHeadline: "Is your home truly secure while you sleep?",
    problemParagraph:
      "A standard deadbolt is only as strong as the frame it's on. Without secondary reinforcement and perimeter detection, you are vulnerable to forced entry before you even wake up.",
    solutionParagraph:
      "establishing a visible and mechanical layer of protection that stops threats at the property line, so you can sleep with total confidence.",
    detailedBenefits: [
      {
        title: "Perimeter First",
        description: "Focuses on identifying threats early, giving you the time needed to respond or alert authorities.",
      },
      {
        title: "Mechanical Strength",
        description: "Uses high-grade materials designed to resist thousands of pounds of force from forced entry attempts.",
      },
      {
        title: "Visible Deterrence",
        description: "A well-protected home is less likely to be tested. Our picks signal readiness and professional security.",
      },
    ],
    ritualTitle: "Your Perimeter Protocol",
    ritualSteps: [
      {
        title: "Step 1: Check the line",
        description: "Activate your perimeter sensors and verify your early warning paths are clear and active.",
      },
      {
        title: "Step 2: Secure the frame",
        description: "Deploy mechanical barriers on main entries and sliding points to ensure the frame is reinforced.",
      },
      {
        title: "Step 3: Verify and rest",
        description: "Perform one visual verification through your HD surveillance to confirm a clear perimeter.",
      },
    ],
    socialProofLine: "Trusted by homeowners and security experts for creating a zero-compromise residence.",
  },
  "personal-safety": {
    emotionalHook: "An essential EDC upgrade that turns preparedness into an automatic habit for urban safety.",
    heroBenefits: [
      "Provides non-lethal distance to deter threats in urban environments",
      "Fits discretely into your daily gear for high-readiness portability",
      "Increases confidence during solo travel or nocturnal commutes",
    ],
    quickBenefits: ["Non-lethal defense", "Discrete carry", "Solo travel safety", "Instant deterrence"],
    problemHeadline: "Feeling vulnerable during your daily commute?",
    problemParagraph:
      "Whether traveling solo or navigating busy urban spaces, vulnerability is a friction point. Most people lack a plan or a tool that is easy to carry and deploy instantly when seconds count.",
    solutionParagraph:
      "supporting personal awareness and protection with professional-grade tools that are legal, effective, and always at reach.",
    detailedBenefits: [
      {
        title: "Maximum leverage",
        description: "Designed to draw immediate attention to a threat or provide a physical barrier between you and an aggressor.",
      },
      {
        title: "Frictionless carry",
        description: "Tools that are lightweight and compact, ensuring you never have to choose between safety and convenience.",
      },
      {
        title: "Stress-ready design",
        description: "Simple, intuitive activation mechanisms that work even under high-stress conditions.",
      },
    ],
    ritualTitle: "Your EDC Readiness",
    ritualSteps: [
      {
        title: "Step 1: Inspect your gear",
        description: "Verify that your defense tools are accessible and functional before leaving home.",
      },
      {
        title: "Step 2: Mirror check",
        description: "Confirm that your carry is discrete and does not hinder your movement or situational awareness.",
      },
      {
        title: "Step 3: Plan your path",
        description: "Stay intentional with your route and keep your tools within reach while in high-traffic zones.",
      },
    ],
    socialProofLine: "Loved by thousands of commuters and travelers for its discrete effectiveness and peace of mind.",
  },
  "cyber-shield": {
    emotionalHook: "A hardened digital defense protocol that leaves no backdoors for your data or smart home network.",
    heroBenefits: [
      "Blocks RF signals to prevent credit card and phone skimming",
      "Implements hardware MFA to stop digital account takeovers",
      "Secures your private space from indoor surveillance vulnerabilities",
    ],
    quickBenefits: ["Signal blocking", "MFA hardware", "Privacy shielding", "Smart home security"],
    problemHeadline: "Is your digital footprint at risk?",
    problemParagraph:
      "Hackers don't need to pick a lock to steal your identity. Over-the-air skimming and digital account breaches happen in seconds, often without the user even appearing at risk.",
    solutionParagraph:
      "pairing physical signal shielding with unhackable hardware authentication to create a total cyber shield around your life.",
    detailedBenefits: [
      {
        title: "Physical isolation",
        description: "Uses high-grade Faraday materials to ensure your signals are completely isolated when not in use.",
      },
      {
        title: "Unhackable logins",
        description: "Hardware keys ensure that even if a password is lost, your account remains secure without physical access.",
      },
      {
        title: "Visual privacy",
        description: "Protects your private space and your screen from unwanted eyes and digital surveillance.",
      },
    ],
    ritualTitle: "Your Digital Lockdown",
    ritualSteps: [
      {
        title: "Step 1: Shield your tokens",
        description: "Place your high-risk physical tokens and phone into RF-blocking sleeves when in public spaces.",
      },
      {
        title: "Step 2: Authenticate",
        description: "Use your hardware security key to lock down your primary email and smart home hub.",
      },
      {
        title: "Step 3: Cover the lens",
        description: "Apply physical webcam and indoor camera covers to ensure your private space stays private.",
      },
    ],
    socialProofLine: "The essential collection for privacy-focused professionals and smart home owners.",
  },
  "emergency-prep": {
    emotionalHook: "A strategic readiness baseline that ensures you stay informed and informed when the grid fails.",
    heroBenefits: [
      "Provides off-grid communication through NOAA and solar power",
      "Ensures access to clean hydration with advanced filtration",
      "Maintains critical body heat during power outages or extreme weather",
    ],
    quickBenefits: ["Off-grid comms", "Water security", "Thermal stability", "Survival baseline"],
    problemHeadline: "Are you ready for the next grid failure?",
    problemParagraph:
      "Disasters don't schedule an appointment. When the lights go out and the water stops, a lack of preparation creates panic. Most people wait until the crisis to buy the gear.",
    solutionParagraph:
      "building a high-performance survival baseline that protects your most critical biological needs when infrastructure fails.",
    detailedBenefits: [
      {
        title: "Absolute autonomy",
        description: "Gear that works without batteries, internet, or municipal power, ensuring you remain in control.",
      },
      {
        title: "Biological priority",
        description: "Focuses on the core requirements of survival: water, heat, and information.",
      },
      {
        title: "Rapid deployment",
        description: "Lightweight and organized so you can respond to an emergency or evacuation in seconds.",
      },
    ],
    ritualTitle: "Your Readiness Drill",
    ritualSteps: [
      {
        title: "Step 1: Power audit",
        description: "Test your hand-crank and solar radio to ensure communication lines are functional.",
      },
      {
        title: "Step 2: Hydration check",
        description: "Verify your filtration shelf life and ensure your emergency water supply is accessible.",
      },
      {
        title: "Step 3: Thermal prep",
        description: "Keep your emergency blankets and heat tools in a high-visibility, ready-to-go location.",
      },
    ],
    socialProofLine: "Trusted by preparedness enthusiasts as the ultimate foundation for home and family security.",
  },
};

export function getProductPageContent(product: Product, proof: ProductProof): ProductPageContent {
  const narrative = categoryNarratives[product.categoryId];

  return {
    ...narrative,
    socialHeadline: `Top rated security choice for ${product.name.toLowerCase()}`,
    socialRatingLabel: `${proof.rating.toFixed(1)} average rating`,
  };
}
