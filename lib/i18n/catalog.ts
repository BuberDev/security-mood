import type { Locale } from "@/lib/i18n/config";

export type CatalogEntry = Record<Locale, string>;

// Keyed by the literal English source string used in <T text="..."> or
// localizeContent(). Missing entries fall back to the raw English source.
export const translationCatalog: Record<string, CatalogEntry> = {
  "Security Mood | Home Security Products & Preparedness Gear": {
    en: "Security Mood | Home Security Products & Preparedness Gear",
    pl: "Security Mood | Produkty i sprzęt do ochrony domu i gotowości kryzysowej",
  },
  "We curate Amazon-ready safety products and high-intent buying guides for home security, crisis readiness, blackout prep, personal protection, cyber privacy, and emergency preparedness.": {
    en: "We curate Amazon-ready safety products and high-intent buying guides for home security, crisis readiness, blackout prep, personal protection, cyber privacy, and emergency preparedness.",
    pl: "Wybieramy sprawdzone produkty zabezpieczające dostępne na Amazon oraz praktyczne przewodniki zakupowe dotyczące ochrony domu, gotowości kryzysowej, przygotowania na przerwy w dostawie prądu, ochrony osobistej, prywatności cyfrowej i przygotowania na sytuacje awaryjne.",
  },

  // --- Header / navigation ---
  "Home": { en: "Home", pl: "Strona główna" },
  "Guides": { en: "Guides", pl: "Poradniki" },
  "Shop": { en: "Shop", pl: "Sklep" },
  "Prep Kits": { en: "Prep Kits", pl: "Zestawy przygotowawcze" },
  "Deployments": { en: "Deployments", pl: "Wdrożenia" },
  "Search products...": { en: "Search products...", pl: "Szukaj produktów..." },
  "Toggle product search": { en: "Toggle product search", pl: "Przełącz wyszukiwarkę produktów" },
  "Open menu": { en: "Open menu", pl: "Otwórz menu" },
  "Close menu": { en: "Close menu", pl: "Zamknij menu" },
  "Search products": { en: "Search products", pl: "Szukaj produktów" },
  "No products found for": { en: "No products found for", pl: "Nie znaleziono produktów dla" },

  // --- Footer ---
  "Something went wrong. Please try again.": {
    en: "Something went wrong. Please try again.",
    pl: "Coś poszło nie tak. Spróbuj ponownie.",
  },
  "Subscribe to our emails": { en: "Subscribe to our emails", pl: "Zapisz się na nasz newsletter" },
  "Be the first to know about new buying guides and gear picks.": {
    en: "Be the first to know about new buying guides and gear picks.",
    pl: "Bądź pierwszy, który dowie się o nowych poradnikach zakupowych i wyborach sprzętu.",
  },
  "You're subscribed — check your inbox.": {
    en: "You're subscribed — check your inbox.",
    pl: "Zapisano — sprawdź swoją skrzynkę e-mail.",
  },
  "Email address": { en: "Email address", pl: "Adres e-mail" },
  "Email": { en: "Email", pl: "E-mail" },
  "Subscribing…": { en: "Subscribing…", pl: "Zapisywanie…" },
  "Subscribe": { en: "Subscribe", pl: "Zapisz się" },
  "Discover": { en: "Discover", pl: "Odkrywaj" },
  "Home Fortification": { en: "Home Fortification", pl: "Ochrona domu" },
  "Personal Safety": { en: "Personal Safety", pl: "Bezpieczeństwo osobiste" },
  "Digital Defense": { en: "Digital Defense", pl: "Ochrona cyfrowa" },
  "Survival & Prep": { en: "Survival & Prep", pl: "Przetrwanie i przygotowanie" },
  "Shop & Support": { en: "Shop & Support", pl: "Sklep i wsparcie" },
  "Amazon Favorites": { en: "Amazon Favorites", pl: "Wybory z Amazon" },
  "Latest Articles": { en: "Latest Articles", pl: "Najnowsze artykuły" },
  "Newsletter": { en: "Newsletter", pl: "Newsletter" },
  "Professional security and preparedness platform curated to help you build a hardened perimeter with battle-tested gear and operational protocols.": {
    en: "Professional security and preparedness platform curated to help you build a hardened perimeter with battle-tested gear and operational protocols.",
    pl: "Profesjonalna platforma bezpieczeństwa i gotowości kryzysowej, która pomoże Ci zbudować solidną ochronę domu dzięki sprawdzonemu sprzętowi i procedurom działania.",
  },
  "Hardened defense. Total readiness.": {
    en: "Hardened defense. Total readiness.",
    pl: "Solidna ochrona. Pełna gotowość.",
  },
  "Contact": { en: "Contact", pl: "Kontakt" },
  "San Francisco, California": { en: "San Francisco, California", pl: "San Francisco, Kalifornia" },
  "All rights reserved.": { en: "All rights reserved.", pl: "Wszelkie prawa zastrzeżone." },
  "Protocol Intel": { en: "Protocol Intel", pl: "Biuletyn taktyczny" },
  "Join the list for one tactical protocol and three quality deployment picks every week.": {
    en: "Join the list for one tactical protocol and three quality deployment picks every week.",
    pl: "Zapisz się, aby co tydzień otrzymać jedną taktyczną procedurę i trzy sprawdzone propozycje sprzętu.",
  },
  "Built for preparedness enthusiasts who want hardened routines they will actually use.": {
    en: "Built for preparedness enthusiasts who want hardened routines they will actually use.",
    pl: "Stworzone dla entuzjastów gotowości kryzysowej, którzy chcą solidnych nawyków, z których naprawdę będą korzystać.",
  },
  "Newsletter signup": { en: "Newsletter signup", pl: "Zapis do newslettera" },
  "Enter your email": { en: "Enter your email", pl: "Podaj swój e-mail" },
  "No spam. Weekly only. Unsubscribe anytime.": {
    en: "No spam. Weekly only. Unsubscribe anytime.",
    pl: "Bez spamu. Tylko raz w tygodniu. Możesz zrezygnować w każdej chwili.",
  },

  // --- Shared cards (product/article/landing/category) ---
  "Trending on Pinterest": { en: "Trending on Pinterest", pl: "Popularne na Pintereście" },
  "Read guide": { en: "Read guide", pl: "Czytaj poradnik" },
  "Priority order": { en: "Priority order", pl: "Kolejność priorytetów" },
  "Open landing page": { en: "Open landing page", pl: "Otwórz stronę docelową" },
  "Explore top routines": { en: "Explore top routines", pl: "Poznaj najlepsze procedury" },
  "View details": { en: "View details", pl: "Zobacz szczegóły" },
  "View on Amazon": { en: "View on Amazon", pl: "Zobacz na Amazon" },
  "Check on Amazon": { en: "Check on Amazon", pl: "Sprawdź na Amazon" },
  "Go to checkout": { en: "Go to checkout", pl: "Przejdź do zamówienia" },
  "Editor Note": { en: "Editor Note", pl: "Uwaga redakcji" },

  // --- Homepage ---
  "Top rated": { en: "Top rated", pl: "Najwyżej oceniane" },
  "Popular": { en: "Popular", pl: "Popularne" },
  "Editor favorite": { en: "Editor favorite", pl: "Wybór redakcji" },

  "Home Security & Crisis Preparedness Products | Security Mood": {
    en: "Home Security & Crisis Preparedness Products | Security Mood",
    pl: "Produkty do ochrony domu i gotowości kryzysowej | Security Mood",
  },
  "Discover home security products, crisis preparedness gear, blackout essentials, personal safety tools, cyber privacy equipment, and emergency readiness favorites.": {
    en: "Discover home security products, crisis preparedness gear, blackout essentials, personal safety tools, cyber privacy equipment, and emergency readiness favorites.",
    pl: "Odkryj produkty do ochrony domu, sprzęt do gotowości kryzysowej, niezbędnik na wypadek przerw w dostawie prądu, narzędzia ochrony osobistej, sprzęt do prywatności cyfrowej i najlepsze wybory na wypadek sytuacji awaryjnych.",
  },
  "Crisis-Ready Affiliate Guides": { en: "Crisis-Ready Affiliate Guides", pl: "Poradniki gotowości na kryzys" },
  "Be Prepared": { en: "Be Prepared", pl: "Bądź gotowy" },
  "Be Safe.": { en: "Be Safe.", pl: "Bądź bezpieczny." },
  "Layer your home security and prepare for the unexpected with battle-tested gear. No noise, just the absolute essentials.": {
    en: "Layer your home security and prepare for the unexpected with battle-tested gear. No noise, just the absolute essentials.",
    pl: "Zbuduj wielowarstwową ochronę domu i przygotuj się na nieoczekiwane dzięki sprawdzonemu sprzętowi. Bez zbędnego szumu, tylko absolutne podstawy.",
  },
  "Start Crisis Prep": { en: "Start Crisis Prep", pl: "Zacznij przygotowania na kryzys" },
  "View Prep Kits": { en: "View Prep Kits", pl: "Zobacz zestawy przygotowawcze" },

  "Preparedness Kits": { en: "Preparedness Kits", pl: "Zestawy przygotowawcze" },
  "Gear Confidence": { en: "Gear Confidence", pl: "Zaufanie do sprzętu" },
  "Actionable Layers": { en: "Actionable Layers", pl: "Konkretne warstwy ochrony" },

  "Choose Your Starting Point": { en: "Choose Your Starting Point", pl: "Wybierz swój punkt startowy" },
  "Pick the path that matches your household": {
    en: "Pick the path that matches your household",
    pl: "Wybierz ścieżkę dopasowaną do Twojego gospodarstwa domowego",
  },
  "These quick routes reduce choice overload and send readers straight to the kit that fits their situation best.": {
    en: "These quick routes reduce choice overload and send readers straight to the kit that fits their situation best.",
    pl: "Te szybkie ścieżki ograniczają nadmiar wyboru i kierują czytelników prosto do zestawu najlepiej dopasowanego do ich sytuacji.",
  },
  "Renters": { en: "Renters", pl: "Najemcy" },
  "Apartment-friendly home security": { en: "Apartment-friendly home security", pl: "Ochrona domu przyjazna dla mieszkań" },
  "Start with renter-safe upgrades, window protection, and low-friction security layers.": {
    en: "Start with renter-safe upgrades, window protection, and low-friction security layers.",
    pl: "Zacznij od ulepszeń bezpiecznych dla najemców, ochrony okien i prostych do wdrożenia warstw zabezpieczeń.",
  },
  "Homeowners": { en: "Homeowners", pl: "Właściciele domów" },
  "Full crisis readiness kit": { en: "Full crisis readiness kit", pl: "Pełny zestaw gotowości kryzysowej" },
  "Build a stronger baseline with blackout prep, water, power, and home defense layers.": {
    en: "Build a stronger baseline with blackout prep, water, power, and home defense layers.",
    pl: "Zbuduj solidniejszą podstawę dzięki przygotowaniu na przerwy w prądzie, zapasom wody, zasilaniu i warstwom ochrony domu.",
  },
  "Families": { en: "Families", pl: "Rodziny" },
  "Shelter-in-place plan": { en: "Shelter-in-place plan", pl: "Plan pozostania w bezpiecznym miejscu" },
  "Get the essentials for long-duration readiness, evacuation, and household coordination.": {
    en: "Get the essentials for long-duration readiness, evacuation, and household coordination.",
    pl: "Zdobądź niezbędnik do długotrwałej gotowości, ewakuacji i koordynacji działań domowników.",
  },
  "Open this path": { en: "Open this path", pl: "Otwórz tę ścieżkę" },

  "Crisis Preparedness": { en: "Crisis Preparedness", pl: "Gotowość kryzysowa" },
  "Start with the 72-hour kit, then layer your home and vehicle readiness": {
    en: "Start with the 72-hour kit, then layer your home and vehicle readiness",
    pl: "Zacznij od zestawu na 72 godziny, następnie rozbuduj gotowość domu i samochodu",
  },
  "These pages are the fastest path to practical preparedness: one page for the kit, one for the house, one for evacuation.": {
    en: "These pages are the fastest path to practical preparedness: one page for the kit, one for the house, one for evacuation.",
    pl: "Te strony to najszybsza droga do praktycznej gotowości: jedna strona dla zestawu, jedna dla domu, jedna dla ewakuacji.",
  },
  "Most Important First": { en: "Most Important First", pl: "Najważniejsze najpierw" },
  "If you only build one thing this week, build the crisis kit first": {
    en: "If you only build one thing this week, build the crisis kit first",
    pl: "Jeśli w tym tygodniu zbudujesz tylko jedną rzecz, niech będzie to zestaw kryzysowy",
  },
  "A clear 72-hour plan, a home lockdown layer, and an evacuation bag are easier to buy when they are presented as a sequence.": {
    en: "A clear 72-hour plan, a home lockdown layer, and an evacuation bag are easier to buy when they are presented as a sequence.",
    pl: "Jasny plan na 72 godziny, warstwa zabezpieczenia domu i torba ewakuacyjna łatwiej się kompletuje, gdy są przedstawione jako kolejne kroki.",
  },
  "Open Crisis Kit": { en: "Open Crisis Kit", pl: "Otwórz zestaw kryzysowy" },
  "Open Evacuation Kit": { en: "Open Evacuation Kit", pl: "Otwórz zestaw ewakuacyjny" },

  "Operational Categories": { en: "Operational Categories", pl: "Kategorie operacyjne" },
  "Layer your defense with specialized gear and crisis-prep protocols": {
    en: "Layer your defense with specialized gear and crisis-prep protocols",
    pl: "Zbuduj wielowarstwową ochronę dzięki specjalistycznemu sprzętowi i procedurom gotowości kryzysowej",
  },
  "From perimeter hardening to blackout readiness and evacuation prep, our categories are structured for rapid response and practical clarity.": {
    en: "From perimeter hardening to blackout readiness and evacuation prep, our categories are structured for rapid response and practical clarity.",
    pl: "Od wzmacniania obwodu domu po gotowość na przerwy w prądzie i przygotowanie do ewakuacji — nasze kategorie są uporządkowane pod kątem szybkiej reakcji i praktycznej przejrzystości.",
  },
  "Initial Deployment?": { en: "Initial Deployment?", pl: "Pierwsze wdrożenie?" },
  "Start with one protocol, then scale your gear as your needs grow": {
    en: "Start with one protocol, then scale your gear as your needs grow",
    pl: "Zacznij od jednej procedury, a następnie rozbudowuj sprzęt w miarę rosnących potrzeb",
  },
  "Strategic preparedness begins with a single layer. Benchmark your home with our audit guides and deploy gear only where gaps exist, especially before outages or disruptive events.": {
    en: "Strategic preparedness begins with a single layer. Benchmark your home with our audit guides and deploy gear only where gaps exist, especially before outages or disruptive events.",
    pl: "Strategiczna gotowość zaczyna się od jednej warstwy. Sprawdź swój dom za pomocą naszych przewodników audytowych i wdrażaj sprzęt tylko tam, gdzie są luki, zwłaszcza przed przerwami w dostawie prądu lub innymi zakłóceniami.",
  },
  "See Deployment Guides": { en: "See Deployment Guides", pl: "Zobacz przewodniki wdrożeniowe" },
  "Explore All Essentials": { en: "Explore All Essentials", pl: "Zobacz wszystkie niezbędniki" },

  "Operational Guides": { en: "Operational Guides", pl: "Poradniki operacyjne" },
  "Battle-tested guides for home security and crisis readiness": {
    en: "Battle-tested guides for home security and crisis readiness",
    pl: "Sprawdzone w praktyce poradniki dotyczące ochrony domu i gotowości kryzysowej",
  },
  "Exhaustive, high-performing protocols structured for blackouts, unrest, and everyday preparedness.": {
    en: "Exhaustive, high-performing protocols structured for blackouts, unrest, and everyday preparedness.",
    pl: "Wyczerpujące, sprawdzone procedury przygotowane na przerwy w prądzie, niepokoje społeczne i codzienną gotowość.",
  },

  "Additional Prep Kits": { en: "Additional Prep Kits", pl: "Dodatkowe zestawy przygotowawcze" },
  "Focused pages built to convert a specific preparedness need": {
    en: "Focused pages built to convert a specific preparedness need",
    pl: "Strony skoncentrowane na konkretnej potrzebie związanej z gotowością",
  },
  "These are the supporting pages to send search and Pinterest traffic to when you want a cleaner match between emergency intent, content, and purchase intent.": {
    en: "These are the supporting pages to send search and Pinterest traffic to when you want a cleaner match between emergency intent, content, and purchase intent.",
    pl: "To strony pomocnicze, na które warto kierować ruch z wyszukiwarki i Pinteresta, gdy zależy Ci na dopasowaniu intencji, treści i chęci zakupu.",
  },

  "Deployment-Ready Gear": { en: "Deployment-Ready Gear", pl: "Sprzęt gotowy do użycia" },
  "Curated field essentials with proven readiness value": {
    en: "Curated field essentials with proven readiness value",
    pl: "Starannie wybrane niezbędniki terenowe o sprawdzonej wartości",
  },
  "Professional-grade upgrades chosen for durability, effectiveness, and the fastest path to a more prepared home.": {
    en: "Professional-grade upgrades chosen for durability, effectiveness, and the fastest path to a more prepared home.",
    pl: "Profesjonalne ulepszenia wybrane pod kątem trwałości, skuteczności i najszybszej drogi do lepiej przygotowanego domu.",
  },
  "High-demand essential": { en: "High-demand essential", pl: "Bardzo poszukiwany niezbędnik" },
  "Prepare for tomorrow": { en: "Prepare for tomorrow", pl: "Przygotuj się na jutro" },
  "Maintain your readiness momentum while essentials are in stock": {
    en: "Maintain your readiness momentum while essentials are in stock",
    pl: "Utrzymaj tempo przygotowań, dopóki niezbędniki są dostępne",
  },
  "Review your field kit now, compare deployment options, and secure your baseline before supply chains shift.": {
    en: "Review your field kit now, compare deployment options, and secure your baseline before supply chains shift.",
    pl: "Sprawdź teraz swój zestaw terenowy, porównaj opcje i zabezpiecz swoją podstawę, zanim zmienią się łańcuchy dostaw.",
  },
  "Browse Gear Collections": { en: "Browse Gear Collections", pl: "Przeglądaj kolekcje sprzętu" },
  "Review All Guides": { en: "Review All Guides", pl: "Zobacz wszystkie poradniki" },

  // --- Social proof / trust signals (shared across product cards) ---
  "Popular right now": { en: "Popular right now", pl: "Popularne teraz" },
  "Limited-time favorite": { en: "Limited-time favorite", pl: "Chwilowy hit" },
  "Trending on social media": { en: "Trending on social media", pl: "Na topie w mediach społecznościowych" },
  "Most saved on Pinterest this week": { en: "Most saved on Pinterest this week", pl: "Najczęściej zapisywane na Pintereście w tym tygodniu" },
  "Most loved by routine creators": { en: "Most loved by routine creators", pl: "Uwielbiane przez twórców codziennych rytuałów" },

  // --- Routine section ---
  "Night Routine": { en: "Night Routine", pl: "Rytuał wieczorny" },
  "The 12-minute glow routine our readers repeat the most": {
    en: "The 12-minute glow routine our readers repeat the most",
    pl: "12-minutowy rytuał, który nasi czytelnicy powtarzają najczęściej",
  },
  "Built for low-attention evenings: short steps, clear outcomes, and one product action at a time.": {
    en: "Built for low-attention evenings: short steps, clear outcomes, and one product action at a time.",
    pl: "Stworzony na wieczory z niską dawką uwagi: krótkie kroki, jasne efekty i jedno działanie na raz.",
  },
  "Step": { en: "Step", pl: "Krok" },
  "Read Full Routine Guides": { en: "Read Full Routine Guides", pl: "Przeczytaj pełne poradniki rytuału" },
  "Layer 1: The Perimeter": { en: "Layer 1: The Perimeter", pl: "Warstwa 1: Obwód domu" },
  "2 min": { en: "2 min", pl: "2 min" },
  "Establish early warning with motion sensors that alert you before an entry point is tested.": {
    en: "Establish early warning with motion sensors that alert you before an entry point is tested.",
    pl: "Ustanów wczesne ostrzeganie dzięki czujnikom ruchu, które alarmują, zanim ktoś sprawdzi punkt wejścia.",
  },
  "Layer 2: Visual Deterrence": { en: "Layer 2: Visual Deterrence", pl: "Warstwa 2: Wizualne odstraszanie" },
  "5 min": { en: "5 min", pl: "5 min" },
  "Install smart home surveillance to ensure 24/7 visibility and monitoring of your most vulnerable areas.": {
    en: "Install smart home surveillance to ensure 24/7 visibility and monitoring of your most vulnerable areas.",
    pl: "Zainstaluj inteligentny monitoring domu, aby całodobowo obserwować najbardziej narażone miejsca.",
  },
  "Layer 3: Physical Barrier": { en: "Layer 3: Physical Barrier", pl: "Warstwa 3: Bariera fizyczna" },
  "4 min": { en: "4 min", pl: "4 min" },
  "Reinforce entry points with mechanical bars that resist thousands of pounds of force.": {
    en: "Reinforce entry points with mechanical bars that resist thousands of pounds of force.",
    pl: "Wzmocnij punkty wejścia mechanicznymi blokadami, które wytrzymują nacisk tysięcy funtów siły.",
  },
  "Layer 4: Access Control": { en: "Layer 4: Access Control", pl: "Warstwa 4: Kontrola dostępu" },
  "1 min": { en: "1 min", pl: "1 min" },
  "Deploy secondary smart locks that automatically secure your home the moment you leave.": {
    en: "Deploy secondary smart locks that automatically secure your home the moment you leave.",
    pl: "Zainstaluj dodatkowe inteligentne zamki, które automatycznie zabezpieczają dom w chwili wyjścia.",
  },

  // --- Top picks / premium products sections ---
  "Top Picks": { en: "Top Picks", pl: "Najlepsze wybory" },
  "Most-clicked preparedness products this week": {
    en: "Most-clicked preparedness products this week",
    pl: "Najczęściej klikane produkty przygotowawcze w tym tygodniu",
  },
  "A focused shortlist for readers who want practical, high-trust essentials for home security and emergency readiness.": {
    en: "A focused shortlist for readers who want practical, high-trust essentials for home security and emergency readiness.",
    pl: "Wyselekcjonowana lista dla czytelników, którzy chcą praktycznych i sprawdzonych niezbędników do ochrony domu i gotowości kryzysowej.",
  },
  "Browse All Amazon Favorites": { en: "Browse All Amazon Favorites", pl: "Przeglądaj wszystkie wybory z Amazon" },
  "Premium Security Gear": { en: "Premium Security Gear", pl: "Sprzęt premium do ochrony" },
  "Exclusive Dropshipping Best-Sellers": { en: "Exclusive Dropshipping Best-Sellers", pl: "Ekskluzywne bestsellery" },
  "Invest in the highest quality, military-grade security equipment. Limited stock available.": {
    en: "Invest in the highest quality, military-grade security equipment. Limited stock available.",
    pl: "Zainwestuj w sprzęt ochronny najwyższej jakości klasy wojskowej. Ograniczona dostępność.",
  },
  "Best Seller": { en: "Best Seller", pl: "Bestseller" },
  "Trending": { en: "Trending", pl: "Na topie" },
  "View in store": { en: "View in store", pl: "Zobacz w sklepie" },
  "View All Premium Gear": { en: "View All Premium Gear", pl: "Zobacz cały sprzęt premium" },

  // --- Shop listing page ---
  "Shop Preparedness Gear | Security Mood": { en: "Shop Preparedness Gear | Security Mood", pl: "Sklep ze sprzętem przygotowawczym | Security Mood" },
  "High-end crisis preparedness gear, EMP shields, and tactical flashlights. Security essentials for your home. Free US delivery.": {
    en: "High-end crisis preparedness gear, EMP shields, and tactical flashlights. Security essentials for your home. Free US delivery.",
    pl: "Sprzęt przygotowawczy najwyższej klasy, osłony przed EMP i taktyczne latarki. Niezbędniki ochronne dla Twojego domu. Darmowa dostawa na terenie USA.",
  },
  "Security essentials for your home. Free US delivery.": {
    en: "Security essentials for your home. Free US delivery.",
    pl: "Niezbędniki ochronne dla Twojego domu. Darmowa dostawa na terenie USA.",
  },
  "Crisis Prep · Security": { en: "Crisis Prep · Security", pl: "Gotowość na kryzys · Bezpieczeństwo" },
  "Your Essential Gear": { en: "Your Essential Gear", pl: "Twój niezbędny sprzęt" },
  "Professional-grade security products for when you need them most.": {
    en: "Professional-grade security products for when you need them most.",
    pl: "Profesjonalne produkty ochronne na wypadek, gdy będziesz ich najbardziej potrzebować.",
  },
  "Free US Delivery": { en: "Free US Delivery", pl: "Darmowa dostawa w USA" },
  "3–5 business days": { en: "3–5 business days", pl: "3–5 dni roboczych" },
  "30-Day Guarantee": { en: "30-Day Guarantee", pl: "30-dniowa gwarancja" },
  "Full refund, no questions": { en: "Full refund, no questions", pl: "Pełny zwrot, bez zbędnych pytań" },
  "Easy Returns": { en: "Easy Returns", pl: "Łatwe zwroty" },
  "Hassle-free process": { en: "Hassle-free process", pl: "Proces bez kłopotów" },
  "reviews": { en: "reviews", pl: "opinii" },
  "Curated buying guide": { en: "Curated buying guide", pl: "Wyselekcjonowany poradnik zakupowy" },
  "Buy Now →": { en: "Buy Now →", pl: "Kup teraz →" },
  "Open Checklist →": { en: "Open Checklist →", pl: "Otwórz listę kontrolną →" },
  "Why families trust our gear": { en: "Why families trust our gear", pl: "Dlaczego rodziny ufają naszemu sprzętowi" },
  "felt safer after installation": { en: "felt safer after installation", pl: "poczuło się bezpieczniej po instalacji" },
  "average time to a fully secured home": { en: "average time to a fully secured home", pl: "średni czas do pełnego zabezpieczenia domu" },
  "happy customers across the US": { en: "happy customers across the US", pl: "zadowolonych klientów w całych USA" },

  // --- ShopProductSales: top banner / breadcrumb ---
  "FREE US SHIPPING ON ORDERS OVER $50": { en: "FREE US SHIPPING ON ORDERS OVER $50", pl: "DARMOWA DOSTAWA W USA PRZY ZAMÓWIENIACH POWYŻEJ 50 USD" },
  "SECURE CHECKOUT": { en: "SECURE CHECKOUT", pl: "BEZPIECZNA PŁATNOŚĆ" },
  "30-DAY MISSION-READY GUARANTEE": { en: "30-DAY MISSION-READY GUARANTEE", pl: "30-DNIOWA GWARANCJA SATYSFAKCJI" },

  // --- ShopProductSales: buy box ---
  "Trending Pick": { en: "Trending Pick", pl: "Popularny wybór" },
  "⭐ Best Value Bundle": { en: "⭐ Best Value Bundle", pl: "⭐ Najlepszy zestaw" },
  "✨ Essential Prep Gear": { en: "✨ Essential Prep Gear", pl: "✨ Niezbędny sprzęt przygotowawczy" },
  "verified reviews": { en: "verified reviews", pl: "zweryfikowanych opinii" },
  "Current Buying Price": { en: "Current Buying Price", pl: "Aktualna cena zakupu" },
  "Curated Readiness Guide": { en: "Curated Readiness Guide", pl: "Wyselekcjonowany poradnik gotowości" },
  "Save": { en: "Save", pl: "Oszczędzasz" },
  "kept in your pocket": { en: "kept in your pocket", pl: "zostaje w Twojej kieszeni" },
  "Purchase path": { en: "Purchase path", pl: "Ścieżka zakupu" },
  "Verified product link": { en: "Verified product link", pl: "Zweryfikowany link do produktu" },
  "Guided checklist": { en: "Guided checklist", pl: "Prowadzona lista kontrolna" },
  "Shipping and returns": { en: "Shipping and returns", pl: "Dostawa i zwroty" },
  "Shown before checkout": { en: "Shown before checkout", pl: "Widoczne przed finalizacją zamówienia" },
  "Return policy": { en: "Return policy", pl: "Polityka zwrotów" },
  "Review on destination page": { en: "Review on destination page", pl: "Sprawdź na stronie docelowej" },
  "SECURE YOUR GEAR NOW": { en: "SECURE YOUR GEAR NOW", pl: "ZABEZPIECZ SWÓJ SPRZĘT TERAZ" },
  "OPEN THE CHECKLIST": { en: "OPEN THE CHECKLIST", pl: "OTWÓRZ LISTĘ KONTROLNĄ" },
  "Guaranteed Safe Checkout": { en: "Guaranteed Safe Checkout", pl: "Gwarantowana bezpieczna płatność" },
  "Verified Buyer": { en: "Verified Buyer", pl: "Zweryfikowany kupujący" },
  "Frequently Paired With": { en: "Frequently Paired With", pl: "Często kupowane razem z" },
  "US Delivery": { en: "US Delivery", pl: "Dostawa w USA" },
  "Details at checkout": { en: "Details at checkout", pl: "Szczegóły przy finalizacji zamówienia" },
  "100% Risk-Free": { en: "100% Risk-Free", pl: "100% bez ryzyka" },
  "Hassle-Free Returns": { en: "Hassle-Free Returns", pl: "Łatwe zwroty bez kłopotów" },
  "Easy refund support": { en: "Easy refund support", pl: "Łatwy zwrot pieniędzy" },

  // --- ShopProductSales: stat banner ---
  "OFF": { en: "OFF", pl: "ZNIŻKI" },
  "Curated": { en: "Curated", pl: "Wyselekcjonowane" },
  "Customer Rating": { en: "Customer Rating", pl: "Ocena klientów" },
  "Verified Reviews": { en: "Verified Reviews", pl: "Zweryfikowane opinie" },
  "Current Savings": { en: "Current Savings", pl: "Aktualna oszczędność" },
  "Editorial Pick": { en: "Editorial Pick", pl: "Wybór redakcji" },

  // --- ShopProductSales: trust strip ---
  "FIELD-READY PICKS": { en: "FIELD-READY PICKS", pl: "SPRAWDZONE W TERENIE" },
  "Practical everyday use": { en: "Practical everyday use", pl: "Praktyczne codzienne użycie" },
  "NO PLACEHOLDER CTA": { en: "NO PLACEHOLDER CTA", pl: "ŻADNYCH MARTWYCH PRZYCISKÓW" },
  "Every button has a destination": { en: "Every button has a destination", pl: "Każdy przycisk prowadzi do celu" },
  "LAYERED READINESS": { en: "LAYERED READINESS", pl: "WIELOWARSTWOWA GOTOWOŚĆ" },
  "Security, power, light, comms": { en: "Security, power, light, comms", pl: "Ochrona, zasilanie, światło, łączność" },
  "30-DAY CONFIDENCE": { en: "30-DAY CONFIDENCE", pl: "30-DNIOWA PEWNOŚĆ" },
  "Review terms before checkout": { en: "Review terms before checkout", pl: "Sprawdź warunki przed zamówieniem" },

  // --- ShopProductSales: before/after ---
  "BEFORE AND AFTER READINESS": { en: "BEFORE AND AFTER READINESS", pl: "GOTOWOŚĆ PRZED I PO" },
  "See What This Upgrade Solves": { en: "See What This Upgrade Solves", pl: "Zobacz, co rozwiązuje to ulepszenie" },
  "A good preparedness purchase should remove a specific point of failure, not just look impressive on a shelf.": {
    en: "A good preparedness purchase should remove a specific point of failure, not just look impressive on a shelf.",
    pl: "Dobry zakup przygotowawczy powinien eliminować konkretny słaby punkt, a nie tylko dobrze wyglądać na półce.",
  },
  "Before Upgrade": { en: "Before Upgrade", pl: "Przed ulepszeniem" },
  "Weak point": { en: "Weak point", pl: "Słaby punkt" },
  "Prepared State": { en: "Prepared State", pl: "Stan gotowości" },
  "After Upgrade": { en: "After Upgrade", pl: "Po ulepszeniu" },
  "Controlled": { en: "Controlled", pl: "Pod kontrolą" },

  // --- ShopProductSales: compare matrix ---
  "AWARENESS OF EXCELLENCE": { en: "AWARENESS OF EXCELLENCE", pl: "ŚWIADOMOŚĆ JAKOŚCI" },
  "How We Benchmark Against Generics": { en: "How We Benchmark Against Generics", pl: "Jak wypadamy na tle zwykłych produktów" },
  "Not every cheap alternative performs when conditions are bad. Prioritize durable, simple, field-ready gear.": {
    en: "Not every cheap alternative performs when conditions are bad. Prioritize durable, simple, field-ready gear.",
    pl: "Nie każda tania alternatywa sprawdza się w trudnych warunkach. Postaw na trwały, prosty i sprawdzony w terenie sprzęt.",
  },
  "Decision Point": { en: "Decision Point", pl: "Kluczowy czynnik" },
  "Security Mood Pick": { en: "Security Mood Pick", pl: "Wybór Security Mood" },
  "Cheap Alternative": { en: "Cheap Alternative", pl: "Tania alternatywa" },
  "Build Quality & Materials": { en: "Build Quality & Materials", pl: "Jakość wykonania i materiały" },
  "Durable materials matched to daily emergency use": { en: "Durable materials matched to daily emergency use", pl: "Trwałe materiały dopasowane do codziennego użytku awaryjnego" },
  "Flimsy parts that fail under repeated handling": { en: "Flimsy parts that fail under repeated handling", pl: "Słabe elementy, które zawodzą przy częstym użytkowaniu" },
  "Reliability in Crisis": { en: "Reliability in Crisis", pl: "Niezawodność w kryzysie" },
  "Tested in extreme conditions with 100% fail-safe mechanisms": { en: "Tested in extreme conditions with 100% fail-safe mechanisms", pl: "Testowane w ekstremalnych warunkach, mechanizmy w 100% odporne na awarie" },
  "Prone to malfunction during critical high-stress situations": { en: "Prone to malfunction during critical high-stress situations", pl: "Podatne na awarie w krytycznych, stresujących sytuacjach" },
  "Longevity & Power": { en: "Longevity & Power", pl: "Trwałość i zasilanie" },
  "10,000mAh banks & 10+ year shelf life on critical components": { en: "10,000mAh banks & 10+ year shelf life on critical components", pl: "Baterie 10 000 mAh i ponad 10 lat trwałości kluczowych podzespołów" },
  "Requires constant battery swaps and degrades quickly": { en: "Requires constant battery swaps and degrades quickly", pl: "Wymaga ciągłej wymiany baterii i szybko się zużywa" },
  "Long-term Value": { en: "Long-term Value", pl: "Wartość długoterminowa" },
  "A single lifetime purchase for complete peace of mind": { en: "A single lifetime purchase for complete peace of mind", pl: "Jednorazowy zakup na całe życie dla pełnego spokoju ducha" },
  "False economy: fails when you need it, requires constant replacing": { en: "False economy: fails when you need it, requires constant replacing", pl: "Pozorna oszczędność: zawodzi, gdy najbardziej tego potrzebujesz, i wymaga ciągłej wymiany" },

  // --- ShopProductSales: detailed benefits / specs / use cases / how-to-use ---
  "ENGINEERED FOR READINESS": { en: "ENGINEERED FOR READINESS", pl: "ZAPROJEKTOWANE Z MYŚLĄ O GOTOWOŚCI" },
  "The Practical Details That Matter": { en: "The Practical Details That Matter", pl: "Praktyczne szczegóły, które mają znaczenie" },
  "These are the features that determine whether a product is useful during everyday problems and real emergencies.": {
    en: "These are the features that determine whether a product is useful during everyday problems and real emergencies.",
    pl: "To cechy, które decydują o tym, czy produkt sprawdzi się w codziennych problemach i prawdziwych sytuacjach awaryjnych.",
  },
  "REAL-WORLD FIT": { en: "REAL-WORLD FIT", pl: "DOPASOWANIE DO ŻYCIA" },
  "Built for Every Situation": { en: "Built for Every Situation", pl: "Stworzone na każdą sytuację" },
  "The same pick works across the everyday moments where readiness actually matters.": {
    en: "The same pick works across the everyday moments where readiness actually matters.",
    pl: "Ten sam produkt sprawdza się w codziennych momentach, gdy gotowość naprawdę się liczy.",
  },
  "DEPLOYMENT STEPS": { en: "DEPLOYMENT STEPS", pl: "KROKI WDROŻENIA" },
  "How To Put It Into Use": { en: "How To Put It Into Use", pl: "Jak zacząć korzystać" },
  "Clear steps make gear easier to use when time, light, or attention is limited.": {
    en: "Clear steps make gear easier to use when time, light, or attention is limited.",
    pl: "Jasne kroki ułatwiają korzystanie ze sprzętu, gdy brakuje czasu, światła lub uwagi.",
  },
  "Phase": { en: "Phase", pl: "Etap" },

  // --- ShopProductSales: reviews ---
  "AUTHENTIC PROOF": { en: "AUTHENTIC PROOF", pl: "AUTENTYCZNY DOWÓD" },
  "Real Customer Verified Experiences": { en: "Real Customer Verified Experiences", pl: "Prawdziwe, zweryfikowane doświadczenia klientów" },
  "Review signals summarize why customers choose this type of gear and what they value after using it.": {
    en: "Review signals summarize why customers choose this type of gear and what they value after using it.",
    pl: "Opinie pokazują, dlaczego klienci wybierają ten rodzaj sprzętu i co cenią po jego użyciu.",
  },
  "Global Verified Ratings": { en: "Global Verified Ratings", pl: "Zweryfikowanych ocen" },
  "star": { en: "star", pl: "gwiazdek" },
  "Clear Star Filter": { en: "Clear Star Filter", pl: "Wyczyść filtr gwiazdek" },
  "Showing": { en: "Showing", pl: "Wyświetlanie" },
  "of": { en: "of", pl: "z" },
  "featured comments": { en: "featured comments", pl: "wyróżnionych komentarzy" },
  "100% Authentic Verified Buyers": { en: "100% Authentic Verified Buyers", pl: "100% autentycznych, zweryfikowanych kupujących" },
  "Individual written reviews aren't posted yet — this rating reflects": {
    en: "Individual written reviews aren't posted yet — this rating reflects",
    pl: "Pojedyncze recenzje nie zostały jeszcze opublikowane — ta ocena odzwierciedla",
  },
  "verified buyers.": { en: "verified buyers.", pl: "zweryfikowanych kupujących." },
  "No reviews found for this star selection.": { en: "No reviews found for this star selection.", pl: "Nie znaleziono opinii dla wybranej liczby gwiazdek." },
  "View all reviews": { en: "View all reviews", pl: "Zobacz wszystkie opinie" },
  "Reviewed on": { en: "Reviewed on", pl: "Opinia z dnia" },
  "Was this review helpful?": { en: "Was this review helpful?", pl: "Czy ta opinia była pomocna?" },
  "Marked helpful": { en: "Marked helpful", pl: "Oznaczono jako pomocne" },
  "Helpful": { en: "Helpful", pl: "Pomocne" },

  // --- ShopProductSales: FAQ / guarantee / final CTA ---
  "CONFIDENCE IN MIND": { en: "CONFIDENCE IN MIND", pl: "SPOKÓJ UMYSŁU" },
  "Frequently Asked Questions": { en: "Frequently Asked Questions", pl: "Najczęściej zadawane pytania" },
  "Clear answers before checkout, so the purchase decision does not feel vague or risky.": {
    en: "Clear answers before checkout, so the purchase decision does not feel vague or risky.",
    pl: "Jasne odpowiedzi przed zakupem, aby decyzja nie wydawała się niejasna ani ryzykowna.",
  },
  "30-DAY": { en: "30-DAY", pl: "30-DNIOWA" },
  "RISK FREE": { en: "RISK FREE", pl: "GWARANCJA" },
  "GUARANTEE": { en: "GUARANTEE", pl: "ZWROTU" },
  "ZERO HASSLE • ZERO ANXIETY": { en: "ZERO HASSLE • ZERO ANXIETY", pl: "ZERO KŁOPOTU • ZERO OBAW" },
  "Try It Out Risk-Free For 30 Days": { en: "Try It Out Risk-Free For 30 Days", pl: "Wypróbuj bez ryzyka przez 30 dni" },
  "Buy through the linked checkout or curated product destination and review shipping, return, and seller terms before payment. Security Mood keeps the buying path focused: useful gear first, clear next step, and no dead-end buttons.": {
    en: "Buy through the linked checkout or curated product destination and review shipping, return, and seller terms before payment. Security Mood keeps the buying path focused: useful gear first, clear next step, and no dead-end buttons.",
    pl: "Kupuj przez powiązaną płatność lub wyselekcjonowaną stronę produktu i sprawdź warunki dostawy, zwrotu oraz sprzedawcy przed płatnością. Security Mood dba o to, by ścieżka zakupowa była przejrzysta: najpierw przydatny sprzęt, potem jasny następny krok, bez martwych przycisków.",
  },
  "FINISH YOUR READINESS UPGRADE": { en: "FINISH YOUR READINESS UPGRADE", pl: "DOKOŃCZ SWOJE ULEPSZENIE GOTOWOŚCI" },
  "Ready to make your setup stronger?": { en: "Ready to make your setup stronger?", pl: "Gotowy, by wzmocnić swoje zabezpieczenia?" },
  "Add the item to your kit now, or open the checklist and fill the gaps in the right order.": {
    en: "Add the item to your kit now, or open the checklist and fill the gaps in the right order.",
    pl: "Dodaj produkt do swojego zestawu teraz albo otwórz listę kontrolną i uzupełnij braki we właściwej kolejności.",
  },
  "Buy Now": { en: "Buy Now", pl: "Kup teraz" },
  "Secure destination checkout · Review final terms before payment": {
    en: "Secure destination checkout · Review final terms before payment",
    pl: "Bezpieczna płatność u sprzedawcy docelowego · Sprawdź ostateczne warunki przed płatnością",
  },
  "Complete Your Preparedness Layer": { en: "Complete Your Preparedness Layer", pl: "Uzupełnij swoją warstwę gotowości" },
  "Off": { en: "Off", pl: "zniżki" },
  "Verified destination": { en: "Verified destination", pl: "Zweryfikowany sprzedawca" },
  "Open Guide": { en: "Open Guide", pl: "Otwórz poradnik" },
  "Image": { en: "Image", pl: "Zdjęcie" },
  "Highlight feature": { en: "Highlight feature", pl: "Wyróżniona cecha" },
  "Go to image": { en: "Go to image", pl: "Przejdź do zdjęcia" },
  "Close overlay (Esc)": { en: "Close overlay (Esc)", pl: "Zamknij widok (Esc)" },
  "Previous image (Left Arrow)": { en: "Previous image (Left Arrow)", pl: "Poprzednie zdjęcie (strzałka w lewo)" },
  "Next image (Right Arrow)": { en: "Next image (Right Arrow)", pl: "Następne zdjęcie (strzałka w prawo)" },

  // --- Quantity tier buy box ---
  "Choose quantity": { en: "Choose quantity", pl: "Wybierz ilość" },
  "Most Popular": { en: "Most Popular", pl: "Najpopularniejsze" },
  "Buy": { en: "Buy", pl: "Kup" },
  "ea": { en: "ea", pl: "szt." },
  "Standard price": { en: "Standard price", pl: "Cena standardowa" },
  "Subtotal": { en: "Subtotal", pl: "Suma częściowa" },
  "piece": { en: "piece", pl: "sztuka" },
  "pieces": { en: "pieces", pl: "sztuki" },
  "Secure checkout on our store": { en: "Secure checkout on our store", pl: "Bezpieczna płatność w naszym sklepie" },

  // --- Generic product-page components (favorites template) ---
  "Detailed Benefits": { en: "Detailed Benefits", pl: "Szczegółowe korzyści" },
  "Why this pick works in real routines": { en: "Why this pick works in real routines", pl: "Dlaczego ten wybór sprawdza się na co dzień" },
  "Benefit": { en: "Benefit", pl: "Korzyść" },
  "This product helps by...": { en: "This product helps by...", pl: "Ten produkt pomaga poprzez..." },
  "Ritual Flow": { en: "Ritual Flow", pl: "Przebieg rutyny" },
  "Built for real evenings: low effort, calming pace, and clear moments that feel intentionally luxurious.": {
    en: "Built for real evenings: low effort, calming pace, and clear moments that feel intentionally luxurious.",
    pl: "Stworzone na prawdziwe wieczory: minimum wysiłku, spokojne tempo i chwile, które celowo mają luksusowy charakter.",
  },
  "Question": { en: "Question", pl: "Pytanie" },
  "Questions people ask before buying": { en: "Questions people ask before buying", pl: "Pytania zadawane przed zakupem" },
  "Social Proof": { en: "Social Proof", pl: "Opinie klientów" },
  "You May Also Like": { en: "You May Also Like", pl: "Może Cię zainteresować" },
  "Keep building your ritual shelf": { en: "Keep building your ritual shelf", pl: "Rozbuduj swoją półkę rytuałów" },
  "Curated alternatives designed to increase routine consistency and help you find your perfect fit.": {
    en: "Curated alternatives designed to increase routine consistency and help you find your perfect fit.",
    pl: "Wyselekcjonowane alternatywy, które pomagają utrzymać systematyczność i znaleźć idealne dopasowanie.",
  },
  "Best for:": { en: "Best for:", pl: "Najlepsze dla:" },
  "Popular choice": { en: "Popular choice", pl: "Popularny wybór" },

  // --- Favorites listing page ---
  "Amazon Security Favorites & Safety Collections | Security Mood": {
    en: "Amazon Security Favorites & Safety Collections | Security Mood",
    pl: "Wybory bezpieczeństwa z Amazon i kolekcje ochronne | Security Mood",
  },
  "Explore curated Amazon security favorites, crisis readiness gear, blackout prep tools, privacy gear, and emergency preparedness products selected for high-intent shoppers.": {
    en: "Explore curated Amazon security favorites, crisis readiness gear, blackout prep tools, privacy gear, and emergency preparedness products selected for high-intent shoppers.",
    pl: "Poznaj wyselekcjonowane wybory bezpieczeństwa z Amazon, sprzęt do gotowości kryzysowej, narzędzia na wypadek przerw w prądzie, sprzęt do prywatności i produkty przygotowawcze dobrane dla świadomych kupujących.",
  },
  "Shop Favorites": { en: "Shop Favorites", pl: "Sklep z wyborami" },
  "The Security Mood Field Collection": { en: "The Security Mood Field Collection", pl: "Kolekcja terenowa Security Mood" },
  "The essential home security, crisis readiness, privacy, and emergency products currently driving our best-converting collections.": {
    en: "The essential home security, crisis readiness, privacy, and emergency products currently driving our best-converting collections.",
    pl: "Niezbędne produkty do ochrony domu, gotowości kryzysowej, prywatności i sytuacji awaryjnych, które napędzają nasze najlepiej sprzedające się kolekcje.",
  },
  "Shop by Need": { en: "Shop by Need", pl: "Kupuj według potrzeby" },
  "Back to Home": { en: "Back to Home", pl: "Powrót do strony głównej" },
  "Pinterest Favorites": { en: "Pinterest Favorites", pl: "Ulubione z Pinteresta" },
  "Pick one routine, shop the essentials, and start your reset tonight": {
    en: "Pick one routine, shop the essentials, and start your reset tonight",
    pl: "Wybierz jedną rutynę, kup niezbędnik i zacznij już dziś wieczorem",
  },
  "We focus on quality over quantity. Start with the collection that matches your immediate goal and move into a landing page that answers the exact emergency or security intent.": {
    en: "We focus on quality over quantity. Start with the collection that matches your immediate goal and move into a landing page that answers the exact emergency or security intent.",
    pl: "Stawiamy na jakość, nie na ilość. Zacznij od kolekcji dopasowanej do Twojego celu, a następnie przejdź do strony odpowiadającej na konkretną potrzebę bezpieczeństwa lub gotowości.",
  },
  "See Landing Pages": { en: "See Landing Pages", pl: "Zobacz strony docelowe" },
  "See Routine Guides": { en: "See Routine Guides", pl: "Zobacz poradniki rutyn" },
  "Crisis Prep": { en: "Crisis Prep", pl: "Przygotowanie na kryzys" },
  "Crisis readiness kit": { en: "Crisis readiness kit", pl: "Zestaw gotowości kryzysowej" },
  "Start with the 72-hour essentials and backup power layers first.": {
    en: "Start with the 72-hour essentials and backup power layers first.",
    pl: "Zacznij od niezbędnika na 72 godziny i zapasowego zasilania.",
  },
  "Evacuation": { en: "Evacuation", pl: "Ewakuacja" },
  "Bug out bag essentials": { en: "Bug out bag essentials", pl: "Niezbędnik torby ewakuacyjnej" },
  "Build the first evacuation bag with water, warmth, and communication basics.": {
    en: "Build the first evacuation bag with water, warmth, and communication basics.",
    pl: "Skompletuj pierwszą torbę ewakuacyjną z wodą, ciepłem i podstawową łącznością.",
  },
  "Home Lockdown": { en: "Home Lockdown", pl: "Zabezpieczenie domu" },
  "Shelter-in-place kit": { en: "Shelter-in-place kit", pl: "Zestaw na pozostanie w domu" },
  "Add the door, window, and backup power upgrades for indoor readiness.": {
    en: "Add the door, window, and backup power upgrades for indoor readiness.",
    pl: "Dodaj ulepszenia drzwi, okien i zapasowego zasilania na wypadek pozostania w domu.",
  },

  // --- Categories (used across blog/home/category cards) ---
  "Indoor and outdoor security solutions that turn your home into a fortress.": {
    en: "Indoor and outdoor security solutions that turn your home into a fortress.",
    pl: "Rozwiązania ochronne do wewnątrz i na zewnątrz, które zamieniają Twój dom w twierdzę.",
  },
  "Peace of mind starts at your front door.": { en: "Peace of mind starts at your front door.", pl: "Spokój ducha zaczyna się przy drzwiach wejściowych." },
  "Cyber Shield": { en: "Cyber Shield", pl: "Tarcza cyfrowa" },
  "Digital privacy and security tools to protect your most valuable data.": {
    en: "Digital privacy and security tools to protect your most valuable data.",
    pl: "Narzędzia ochrony prywatności cyfrowej i bezpieczeństwa Twoich najważniejszych danych.",
  },
  "Your digital life, fully protected.": { en: "Your digital life, fully protected.", pl: "Twoje cyfrowe życie w pełni chronione." },
  "Emergency Prep": { en: "Emergency Prep", pl: "Przygotowanie awaryjne" },
  "Survival kits and backup systems for when the unexpected happens.": {
    en: "Survival kits and backup systems for when the unexpected happens.",
    pl: "Zestawy przetrwania i systemy zapasowe na wypadek nieoczekiwanych sytuacji.",
  },
  "Readiness for the real world.": { en: "Readiness for the real world.", pl: "Gotowość na prawdziwe sytuacje." },
  "Everyday carry (EDC) essentials and non-lethal defense for total confidence.": {
    en: "Everyday carry (EDC) essentials and non-lethal defense for total confidence.",
    pl: "Niezbędnik codziennego noszenia (EDC) i nieśmiercionośna obrona dla pełnej pewności siebie.",
  },
  "Preparedness you can carry with you.": { en: "Preparedness you can carry with you.", pl: "Gotowość, którą możesz mieć zawsze przy sobie." },

  // --- Blog listing page ---
  "Home Security, Crisis Readiness & Emergency Guides | Security Mood": {
    en: "Home Security, Crisis Readiness & Emergency Guides | Security Mood",
    pl: "Ochrona domu, gotowość kryzysowa i poradniki awaryjne | Security Mood",
  },
  "Explore high-intent guides for home security, crisis readiness, blackout prep, personal protection, cyber privacy, and emergency preparedness.": {
    en: "Explore high-intent guides for home security, crisis readiness, blackout prep, personal protection, cyber privacy, and emergency preparedness.",
    pl: "Poznaj praktyczne poradniki dotyczące ochrony domu, gotowości kryzysowej, przygotowania na przerwy w prądzie, ochrony osobistej, prywatności cyfrowej i sytuacji awaryjnych.",
  },
  "Security Mood Guides": { en: "Security Mood Guides", pl: "Poradniki Security Mood" },
  "Battle-tested guides for home security, crisis readiness, and emergency response": {
    en: "Battle-tested guides for home security, crisis readiness, and emergency response",
    pl: "Sprawdzone w praktyce poradniki dotyczące ochrony domu, gotowości kryzysowej i reagowania w sytuacjach awaryjnych",
  },
  "Search-friendly articles with clear transformation hooks, trust signals, and soft product CTAs for outages, unrest, and everyday preparedness.": {
    en: "Search-friendly articles with clear transformation hooks, trust signals, and soft product CTAs for outages, unrest, and everyday preparedness.",
    pl: "Artykuły przyjazne wyszukiwarkom, z jasnym przekazem, sygnałami zaufania i delikatnymi wezwaniami do działania na wypadek przerw w prądzie, niepokojów i codziennego przygotowania.",
  },
  "All Articles": { en: "All Articles", pl: "Wszystkie artykuły" },
  "Need quick product wins?": { en: "Need quick product wins?", pl: "Potrzebujesz szybkich rozwiązań?" },
  "Open a guide, then compare the top picks in one flow": {
    en: "Open a guide, then compare the top picks in one flow",
    pl: "Otwórz poradnik, a następnie porównaj najlepsze wybory w jednym miejscu",
  },
  "Readers convert more confidently when they read one focused guide first, then step into a landing page with a tighter emergency or security intent.": {
    en: "Readers convert more confidently when they read one focused guide first, then step into a landing page with a tighter emergency or security intent.",
    pl: "Czytelnicy podejmują decyzję pewniej, gdy najpierw przeczytają jeden konkretny poradnik, a potem trafią na stronę dopasowaną do ich potrzeby.",
  },
  "View Landing Pages": { en: "View Landing Pages", pl: "Zobacz strony docelowe" },
  "View Amazon Favorites": { en: "View Amazon Favorites", pl: "Zobacz wybory z Amazon" },
  "Essential": { en: "Essential", pl: "Niezbędne" },
  "Favorites": { en: "Favorites", pl: "Wybory" },
  "Direct Amazon links to the highest-rated picks for this protocol.": {
    en: "Direct Amazon links to the highest-rated picks for this protocol.",
    pl: "Bezpośrednie linki do Amazon z najwyżej ocenianymi produktami do tej procedury.",
  },
  "Latest Security Guides": { en: "Latest Security Guides", pl: "Najnowsze poradniki bezpieczeństwa" },
  "Step-by-step preparedness instructions for your home, travel, and crisis planning.": {
    en: "Step-by-step preparedness instructions for your home, travel, and crisis planning.",
    pl: "Instrukcje krok po kroku dotyczące przygotowania domu, podróży i planowania na wypadek kryzysu.",
  },

  // --- Blog article detail page ---
  "What you will get from this guide": { en: "What you will get from this guide", pl: "Co znajdziesz w tym poradniku" },
  "Check First Product": { en: "Check First Product", pl: "Sprawdź pierwszy produkt" },
  "Fastest next step": { en: "Fastest next step", pl: "Najszybszy kolejny krok" },
  "Open the matching kit": { en: "Open the matching kit", pl: "Otwórz dopasowany zestaw" },
  "Browse all favorites": { en: "Browse all favorites", pl: "Przeglądaj wszystkie wybory" },
  "Keep momentum": { en: "Keep momentum", pl: "Utrzymaj tempo" },
  "Save this pick while your routine context is fresh": { en: "Save this pick while your routine context is fresh", pl: "Zapisz ten wybór, dopóki masz świeży kontekst" },
  "Readers who click during the guide are more likely to complete their routine setup the same day.": {
    en: "Readers who click during the guide are more likely to complete their routine setup the same day.",
    pl: "Czytelnicy, którzy klikają w trakcie czytania poradnika, częściej kończą konfigurację tego samego dnia.",
  },
  "See More Favorites": { en: "See More Favorites", pl: "Zobacz więcej wyborów" },
  "Continue Reading": { en: "Continue Reading", pl: "Czytaj dalej" },
  "Quick Jump": { en: "Quick Jump", pl: "Szybkie przejście" },
  "Popular This Week": { en: "Popular This Week", pl: "Popularne w tym tygodniu" },
  "Browse All Favorites": { en: "Browse All Favorites", pl: "Przeglądaj wszystkie wybory" },
  "Read Next": { en: "Read Next", pl: "Czytaj dalej" },
  "Related operational protocols": { en: "Related operational protocols", pl: "Powiązane procedury" },
  "View All Articles": { en: "View All Articles", pl: "Zobacz wszystkie artykuły" },

  // --- getRecommendedLanding variants ---
  "Turn this guide into a renter-friendly security plan": { en: "Turn this guide into a renter-friendly security plan", pl: "Zamień ten poradnik w plan ochrony przyjazny najemcom" },
  "The renter landing page groups the fastest removable upgrades into a cleaner purchase flow.": {
    en: "The renter landing page groups the fastest removable upgrades into a cleaner purchase flow.",
    pl: "Strona dla najemców grupuje najszybsze do zdemontowania ulepszenia w przejrzystą ścieżkę zakupową.",
  },
  "Build the matching home lockdown kit": { en: "Build the matching home lockdown kit", pl: "Skompletuj dopasowany zestaw zabezpieczenia domu" },
  "The shelter-in-place page organizes the next home security layers in a more purchase-ready order.": {
    en: "The shelter-in-place page organizes the next home security layers in a more purchase-ready order.",
    pl: "Strona o pozostaniu w domu porządkuje kolejne warstwy ochrony w kolejności gotowej do zakupu.",
  },
  "Put the privacy stack together": { en: "Put the privacy stack together", pl: "Skompletuj swój zestaw prywatności" },
  "The travel privacy page bundles the most useful privacy and anti-skim essentials in one place.": {
    en: "The travel privacy page bundles the most useful privacy and anti-skim essentials in one place.",
    pl: "Strona o prywatności podróżnej łączy w jednym miejscu najbardziej przydatny sprzęt do prywatności i ochrony przed skimmingiem.",
  },
  "See the matching solo travel safety kit": { en: "See the matching solo travel safety kit", pl: "Zobacz dopasowany zestaw bezpieczeństwa dla podróżujących solo" },
  "The EDC landing page shows the fastest path from inspiration to a practical travel-ready setup.": {
    en: "The EDC landing page shows the fastest path from inspiration to a practical travel-ready setup.",
    pl: "Strona EDC pokazuje najszybszą drogę od inspiracji do praktycznego zestawu gotowego na podróż.",
  },
  "See the full crisis readiness kit": { en: "See the full crisis readiness kit", pl: "Zobacz pełny zestaw gotowości kryzysowej" },
  "If this guide pushed you toward broader preparedness, the crisis kit page turns it into a clear shopping sequence.": {
    en: "If this guide pushed you toward broader preparedness, the crisis kit page turns it into a clear shopping sequence.",
    pl: "Jeśli ten poradnik zachęcił Cię do szerszego przygotowania, strona zestawu kryzysowego zamienia to w jasną sekwencję zakupów.",
  },

  // --- Landing pages index ---
  "Crisis Preparedness Landing Pages | Security Mood": {
    en: "Crisis Preparedness Landing Pages | Security Mood",
    pl: "Strony docelowe gotowości kryzysowej | Security Mood",
  },
  "Focused landing pages for crisis readiness, blackout prep, evacuation kits, renters, travelers, and high-intent Amazon shoppers.": {
    en: "Focused landing pages for crisis readiness, blackout prep, evacuation kits, renters, travelers, and high-intent Amazon shoppers.",
    pl: "Skoncentrowane strony docelowe dla gotowości kryzysowej, przygotowania na przerwy w prądzie, zestawów ewakuacyjnych, najemców, podróżujących i świadomych kupujących na Amazon.",
  },
  "Preparedness Pages": { en: "Preparedness Pages", pl: "Strony przygotowawcze" },
  "Landing pages built for crisis readiness and high-intent search traffic": {
    en: "Landing pages built for crisis readiness and high-intent search traffic",
    pl: "Strony docelowe stworzone dla gotowości kryzysowej i ruchu o wysokiej intencji zakupowej",
  },
  "Each page answers one emergency or security intent clearly, which usually means less bounce and stronger click-through to Amazon.": {
    en: "Each page answers one emergency or security intent clearly, which usually means less bounce and stronger click-through to Amazon.",
    pl: "Każda strona jasno odpowiada na jedną potrzebę bezpieczeństwa lub gotowości, co zwykle oznacza mniej odrzuceń i więcej przejść do Amazon.",
  },
  "Why these pages work": { en: "Why these pages work", pl: "Dlaczego te strony działają" },
  "A narrow emergency intent is easier to monetize than a broad audience": {
    en: "A narrow emergency intent is easier to monetize than a broad audience",
    pl: "Wąska, konkretna potrzeba łatwiej się monetyzuje niż szeroka grupa odbiorców",
  },
  "People searching for blackout prep or crisis readiness usually want one quick answer. These pages match that expectation with focused product bundles, supporting guides, and clear shopping paths.": {
    en: "People searching for blackout prep or crisis readiness usually want one quick answer. These pages match that expectation with focused product bundles, supporting guides, and clear shopping paths.",
    pl: "Osoby szukające informacji o przygotowaniu na przerwy w prądzie lub gotowości kryzysowej zwykle chcą szybkiej odpowiedzi. Te strony spełniają to oczekiwanie dzięki skoncentrowanym zestawom produktów, poradnikom i jasnym ścieżkom zakupowym.",
  },
  "Read All Guides": { en: "Read All Guides", pl: "Przeczytaj wszystkie poradniki" },

  // --- Landing detail page ---
  "Best for": { en: "Best for", pl: "Najlepsze dla" },
  "Start here": { en: "Start here", pl: "Zacznij tutaj" },
  "Start with Step 1": { en: "Start with Step 1", pl: "Zacznij od kroku 1" },
  "Shop the Kit": { en: "Shop the Kit", pl: "Kup zestaw" },
  "Fast Path": { en: "Fast Path", pl: "Szybka ścieżka" },
  "Start with the first essential, then finish the kit in order": {
    en: "Start with the first essential, then finish the kit in order",
    pl: "Zacznij od pierwszego niezbędnika, a potem dokończ zestaw po kolei",
  },
  "This page is designed to keep the decision simple: open step 1, follow the sequence, and only then browse the supporting guides if you need more context.": {
    en: "This page is designed to keep the decision simple: open step 1, follow the sequence, and only then browse the supporting guides if you need more context.",
    pl: "Ta strona ma ułatwić decyzję: otwórz krok 1, przejdź po kolei, a dopiero potem przejrzyj poradniki, jeśli potrzebujesz więcej informacji.",
  },
  "Open Step 1": { en: "Open Step 1", pl: "Otwórz krok 1" },
  "See Full Kit": { en: "See Full Kit", pl: "Zobacz cały zestaw" },
  "Quick Decision": { en: "Quick Decision", pl: "Szybka decyzja" },
  "Buy the first three essentials in order": { en: "Buy the first three essentials in order", pl: "Kup pierwsze trzy niezbędniki po kolei" },
  "This is the shortest route from interest to purchase. If you only want the essentials, start here and move down the list only if you need the rest of the kit.": {
    en: "This is the shortest route from interest to purchase. If you only want the essentials, start here and move down the list only if you need the rest of the kit.",
    pl: "To najkrótsza droga od zainteresowania do zakupu. Jeśli chcesz tylko niezbędnika, zacznij tutaj i przechodź dalej tylko wtedy, gdy potrzebujesz reszty zestawu.",
  },
  "Value Ladder": { en: "Value Ladder", pl: "Drabina wyboru" },
  "Choose the path that matches your urgency": { en: "Choose the path that matches your urgency", pl: "Wybierz ścieżkę dopasowaną do pilności potrzeby" },
  "If you want the simplest start, pick the first item. If you want better balance, use the middle path. If you want full coverage, complete the full kit.": {
    en: "If you want the simplest start, pick the first item. If you want better balance, use the middle path. If you want full coverage, complete the full kit.",
    pl: "Jeśli chcesz najprostszego startu, wybierz pierwszą pozycję. Jeśli zależy Ci na równowadze, wybierz środkową opcję. Jeśli chcesz pełnego pokrycia, skompletuj cały zestaw.",
  },
  "Who this is for": { en: "Who this is for", pl: "Dla kogo jest ta strona" },
  "Different buyers need different first moves. Choose the option that best fits your space, budget, and urgency.": {
    en: "Different buyers need different first moves. Choose the option that best fits your space, budget, and urgency.",
    pl: "Różni kupujący potrzebują innego pierwszego kroku. Wybierz opcję najlepiej dopasowaną do Twojej przestrzeni, budżetu i pilności potrzeby.",
  },
  "Featured Products": { en: "Featured Products", pl: "Wyróżnione produkty" },
  "Curated picks for this exact intent": { en: "Curated picks for this exact intent", pl: "Wyselekcjonowane produkty dopasowane do tej potrzeby" },
  "These products are selected to reduce friction, answer the query fast, and keep the path to Amazon simple.": {
    en: "These products are selected to reduce friction, answer the query fast, and keep the path to Amazon simple.",
    pl: "Te produkty zostały wybrane, aby ułatwić decyzję, szybko odpowiedzieć na potrzebę i uprościć ścieżkę do Amazon.",
  },
  "Supportive Guides": { en: "Supportive Guides", pl: "Poradniki wspierające" },
  "Read the guides that reinforce the buying decision": { en: "Read the guides that reinforce the buying decision", pl: "Przeczytaj poradniki, które utwierdzą Cię w decyzji zakupowej" },
  "Supporting articles keep visitors engaged and help turn interest into a more confident click.": {
    en: "Supporting articles keep visitors engaged and help turn interest into a more confident click.",
    pl: "Artykuły wspierające utrzymują zaangażowanie odwiedzających i pomagają zamienić zainteresowanie w pewniejszą decyzję.",
  },
  "Questions buyers ask before they click": { en: "Questions buyers ask before they click", pl: "Pytania, które zadają kupujący przed kliknięciem" },
  "Ready to shop?": { en: "Ready to shop?", pl: "Gotowy do zakupów?" },
  "Use this page as your quick buying shortcut": { en: "Use this page as your quick buying shortcut", pl: "Użyj tej strony jako szybkiego skrótu zakupowego" },
  "Compare the essentials, review the supporting guides, and move to Amazon once you know the product fits your need.": {
    en: "Compare the essentials, review the supporting guides, and move to Amazon once you know the product fits your need.",
    pl: "Porównaj niezbędniki, przejrzyj poradniki wspierające i przejdź do Amazon, gdy będziesz pewien, że produkt spełnia Twoją potrzebę.",
  },
  "See All Landing Pages": { en: "See All Landing Pages", pl: "Zobacz wszystkie strony docelowe" },

  // --- Landing sub-components ---
  "Must buy first": { en: "Must buy first", pl: "Kup najpierw" },
  "Strong next step": { en: "Strong next step", pl: "Ważny kolejny krok" },
  "Optional upgrade": { en: "Optional upgrade", pl: "Opcjonalne ulepszenie" },
  "Fastest path to purchase": { en: "Fastest path to purchase", pl: "Najszybsza droga do zakupu" },
  "Fastest start": { en: "Fastest start", pl: "Najszybszy start" },
  "Best balance": { en: "Best balance", pl: "Najlepsza równowaga" },
  "Full coverage": { en: "Full coverage", pl: "Pełne pokrycie" },
  "Fastest path to readiness": { en: "Fastest path to readiness", pl: "Najszybsza droga do gotowości" },
  "The easiest first buy if you want a quick win and a simple entry point.": {
    en: "The easiest first buy if you want a quick win and a simple entry point.",
    pl: "Najłatwiejszy pierwszy zakup, jeśli chcesz szybkiego efektu i prostego startu.",
  },
  "Best overall balance": { en: "Best overall balance", pl: "Najlepsza ogólna równowaga" },
  "The option that usually gives the strongest mix of usefulness and coverage.": {
    en: "The option that usually gives the strongest mix of usefulness and coverage.",
    pl: "Opcja, która zwykle daje najlepszy balans między przydatnością a zakresem ochrony.",
  },
  "Complete preparedness kit": { en: "Complete preparedness kit", pl: "Kompletny zestaw przygotowawczy" },
  "The full set for people who want every layer in place before the next disruption.": {
    en: "The full set for people who want every layer in place before the next disruption.",
    pl: "Pełny zestaw dla osób, które chcą mieć każdą warstwę ochrony gotową przed kolejnym zakłóceniem.",
  },
  "Fits a different budget and urgency level": { en: "Fits a different budget and urgency level", pl: "Dopasowane do innego budżetu i poziomu pilności" },
  "Matches a specific buyer type": { en: "Matches a specific buyer type", pl: "Dopasowane do konkretnego typu kupującego" },
  "See why this belongs in the kit": { en: "See why this belongs in the kit", pl: "Zobacz, dlaczego to powinno być w zestawie" },

  // --- 404 page ---
  "The protocol you are looking for is unavailable": { en: "The protocol you are looking for is unavailable", pl: "Szukana procedura jest niedostępna" },
  "Explore our latest field deployments and operational guides to keep building your defensive perimeter.": {
    en: "Explore our latest field deployments and operational guides to keep building your defensive perimeter.",
    pl: "Sprawdź nasze najnowsze wdrożenia i poradniki operacyjne, aby dalej budować swoją ochronę.",
  },
  "Security Guides": { en: "Security Guides", pl: "Poradniki bezpieczeństwa" },
  "Field Deployments": { en: "Field Deployments", pl: "Wdrożenia terenowe" },

  // --- Shop product gallery fallback (shop-product-sales.tsx defaults) ---
  "Main Display": { en: "Main Display", pl: "Widok główny" },
  "Premium packaging and contents": { en: "Premium packaging and contents", pl: "Wysokiej jakości opakowanie i zawartość" },
  "Field Detail View": { en: "Field Detail View", pl: "Widok szczegółów w terenie" },
  "Precision": { en: "Precision", pl: "Precyzja" },
  "A closer look at the build details and everyday carry format": {
    en: "A closer look at the build details and everyday carry format",
    pl: "Bliższe spojrzenie na jakość wykonania i format do codziennego noszenia",
  },
  "Ready Kit View": { en: "Ready Kit View", pl: "Widok w zestawie gotowości" },
  "Prepared": { en: "Prepared", pl: "Gotowość" },
  "How this item fits into a practical readiness setup": {
    en: "How this item fits into a practical readiness setup",
    pl: "Jak ten produkt wpisuje się w praktyczny zestaw gotowości",
  },

  // --- Shop products (lib/shop-data.ts) ---
  // tactical-blackout-flashlight
  "Olight Imini 2 EDC Keychain Flashlight": { en: "Olight Imini 2 EDC Keychain Flashlight", pl: "Brelokowa latarka EDC Olight Imini 2" },
  "Pocket-sized light that is always on your keys.": { en: "Pocket-sized light that is always on your keys.", pl: "Kieszonkowe światło zawsze przy Twoich kluczach." },
  "A compact magnetic EDC flashlight for daily carry, power cuts, late arrivals, and emergency bags. It is small enough to keep on your keychain and simple enough to use under stress.": {
    en: "A compact magnetic EDC flashlight for daily carry, power cuts, late arrivals, and emergency bags. It is small enough to keep on your keychain and simple enough to use under stress.",
    pl: "Kompaktowa magnetyczna latarka EDC na co dzień, na wypadek przerw w dostawie prądu, późnych powrotów i zestawów awaryjnych. Jest na tyle mała, że zmieści się na breloku, i na tyle prosta w obsłudze, że sprawdzi się nawet w stresującej sytuacji.",
  },
  "Magnetic tailcap activates instantly when detached": { en: "Magnetic tailcap activates instantly when detached", pl: "Magnetyczna nakrętka aktywuje światło natychmiast po odłączeniu" },
  "Ultra-compact form factor for keys, bags, and glove boxes": { en: "Ultra-compact form factor for keys, bags, and glove boxes", pl: "Ultrakompaktowa forma — na klucze, do torby lub schowka w aucie" },
  "USB rechargeable with simple everyday charging": { en: "USB rechargeable with simple everyday charging", pl: "Ładowana przez USB — proste codzienne ładowanie" },
  "Durable aluminum body for daily carry": { en: "Durable aluminum body for daily carry", pl: "Wytrzymała aluminiowa obudowa do codziennego noszenia" },
  "Useful for blackouts, parking lots, travel, and inspections": { en: "Useful for blackouts, parking lots, travel, and inspections", pl: "Przydatna podczas przerw w dostawie prądu, na parkingu, w podróży i przy oględzinach" },
  "Low-friction upgrade for every emergency kit": { en: "Low-friction upgrade for every emergency kit", pl: "Prosty do wdrożenia dodatek do każdego zestawu awaryjnego" },
  "Attach it to your primary keychain": { en: "Attach it to your primary keychain", pl: "Przypnij ją do swojego głównego breloka" },
  "Detach the light from the magnetic cap to turn it on": { en: "Detach the light from the magnetic cap to turn it on", pl: "Odłącz latarkę od magnetycznej nakrętki, aby ją włączyć" },
  "Recharge it regularly so it is ready for outages": { en: "Recharge it regularly so it is ready for outages", pl: "Ładuj ją regularnie, aby była gotowa na wypadek awarii" },
  "Keep a second unit in a go-bag or car kit": { en: "Keep a second unit in a go-bag or car kit", pl: "Trzymaj drugą sztukę w torbie ewakuacyjnej lub zestawie samochodowym" },
  "Use it for door locks, dark walkways, and quick inspections": { en: "Use it for door locks, dark walkways, and quick inspections", pl: "Używaj jej przy zamkach, ciemnych przejściach i szybkich oględzinach" },
  "Is the battery replaceable?": { en: "Is the battery replaceable?", pl: "Czy baterię można wymienić?" },
  "This compact EDC model uses a built-in rechargeable battery for simple daily use.": {
    en: "This compact EDC model uses a built-in rechargeable battery for simple daily use.",
    pl: "Ten kompaktowy model EDC ma wbudowaną akumulatorową baterię do prostego, codziennego użytku.",
  },
  "How far does the beam reach?": { en: "How far does the beam reach?", pl: "Jak daleko sięga wiązka światła?" },
  "It is built for close-range everyday visibility: keys, doors, bags, cars, and dark rooms.": {
    en: "It is built for close-range everyday visibility: keys, doors, bags, cars, and dark rooms.",
    pl: "Latarka jest zaprojektowana do codziennego oświetlania z bliska: kluczy, drzwi, toreb, samochodu i ciemnych pomieszczeń.",
  },
  "Is it legal to carry?": { en: "Is it legal to carry?", pl: "Czy jej noszenie jest legalne?" },
  "Yes, flashlights are legal everyday carry (EDC) items globally.": {
    en: "Yes, flashlights are legal everyday carry (EDC) items globally.",
    pl: "Tak, latarki są legalnym elementem codziennego wyposażenia (EDC) na całym świecie.",
  },

  // emp-shield-radio
  "NOAA Emergency 5-Way Powered Weather Radio": { en: "NOAA Emergency 5-Way Powered Weather Radio", pl: "Radio awaryjne NOAA z 5 źródłami zasilania" },
  "Weather alerts, backup light, and emergency charging.": { en: "Weather alerts, backup light, and emergency charging.", pl: "Alerty pogodowe, zapasowe światło i awaryjne ładowanie." },
  "A practical emergency radio for blackouts, storms, evacuation prep, and shelter-in-place kits. It combines multiple charging options with weather alerts and backup lighting.": {
    en: "A practical emergency radio for blackouts, storms, evacuation prep, and shelter-in-place kits. It combines multiple charging options with weather alerts and backup lighting.",
    pl: "Praktyczne radio awaryjne na wypadek przerw w dostawie prądu, burz, ewakuacji i zestawów na przetrwanie w domu. Łączy wiele sposobów ładowania z alertami pogodowymi i zapasowym oświetleniem.",
  },
  "Essential Prep": { en: "Essential Prep", pl: "Niezbędny sprzęt" },
  "NOAA weather alerts for storms and emergencies": { en: "NOAA weather alerts for storms and emergencies", pl: "Alerty pogodowe NOAA na wypadek burz i sytuacji awaryjnych" },
  "Multiple charging methods for backup resilience": { en: "Multiple charging methods for backup resilience", pl: "Wiele metod ładowania dla większej niezależności" },
  "Built-in flashlight for nighttime power cuts": { en: "Built-in flashlight for nighttime power cuts", pl: "Wbudowana latarka na nocne przerwy w dostawie prądu" },
  "Useful charging reserve for small devices": { en: "Useful charging reserve for small devices", pl: "Przydatna rezerwa energii do ładowania małych urządzeń" },
  "Compact enough for home, car, and go-bag storage": { en: "Compact enough for home, car, and go-bag storage", pl: "Wystarczająco kompaktowe na dom, samochód i torbę ewakuacyjną" },
  "Simple controls for stressful situations": { en: "Simple controls for stressful situations", pl: "Proste sterowanie przydatne w stresujących sytuacjach" },
  "Keep the internal battery charged for daily readiness": { en: "Keep the internal battery charged for daily readiness", pl: "Utrzymuj naładowaną wewnętrzną baterię, aby być stale gotowym" },
  "In an emergency, place it in direct sunlight or use the hand crank": { en: "In an emergency, place it in direct sunlight or use the hand crank", pl: "W sytuacji awaryjnej wystaw je na słońce lub użyj korby ręcznej" },
  "Extend antenna fully for best NOAA reception": { en: "Extend antenna fully for best NOAA reception", pl: "Rozłóż antenę w pełni, aby uzyskać najlepszy odbiór NOAA" },
  "Use the built-in light during power cuts": { en: "Use the built-in light during power cuts", pl: "Korzystaj z wbudowanego światła podczas przerw w dostawie prądu" },
  "Plug small devices into the charging port for emergency top-ups": { en: "Plug small devices into the charging port for emergency top-ups", pl: "Podłącz małe urządzenia do portu ładowania na wypadek awaryjnego doładowania" },
  "What is EMP shielding?": { en: "What is EMP shielding?", pl: "Czym jest ochrona przed impulsem EMP?" },
  "This page focuses on practical emergency communication and backup charging. For RF shielding, use a dedicated Faraday bag.": {
    en: "This page focuses on practical emergency communication and backup charging. For RF shielding, use a dedicated Faraday bag.",
    pl: "Ta strona koncentruje się na praktycznej łączności awaryjnej i zapasowym ładowaniu. W celu ochrony przed falami RF użyj dedykowanej torby Faradaya.",
  },
  "How much cranking is needed?": { en: "How much cranking is needed?", pl: "Ile trzeba kręcić korbą?" },
  "1 minute of vigorous cranking provides roughly 15 minutes of radio playtime or 5 minutes of flashlight use.": {
    en: "1 minute of vigorous cranking provides roughly 15 minutes of radio playtime or 5 minutes of flashlight use.",
    pl: "1 minuta intensywnego kręcenia korbą daje około 15 minut pracy radia lub 5 minut pracy latarki.",
  },
  "Is it waterproof?": { en: "Is it waterproof?", pl: "Czy jest wodoodporne?" },
  "It is IPX5 water-resistant, meaning it can withstand heavy rain but should not be fully submerged.": {
    en: "It is IPX5 water-resistant, meaning it can withstand heavy rain but should not be fully submerged.",
    pl: "Ma klasę odporności IPX5, co oznacza, że wytrzyma ulewny deszcz, ale nie powinno być całkowicie zanurzane w wodzie.",
  },

  // shelter-in-place-bundle
  "72-Hour Shelter-In-Place Checklist Kit": { en: "72-Hour Shelter-In-Place Checklist Kit", pl: "Zestaw z listą kontrolną na 72 godziny w domu" },
  "A guided buying path for your first 72 hours at home.": { en: "A guided buying path for your first 72 hours at home.", pl: "Poprowadzona ścieżka zakupowa na pierwsze 72 godziny w domu." },
  "A curated kit path that helps you assemble water, lighting, communication, first aid, and basic home security without guessing what to buy first.": {
    en: "A curated kit path that helps you assemble water, lighting, communication, first aid, and basic home security without guessing what to buy first.",
    pl: "Starannie dobrana ścieżka zakupowa, która pomaga skompletować wodę, oświetlenie, łączność, pierwszą pomoc i podstawową ochronę domu bez zgadywania, co kupić najpierw.",
  },
  "Best Value": { en: "Best Value", pl: "Najlepsza wartość" },
  "Prioritized checklist for the first 72 hours": { en: "Prioritized checklist for the first 72 hours", pl: "Lista kontrolna z priorytetami na pierwsze 72 godziny" },
  "Lighting, water, first aid, communication, and security layers": { en: "Lighting, water, first aid, communication, and security layers", pl: "Warstwy oświetlenia, wody, pierwszej pomocy, łączności i ochrony" },
  "Links to vetted individual gear picks": { en: "Links to vetted individual gear picks", pl: "Linki do sprawdzonych, pojedynczych wyborów sprzętu" },
  "Designed for families, renters, and homeowners": { en: "Designed for families, renters, and homeowners", pl: "Zaprojektowane dla rodzin, najemców i właścicieli domów" },
  "Avoids overbuying before the basics are covered": { en: "Avoids overbuying before the basics are covered", pl: "Pomaga uniknąć nadmiernych zakupów, zanim pokryjesz podstawy" },
  "Good starting point for shelter-in-place planning": { en: "Good starting point for shelter-in-place planning", pl: "Dobry punkt wyjścia do planowania pozostania w domu w sytuacji kryzysowej" },
  "Open the checklist and review each category": { en: "Open the checklist and review each category", pl: "Otwórz listę kontrolną i przejrzyj każdą kategorię" },
  "Buy the missing essentials in priority order": { en: "Buy the missing essentials in priority order", pl: "Kup brakujące elementy w kolejności priorytetów" },
  "Store items in one accessible home location": { en: "Store items in one accessible home location", pl: "Przechowuj rzeczy w jednym, łatwo dostępnym miejscu w domu" },
  "Review the kit every 6 months and replace expired supplies": { en: "Review the kit every 6 months and replace expired supplies", pl: "Przeglądaj zestaw co 6 miesięcy i wymieniaj przeterminowane zapasy" },
  "Is there food included?": { en: "Is there food included?", pl: "Czy w zestawie jest jedzenie?" },
  "It is a curated buying path, not a single boxed bundle. That keeps the recommendations flexible and lets you choose the right quantity for your household.": {
    en: "It is a curated buying path, not a single boxed bundle. That keeps the recommendations flexible and lets you choose the right quantity for your household.",
    pl: "To starannie dobrana ścieżka zakupowa, a nie jeden gotowy zestaw w pudełku. Dzięki temu rekomendacje pozostają elastyczne i możesz dobrać odpowiednią ilość do swojego gospodarstwa domowego.",
  },
  "How large is the kit?": { en: "How large is the kit?", pl: "Jak duży jest ten zestaw?" },
  "Start with one shelf, bin, or backpack dedicated to your 72-hour essentials.": {
    en: "Start with one shelf, bin, or backpack dedicated to your 72-hour essentials.",
    pl: "Zacznij od jednej półki, pojemnika lub plecaka przeznaczonego na Twoje niezbędne zapasy na 72 godziny.",
  },
  "Do you ship internationally?": { en: "Do you ship internationally?", pl: "Czy wysyłacie za granicę?" },
  "Currently, we only ship these kits within the US due to shipping regulations on trauma supplies.": {
    en: "Currently, we only ship these kits within the US due to shipping regulations on trauma supplies.",
    pl: "Obecnie wysyłamy te zestawy wyłącznie na terenie USA ze względu na przepisy dotyczące wysyłki sprzętu medycznego.",
  },

  // door-barricade-lock
  "AceMining Upgraded Door Security Bar": { en: "AceMining Upgraded Door Security Bar", pl: "Ulepszona blokada drzwi AceMining" },
  "A mechanical first line of defense for doors and sliders.": { en: "A mechanical first line of defense for doors and sliders.", pl: "Mechaniczna pierwsza linia obrony dla drzwi i drzwi przesuwnych." },
  "A heavy-duty adjustable door security bar designed to add visible, physical resistance to forced entry attempts. A practical upgrade for apartments, rentals, and home entry points.": {
    en: "A heavy-duty adjustable door security bar designed to add visible, physical resistance to forced entry attempts. A practical upgrade for apartments, rentals, and home entry points.",
    pl: "Wytrzymała, regulowana blokada drzwi zaprojektowana, aby dodać widoczny, fizyczny opór przy próbach wyważenia. Praktyczne wzmocnienie dla mieszkań, wynajmowanych lokali i wejść do domu.",
  },
  "High Demand": { en: "High Demand", pl: "Wysoki popyt" },
  "Adjustable fit for many hinged and sliding doors": { en: "Adjustable fit for many hinged and sliding doors", pl: "Regulowane dopasowanie do wielu drzwi zawiasowych i przesuwnych" },
  "Adds a visible physical deterrent at night": { en: "Adds a visible physical deterrent at night", pl: "Dodaje widoczny, fizyczny czynnik odstraszający w nocy" },
  "No smart home setup or batteries required": { en: "No smart home setup or batteries required", pl: "Nie wymaga konfiguracji smart home ani baterii" },
  "Useful for apartments, rentals, dorms, and travel stays": { en: "Useful for apartments, rentals, dorms, and travel stays", pl: "Przydatna w mieszkaniach, wynajmowanych lokalach, akademikach i podczas podróży" },
  "Quick to place and remove from inside the room": { en: "Quick to place and remove from inside the room", pl: "Szybka do założenia i zdjęcia od wewnątrz pomieszczenia" },
  "Simple mechanical backup to your existing lock": { en: "Simple mechanical backup to your existing lock", pl: "Proste, mechaniczne zabezpieczenie uzupełniające Twój obecny zamek" },
  "Adjust the bar length to the door or slider track": { en: "Adjust the bar length to the door or slider track", pl: "Dopasuj długość blokady do drzwi lub prowadnicy drzwi przesuwnych" },
  "Place the padded end securely against the floor": { en: "Place the padded end securely against the floor", pl: "Oprzyj wyściełany koniec stabilnie o podłogę" },
  "Check that the door cannot open inward under pressure": { en: "Check that the door cannot open inward under pressure", pl: "Sprawdź, czy drzwi nie otworzą się do środka pod naciskiem" },
  "Store it next to the entry point for nightly use": { en: "Store it next to the entry point for nightly use", pl: "Przechowuj ją przy wejściu do użytku każdej nocy" },
  "Remove it before exiting or in any emergency evacuation": { en: "Remove it before exiting or in any emergency evacuation", pl: "Zdejmij ją przed wyjściem lub w razie ewakuacji awaryjnej" },
  "Does it work on outward-swinging doors?": { en: "Does it work on outward-swinging doors?", pl: "Czy działa na drzwiach otwieranych na zewnątrz?" },
  "It is best used on standard inward-opening doors and many sliding doors. Always confirm fit with your specific door style.": {
    en: "It is best used on standard inward-opening doors and many sliding doors. Always confirm fit with your specific door style.",
    pl: "Najlepiej sprawdza się w standardowych drzwiach otwieranych do wewnątrz oraz wielu drzwiach przesuwnych. Zawsze sprawdź dopasowanie do konkretnego typu Twoich drzwi.",
  },
  "Can intruders pick it from the outside?": { en: "Can intruders pick it from the outside?", pl: "Czy intruz może ją otworzyć od zewnątrz?" },
  "It does not replace a lock, but it adds an interior physical barrier that cannot be unlocked from outside like a normal latch.": {
    en: "It does not replace a lock, but it adds an interior physical barrier that cannot be unlocked from outside like a normal latch.",
    pl: "Nie zastępuje zamka, ale dodaje wewnętrzną fizyczną barierę, której nie da się otworzyć od zewnątrz tak jak zwykłej zasuwki.",
  },
  "What if I have carpet?": { en: "What if I have carpet?", pl: "Co jeśli mam dywan?" },
  "Performance depends on floor grip and door geometry. Test it after placement and avoid slick surfaces without a stable contact point.": {
    en: "Performance depends on floor grip and door geometry. Test it after placement and avoid slick surfaces without a stable contact point.",
    pl: "Skuteczność zależy od przyczepności podłogi i geometrii drzwi. Przetestuj ją po założeniu i unikaj śliskich powierzchni bez stabilnego punktu oparcia.",
  },
  "Door Brace": { en: "Door Brace", pl: "Blokada drzwi" },
  "Mechanical Defense": { en: "Mechanical Defense", pl: "Mechaniczna ochrona" },
  "Adjustable door security bar for an extra physical barrier": { en: "Adjustable door security bar for an extra physical barrier", pl: "Regulowana blokada drzwi jako dodatkowa fizyczna bariera" },
  "Layered Entry Alert": { en: "Layered Entry Alert", pl: "Wielowarstwowy alarm wejściowy" },
  "Add an Alarm": { en: "Add an Alarm", pl: "Dodaj alarm" },
  "Pair physical reinforcement with a simple window or door alarm": { en: "Pair physical reinforcement with a simple window or door alarm", pl: "Połącz fizyczne wzmocnienie z prostym alarmem na okno lub drzwi" },

  // biometric-smart-lock
  "Fortress™ Biometric Smart Lock": { en: "Fortress™ Biometric Smart Lock", pl: "Biometryczny zamek smart Fortress™" },
  "Fingertip security with military-grade precision.": { en: "Fingertip security with military-grade precision.", pl: "Bezpieczeństwo na wyciągnięcie palca, z precyzją klasy wojskowej." },
  "A biometric smart lock for your front door, combining a fast fingerprint reader, app-based lock control, and a zinc-alloy body built to military-grade standards.": {
    en: "A biometric smart lock for your front door, combining a fast fingerprint reader, app-based lock control, and a zinc-alloy body built to military-grade standards.",
    pl: "Biometryczny zamek smart do drzwi wejściowych, łączący szybki czytnik linii papilarnych, sterowanie zamkiem z poziomu aplikacji i obudowę ze stopu cynku wykonaną według standardów klasy wojskowej.",
  },
  "Top Rated": { en: "Top Rated", pl: "Najwyżej oceniany" },
  "3D fingerprint scanner with 0.2s response time": { en: "3D fingerprint scanner with 0.2s response time", pl: "Skaner linii papilarnych 3D z czasem reakcji 0,2 s" },
  "AES-128 encryption protecting your data": { en: "AES-128 encryption protecting your data", pl: "Szyfrowanie AES-128 chroniące Twoje dane" },
  "Simple 15-minute installation": { en: "Simple 15-minute installation", pl: "Prosty montaż w 15 minut" },
  "App-based lock control from your phone": { en: "App-based lock control from your phone", pl: "Sterowanie zamkiem z poziomu aplikacji na telefonie" },
  "Zinc-alloy body built to military-grade standards": { en: "Zinc-alloy body built to military-grade standards", pl: "Obudowa ze stopu cynku wykonana według standardów klasy wojskowej" },
  "A practical upgrade for your home's front door": { en: "A practical upgrade for your home's front door", pl: "Praktyczne unowocześnienie drzwi wejściowych Twojego domu" },
  "Mount the lock body and keypad following the included install guide": { en: "Mount the lock body and keypad following the included install guide", pl: "Zamontuj korpus zamka i klawiaturę zgodnie z dołączoną instrukcją" },
  "Enroll your fingerprints and set a backup PIN in the companion app": { en: "Enroll your fingerprints and set a backup PIN in the companion app", pl: "Zarejestruj odciski palców i ustaw zapasowy kod PIN w aplikacji towarzyszącej" },
  "Test the app-based lock and unlock before relying on it daily": { en: "Test the app-based lock and unlock before relying on it daily", pl: "Przetestuj blokowanie i odblokowanie przez aplikację, zanim zaczniesz polegać na nim codziennie" },
  "Add household members' fingerprints as needed": { en: "Add household members' fingerprints as needed", pl: "Dodaj odciski palców domowników w razie potrzeby" },
  "Do I need Wi-Fi for it to work?": { en: "Do I need Wi-Fi for it to work?", pl: "Czy do działania potrzebne jest Wi-Fi?" },
  "The lock operates locally via fingerprint and PIN; app control uses your phone's Bluetooth or Wi-Fi connection.": {
    en: "The lock operates locally via fingerprint and PIN; app control uses your phone's Bluetooth or Wi-Fi connection.",
    pl: "Zamek działa lokalnie na odcisk palca i PIN; sterowanie z aplikacji wykorzystuje Bluetooth lub Wi-Fi telefonu.",
  },
  "What if the battery dies?": { en: "What if the battery dies?", pl: "Co jeśli bateria się wyczerpie?" },
  "Keep a physical backup key or PIN code accessible in case the internal battery needs a recharge or replacement.": {
    en: "Keep a physical backup key or PIN code accessible in case the internal battery needs a recharge or replacement.",
    pl: "Miej pod ręką zapasowy klucz fizyczny lub kod PIN na wypadek konieczności naładowania lub wymiany wewnętrznej baterii.",
  },
  "Is installation difficult?": { en: "Is installation difficult?", pl: "Czy montaż jest trudny?" },
  "Most standard door prep works with the included template and instructions in about 15 minutes.": {
    en: "Most standard door prep works with the included template and instructions in about 15 minutes.",
    pl: "Większość standardowych drzwi da się przygotować przy użyciu dołączonego szablonu i instrukcji w około 15 minut.",
  },

  // mini-spy-camera-4k
  "InvisiGuard™ 4K Mini Camera": { en: "InvisiGuard™ 4K Mini Camera", pl: "Kamera mini 4K InvisiGuard™" },
  "See everything. Invisible protection, 24/7.": { en: "See everything. Invisible protection, 24/7.", pl: "Widź wszystko. Niewidzialna ochrona 24/7." },
  "An ultra-compact 4K camera with motion detection and night mode that streams live to your phone. Built for discreet monitoring of pets, deliveries, or a spare room.": {
    en: "An ultra-compact 4K camera with motion detection and night mode that streams live to your phone. Built for discreet monitoring of pets, deliveries, or a spare room.",
    pl: "Ultrakompaktowa kamera 4K z detekcją ruchu i trybem nocnym, transmitująca obraz na żywo na telefon. Zaprojektowana do dyskretnego monitorowania zwierząt, dostaw lub dodatkowego pomieszczenia.",
  },
  "4K Ultra HD resolution": { en: "4K Ultra HD resolution", pl: "Rozdzielczość 4K Ultra HD" },
  "Invisible IR LEDs for night vision mode": { en: "Invisible IR LEDs for night vision mode", pl: "Niewidoczne diody IR w trybie widzenia nocnego" },
  "AI-assisted motion detection": { en: "AI-assisted motion detection", pl: "Detekcja ruchu wspomagana przez AI" },
  "Live streaming straight to your phone": { en: "Live streaming straight to your phone", pl: "Transmisja na żywo bezpośrednio na telefon" },
  "Ultra-compact, discreet form factor": { en: "Ultra-compact, discreet form factor", pl: "Ultrakompaktowa, dyskretna forma" },
  "Useful for pet, delivery, or room monitoring": { en: "Useful for pet, delivery, or room monitoring", pl: "Przydatna do monitorowania zwierząt, dostaw lub pomieszczeń" },
  "Plug in the camera and connect it to your home Wi-Fi via the app": { en: "Plug in the camera and connect it to your home Wi-Fi via the app", pl: "Podłącz kamerę i połącz ją z domowym Wi-Fi za pomocą aplikacji" },
  "Position it to cover the area you want monitored": { en: "Position it to cover the area you want monitored", pl: "Ustaw ją tak, aby obejmowała obszar, który chcesz monitorować" },
  "Enable motion alerts so you're notified of activity": { en: "Enable motion alerts so you're notified of activity", pl: "Włącz powiadomienia o ruchu, aby otrzymywać informacje o aktywności" },
  "Check the live feed anytime from your phone": { en: "Check the live feed anytime from your phone", pl: "Sprawdzaj podgląd na żywo w dowolnej chwili z poziomu telefonu" },
  "Does it need a memory card?": { en: "Does it need a memory card?", pl: "Czy potrzebuje karty pamięci?" },
  "Check the current listing for storage options before purchase — cloud and local storage availability can vary by version.": {
    en: "Check the current listing for storage options before purchase — cloud and local storage availability can vary by version.",
    pl: "Sprawdź aktualną ofertę pod kątem opcji zapisu przed zakupem — dostępność zapisu w chmurze i lokalnego może się różnić w zależności od wersji.",
  },
  "Can I access it remotely?": { en: "Can I access it remotely?", pl: "Czy mam do niej dostęp zdalnie?" },
  "Yes, the companion app is designed for live viewing from your phone over Wi-Fi or mobile data.": {
    en: "Yes, the companion app is designed for live viewing from your phone over Wi-Fi or mobile data.",
    pl: "Tak, aplikacja towarzysząca umożliwia podgląd na żywo z telefonu przez Wi-Fi lub dane mobilne.",
  },
  "Is it visible in the dark?": { en: "Is it visible in the dark?", pl: "Czy jest widoczna w ciemności?" },
  "The built-in IR LEDs enable a night vision mode for low-light monitoring.": {
    en: "The built-in IR LEDs enable a night vision mode for low-light monitoring.",
    pl: "Wbudowane diody IR umożliwiają tryb widzenia nocnego przy słabym oświetleniu.",
  },

  // anti-theft-smart-backpack
  "UrbanSafe™ Anti-Theft Smart Backpack": { en: "UrbanSafe™ Anti-Theft Smart Backpack", pl: "Plecak smart antykradzieżowy UrbanSafe™" },
  "Your mobile safe for modern travel.": { en: "Your mobile safe for modern travel.", pl: "Twój mobilny sejf na nowoczesne podróże." },
  "Designed for modern nomads: hidden zippers, an RFID-blocking card pocket, a USB charging port, and cut-resistant material to protect your gear on every trip.": {
    en: "Designed for modern nomads: hidden zippers, an RFID-blocking card pocket, a USB charging port, and cut-resistant material to protect your gear on every trip.",
    pl: "Zaprojektowany dla nowoczesnych podróżników: ukryte zamki, kieszeń blokująca RFID na karty, port ładowania USB oraz materiał odporny na przecięcie, chroniący Twój sprzęt w każdej podróży.",
  },
  "Editor Favorite": { en: "Editor Favorite", pl: "Wybór redakcji" },
  "Patented hidden-zipper system": { en: "Patented hidden-zipper system", pl: "Opatentowany system ukrytych zamków" },
  "Cut-resistant Kevlar-blend fabric": { en: "Cut-resistant Kevlar-blend fabric", pl: "Materiał odporny na przecięcie z domieszką Kevlaru" },
  "RFID-blocking pocket for credit cards": { en: "RFID-blocking pocket for credit cards", pl: "Kieszeń blokująca RFID na karty płatnicze" },
  "Built-in USB charging port": { en: "Built-in USB charging port", pl: "Wbudowany port ładowania USB" },
  "Designed for modern travel and commuting": { en: "Designed for modern travel and commuting", pl: "Zaprojektowany do nowoczesnych podróży i codziennych dojazdów" },
  "Keeps gear secure on every trip": { en: "Keeps gear secure on every trip", pl: "Zabezpiecza sprzęt podczas każdej podróży" },
  "Pack your essentials using the hidden-zipper compartments for valuables": { en: "Pack your essentials using the hidden-zipper compartments for valuables", pl: "Spakuj najważniejsze rzeczy do przegród z ukrytymi zamkami na cenne przedmioty" },
  "Store cards in the RFID-blocking pocket when traveling": { en: "Store cards in the RFID-blocking pocket when traveling", pl: "Przechowuj karty w kieszeni blokującej RFID podczas podróży" },
  "Connect a power bank to the USB port for on-the-go charging": { en: "Connect a power bank to the USB port for on-the-go charging", pl: "Podłącz powerbank do portu USB, aby ładować urządzenia w podróży" },
  "Wear it with the hidden zippers facing your back in crowded areas": { en: "Wear it with the hidden zippers facing your back in crowded areas", pl: "Noś go tak, aby ukryte zamki były skierowane w stronę pleców w zatłoczonych miejscach" },
  "Is it big enough for a laptop?": { en: "Is it big enough for a laptop?", pl: "Czy pomieści laptopa?" },
  "Check the current listing for exact compartment dimensions before purchase.": {
    en: "Check the current listing for exact compartment dimensions before purchase.",
    pl: "Sprawdź aktualną ofertę pod kątem dokładnych wymiarów przegród przed zakupem.",
  },
  "Does the USB port include a power bank?": { en: "Does the USB port include a power bank?", pl: "Czy port USB ma wbudowany powerbank?" },
  "The port is a pass-through for your own power bank; a battery is not built in.": {
    en: "The port is a pass-through for your own power bank; a battery is not built in.",
    pl: "Port służy do podłączenia własnego powerbanku; bateria nie jest wbudowana.",
  },
  "Is it truly cut-resistant?": { en: "Is it truly cut-resistant?", pl: "Czy naprawdę jest odporny na przecięcie?" },
  "The Kevlar-blend material is designed to resist slashing, adding a meaningful deterrent over standard fabric.": {
    en: "The Kevlar-blend material is designed to resist slashing, adding a meaningful deterrent over standard fabric.",
    pl: "Materiał z domieszką Kevlaru został zaprojektowany, by opierać się przecięciu, stanowiąc realne wzmocnienie względem standardowej tkaniny.",
  },

  // --- Site products (lib/site-data.ts) — benefit / description ---
  "Most Loved": { en: "Most Loved", pl: "Najbardziej lubiany" },
  "1,200+ positive reviews": { en: "1,200+ positive reviews", pl: "1200+ pozytywnych opinii" },
  "8,500+ satisfied customers": { en: "8,500+ satisfied customers", pl: "8500+ zadowolonych klientów" },
  "Tested by 10,000+ travelers": { en: "Tested by 10,000+ travelers", pl: "Testowany przez 10 000+ podróżników" },

  "Monitor your baby, pet, and home from anywhere.": { en: "Monitor your baby, pet, and home from anywhere.", pl: "Monitoruj dziecko, zwierzę i dom z dowolnego miejsca." },
  "A high-definition indoor smart camera with 30ft night vision, motion detection, and 2-way audio for total peace of mind.": {
    en: "A high-definition indoor smart camera with 30ft night vision, motion detection, and 2-way audio for total peace of mind.",
    pl: "Kamera smart o wysokiej rozdzielczości do wnętrz, z widzeniem nocnym do 9 metrów, detekcją ruchu i dwukierunkowym dźwiękiem dla pełnego spokoju ducha.",
  },
  "Instant deterrent with 130dB siren and strobe light.": { en: "Instant deterrent with 130dB siren and strobe light.", pl: "Natychmiastowy środek odstraszający — syrena 130 dB i lampa stroboskopowa." },
  "A compact, stylish alarm that helps detour potential threats and draw attention in emergency situations.": {
    en: "A compact, stylish alarm that helps detour potential threats and draw attention in emergency situations.",
    pl: "Kompaktowy, stylowy alarm, który pomaga odstraszyć potencjalne zagrożenia i zwrócić uwagę otoczenia w sytuacji awaryjnej.",
  },
  "Unkillable account protection through hardware 2FA.": { en: "Unkillable account protection through hardware 2FA.", pl: "Niezniszczalna ochrona konta dzięki sprzętowemu 2FA." },
  "The gold standard for digital security, providing physical proof of identity for all your sensitive accounts.": {
    en: "The gold standard for digital security, providing physical proof of identity for all your sensitive accounts.",
    pl: "Złoty standard bezpieczeństwa cyfrowego — fizyczny dowód tożsamości dla wszystkich Twoich wrażliwych kont.",
  },
  "Critical communication and power during grid failures.": { en: "Critical communication and power during grid failures.", pl: "Kluczowa łączność i zasilanie podczas awarii sieci energetycznej." },
  "A 5000mAh monster with 5-way power (Solar, Crank, USB, AAA, Internal), AM/FM/Shortwave, and a built-in LED flashlight.": {
    en: "A 5000mAh monster with 5-way power (Solar, Crank, USB, AAA, Internal), AM/FM/Shortwave, and a built-in LED flashlight.",
    pl: "Prawdziwy kombajn z baterią 5000 mAh i 5 sposobami zasilania (słońce, korba, USB, baterie AAA, wewnętrzna), radiem AM/FM/krótkofalowym i wbudowaną latarką LED.",
  },
  "Fingerprint keyless entry and Wi-Fi access control.": { en: "Fingerprint keyless entry and Wi-Fi access control.", pl: "Bezkluczykowe wejście na odcisk palca i kontrola dostępu przez Wi-Fi." },
  "A smart door lock with AI learning fingerprint scanner, auto-locking technology, and 8-month battery life for superior home security.": {
    en: "A smart door lock with AI learning fingerprint scanner, auto-locking technology, and 8-month battery life for superior home security.",
    pl: "Inteligentny zamek do drzwi z uczącym się skanerem linii papilarnych, automatycznym blokowaniem i 8-miesięczną żywotnością baterii dla najwyższego poziomu ochrony domu.",
  },
  "Instant access and secure carry for your Leatherman.": { en: "Instant access and secure carry for your Leatherman.", pl: "Natychmiastowy dostęp i pewne noszenie Twojego Leathermana." },
  "Custom-molded Kydex sheath for Leatherman Wave+. Made in the USA with adjustable retention and a lifetime warranty.": {
    en: "Custom-molded Kydex sheath for Leatherman Wave+. Made in the USA with adjustable retention and a lifetime warranty.",
    pl: "Pochwa Kydex dopasowana na wymiar do Leatherman Wave+. Wyprodukowana w USA, z regulowanym dociskiem i kątem noszenia oraz dożywotnią gwarancją.",
  },
  "Compact keychain protection with quick flip-top access.": { en: "Compact keychain protection with quick flip-top access.", pl: "Kompaktowa ochrona na breloku z szybkim dostępem dzięki uchylnej pokrywce." },
  "Maximum police strength OC spray with snap-clip carry, finger grip, UV marking dye, and a 14-foot range.": {
    en: "Maximum police strength OC spray with snap-clip carry, finger grip, UV marking dye, and a 14-foot range.",
    pl: "Gaz pieprzowy o maksymalnej sile policyjnej, z zaczepem, uchwytem na palec, barwnikiem UV do identyfikacji i zasięgiem do 4,2 metra.",
  },
  "Mechanical reinforcement against forced entry.": { en: "Mechanical reinforcement against forced entry.", pl: "Mechaniczne wzmocnienie przed próbą wyważenia drzwi." },
  "A heavy-duty steel bar that provides physical resistance to swinging and sliding doors.": {
    en: "A heavy-duty steel bar that provides physical resistance to swinging and sliding doors.",
    pl: "Wytrzymała stalowa blokada zapewniająca fizyczny opór dla drzwi otwieranych na zawiasach i przesuwnych.",
  },
  "Access to safe drinking water in any environment.": { en: "Access to safe drinking water in any environment.", pl: "Dostęp do bezpiecznej wody pitnej w każdych warunkach." },
  "Removes 99.9999% of waterborne bacteria and parasites, essential for wilderness and urban survival.": {
    en: "Removes 99.9999% of waterborne bacteria and parasites, essential for wilderness and urban survival.",
    pl: "Usuwa 99,9999% bakterii i pasożytów przenoszonych przez wodę — niezbędny element przetrwania w terenie i w mieście.",
  },
  "Total RF shielding for phones and key fobs.": { en: "Total RF shielding for phones and key fobs.", pl: "Pełna ochrona RF dla telefonów i breloków samochodowych." },
  "Blocks all wireless signals (WiFi, Cellular, GPS, RFID) to prevent tracking and remote hacking.": {
    en: "Blocks all wireless signals (WiFi, Cellular, GPS, RFID) to prevent tracking and remote hacking.",
    pl: "Blokuje wszystkie sygnały bezprzewodowe (Wi-Fi, komórkowy, GPS, RFID), zapobiegając śledzeniu i zdalnemu włamaniu.",
  },
  "The blueprint for off-grid living and food security.": { en: "The blueprint for off-grid living and food security.", pl: "Plan działania na życie poza siecią i bezpieczeństwo żywnościowe." },
  "A comprehensive guide to food storage, sustainable living, and home defense in extreme survival scenarios.": {
    en: "A comprehensive guide to food storage, sustainable living, and home defense in extreme survival scenarios.",
    pl: "Kompleksowy przewodnik po przechowywaniu żywności, zrównoważonym życiu i obronie domu w skrajnych scenariuszach kryzysowych.",
  },
  "Security for valuables in high-traffic or travel areas.": { en: "Security for valuables in high-traffic or travel areas.", pl: "Ochrona cennych przedmiotów w miejscach o dużym ruchu lub w podróży." },
  "A lightweight but rugged lockbox that anchors to fixed objects, perfect for travel and dorm rooms.": {
    en: "A lightweight but rugged lockbox that anchors to fixed objects, perfect for travel and dorm rooms.",
    pl: "Lekka, ale wytrzymała skrzynka z zamkiem, którą można przymocować do stałych obiektów — idealna w podróży i w akademiku.",
  },
  "Physical assurance against camera hacking.": { en: "Physical assurance against camera hacking.", pl: "Fizyczna pewność ochrony przed przejęciem kamery." },
  "Ultra-thin covers that slide to block your camera, ensuring your privacy is never compromised.": {
    en: "Ultra-thin covers that slide to block your camera, ensuring your privacy is never compromised.",
    pl: "Ultracienkie osłony przesuwne, które blokują kamerę, gwarantując, że Twoja prywatność nigdy nie zostanie naruszona.",
  },
  "Protects against digital pickpocketing and skimming.": { en: "Protects against digital pickpocketing and skimming.", pl: "Chroni przed cyfrowym kieszonkowcem i skimmingiem." },
  "A slim, aerospace-grade aluminum wallet that blocks RFID scanners while maintaining a modern aesthetic.": {
    en: "A slim, aerospace-grade aluminum wallet that blocks RFID scanners while maintaining a modern aesthetic.",
    pl: "Smukły portfel z aluminium klasy lotniczej, który blokuje skanery RFID, zachowując nowoczesny wygląd.",
  },
  "Prevents visual hacking in public workspaces.": { en: "Prevents visual hacking in public workspaces.", pl: "Zapobiega wizualnemu podglądaniu w przestrzeniach publicznych." },
  "Narrows the viewing angle of your laptop screen so only you can see your sensitive information.": {
    en: "Narrows the viewing angle of your laptop screen so only you can see your sensitive information.",
    pl: "Zawęża kąt widzenia ekranu laptopa, dzięki czemu tylko Ty widzisz swoje wrażliwe informacje.",
  },
  "Comprehensive medical readiness for any terrain.": { en: "Comprehensive medical readiness for any terrain.", pl: "Kompleksowa gotowość medyczna w każdym terenie." },
  "An organized, waterproof kit with labeled compartments for fast deployment in high-stress moments.": {
    en: "An organized, waterproof kit with labeled compartments for fast deployment in high-stress moments.",
    pl: "Uporządkowany, wodoodporny zestaw z oznaczonymi przegrodami do szybkiego działania w chwilach wysokiego stresu.",
  },
  "Ultra-compact lighting with instant magnetic activation.": { en: "Ultra-compact lighting with instant magnetic activation.", pl: "Ultrakompaktowe oświetlenie z natychmiastową magnetyczną aktywacją." },
  "A 50-lumen magnetic EDC flashlight with instant USB charging and a rugged, reliable chassis.": {
    en: "A 50-lumen magnetic EDC flashlight with instant USB charging and a rugged, reliable chassis.",
    pl: "Magnetyczna latarka EDC o mocy 50 lumenów z natychmiastowym ładowaniem USB i wytrzymałą, niezawodną obudową.",
  },
  "Reliable fire starting in any weather conditions.": { en: "Reliable fire starting in any weather conditions.", pl: "Niezawodne rozpalanie ognia w każdych warunkach pogodowych." },
  "A thick ferro rod that throws 5,500°F sparks to ignite tinder instantly, even when wet.": {
    en: "A thick ferro rod that throws 5,500°F sparks to ignite tinder instantly, even when wet.",
    pl: "Gruby pręt krzesiwa wytwarzający iskry o temperaturze do 3000°C, które natychmiast zapalają podpałkę, nawet gdy jest mokra.",
  },
  "Early warning system for perimeter breaches.": { en: "Early warning system for perimeter breaches.", pl: "System wczesnego ostrzegania przed naruszeniem strefy wokół domu." },
  "Long-range wireless motion sensors that alert you before someone reaches your front door.": {
    en: "Long-range wireless motion sensors that alert you before someone reaches your front door.",
    pl: "Bezprzewodowe czujniki ruchu dalekiego zasięgu, które ostrzegają Cię, zanim ktoś dotrze do drzwi wejściowych.",
  },
  "Prevents hypothermia by retaining 90% of body heat.": { en: "Prevents hypothermia by retaining 90% of body heat.", pl: "Zapobiega hipotermii, zatrzymując 90% ciepła ciała." },
  "Space-age blankets that are compact, waterproof, and windproof—essential for every car and go-bag.": {
    en: "Space-age blankets that are compact, waterproof, and windproof—essential for every car and go-bag.",
    pl: "Kosmiczne koce — kompaktowe, wodoodporne i wiatroszczelne — niezbędne w każdym samochodzie i torbie ewakuacyjnej.",
  },
  "Bright perimeter lighting that discourages unwanted approach after dark.": { en: "Bright perimeter lighting that discourages unwanted approach after dark.", pl: "Jasne oświetlenie obwodowe zniechęcające do zbliżania się po zmroku." },
  "A weather-resistant solar light with motion activation for driveways, fences, and side entrances.": {
    en: "A weather-resistant solar light with motion activation for driveways, fences, and side entrances.",
    pl: "Odporna na warunki atmosferyczne lampa solarna z czujnikiem ruchu do podjazdów, ogrodzeń i wejść bocznych.",
  },
  "Budget-friendly first-line alert for windows, patio doors, and rentals.": { en: "Budget-friendly first-line alert for windows, patio doors, and rentals.", pl: "Budżetowy, pierwszy poziom alarmu dla okien, drzwi tarasowych i wynajmowanych lokali." },
  "A simple peel-and-stick alarm set that adds instant sound-based deterrence without tools or drilling.": {
    en: "A simple peel-and-stick alarm set that adds instant sound-based deterrence without tools or drilling.",
    pl: "Prosty zestaw alarmów samoprzylepnych, który dodaje natychmiastowe odstraszanie dźwiękiem bez narzędzi i wiercenia.",
  },
  "Fast, rental-friendly protection for bedroom doors and hotel stays.": { en: "Fast, rental-friendly protection for bedroom doors and hotel stays.", pl: "Szybka, przyjazna najemcom ochrona drzwi sypialni i pokoi hotelowych." },
  "A compact wedge alarm that reinforces an entry point and sounds a loud alert when pressure is applied.": {
    en: "A compact wedge alarm that reinforces an entry point and sounds a loud alert when pressure is applied.",
    pl: "Kompaktowy alarm klinowy, który wzmacnia punkt wejścia i emituje głośny sygnał przy nacisku.",
  },
  "Quick visual privacy checks for rentals, changing rooms, and travel stays.": { en: "Quick visual privacy checks for rentals, changing rooms, and travel stays.", pl: "Szybka wizualna kontrola prywatności w wynajmowanych lokalach, przebieralniach i podróży." },
  "A portable detector that helps reveal suspicious lenses so you can stay confident in unfamiliar spaces.": {
    en: "A portable detector that helps reveal suspicious lenses so you can stay confident in unfamiliar spaces.",
    pl: "Przenośny detektor, który pomaga wykryć podejrzane obiektywy, abyś czuł się pewnie w nieznanych przestrzeniach.",
  },
  "Protects passports, cards, and travel documents in one slim organizer.": { en: "Protects passports, cards, and travel documents in one slim organizer.", pl: "Chroni paszport, karty i dokumenty podróżne w jednym smukłym organizerze." },
  "A slim RFID-blocking wallet built for airports, hotels, and everyday carry when you want secure, organized travel.": {
    en: "A slim RFID-blocking wallet built for airports, hotels, and everyday carry when you want secure, organized travel.",
    pl: "Smukły portfel blokujący RFID stworzony na lotniska, hotele i codzienne noszenie, gdy zależy Ci na bezpiecznej, uporządkowanej podróży.",
  },
  "Backup charging for phones, lights, and comms during outages.": { en: "Backup charging for phones, lights, and comms during outages.", pl: "Zapasowe zasilanie telefonów, świateł i łączności podczas przerw w dostawie prądu." },
  "A compact rechargeable power station that keeps your essentials running when the grid is unreliable.": {
    en: "A compact rechargeable power station that keeps your essentials running when the grid is unreliable.",
    pl: "Kompaktowa, ładowalna stacja zasilania, która utrzymuje działanie Twoich najważniejszych urządzeń, gdy sieć energetyczna zawodzi.",
  },
  "Roadside readiness with jumper cables, tools, and practical essentials.": { en: "Roadside readiness with jumper cables, tools, and practical essentials.", pl: "Gotowość na drodze — kable rozruchowe, narzędzia i praktyczne niezbędniki." },
  "A compact car kit designed for winter commutes, road trips, and everyday confidence behind the wheel.": {
    en: "A compact car kit designed for winter commutes, road trips, and everyday confidence behind the wheel.",
    pl: "Kompaktowy zestaw samochodowy zaprojektowany na zimowe dojazdy, podróże i codzienną pewność za kierownicą.",
  },

  // --- Site products — productProofById reviews / highlights ---
  "25,000+ reviews": { en: "25,000+ reviews", pl: "25 000+ opinii" },
  "Real-time alerts to your smartphone": { en: "Real-time alerts to your smartphone", pl: "Powiadomienia w czasie rzeczywistym na smartfon" },
  "Crystal clear night vision up to 30 feet": { en: "Crystal clear night vision up to 30 feet", pl: "Krystalicznie czysty widok nocny do 9 metrów" },
  "Seamless 2-way audio communication": { en: "Seamless 2-way audio communication", pl: "Płynna dwukierunkowa komunikacja głosowa" },
  "22,400+ reviews": { en: "22,400+ reviews", pl: "22 400+ opinii" },
  "Deafening alarm attracts immediate attention": { en: "Deafening alarm attracts immediate attention", pl: "Ogłuszający alarm natychmiast przyciąga uwagę" },
  "TSA-approved for safe air travel": { en: "TSA-approved for safe air travel", pl: "Zatwierdzony przez TSA do bezpiecznych podróży lotniczych" },
  "Swappable batteries last up to 40 minutes of use": { en: "Swappable batteries last up to 40 minutes of use", pl: "Wymienne baterie starczają na do 40 minut pracy" },
  "10,500+ reviews": { en: "10,500+ reviews", pl: "10 500+ opinii" },
  "Prevents 100% of remote phishing attacks": { en: "Prevents 100% of remote phishing attacks", pl: "Zapobiega 100% zdalnych ataków phishingowych" },
  "Durable, crush-resistant construction": { en: "Durable, crush-resistant construction", pl: "Wytrzymała konstrukcja odporna na zgniecenie" },
  "Works with Google, AWS, and social media": { en: "Works with Google, AWS, and social media", pl: "Współpracuje z Google, AWS i portalami społecznościowymi" },
  "13,000+ reviews": { en: "13,000+ reviews", pl: "13 000+ opinii" },
  "Massive 5000mAh built-in battery": { en: "Massive 5000mAh built-in battery", pl: "Ogromna wbudowana bateria 5000 mAh" },
  "5-way charging for total grid independence": { en: "5-way charging for total grid independence", pl: "5 sposobów ładowania dla pełnej niezależności od sieci" },
  "NOAA All Hazards weather alerts included": { en: "NOAA All Hazards weather alerts included", pl: "Wbudowane alerty pogodowe NOAA All Hazards" },
  "BHMA2 Certified": { en: "BHMA2 Certified", pl: "Certyfikat BHMA2" },
  "AI learning fingerprint scanner": { en: "AI learning fingerprint scanner", pl: "Uczący się skaner linii papilarnych AI" },
  "8-month battery life (IP53 rated)": { en: "8-month battery life (IP53 rated)", pl: "8 miesięcy pracy na baterii (klasa IP53)" },
  "Wi-Fi front door lock with auto-lock": { en: "Wi-Fi front door lock with auto-lock", pl: "Zamek Wi-Fi do drzwi wejściowych z automatyczną blokadą" },
  "USA-Made Quality": { en: "USA-Made Quality", pl: "Jakość Made in USA" },
  "Custom-molded for perfect fit": { en: "Custom-molded for perfect fit", pl: "Formowana na wymiar dla idealnego dopasowania" },
  "Adjustable retention and cant": { en: "Adjustable retention and cant", pl: "Regulowany docisk i kąt noszenia" },
  "Backed by a lifetime warranty": { en: "Backed by a lifetime warranty", pl: "Objęta dożywotnią gwarancją" },
  "10,032 ratings": { en: "10,032 ratings", pl: "10 032 oceny" },
  "Fast flip top safety with snap-clip keychain": { en: "Fast flip top safety with snap-clip keychain", pl: "Szybka uchylna pokrywka bezpieczeństwa z zaczepem na brelok" },
  "10-second spray time with 14-foot range": { en: "10-second spray time with 14-foot range", pl: "10 sekund rozpylania przy zasięgu do 4,2 metra" },
  "Maximum police strength OC with UV marking dye": { en: "Maximum police strength OC with UV marking dye", pl: "Gaz OC o maksymalnej sile policyjnej z barwnikiem UV" },
  "14,600+ reviews": { en: "14,600+ reviews", pl: "14 600+ opinii" },
  "Withstands up to 350 lbs of force": { en: "Withstands up to 350 lbs of force", pl: "Wytrzymuje nacisk do 159 kg" },
  "Adjustable to fit most standard doors": { en: "Adjustable to fit most standard doors", pl: "Regulowana, dopasowuje się do większości standardowych drzwi" },
  "Padded foot prevents floor damage": { en: "Padded foot prevents floor damage", pl: "Wyściełana stopka chroni podłogę przed uszkodzeniem" },
  "95,000+ reviews": { en: "95,000+ reviews", pl: "95 000+ opinii" },
  "Filters up to 1,000 gallons of water": { en: "Filters up to 1,000 gallons of water", pl: "Filtruje do 3800 litrów wody" },
  "No chemical taste or shelf-life limit": { en: "No chemical taste or shelf-life limit", pl: "Brak chemicznego posmaku i limitu trwałości" },
  "Ultra-lightweight for any survival kit": { en: "Ultra-lightweight for any survival kit", pl: "Ultralekka — pasuje do każdego zestawu przetrwania" },
  "7,021 ratings": { en: "7,021 ratings", pl: "7021 ocen" },
  "Non-window Faraday bag for phones": { en: "Non-window Faraday bag for phones", pl: "Torba Faradaya bez okienka na telefony" },
  "Blocks cellular, Wi-Fi, GPS, RFID, and Bluetooth": { en: "Blocks cellular, Wi-Fi, GPS, RFID, and Bluetooth", pl: "Blokuje sieć komórkową, Wi-Fi, GPS, RFID i Bluetooth" },
  "Built for device shielding and digital forensics": { en: "Built for device shielding and digital forensics", pl: "Zaprojektowana do ekranowania urządzeń i informatyki śledczej" },
  "8,300+ reviews": { en: "8,300+ reviews", pl: "8300+ opinii" },
  "Covers off-grid power and sustainable living": { en: "Covers off-grid power and sustainable living", pl: "Obejmuje zasilanie poza siecią i zrównoważone życie" },
  "Comprehensive food storage strategies": { en: "Comprehensive food storage strategies", pl: "Kompleksowe strategie przechowywania żywności" },
  "Practical home defense blueprints": { en: "Practical home defense blueprints", pl: "Praktyczne plany obrony domu" },
  "3,859 ratings": { en: "3,859 ratings", pl: "3859 ocen" },
  "Key and 3-digit combination access": { en: "Key and 3-digit combination access", pl: "Dostęp na klucz i 3-cyfrową szyfrę" },
  "Portable indoor/outdoor lock box": { en: "Portable indoor/outdoor lock box", pl: "Przenośna skrzynka z zamkiem do wnętrz i na zewnątrz" },
  "Bright orange body for travel and beach use": { en: "Bright orange body for travel and beach use", pl: "Jaskrawopomarańczowa obudowa do podróży i na plażę" },
  "54,147 ratings": { en: "54,147 ratings", pl: "54 147 ocen" },
  "Ultra-thin 0.023 inch slide design": { en: "Ultra-thin 0.023 inch slide design", pl: "Ultracienka konstrukcja przesuwna 0,6 mm" },
  "White 2-pack for laptops, tablets, and desktops": { en: "White 2-pack for laptops, tablets, and desktops", pl: "Białe opakowanie 2 sztuk do laptopów, tabletów i komputerów" },
  "Physical camera privacy in one motion": { en: "Physical camera privacy in one motion", pl: "Fizyczna prywatność kamery jednym ruchem" },
  "32,000+ reviews": { en: "32,000+ reviews", pl: "32 000+ opinii" },
  "Blocks illegal RFID scanning devices": { en: "Blocks illegal RFID scanning devices", pl: "Blokuje nielegalne skanery RFID" },
  "Holds up to 12 cards without stretching": { en: "Holds up to 12 cards without stretching", pl: "Mieści do 12 kart bez rozciągania" },
  "Lifetime warranty on the metal frame": { en: "Lifetime warranty on the metal frame", pl: "Dożywotnia gwarancja na metalową ramę" },
  "5,500+ reviews": { en: "5,500+ reviews", pl: "5500+ opinii" },
  "Reduces blue light by up to 22%": { en: "Reduces blue light by up to 22%", pl: "Redukuje niebieskie światło nawet o 22%" },
  "Magnetic attachment for easy removal": { en: "Magnetic attachment for easy removal", pl: "Magnetyczne mocowanie dla łatwego zdjęcia" },
  "Anti-glare coating for outdoor use": { en: "Anti-glare coating for outdoor use", pl: "Powłoka antyodblaskowa do pracy na zewnątrz" },
  "15,000+ reviews": { en: "15,000+ reviews", pl: "15 000+ opinii" },
  "ANSI and OSHA compliant medical supplies": { en: "ANSI and OSHA compliant medical supplies", pl: "Zaopatrzenie medyczne zgodne z normami ANSI i OSHA" },
  "Internal organization for fast access": { en: "Internal organization for fast access", pl: "Wewnętrzna organizacja dla szybkiego dostępu" },
  "Rugged 600D polyester case": { en: "Rugged 600D polyester case", pl: "Wytrzymałe etui z poliestru 600D" },
  "8,520 reviews": { en: "8,520 reviews", pl: "8520 opinii" },
  "Instant magnetic activation mechanism": { en: "Instant magnetic activation mechanism", pl: "Mechanizm natychmiastowej magnetycznej aktywacji" },
  "Rechargeable via integrated USB plug": { en: "Rechargeable via integrated USB plug", pl: "Ładowana przez zintegrowaną wtyczkę USB" },
  "50 lumens of powerful keychain light": { en: "50 lumens of powerful keychain light", pl: "50 lumenów mocnego światła na breloku" },
  "9,600+ reviews": { en: "9,600+ reviews", pl: "9600+ opinii" },
  "Lasts for over 12,000 strikes": { en: "Lasts for over 12,000 strikes", pl: "Starcza na ponad 12 000 uderzeń" },
  "Works at any altitude or humidity": { en: "Works at any altitude or humidity", pl: "Działa na każdej wysokości i przy każdej wilgotności" },
  "Includes emergency whistle and lanyard": { en: "Includes emergency whistle and lanyard", pl: "Zawiera gwizdek awaryjny i smycz" },
  "1/4 mile wireless transmission range": { en: "1/4 mile wireless transmission range", pl: "Zasięg transmisji bezprzewodowej do 400 metrów" },
  "Weatherproof sensors (IP65 rated)": { en: "Weatherproof sensors (IP65 rated)", pl: "Czujniki odporne na warunki atmosferyczne (klasa IP65)" },
  "Expandable with up to 16 sensors": { en: "Expandable with up to 16 sensors", pl: "Rozbudowa do 16 czujników" },
  "12,900+ reviews": { en: "12,900+ reviews", pl: "12 900+ opinii" },
  "Durable, tear-resistant insulation": { en: "Durable, tear-resistant insulation", pl: "Wytrzymała izolacja odporna na rozdarcie" },
  "Highly reflective for signal rescue": { en: "Highly reflective for signal rescue", pl: "Wysoce odblaskowa — ułatwia sygnalizację ratunkową" },
  "Fits easily in glove box or pocket": { en: "Fits easily in glove box or pocket", pl: "Łatwo mieści się w schowku samochodowym lub kieszeni" },
  "18,200+ reviews": { en: "18,200+ reviews", pl: "18 200+ opinii" },
  "Brightens dark entry points automatically": { en: "Brightens dark entry points automatically", pl: "Automatycznie oświetla ciemne punkty wejścia" },
  "Helps deter unwanted approach after sunset": { en: "Helps deter unwanted approach after sunset", pl: "Pomaga odstraszyć niepożądane zbliżanie się po zmroku" },
  "Weather-ready for outdoor security coverage": { en: "Weather-ready for outdoor security coverage", pl: "Odporna na warunki atmosferyczne ochrona zewnętrzna" },
  "16,800 ratings": { en: "16,800 ratings", pl: "16 800 ocen" },
  "2-pack magnetic window/door alarm": { en: "2-pack magnetic window/door alarm", pl: "Zestaw 2 magnetycznych alarmów na okno/drzwi" },
  "Battery-operated with batteries included": { en: "Battery-operated with batteries included", pl: "Zasilany bateryjnie — baterie w zestawie" },
  "115 dB alarm for DIY home protection": { en: "115 dB alarm for DIY home protection", pl: "Alarm 115 dB do samodzielnej ochrony domu" },
  "6,962 ratings": { en: "6,962 ratings", pl: "6962 oceny" },
  "120 dB wireless wedge door stop alarm": { en: "120 dB wireless wedge door stop alarm", pl: "Bezprzewodowy alarm klinowy 120 dB" },
  "Audible up to 1,500 ft": { en: "Audible up to 1,500 ft", pl: "Słyszalny z odległości do 450 metrów" },
  "Compact for home, travel, apartment, or dorm": { en: "Compact for home, travel, apartment, or dorm", pl: "Kompaktowy — do domu, podróży, mieszkania lub akademika" },
  "7,600+ reviews": { en: "7,600+ reviews", pl: "7600+ opinii" },
  "Helps reveal suspicious lenses in unfamiliar spaces": { en: "Helps reveal suspicious lenses in unfamiliar spaces", pl: "Pomaga wykryć podejrzane obiektywy w nieznanych przestrzeniach" },
  "Perfect for rentals, changing rooms, and hotels": { en: "Perfect for rentals, changing rooms, and hotels", pl: "Idealny do wynajmowanych lokali, przebieralni i hoteli" },
  "Simple privacy scan for peace of mind on the go": { en: "Simple privacy scan for peace of mind on the go", pl: "Prosty skan prywatności dający spokój ducha w podróży" },
  "11,100+ reviews": { en: "11,100+ reviews", pl: "11 100+ opinii" },
  "Keeps travel documents organized and protected": { en: "Keeps travel documents organized and protected", pl: "Utrzymuje dokumenty podróżne uporządkowane i chronione" },
  "Blocks RFID skimming in airports and transit hubs": { en: "Blocks RFID skimming in airports and transit hubs", pl: "Blokuje skimming RFID na lotniskach i w węzłach komunikacyjnych" },
  "Slim profile fits easily into carry-on bags": { en: "Slim profile fits easily into carry-on bags", pl: "Smukły profil łatwo mieści się w bagażu podręcznym" },
  "14,400+ reviews": { en: "14,400+ reviews", pl: "14 400+ opinii" },
  "Keeps phones and lights charged through outages": { en: "Keeps phones and lights charged through outages", pl: "Utrzymuje naładowane telefony i światła podczas przerw w dostawie prądu" },
  "Great for apartments, cabins, and road trips": { en: "Great for apartments, cabins, and road trips", pl: "Świetna do mieszkań, domków letniskowych i podróży samochodowych" },
  "Reliable backup power for essential devices": { en: "Reliable backup power for essential devices", pl: "Niezawodne zasilanie awaryjne dla najważniejszych urządzeń" },
  "6,900+ reviews": { en: "6,900+ reviews", pl: "6900+ opinii" },
  "Makes winter driving and road trips feel safer": { en: "Makes winter driving and road trips feel safer", pl: "Zwiększa poczucie bezpieczeństwa podczas zimowej jazdy i podróży" },
  "Helps you stay prepared for jump-starts and flats": { en: "Helps you stay prepared for jump-starts and flats", pl: "Pomaga być przygotowanym na rozruch awaryjny i przebitą oponę" },
  "Compact kit for everyday vehicle readiness": { en: "Compact kit for everyday vehicle readiness", pl: "Kompaktowy zestaw codziennej gotowości w samochodzie" },

  // --- Read time labels ---
  "4 min read": { en: "4 min read", pl: "4 min czytania" },
  "5 min read": { en: "5 min read", pl: "5 min czytania" },
  "6 min read": { en: "6 min read", pl: "6 min czytania" },
  "7 min read": { en: "7 min read", pl: "7 min czytania" },
  "8 min read": { en: "8 min read", pl: "8 min czytania" },
  "9 min read": { en: "9 min read", pl: "9 min czytania" },

  // --- Blog articles (lib/site-data.ts articles[]) ---
  // five-minute-home-security-audit
  "The 5-Minute Home Security Audit Every Homeowner Needs": { en: "The 5-Minute Home Security Audit Every Homeowner Needs", pl: "5-minutowy audyt bezpieczeństwa domu, który powinien zrobić każdy właściciel" },
  "I found 3 major flaws in my security in under 5 minutes. Here's how to fix them and turn your home into a fortress.": {
    en: "I found 3 major flaws in my security in under 5 minutes. Here's how to fix them and turn your home into a fortress.",
    pl: "W niecałe 5 minut znalazłem 3 poważne luki w zabezpieczeniach mojego domu. Oto jak je naprawić i zamienić dom w fortecę.",
  },
  "Home security isn't about expensive gadgets; it's about eliminating vulnerability. This 5-minute audit focuses on the three layers of protection that stop a breach before it starts.": {
    en: "Home security isn't about expensive gadgets; it's about eliminating vulnerability. This 5-minute audit focuses on the three layers of protection that stop a breach before it starts.",
    pl: "Bezpieczeństwo domu to nie kwestia drogich gadżetów, lecz eliminowania słabych punktów. Ten 5-minutowy audyt skupia się na trzech warstwach ochrony, które zatrzymują włamanie, zanim się zacznie.",
  },
  "Deter, detect, and defend. Your 5-minute blueprint.": { en: "Deter, detect, and defend. Your 5-minute blueprint.", pl: "Odstrasz, wykryj i obroń się. Twój 5-minutowy plan działania." },
  "Step 1: The Physical Entry Audit": { en: "Step 1: The Physical Entry Audit", pl: "Krok 1: Audyt fizycznych punktów wejścia" },
  "A lock is only as good as the door it's on. Inspect your frames for weakness and add mechanical reinforcement to prevent forced entry through sliding or swinging doors.": {
    en: "A lock is only as good as the door it's on. Inspect your frames for weakness and add mechanical reinforcement to prevent forced entry through sliding or swinging doors.",
    pl: "Zamek jest tak dobry, jak drzwi, na których jest zamontowany. Sprawdź ramy pod kątem słabych punktów i dodaj mechaniczne wzmocnienie, aby zapobiec wyważeniu drzwi przesuwnych lub zawiasowych.",
  },
  "Step 2: Early Warning Systems": { en: "Step 2: Early Warning Systems", pl: "Krok 2: Systemy wczesnego ostrzegania" },
  "Smart security starts at the perimeter. Use long-range motion sensors to get alerts before a visitor reaches your lock. This gives you time to verify and respond.": {
    en: "Smart security starts at the perimeter. Use long-range motion sensors to get alerts before a visitor reaches your lock. This gives you time to verify and respond.",
    pl: "Mądra ochrona zaczyna się na granicy posesji. Użyj czujników ruchu dalekiego zasięgu, aby otrzymać powiadomienie, zanim ktoś dotrze do Twojego zamka. To daje Ci czas na weryfikację i reakcję.",
  },
  "Step 3: Verification through Visuals": { en: "Step 3: Verification through Visuals", pl: "Krok 3: Weryfikacja obrazem" },
  "Don't guess who is at the door or in your home. Use high-definition smart cameras to verify threats and monitor activity in real-time with crystal clear night vision.": {
    en: "Don't guess who is at the door or in your home. Use high-definition smart cameras to verify threats and monitor activity in real-time with crystal clear night vision.",
    pl: "Nie zgaduj, kto jest pod drzwiami lub w Twoim domu. Użyj kamer smart w wysokiej rozdzielczości, aby zweryfikować zagrożenie i monitorować aktywność w czasie rzeczywistym z krystalicznie czystym widzeniem nocnym.",
  },

  // ultimate-survival-kit-checklist-2026
  "Survival Kit Checklist: 10 Items That Could Save Your Life in 2026": { en: "Survival Kit Checklist: 10 Items That Could Save Your Life in 2026", pl: "Lista kontrolna zestawu przetrwania: 10 przedmiotów, które mogą uratować Ci życie w 2026 roku" },
  "Most people buy the wrong gear. These are the 10 essentials you actually need for a real-world emergency or grid failure.": {
    en: "Most people buy the wrong gear. These are the 10 essentials you actually need for a real-world emergency or grid failure.",
    pl: "Większość ludzi kupuje niewłaściwy sprzęt. Oto 10 niezbędników, których naprawdę potrzebujesz na wypadek realnej sytuacji awaryjnej lub awarii sieci energetycznej.",
  },
  "Preparedness is a mindset, but it's supported by the right tools. When the grid fails, your survival depends on three pillars: water, communication, and heat.": {
    en: "Preparedness is a mindset, but it's supported by the right tools. When the grid fails, your survival depends on three pillars: water, communication, and heat.",
    pl: "Gotowość to sposób myślenia, ale wspierają go odpowiednie narzędzia. Gdy sieć energetyczna zawodzi, Twoje przetrwanie zależy od trzech filarów: wody, łączności i ciepła.",
  },
  "Don't wait for the crisis. Build your readiness kit today.": { en: "Don't wait for the crisis. Build your readiness kit today.", pl: "Nie czekaj na kryzys. Zbuduj swój zestaw gotowości już dziś." },
  "Secure Your Most Critical Resource": { en: "Secure Your Most Critical Resource", pl: "Zabezpiecz swój najważniejszy zasób" },
  "During a grid failure or natural disaster, municipal water is often the first thing compromised. A personal filtration straw ensures you can safely drink from any source.": {
    en: "During a grid failure or natural disaster, municipal water is often the first thing compromised. A personal filtration straw ensures you can safely drink from any source.",
    pl: "Podczas awarii sieci energetycznej lub klęski żywiołowej woda miejska często jest pierwszą rzeczą, która zostaje skażona. Osobista słomka filtrująca zapewnia bezpieczne picie z dowolnego źródła.",
  },
  "Maintain an Information Life Line": { en: "Maintain an Information Life Line", pl: "Utrzymaj linię ratunkową informacji" },
  "When the internet goes down, NOAA radio becomes your primary source of truth. A 5-way powered hand crank radio ensures you stay informed under any conditions.": {
    en: "When the internet goes down, NOAA radio becomes your primary source of truth. A 5-way powered hand crank radio ensures you stay informed under any conditions.",
    pl: "Gdy internet przestaje działać, radio NOAA staje się Twoim głównym źródłem informacji. Radio z korbą i 5 sposobami zasilania zapewnia, że pozostaniesz poinformowany w każdych warunkach.",
  },
  "Retain Biological Body Heat": { en: "Retain Biological Body Heat", pl: "Zatrzymaj ciepło swojego ciała" },
  "Hypothermia is a risk even in moderate climates if you are wet or exposed. Mylar blankets are lightweight essentials that reflect 90% of body heat back to you.": {
    en: "Hypothermia is a risk even in moderate climates if you are wet or exposed. Mylar blankets are lightweight essentials that reflect 90% of body heat back to you.",
    pl: "Hipotermia to ryzyko nawet w umiarkowanym klimacie, jeśli jesteś mokry lub wystawiony na działanie żywiołów. Koce mylarowe to lekki niezbędnik, który odbija z powrotem 90% ciepła Twojego ciała.",
  },

  // digital-privacy-cyber-shield-guide
  "Digital Privacy 101: How to Build Your Personal Cyber Shield": { en: "Digital Privacy 101: How to Build Your Personal Cyber Shield", pl: "Prywatność cyfrowa od podstaw: jak zbudować swoją osobistą tarczę cybernetyczną" },
  "A hacker doesn't need a crowbar; they need your password. Reclaim your digital privacy with these 3 essential tools.": {
    en: "A hacker doesn't need a crowbar; they need your password. Reclaim your digital privacy with these 3 essential tools.",
    pl: "Haker nie potrzebuje łomu — potrzebuje Twojego hasła. Odzyskaj swoją cyfrową prywatność dzięki tym 3 niezbędnym narzędziom.",
  },
  "Your digital front door is tested thousands of times a day. If you don't have a hardware barrier between your data and the net, you are at risk. This guide simplifies digital self-defense.": {
    en: "Your digital front door is tested thousands of times a day. If you don't have a hardware barrier between your data and the net, you are at risk. This guide simplifies digital self-defense.",
    pl: "Twoje cyfrowe drzwi wejściowe są testowane tysiące razy dziennie. Jeśli nie masz sprzętowej bariery między swoimi danymi a siecią, jesteś narażony na ryzyko. Ten poradnik upraszcza cyfrową samoobronę.",
  },
  "Privacy is your greatest asset. Protect it like it's your home.": { en: "Privacy is your greatest asset. Protect it like it's your home.", pl: "Prywatność to Twój największy atut. Chroń ją tak, jak swój dom." },
  "The Gold Standard: Hardware Authentication": { en: "The Gold Standard: Hardware Authentication", pl: "Złoty standard: uwierzytelnianie sprzętowe" },
  "Stop relying on SMS codes that can be intercepted. Use a physical security key to ensure that only you—with the physical device—can access your accounts.": {
    en: "Stop relying on SMS codes that can be intercepted. Use a physical security key to ensure that only you—with the physical device—can access your accounts.",
    pl: "Przestań polegać na kodach SMS, które można przechwycić. Użyj fizycznego klucza bezpieczeństwa, aby mieć pewność, że tylko Ty — z fizycznym urządzeniem — masz dostęp do swoich kont.",
  },
  "RF Shielding for Your Physical Tokens": { en: "RF Shielding for Your Physical Tokens", pl: "Ochrona RF dla Twoich fizycznych nośników" },
  "Modern theft happens over the air. Use Faraday bags and RFID-blocking wallets to prevent hackers from skimming your phone or credit card data in public.": {
    en: "Modern theft happens over the air. Use Faraday bags and RFID-blocking wallets to prevent hackers from skimming your phone or credit card data in public.",
    pl: "Współczesna kradzież odbywa się drogą radiową. Używaj toreb Faradaya i portfeli blokujących RFID, aby zapobiec przechwyceniu danych z telefonu lub karty kredytowej w miejscu publicznym.",
  },
  "Maintain Visual Privacy in Public": { en: "Maintain Visual Privacy in Public", pl: "Zachowaj wizualną prywatność w miejscach publicznych" },
  "Visual hacking is the simplest way to steal data. A magnetic privacy screen ensures that your work stays yours, even in the busiest coffee shops or airports.": {
    en: "Visual hacking is the simplest way to steal data. A magnetic privacy screen ensures that your work stays yours, even in the busiest coffee shops or airports.",
    pl: "Podglądanie ekranu to najprostszy sposób kradzieży danych. Magnetyczny filtr prywatyzujący sprawia, że Twoja praca pozostaje tylko Twoja, nawet w najbardziej zatłoczonej kawiarni czy na lotnisku.",
  },

  // edc-essentials-solo-travelers
  "Everyday Carry (EDC) Essentials for Solo Travelers": { en: "Everyday Carry (EDC) Essentials for Solo Travelers", pl: "Niezbędnik EDC dla podróżujących solo" },
  "Peace of mind in your pocket. These are the non-lethal tools I never leave home without for travel or urban safety.": {
    en: "Peace of mind in your pocket. These are the non-lethal tools I never leave home without for travel or urban safety.",
    pl: "Spokój ducha w Twojej kieszeni. Oto nieletalne narzędzia, bez których nigdy nie wychodzę z domu w podróż ani na miejskie wypady.",
  },
  "Solo travel is empowering, but it requires a heightened sense of readiness. Your EDC should focus on deterrents and multi-purpose survival tools that pass security audits.": {
    en: "Solo travel is empowering, but it requires a heightened sense of readiness. Your EDC should focus on deterrents and multi-purpose survival tools that pass security audits.",
    pl: "Podróżowanie solo daje poczucie siły, ale wymaga wzmożonej gotowości. Twój zestaw EDC powinien opierać się na środkach odstraszających i wielofunkcyjnych narzędziach przetrwania, które przejdą kontrolę bezpieczeństwa.",
  },
  "Travel with confidence. The EDC blueprint for smarter safety.": { en: "Travel with confidence. The EDC blueprint for smarter safety.", pl: "Podróżuj z pewnością siebie. Plan EDC dla mądrzejszego bezpieczeństwa." },
  "The Instant Detour: Personal Alarms": { en: "The Instant Detour: Personal Alarms", pl: "Natychmiastowe odwrócenie uwagi: alarmy osobiste" },
  "Deterrence is about drawing unwanted attention to a threat. A high-decibel alarm is the most effective way to alert bystanders and disorient an aggressor.": {
    en: "Deterrence is about drawing unwanted attention to a threat. A high-decibel alarm is the most effective way to alert bystanders and disorient an aggressor.",
    pl: "Odstraszanie polega na zwróceniu niechcianej uwagi na zagrożenie. Głośny alarm to najskuteczniejszy sposób, aby zaalarmować świadków i zdezorientować napastnika.",
  },
  "Discrete Utility: Kydex Multitool Sheath": { en: "Discrete Utility: Kydex Multitool Sheath", pl: "Dyskretna użyteczność: pochwa Kydex na multitool" },
  "A multitool is your primary survival kit in one. A Kydex sheath ensures you have quick, one-handed access on your belt, providing immediate utility for repairs or defense.": {
    en: "A multitool is your primary survival kit in one. A Kydex sheath ensures you have quick, one-handed access on your belt, providing immediate utility for repairs or defense.",
    pl: "Multitool to Twój podstawowy zestaw przetrwania w jednym narzędziu. Pochwa Kydex zapewnia szybki dostęp jedną ręką z pasa, dając natychmiastową użyteczność do napraw lub obrony.",
  },
  "Distance Protection: Pepper Gel": { en: "Distance Protection: Pepper Gel", pl: "Ochrona na odległość: żel pieprzowy" },
  "Maximum strength gel gives you distance from a threat. Unlike spray, gel doesn't drift, making it safer to use in urban or windy environments.": {
    en: "Maximum strength gel gives you distance from a threat. Unlike spray, gel doesn't drift, making it safer to use in urban or windy environments.",
    pl: "Żel o maksymalnej sile daje Ci dystans od zagrożenia. W przeciwieństwie do sprayu, żel nie rozprasza się w powietrzu, co czyni go bezpieczniejszym w użyciu w mieście lub przy wietrze.",
  },

  // secure-your-smart-home-guide
  "How to Secure Your Smart Home Without Sacrificing Privacy": { en: "How to Secure Your Smart Home Without Sacrificing Privacy", pl: "Jak zabezpieczyć swój smart dom bez rezygnacji z prywatności" },
  "Your smart devices are security risks. Learn how to layer your network and hardware for total digital protection.": {
    en: "Your smart devices are security risks. Learn how to layer your network and hardware for total digital protection.",
    pl: "Twoje urządzenia smart to ryzyko bezpieczeństwa. Dowiedz się, jak warstwowo zabezpieczyć sieć i sprzęt dla pełnej cyfrowej ochrony.",
  },
  "Every smart device is a potential back door into your private life. Securing your smart home requires a balance of physical barriers and digital network hygiene.": {
    en: "Every smart device is a potential back door into your private life. Securing your smart home requires a balance of physical barriers and digital network hygiene.",
    pl: "Każde urządzenie smart to potencjalne tylne drzwi do Twojego prywatnego życia. Zabezpieczenie smart domu wymaga równowagi między fizycznymi barierami a cyfrową higieną sieci.",
  },
  "Smart homes need smarter security. Here is the layer guide.": { en: "Smart homes need smarter security. Here is the layer guide.", pl: "Smart domy potrzebują mądrzejszej ochrony. Oto przewodnik po warstwach zabezpieczeń." },
  "Use Physical Blocks for Indoor Cameras": { en: "Use Physical Blocks for Indoor Cameras", pl: "Użyj fizycznych blokad dla kamer wewnętrznych" },
  "Digital security can fail. Use physical webcam covers on laptops and indoor cameras to ensure that even a hacked device cannot record your private space.": {
    en: "Digital security can fail. Use physical webcam covers on laptops and indoor cameras to ensure that even a hacked device cannot record your private space.",
    pl: "Cyfrowe zabezpieczenia mogą zawieść. Używaj fizycznych osłon na kamery w laptopach i kamerach wewnętrznych, aby nawet zhakowane urządzenie nie mogło nagrywać Twojej prywatnej przestrzeni.",
  },
  "Secure Your Accounts with a Gatekeeper": { en: "Secure Your Accounts with a Gatekeeper", pl: "Zabezpiecz swoje konta strażnikiem dostępu" },
  "Protect your smart home hub with hardware 2FA. If your hub is compromised, your entire home is at risk. Use a physical key for the ultimate gatekeeper.": {
    en: "Protect your smart home hub with hardware 2FA. If your hub is compromised, your entire home is at risk. Use a physical key for the ultimate gatekeeper.",
    pl: "Chroń centralkę swojego smart domu sprzętowym 2FA. Jeśli centralka zostanie przejęta, zagrożony jest cały Twój dom. Użyj fizycznego klucza jako ostatecznego strażnika dostępu.",
  },
  "The Entry Alert Layer": { en: "The Entry Alert Layer", pl: "Warstwa alarmu wejścia" },
  "Add motion sensors to your smart home ecosystem that work independently of your main hub to ensure alerts always reach your phone.": {
    en: "Add motion sensors to your smart home ecosystem that work independently of your main hub to ensure alerts always reach your phone.",
    pl: "Dodaj do ekosystemu smart domu czujniki ruchu działające niezależnie od głównej centralki, aby powiadomienia zawsze docierały do Twojego telefonu.",
  },

  // best-home-security-upgrades-for-renters
  "Best Home Security Upgrades for Renters Who Need Fast Protection": { en: "Best Home Security Upgrades for Renters Who Need Fast Protection", pl: "Najlepsze usprawnienia bezpieczeństwa dla najemców, którzy potrzebują szybkiej ochrony" },
  "The best renter-friendly security upgrades are the ones you can install fast, remove cleanly, and trust every day.": {
    en: "The best renter-friendly security upgrades are the ones you can install fast, remove cleanly, and trust every day.",
    pl: "Najlepsze usprawnienia bezpieczeństwa przyjazne najemcom to te, które można szybko zamontować, łatwo zdjąć i którym można ufać na co dzień.",
  },
  "Renters often need more security, not more renovation. This guide focuses on quick-install products that improve deterrence, visibility, and peace of mind without permanent changes.": {
    en: "Renters often need more security, not more renovation. This guide focuses on quick-install products that improve deterrence, visibility, and peace of mind without permanent changes.",
    pl: "Najemcy często potrzebują więcej bezpieczeństwa, a nie więcej remontów. Ten poradnik skupia się na produktach szybkiego montażu, które zwiększają odstraszanie, widoczność i spokój ducha bez trwałych zmian.",
  },
  "Renter-friendly security that actually feels doable.": { en: "Renter-friendly security that actually feels doable.", pl: "Ochrona przyjazna najemcom, którą naprawdę da się wdrożyć." },
  "Start With the Door": { en: "Start With the Door", pl: "Zacznij od drzwi" },
  "A door wedge alarm gives renters instant protection because it is fast to deploy and easy to remove when you move.": {
    en: "A door wedge alarm gives renters instant protection because it is fast to deploy and easy to remove when you move.",
    pl: "Alarm klinowy do drzwi daje najemcom natychmiastową ochronę, ponieważ szybko go zamontować i łatwo zdjąć przy przeprowadzce.",
  },
  "Add Window Alerts Next": { en: "Add Window Alerts Next", pl: "Następnie dodaj alarmy na okna" },
  "Window alarms are one of the easiest upgrades for apartments because they create noise-based deterrence without drilling.": {
    en: "Window alarms are one of the easiest upgrades for apartments because they create noise-based deterrence without drilling.",
    pl: "Alarmy na okna to jedno z najprostszych usprawnień w mieszkaniach, ponieważ tworzą odstraszanie dźwiękiem bez wiercenia.",
  },
  "Use Light as a Deterrent": { en: "Use Light as a Deterrent", pl: "Użyj światła jako środka odstraszającego" },
  "Motion lighting makes entry points less attractive after dark and is especially useful for side paths and parking spots.": {
    en: "Motion lighting makes entry points less attractive after dark and is especially useful for side paths and parking spots.",
    pl: "Oświetlenie z czujnikiem ruchu sprawia, że punkty wejścia są mniej atrakcyjne po zmroku i jest szczególnie przydatne przy bocznych ścieżkach i miejscach parkingowych.",
  },

  // best-window-alarm-kit-for-apartments
  "Best Window Alarm Kit for Apartments: What Actually Works": { en: "Best Window Alarm Kit for Apartments: What Actually Works", pl: "Najlepszy zestaw alarmów na okna do mieszkań: co naprawdę działa" },
  "A practical look at apartment-friendly window alarms and how to choose the one that gives you fast, affordable protection.": {
    en: "A practical look at apartment-friendly window alarms and how to choose the one that gives you fast, affordable protection.",
    pl: "Praktyczne spojrzenie na alarmy okienne przyjazne mieszkaniom i jak wybrać ten, który da Ci szybką, przystępną cenowo ochronę.",
  },
  "If your apartment has weak windows, the right alarm kit can give you faster alerts without complicated installation. Here is how to choose one that fits your space.": {
    en: "If your apartment has weak windows, the right alarm kit can give you faster alerts without complicated installation. Here is how to choose one that fits your space.",
    pl: "Jeśli Twoje mieszkanie ma słabe okna, odpowiedni zestaw alarmowy może dać Ci szybsze powiadomienia bez skomplikowanego montażu. Oto jak wybrać ten, który pasuje do Twojej przestrzeni.",
  },
  "The simplest way to protect apartment windows tonight.": { en: "The simplest way to protect apartment windows tonight.", pl: "Najprostszy sposób na ochronę okien w mieszkaniu już dziś wieczorem." },
  "Why Window Alarms Convert So Well": { en: "Why Window Alarms Convert So Well", pl: "Dlaczego alarmy na okna sprawdzają się tak dobrze" },
  "They solve a real problem quickly: weak windows, easy installation, and instant noise when tampered with.": {
    en: "They solve a real problem quickly: weak windows, easy installation, and instant noise when tampered with.",
    pl: "Szybko rozwiązują realny problem: słabe okna, łatwy montaż i natychmiastowy sygnał dźwiękowy przy próbie manipulacji.",
  },
  "Pair It With Better Exterior Visibility": { en: "Pair It With Better Exterior Visibility", pl: "Połącz to z lepszą widocznością na zewnątrz" },
  "Window alarms work better when your exterior is visible, so motion lighting adds a useful second layer.": {
    en: "Window alarms work better when your exterior is visible, so motion lighting adds a useful second layer.",
    pl: "Alarmy na okna działają lepiej, gdy otoczenie jest dobrze widoczne, dlatego oświetlenie z czujnikiem ruchu dodaje przydatną drugą warstwę.",
  },
  "Make It Part of Your Night Routine": { en: "Make It Part of Your Night Routine", pl: "Uczyń to częścią swojej wieczornej rutyny" },
  "A security habit only converts when it is easy to repeat. Check the alarm before sleep, then let the system do the work.": {
    en: "A security habit only converts when it is easy to repeat. Check the alarm before sleep, then let the system do the work.",
    pl: "Nawyk bezpieczeństwa sprawdza się tylko wtedy, gdy łatwo go powtarzać. Sprawdź alarm przed snem, a resztę zostaw systemowi.",
  },

  // how-to-use-a-hidden-camera-detector
  "How to Use a Hidden Camera Detector in Hotels and Rentals": { en: "How to Use a Hidden Camera Detector in Hotels and Rentals", pl: "Jak używać detektora ukrytych kamer w hotelach i wynajmowanych lokalach" },
  "A simple guide for scanning hotel rooms, rentals, and private spaces with more confidence before you settle in.": {
    en: "A simple guide for scanning hotel rooms, rentals, and private spaces with more confidence before you settle in.",
    pl: "Prosty poradnik skanowania pokoi hotelowych, wynajmowanych lokali i prywatnych przestrzeni, dający więcej pewności, zanim się rozgościsz.",
  },
  "Travel privacy is a growing search intent because people want to feel safe in unfamiliar rooms. This guide shows how a detector fits into a quick arrival checklist.": {
    en: "Travel privacy is a growing search intent because people want to feel safe in unfamiliar rooms. This guide shows how a detector fits into a quick arrival checklist.",
    pl: "Prywatność w podróży to rosnący temat wyszukiwań, ponieważ ludzie chcą czuć się bezpiecznie w nieznanych pokojach. Ten poradnik pokazuje, jak detektor wpisuje się w szybką listę kontrolną po przyjeździe.",
  },
  "A privacy check you can do in under five minutes.": { en: "A privacy check you can do in under five minutes.", pl: "Kontrola prywatności, którą wykonasz w mniej niż pięć minut." },
  "Start With a Room Scan": { en: "Start With a Room Scan", pl: "Zacznij od skanu pokoju" },
  "Use the detector to check mirrors, outlets, smoke detectors, and other places where suspicious lenses could hide.": {
    en: "Use the detector to check mirrors, outlets, smoke detectors, and other places where suspicious lenses could hide.",
    pl: "Użyj detektora, aby sprawdzić lustra, gniazdka, czujniki dymu i inne miejsca, gdzie mogą ukrywać się podejrzane obiektywy.",
  },
  "Keep Documents Protected": { en: "Keep Documents Protected", pl: "Zadbaj o ochronę dokumentów" },
  "Once the room checks out, keep passports and cards in an RFID-safe wallet so your travel setup stays organized.": {
    en: "Once the room checks out, keep passports and cards in an RFID-safe wallet so your travel setup stays organized.",
    pl: "Gdy pokój przejdzie kontrolę, trzymaj paszporty i karty w portfelu blokującym RFID, aby Twój zestaw podróżny pozostał uporządkowany.",
  },
  "Layer Your Privacy": { en: "Layer Your Privacy", pl: "Dodaj kolejną warstwę prywatności" },
  "A privacy screen is useful when you are working from shared spaces and want to reduce visual exposure.": {
    en: "A privacy screen is useful when you are working from shared spaces and want to reduce visual exposure.",
    pl: "Filtr prywatyzujący jest przydatny, gdy pracujesz we współdzielonych przestrzeniach i chcesz ograniczyć wizualną ekspozycję.",
  },

  // portable-power-station-outage-guide
  "Portable Power Station Guide: What to Keep Charged During an Outage": { en: "Portable Power Station Guide: What to Keep Charged During an Outage", pl: "Przewodnik po przenośnych stacjach zasilania: co ładować podczas przerwy w dostawie prądu" },
  "The easiest way to stay prepared for outages is not owning everything, but knowing which devices need backup first.": {
    en: "The easiest way to stay prepared for outages is not owning everything, but knowing which devices need backup first.",
    pl: "Najłatwiejszym sposobem na przygotowanie się na przerwy w dostawie prądu nie jest posiadanie wszystkiego, lecz wiedza, które urządzenia potrzebują zasilania awaryjnego w pierwszej kolejności.",
  },
  "When the power goes out, a portable power station can keep the essentials running. This guide explains what to charge first and why it matters.": {
    en: "When the power goes out, a portable power station can keep the essentials running. This guide explains what to charge first and why it matters.",
    pl: "Gdy zabraknie prądu, przenośna stacja zasilania może utrzymać działanie najważniejszych urządzeń. Ten poradnik wyjaśnia, co ładować najpierw i dlaczego to ważne.",
  },
  "Backup power that turns panic into a plan.": { en: "Backup power that turns panic into a plan.", pl: "Zasilanie awaryjne, które zamienia panikę w plan działania." },
  "Charge the Devices You Need Most": { en: "Charge the Devices You Need Most", pl: "Naładuj urządzenia, których potrzebujesz najbardziej" },
  "Start with phones, lights, and communication devices before you plug in anything else.": {
    en: "Start with phones, lights, and communication devices before you plug in anything else.",
    pl: "Zacznij od telefonów, świateł i urządzeń do komunikacji, zanim podłączysz cokolwiek innego.",
  },
  "Keep Your Car Ready Too": { en: "Keep Your Car Ready Too", pl: "Zadbaj też o gotowość samochodu" },
  "Roadside issues become easier to manage when you also keep a compact emergency car kit in the trunk.": {
    en: "Roadside issues become easier to manage when you also keep a compact emergency car kit in the trunk.",
    pl: "Problemy na drodze łatwiej rozwiązać, gdy w bagażniku masz też kompaktowy zestaw awaryjny.",
  },
  "Do Not Lose the Information Layer": { en: "Do Not Lose the Information Layer", pl: "Nie trać warstwy informacyjnej" },
  "A solar radio helps you stay informed when the grid is down and the internet is unreliable.": {
    en: "A solar radio helps you stay informed when the grid is down and the internet is unreliable.",
    pl: "Radio solarne pomaga pozostać poinformowanym, gdy sieć energetyczna nie działa, a internet jest zawodny.",
  },

  // rfid-passport-wallet-travel-checklist
  "RFID Passport Wallet Travel Checklist for Safer Trips": { en: "RFID Passport Wallet Travel Checklist for Safer Trips", pl: "Lista kontrolna portfela RFID na paszport dla bezpieczniejszych podróży" },
  "A simple RFID wallet checklist that helps keep passports, cards, and travel documents organized on the move.": {
    en: "A simple RFID wallet checklist that helps keep passports, cards, and travel documents organized on the move.",
    pl: "Prosta lista kontrolna portfela RFID, która pomaga utrzymać porządek w paszportach, kartach i dokumentach podróżnych w trakcie podróży.",
  },
  "Travel gear converts well when it solves one clear problem. This checklist focuses on reducing friction and keeping important documents protected during trips.": {
    en: "Travel gear converts well when it solves one clear problem. This checklist focuses on reducing friction and keeping important documents protected during trips.",
    pl: "Sprzęt podróżny sprawdza się najlepiej, gdy rozwiązuje jeden konkretny problem. Ta lista kontrolna skupia się na ograniczeniu utrudnień i ochronie ważnych dokumentów podczas podróży.",
  },
  "A clean travel wallet setup that keeps the essentials together.": { en: "A clean travel wallet setup that keeps the essentials together.", pl: "Przejrzysty zestaw portfela podróżnego, który trzyma niezbędniki razem." },
  "Start with the Passport": { en: "Start with the Passport", pl: "Zacznij od paszportu" },
  "A passport wallet keeps the most important document in one place and helps prevent last-minute rummaging at security.": {
    en: "A passport wallet keeps the most important document in one place and helps prevent last-minute rummaging at security.",
    pl: "Portfel na paszport trzyma najważniejszy dokument w jednym miejscu i pomaga uniknąć gorączkowego szukania przy kontroli bezpieczeństwa.",
  },
  "Add Cards and Cash": { en: "Add Cards and Cash", pl: "Dodaj karty i gotówkę" },
  "A slim RFID-blocking setup also helps keep your cards and cash organized in the same place.": {
    en: "A slim RFID-blocking setup also helps keep your cards and cash organized in the same place.",
    pl: "Smukły zestaw blokujący RFID pomaga też trzymać karty i gotówkę uporządkowane w jednym miejscu.",
  },
  "Keep a Backup Safe": { en: "Keep a Backup Safe", pl: "Miej zapasowy sejf" },
  "A portable safe works well in cars, hotels, or short-term rentals when you want one secure place for valuables.": {
    en: "A portable safe works well in cars, hotels, or short-term rentals when you want one secure place for valuables.",
    pl: "Przenośny sejf sprawdza się w samochodach, hotelach lub krótkoterminowych wynajmach, gdy chcesz mieć jedno bezpieczne miejsce na cenne przedmioty.",
  },

  // --- Landing pages (lib/site-data.ts landingPages[]) ---
  // crisis-readiness-kit
  "Crisis Readiness Kit for Blackouts, Civil Unrest, and Evacuation": { en: "Crisis Readiness Kit for Blackouts, Civil Unrest, and Evacuation", pl: "Zestaw gotowości kryzysowej na wypadek przerw w dostawie prądu, niepokojów społecznych i ewakuacji" },
  "A focused preparedness page for power outages, civil unrest, and fast evacuation planning with the most practical Amazon-ready gear.": {
    en: "A focused preparedness page for power outages, civil unrest, and fast evacuation planning with the most practical Amazon-ready gear.",
    pl: "Skoncentrowana strona przygotowawcza dla przerw w dostawie prądu, niepokojów społecznych i szybkiego planowania ewakuacji, z najbardziej praktycznym sprzętem dostępnym na Amazon.",
  },
  "When people search for crisis preparedness, they usually want a simple answer: what to buy first, what keeps the family safer, and what helps in the first 72 hours. This page gives that answer without noise.": {
    en: "When people search for crisis preparedness, they usually want a simple answer: what to buy first, what keeps the family safer, and what helps in the first 72 hours. This page gives that answer without noise.",
    pl: "Gdy ludzie szukają informacji o gotowości kryzysowej, zwykle chcą prostej odpowiedzi: co kupić najpierw, co zwiększy bezpieczeństwo rodziny i co pomoże w pierwszych 72 godzinach. Ta strona daje tę odpowiedź bez zbędnego szumu.",
  },
  "The essential kit for power cuts, unrest, and emergency departure.": { en: "The essential kit for power cuts, unrest, and emergency departure.", pl: "Niezbędny zestaw na wypadek przerw w dostawie prądu, niepokojów i awaryjnego wyjazdu." },
  "Families building a 72-hour kit": { en: "Families building a 72-hour kit", pl: "Rodziny budujące zestaw na 72 godziny" },
  "Households worried about outages or unrest": { en: "Households worried about outages or unrest", pl: "Gospodarstwa domowe zaniepokojone przerwami w dostawie prądu lub niepokojami" },
  "Buyers who want a calm, prioritized prep list": { en: "Buyers who want a calm, prioritized prep list", pl: "Kupujący, którzy chcą spokojnej listy przygotowań z priorytetami" },
  "Backup power and light": { en: "Backup power and light", pl: "Zasilanie awaryjne i światło" },
  "Communication and weather alerts": { en: "Communication and weather alerts", pl: "Łączność i alerty pogodowe" },
  "Water and medical supplies": { en: "Water and medical supplies", pl: "Woda i zaopatrzenie medyczne" },
  "Home defense and evacuation readiness": { en: "Home defense and evacuation readiness", pl: "Obrona domu i gotowość do ewakuacji" },
  "Start with portable essentials that move with you and do not require permanent installation.": {
    en: "Start with portable essentials that move with you and do not require permanent installation.",
    pl: "Zacznij od przenośnych niezbędników, które przemieszczają się razem z Tobą i nie wymagają trwałej instalacji.",
  },
  "Add the home-based layers that keep your property safer if the outage lasts longer than expected.": {
    en: "Add the home-based layers that keep your property safer if the outage lasts longer than expected.",
    pl: "Dodaj warstwy zabezpieczeń domowych, które zwiększą bezpieczeństwo Twojej nieruchomości, jeśli przerwa potrwa dłużej niż oczekiwano.",
  },
  "Build the full 72-hour household kit so everyone has water, communication, and care covered.": {
    en: "Build the full 72-hour household kit so everyone has water, communication, and care covered.",
    pl: "Zbuduj pełny zestaw domowy na 72 godziny, aby każdy miał zapewnioną wodę, łączność i opiekę.",
  },
  "What should be in a crisis readiness kit first?": { en: "What should be in a crisis readiness kit first?", pl: "Co powinno się znaleźć w zestawie gotowości kryzysowej najpierw?" },
  "Start with power, communication, water, and basic medical supplies. Those four layers cover the most common disruption scenarios.": {
    en: "Start with power, communication, water, and basic medical supplies. Those four layers cover the most common disruption scenarios.",
    pl: "Zacznij od zasilania, łączności, wody i podstawowego zaopatrzenia medycznego. Te cztery warstwy pokrywają najczęstsze scenariusze zakłóceń.",
  },
  "Is this page meant for war preparation?": { en: "Is this page meant for war preparation?", pl: "Czy ta strona dotyczy przygotowań na wojnę?" },
  "It is focused on practical readiness for blackouts, unrest, and evacuation planning rather than extreme scenarios. The goal is to help people prepare responsibly and calmly.": {
    en: "It is focused on practical readiness for blackouts, unrest, and evacuation planning rather than extreme scenarios. The goal is to help people prepare responsibly and calmly.",
    pl: "Skupia się na praktycznej gotowości na przerwy w dostawie prądu, niepokoje i planowanie ewakuacji, a nie na skrajnych scenariuszach. Celem jest pomoc ludziom w odpowiedzialnym i spokojnym przygotowaniu się.",
  },
  "Why does this convert well from search and Pinterest?": { en: "Why does this convert well from search and Pinterest?", pl: "Dlaczego ta strona dobrze konwertuje z wyszukiwarki i Pinteresta?" },
  "The intent is very clear. Visitors are not browsing broadly; they want a concrete list of essentials, which makes the shopping flow much easier.": {
    en: "The intent is very clear. Visitors are not browsing broadly; they want a concrete list of essentials, which makes the shopping flow much easier.",
    pl: "Intencja jest bardzo jasna. Odwiedzający nie przeglądają strony ogólnie — chcą konkretnej listy niezbędników, co znacznie ułatwia proces zakupowy.",
  },

  // bug-out-bag-essentials
  "Bug Out Bag Essentials for Fast Evacuation": { en: "Bug Out Bag Essentials for Fast Evacuation", pl: "Niezbędnik torby ewakuacyjnej na szybką ewakuację" },
  "A practical evacuation kit page focused on the first items you actually need if you have to leave fast.": {
    en: "A practical evacuation kit page focused on the first items you actually need if you have to leave fast.",
    pl: "Praktyczna strona o zestawie ewakuacyjnym skupiona na pierwszych rzeczach, których naprawdę potrzebujesz, gdy musisz szybko wyjechać.",
  },
  "Bug out content converts well because it removes guesswork. This page keeps the list tight, actionable, and centered on the essentials that matter when time is limited.": {
    en: "Bug out content converts well because it removes guesswork. This page keeps the list tight, actionable, and centered on the essentials that matter when time is limited.",
    pl: "Treści o torbach ewakuacyjnych dobrze konwertują, ponieważ eliminują zgadywanie. Ta strona zawiera zwięzłą, praktyczną listę skupioną na niezbędnikach, które liczą się, gdy czasu jest mało.",
  },
  "Evacuation Prep": { en: "Evacuation Prep", pl: "Przygotowanie do ewakuacji" },
  "The first bag to build if you need to leave fast.": { en: "The first bag to build if you need to leave fast.", pl: "Pierwsza torba, którą warto skompletować, gdy musisz szybko wyjechać." },
  "Families preparing an evacuation bag": { en: "Families preparing an evacuation bag", pl: "Rodziny przygotowujące torbę ewakuacyjną" },
  "People who want a simple 72-hour starter kit": { en: "People who want a simple 72-hour starter kit", pl: "Osoby, które chcą prostego zestawu startowego na 72 godziny" },
  "Buyers who prefer essentials over overpacking": { en: "Buyers who prefer essentials over overpacking", pl: "Kupujący, którzy wolą niezbędniki niż nadmierne pakowanie" },
  "Water and filtration": { en: "Water and filtration", pl: "Woda i filtracja" },
  "Communication and radio": { en: "Communication and radio", pl: "Łączność i radio" },
  "Warmth and first aid": { en: "Warmth and first aid", pl: "Ciepło i pierwsza pomoc" },
  "Fast-grab evacuation gear": { en: "Fast-grab evacuation gear", pl: "Sprzęt ewakuacyjny do szybkiego zabrania" },
  "Choose portable survival basics that are easy to pack and easy to move when your lease changes.": {
    en: "Choose portable survival basics that are easy to pack and easy to move when your lease changes.",
    pl: "Wybierz przenośne podstawy przetrwania, które łatwo spakować i przenieść przy zmianie miejsca zamieszkania.",
  },
  "Build a more complete bag that also supports longer-term household readiness.": {
    en: "Build a more complete bag that also supports longer-term household readiness.",
    pl: "Skompletuj bardziej kompletną torbę, która wspiera też długoterminową gotowość gospodarstwa domowego.",
  },
  "Focus on the essentials that help the whole household leave fast without forgetting critical supplies.": {
    en: "Focus on the essentials that help the whole household leave fast without forgetting critical supplies.",
    pl: "Skup się na niezbędnikach, które pomogą całemu gospodarstwu domowemu szybko wyjechać, nie zapominając o kluczowym zaopatrzeniu.",
  },
  "What should go in a bug out bag first?": { en: "What should go in a bug out bag first?", pl: "Co powinno się znaleźć w torbie ewakuacyjnej najpierw?" },
  "Water, communication, warmth, and basic medical gear are the first layers because they solve the most immediate problems in an evacuation.": {
    en: "Water, communication, warmth, and basic medical gear are the first layers because they solve the most immediate problems in an evacuation.",
    pl: "Woda, łączność, ciepło i podstawowy sprzęt medyczny to pierwsze warstwy, ponieważ rozwiązują najpilniejsze problemy podczas ewakuacji.",
  },
  "How heavy should a bug out bag be?": { en: "How heavy should a bug out bag be?", pl: "Ile powinna ważyć torba ewakuacyjna?" },
  "Light enough to carry without slowing you down. The bag should help you move, not turn into a burden.": {
    en: "Light enough to carry without slowing you down. The bag should help you move, not turn into a burden.",
    pl: "Na tyle lekka, by nie spowalniała Cię w drodze. Torba ma Ci pomagać się poruszać, a nie stawać się ciężarem.",
  },
  "Why is this a strong landing page for Pinterest?": { en: "Why is this a strong landing page for Pinterest?", pl: "Dlaczego to skuteczna strona docelowa dla Pinteresta?" },
  "Because the user intent is specific and urgent. People searching for evacuation essentials want a fast, trustworthy shortlist, not a long generic article.": {
    en: "Because the user intent is specific and urgent. People searching for evacuation essentials want a fast, trustworthy shortlist, not a long generic article.",
    pl: "Ponieważ intencja użytkownika jest konkretna i pilna. Osoby szukające niezbędników ewakuacyjnych chcą szybkiej, wiarygodnej krótkiej listy, a nie długiego, ogólnego artykułu.",
  },

  // shelter-in-place-kit
  "Shelter-in-Place Kit for Blackouts and Civil Unrest": { en: "Shelter-in-Place Kit for Blackouts and Civil Unrest", pl: "Zestaw na pozostanie w domu na wypadek przerw w dostawie prądu i niepokojów społecznych" },
  "A home-first preparedness page for staying safer indoors when the outside environment becomes unstable.": {
    en: "A home-first preparedness page for staying safer indoors when the outside environment becomes unstable.",
    pl: "Strona przygotowawcza skupiona na domu, pomagająca bezpieczniej pozostać w środku, gdy otoczenie na zewnątrz staje się niestabilne.",
  },
  "Sometimes the right move is not to leave but to lock down, reduce exposure, and wait things out. This page focuses on the tools that support that decision.": {
    en: "Sometimes the right move is not to leave but to lock down, reduce exposure, and wait things out. This page focuses on the tools that support that decision.",
    pl: "Czasami właściwym posunięciem nie jest wyjazd, lecz zabezpieczenie się, ograniczenie ekspozycji i przeczekanie sytuacji. Ta strona skupia się na narzędziach wspierających tę decyzję.",
  },
  "Prepare the home before the next outage or disruption.": { en: "Prepare the home before the next outage or disruption.", pl: "Przygotuj dom przed kolejną przerwą w dostawie prądu lub zakłóceniem." },
  "Homeowners who want to stay put safely": { en: "Homeowners who want to stay put safely", pl: "Właściciele domów, którzy chcą bezpiecznie pozostać na miejscu" },
  "Households preparing for storms or unrest": { en: "Households preparing for storms or unrest", pl: "Gospodarstwa domowe przygotowujące się na burze lub niepokoje" },
  "Reinforce the main door": { en: "Reinforce the main door", pl: "Wzmocnij drzwi główne" },
  "Add window alarms": { en: "Add window alarms", pl: "Dodaj alarmy na okna" },
  "Increase exterior visibility": { en: "Increase exterior visibility", pl: "Zwiększ widoczność na zewnątrz" },
  "Keep backup power ready": { en: "Keep backup power ready", pl: "Miej gotowe zasilanie awaryjne" },
  "What is the first shelter-in-place upgrade to buy?": { en: "What is the first shelter-in-place upgrade to buy?", pl: "Jakie jest pierwsze usprawnienie do kupienia na pozostanie w domu?" },
  "Door reinforcement is often the first move because it protects the main entry point and gives you immediate peace of mind.": {
    en: "Door reinforcement is often the first move because it protects the main entry point and gives you immediate peace of mind.",
    pl: "Wzmocnienie drzwi to często pierwszy krok, ponieważ chroni główny punkt wejścia i daje natychmiastowy spokój ducha.",
  },
  "Should I add power backup to a shelter-in-place kit?": { en: "Should I add power backup to a shelter-in-place kit?", pl: "Czy powinienem dodać zasilanie awaryjne do zestawu na pozostanie w domu?" },
  "Yes. Even a small backup power solution helps you keep phones charged, lights on, and communication available during an outage.": {
    en: "Yes. Even a small backup power solution helps you keep phones charged, lights on, and communication available during an outage.",
    pl: "Tak. Nawet niewielkie rozwiązanie zasilania awaryjnego pomaga utrzymać naładowane telefony, włączone światła i dostępną łączność podczas przerwy w dostawie prądu.",
  },
  "Why is this useful for civil unrest or storms?": { en: "Why is this useful for civil unrest or storms?", pl: "Dlaczego jest to przydatne podczas niepokojów społecznych lub burz?" },
  "It focuses on staying safer indoors, reducing visibility, and keeping the home functional during events when leaving is not the best option.": {
    en: "It focuses on staying safer indoors, reducing visibility, and keeping the home functional during events when leaving is not the best option.",
    pl: "Skupia się na bezpieczniejszym pozostaniu w środku, ograniczeniu widoczności i utrzymaniu funkcjonalności domu w sytuacjach, gdy wyjazd nie jest najlepszą opcją.",
  },

  // emergency-vehicle-kit
  "Emergency Vehicle Kit for Winter, Road Closures, and Evacuation": { en: "Emergency Vehicle Kit for Winter, Road Closures, and Evacuation", pl: "Zestaw awaryjny do samochodu na zimę, zamknięcia dróg i ewakuację" },
  "A car-ready preparedness page built for roadside safety, winter travel, and quick movement during emergency evacuations.": {
    en: "A car-ready preparedness page built for roadside safety, winter travel, and quick movement during emergency evacuations.",
    pl: "Strona przygotowawcza dla samochodu, stworzona z myślą o bezpieczeństwie na drodze, zimowych podróżach i szybkim przemieszczaniu się podczas ewakuacji awaryjnej.",
  },
  "Vehicle kits are one of the easiest preparedness purchases because they solve a real problem every driver understands. This page focuses on the gear that matters first in the trunk.": {
    en: "Vehicle kits are one of the easiest preparedness purchases because they solve a real problem every driver understands. This page focuses on the gear that matters first in the trunk.",
    pl: "Zestawy samochodowe to jeden z najprostszych zakupów przygotowawczych, ponieważ rozwiązują realny problem, który rozumie każdy kierowca. Ta strona skupia się na sprzęcie, który liczy się najpierw w bagażniku.",
  },
  "Vehicle Readiness": { en: "Vehicle Readiness", pl: "Gotowość samochodowa" },
  "The trunk kit every driver should build before bad weather hits.": { en: "The trunk kit every driver should build before bad weather hits.", pl: "Zestaw do bagażnika, który powinien skompletować każdy kierowca, zanim nadejdzie zła pogoda." },
  "Winter commuters": { en: "Winter commuters", pl: "Kierowcy dojeżdżający zimą" },
  "Families driving long distances": { en: "Families driving long distances", pl: "Rodziny podróżujące na duże odległości" },
  "Drivers who want evacuation-ready trunk storage": { en: "Drivers who want evacuation-ready trunk storage", pl: "Kierowcy, którzy chcą mieć bagażnik gotowy do ewakuacji" },
  "Jumper and roadside basics": { en: "Jumper and roadside basics", pl: "Kable rozruchowe i podstawy pomocy drogowej" },
  "First aid and emergency warmth": { en: "First aid and emergency warmth", pl: "Pierwsza pomoc i awaryjne ciepło" },
  "Backup power and charging": { en: "Backup power and charging", pl: "Zasilanie awaryjne i ładowanie" },
  "Radio and communication": { en: "Radio and communication", pl: "Radio i łączność" },
  "What belongs in an emergency vehicle kit first?": { en: "What belongs in an emergency vehicle kit first?", pl: "Co powinno się znaleźć w zestawie awaryjnym do samochodu najpierw?" },
  "Jumper and roadside basics, first aid, backup power, and communication are the main priorities because they solve common roadside problems fast.": {
    en: "Jumper and roadside basics, first aid, backup power, and communication are the main priorities because they solve common roadside problems fast.",
    pl: "Kable rozruchowe i podstawy pomocy drogowej, pierwsza pomoc, zasilanie awaryjne i łączność to główne priorytety, ponieważ szybko rozwiązują typowe problemy na drodze.",
  },
  "Is this only for winter?": { en: "Is this only for winter?", pl: "Czy to tylko na zimę?" },
  "No. It is useful for winter, road closures, long drives, and emergency evacuation when a car is part of the plan.": {
    en: "No. It is useful for winter, road closures, long drives, and emergency evacuation when a car is part of the plan.",
    pl: "Nie. Jest to przydatne zimą, przy zamknięciach dróg, długich trasach i ewakuacji awaryjnej, gdy samochód jest częścią planu.",
  },
  "Why does this page help monetization?": { en: "Why does this page help monetization?", pl: "Dlaczego ta strona pomaga w monetyzacji?" },
  "Vehicle preparedness has clear intent and a practical purchase path, which usually leads to stronger clicks and better conversions.": {
    en: "Vehicle preparedness has clear intent and a practical purchase path, which usually leads to stronger clicks and better conversions.",
    pl: "Gotowość samochodowa ma jasną intencję i praktyczną ścieżkę zakupową, co zwykle prowadzi do większej liczby kliknięć i lepszej konwersji.",
  },

  // home-security-renters
  "Best Home Security Upgrades for Renters": { en: "Best Home Security Upgrades for Renters", pl: "Najlepsze usprawnienia bezpieczeństwa dla najemców" },
  "Fast, removable apartment security upgrades that improve entry-point protection, visibility, and confidence without drilling.": {
    en: "Fast, removable apartment security upgrades that improve entry-point protection, visibility, and confidence without drilling.",
    pl: "Szybkie, demontowalne usprawnienia bezpieczeństwa mieszkania, które poprawiają ochronę punktów wejścia, widoczność i pewność siebie bez wiercenia.",
  },
  "Renters usually need security that installs fast and leaves no damage behind. This page narrows the decision to the renter-friendly upgrades that create the biggest jump in peace of mind.": {
    en: "Renters usually need security that installs fast and leaves no damage behind. This page narrows the decision to the renter-friendly upgrades that create the biggest jump in peace of mind.",
    pl: "Najemcy zwykle potrzebują ochrony, którą można szybko zamontować i która nie zostawia śladów. Ta strona zawęża wybór do usprawnień przyjaznych najemcom, które dają największy skok w poczuciu bezpieczeństwa.",
  },
  "Renter-Friendly Security": { en: "Renter-Friendly Security", pl: "Ochrona przyjazna najemcom" },
  "Fast upgrades for apartments, rentals, and shared spaces.": { en: "Fast upgrades for apartments, rentals, and shared spaces.", pl: "Szybkie usprawnienia dla mieszkań, wynajmowanych lokali i przestrzeni współdzielonych." },
  "Apartment dwellers who cannot drill": { en: "Apartment dwellers who cannot drill", pl: "Mieszkańcy mieszkań, którzy nie mogą wiercić" },
  "Travelers who want hotel-style safety": { en: "Travelers who want hotel-style safety", pl: "Podróżni, którzy chcą bezpieczeństwa w stylu hotelowym" },
  "Budget buyers who want the quickest payoff": { en: "Budget buyers who want the quickest payoff", pl: "Kupujący z ograniczonym budżetem, którzy chcą najszybszego efektu" },
  "What is the best renter-friendly security upgrade to start with?": { en: "What is the best renter-friendly security upgrade to start with?", pl: "Od jakiego usprawnienia przyjaznego najemcom warto zacząć?" },
  "A door wedge alarm or window alarm kit usually gives the fastest improvement because both are easy to install, easy to remove, and create immediate sound-based deterrence.": {
    en: "A door wedge alarm or window alarm kit usually gives the fastest improvement because both are easy to install, easy to remove, and create immediate sound-based deterrence.",
    pl: "Alarm klinowy do drzwi lub zestaw alarmów na okna zwykle daje najszybszą poprawę, ponieważ oba są łatwe w montażu, łatwe do zdjęcia i od razu tworzą odstraszanie dźwiękiem.",
  },
  "Can I use these products in a temporary lease?": { en: "Can I use these products in a temporary lease?", pl: "Czy mogę używać tych produktów przy wynajmie krótkoterminowym?" },
  "Yes. The products featured here are chosen for low-friction installation so they are practical for rentals, sublets, and short-term living arrangements.": {
    en: "Yes. The products featured here are chosen for low-friction installation so they are practical for rentals, sublets, and short-term living arrangements.",
    pl: "Tak. Prezentowane tu produkty zostały wybrane pod kątem łatwego montażu, dzięki czemu sprawdzają się przy wynajmie, podnajmie i krótkoterminowym zamieszkaniu.",
  },
  "Why does this page convert well from Pinterest?": { en: "Why does this page convert well from Pinterest?", pl: "Dlaczego ta strona dobrze konwertuje z Pinteresta?" },
  "Because it answers a narrow intent quickly: renters want security they can deploy tonight without complicated setup or permanent changes.": {
    en: "Because it answers a narrow intent quickly: renters want security they can deploy tonight without complicated setup or permanent changes.",
    pl: "Ponieważ szybko odpowiada na konkretną potrzebę: najemcy chcą ochrony, którą wdrożą jeszcze dziś wieczorem, bez skomplikowanego montażu czy trwałych zmian.",
  },

  // travel-privacy-kit
  "Travel Privacy Kit for Hotels, Airports, and Rentals": { en: "Travel Privacy Kit for Hotels, Airports, and Rentals", pl: "Zestaw prywatności podróżnej na hotele, lotniska i wynajmowane lokale" },
  "A compact privacy-first travel setup for RFID protection, hidden camera checks, and secure document storage on the move.": {
    en: "A compact privacy-first travel setup for RFID protection, hidden camera checks, and secure document storage on the move.",
    pl: "Kompaktowy zestaw podróżny stawiający na prywatność — ochrona RFID, sprawdzanie ukrytych kamer i bezpieczne przechowywanie dokumentów w podróży.",
  },
  "Travel searches convert best when they solve a real anxiety. This kit focuses on privacy, organization, and low-stress travel routines that keep your important items protected.": {
    en: "Travel searches convert best when they solve a real anxiety. This kit focuses on privacy, organization, and low-stress travel routines that keep your important items protected.",
    pl: "Wyszukiwania związane z podróżą najlepiej konwertują, gdy rozwiązują realny niepokój. Ten zestaw skupia się na prywatności, organizacji i mniej stresujących rutynach podróżnych, które chronią Twoje ważne rzeczy.",
  },
  "Travel Privacy": { en: "Travel Privacy", pl: "Prywatność w podróży" },
  "The privacy kit you pack before the flight.": { en: "The privacy kit you pack before the flight.", pl: "Zestaw prywatności, który pakujesz przed lotem." },
  "Frequent flyers": { en: "Frequent flyers", pl: "Często latający" },
  "Hotel and Airbnb guests": { en: "Hotel and Airbnb guests", pl: "Goście hoteli i Airbnb" },
  "People who want stronger privacy on the road": { en: "People who want stronger privacy on the road", pl: "Osoby, które chcą większej prywatności w podróży" },
  "What should I pack first for travel privacy?": { en: "What should I pack first for travel privacy?", pl: "Co spakować najpierw dla prywatności w podróży?" },
  "Start with a passport wallet and a hidden camera detector. Those two items solve the most common privacy and organization concerns in one lightweight setup.": {
    en: "Start with a passport wallet and a hidden camera detector. Those two items solve the most common privacy and organization concerns in one lightweight setup.",
    pl: "Zacznij od portfela na paszport i detektora ukrytych kamer. Te dwa przedmioty rozwiązują najczęstsze problemy z prywatnością i organizacją w jednym lekkim zestawie.",
  },
  "Is RFID blocking still useful for travel?": { en: "Is RFID blocking still useful for travel?", pl: "Czy blokowanie RFID nadal jest przydatne w podróży?" },
  "Yes. It adds a simple layer of protection for cards and passports and helps keep your travel essentials organized in one place.": {
    en: "Yes. It adds a simple layer of protection for cards and passports and helps keep your travel essentials organized in one place.",
    pl: "Tak. Dodaje prostą warstwę ochrony dla kart i paszportów oraz pomaga trzymać podróżne niezbędniki uporządkowane w jednym miejscu.",
  },
  "Should I check hotel rooms every time?": { en: "Should I check hotel rooms every time?", pl: "Czy powinienem sprawdzać pokój hotelowy za każdym razem?" },
  "A quick scan on arrival is a smart habit if privacy matters to you. It takes only a few minutes and can significantly reduce uncertainty.": {
    en: "A quick scan on arrival is a smart habit if privacy matters to you. It takes only a few minutes and can significantly reduce uncertainty.",
    pl: "Szybkie sprawdzenie po przyjeździe to mądry nawyk, jeśli zależy Ci na prywatności. Zajmuje to tylko kilka minut i może znacznie zmniejszyć niepewność.",
  },

  // power-outage-readiness
  "Portable Power and Outage Readiness": { en: "Portable Power and Outage Readiness", pl: "Przenośne zasilanie i gotowość na przerwy w dostawie prądu" },
  "Backup power, communication, and vehicle readiness products for outages, storms, and everyday emergency planning.": {
    en: "Backup power, communication, and vehicle readiness products for outages, storms, and everyday emergency planning.",
    pl: "Produkty do zasilania awaryjnego, łączności i gotowości samochodowej na wypadek przerw w dostawie prądu, burz i codziennego planowania awaryjnego.",
  },
  "When the grid gets unreliable, buyers want simple priorities. This page focuses on which essentials to charge, pack, and keep ready first so your response feels calm instead of chaotic.": {
    en: "When the grid gets unreliable, buyers want simple priorities. This page focuses on which essentials to charge, pack, and keep ready first so your response feels calm instead of chaotic.",
    pl: "Gdy sieć energetyczna staje się zawodna, kupujący chcą prostych priorytetów. Ta strona skupia się na tym, co ładować, pakować i mieć przygotowane najpierw, aby Twoja reakcja była spokojna, a nie chaotyczna.",
  },
  "Outage Preparedness": { en: "Outage Preparedness", pl: "Gotowość na przerwy w dostawie prądu" },
  "Backup power that feels practical, not overwhelming.": { en: "Backup power that feels practical, not overwhelming.", pl: "Zasilanie awaryjne, które wydaje się praktyczne, a nie przytłaczające." },
  "Apartment and house outages": { en: "Apartment and house outages", pl: "Przerwy w dostawie prądu w mieszkaniu i domu" },
  "Car emergency kits": { en: "Car emergency kits", pl: "Awaryjne zestawy samochodowe" },
  "Off-grid weekends and storm prep": { en: "Off-grid weekends and storm prep", pl: "Weekendy poza siecią i przygotowanie na burze" },
  "What should I power first during an outage?": { en: "What should I power first during an outage?", pl: "Co zasilić najpierw podczas przerwy w dostawie prądu?" },
  "Start with phones, lights, and communication gear. Those items help you stay informed and make better decisions before moving to comfort or convenience devices.": {
    en: "Start with phones, lights, and communication gear. Those items help you stay informed and make better decisions before moving to comfort or convenience devices.",
    pl: "Zacznij od telefonów, świateł i sprzętu do łączności. Te rzeczy pomagają pozostać poinformowanym i podejmować lepsze decyzje, zanim przejdziesz do urządzeń zapewniających komfort.",
  },
  "Is a portable power station worth it for apartments?": { en: "Is a portable power station worth it for apartments?", pl: "Czy przenośna stacja zasilania opłaca się w mieszkaniu?" },
  "Yes. Compact units are especially useful in apartments because they provide backup charging without requiring a generator or permanent setup.": {
    en: "Yes. Compact units are especially useful in apartments because they provide backup charging without requiring a generator or permanent setup.",
    pl: "Tak. Kompaktowe urządzenia są szczególnie przydatne w mieszkaniach, ponieważ zapewniają zasilanie awaryjne bez potrzeby generatora czy trwałej instalacji.",
  },
  "What makes this page buyer-friendly?": { en: "What makes this page buyer-friendly?", pl: "Co sprawia, że ta strona jest przyjazna kupującym?" },
  "It removes the usual overwhelm and shows a simple priority order, which helps visitors move from curiosity to action faster.": {
    en: "It removes the usual overwhelm and shows a simple priority order, which helps visitors move from curiosity to action faster.",
    pl: "Eliminuje typowe przytłoczenie i pokazuje prostą kolejność priorytetów, co pomaga odwiedzającym szybciej przejść od ciekawości do działania.",
  },

  // solo-travel-edc-safety
  "Solo Travel EDC Safety Kit": { en: "Solo Travel EDC Safety Kit", pl: "Zestaw bezpieczeństwa EDC na podróże solo" },
  "A compact everyday carry setup for commuting, solo travel, and late-night confidence with a focus on visible deterrence and fast access.": {
    en: "A compact everyday carry setup for commuting, solo travel, and late-night confidence with a focus on visible deterrence and fast access.",
    pl: "Kompaktowy zestaw EDC na dojazdy, podróże solo i pewność siebie po zmroku, skupiony na widocznym odstraszaniu i szybkim dostępie.",
  },
  "The highest-converting EDC pages are the ones that help people feel prepared immediately. This kit combines simple deterrents, utility tools, and privacy protection in one clean plan.": {
    en: "The highest-converting EDC pages are the ones that help people feel prepared immediately. This kit combines simple deterrents, utility tools, and privacy protection in one clean plan.",
    pl: "Najlepiej konwertujące strony EDC to te, które od razu dają poczucie przygotowania. Ten zestaw łączy proste środki odstraszające, narzędzia użytkowe i ochronę prywatności w jednym przejrzystym planie.",
  },
  "A smarter EDC setup for real life, not fantasy gear.": { en: "A smarter EDC setup for real life, not fantasy gear.", pl: "Mądrzejszy zestaw EDC na prawdziwe życie, a nie fantazyjny sprzęt." },
  "Solo commuters": { en: "Solo commuters", pl: "Osoby dojeżdżające samodzielnie" },
  "Night-shift workers": { en: "Night-shift workers", pl: "Pracownicy nocnych zmian" },
  "Travelers who want quick-access safety tools": { en: "Travelers who want quick-access safety tools", pl: "Podróżni, którzy chcą narzędzi bezpieczeństwa z szybkim dostępem" },
  "What belongs in a solo travel EDC kit?": { en: "What belongs in a solo travel EDC kit?", pl: "Co powinno się znaleźć w zestawie EDC na podróż solo?" },
  "A personal alarm, a compact light, a dependable wallet setup, and a simple defensive tool usually cover the most common real-world needs.": {
    en: "A personal alarm, a compact light, a dependable wallet setup, and a simple defensive tool usually cover the most common real-world needs.",
    pl: "Alarm osobisty, kompaktowa latarka, niezawodny portfel i proste narzędzie obronne zwykle pokrywają najczęstsze realne potrzeby.",
  },
  "Why keep the kit small?": { en: "Why keep the kit small?", pl: "Dlaczego warto trzymać mały zestaw?" },
  "Small kits get used. The best safety setup is the one you will actually carry every day without thinking about it.": {
    en: "Small kits get used. The best safety setup is the one you will actually carry every day without thinking about it.",
    pl: "Małe zestawy są faktycznie używane. Najlepszy zestaw bezpieczeństwa to ten, który będziesz nosić codziennie, nie myśląc o tym.",
  },
  "Does this help Pinterest traffic convert?": { en: "Does this help Pinterest traffic convert?", pl: "Czy to pomaga konwertować ruch z Pinteresta?" },
  "Yes, because it pairs a clear use case with instantly understandable products and a low-friction shopping decision.": {
    en: "Yes, because it pairs a clear use case with instantly understandable products and a low-friction shopping decision.",
    pl: "Tak, ponieważ łączy jasny przypadek użycia z natychmiast zrozumiałymi produktami i łatwą decyzją zakupową.",
  },

  // crisis-readiness-72-hour-checklist
  "72-Hour Crisis Readiness Checklist for Blackouts and Civil Unrest": { en: "72-Hour Crisis Readiness Checklist for Blackouts and Civil Unrest", pl: "Lista kontrolna gotowości kryzysowej na 72 godziny na wypadek przerw w dostawie prądu i niepokojów" },
  "A focused preparedness page for power outages, civil unrest, and emergency evacuation with the most practical Amazon-ready gear.": {
    en: "A focused preparedness page for power outages, civil unrest, and emergency evacuation with the most practical Amazon-ready gear.",
    pl: "Skoncentrowana strona przygotowawcza na wypadek przerw w dostawie prądu, niepokojów społecznych i ewakuacji awaryjnej, z najbardziej praktycznym sprzętem dostępnym na Amazon.",
  },
  "A calm, practical checklist for the first 72 hours of a blackout, evacuation, or sudden disruption.": {
    en: "A calm, practical checklist for the first 72 hours of a blackout, evacuation, or sudden disruption.",
    pl: "Spokojna, praktyczna lista kontrolna na pierwsze 72 godziny przerwy w dostawie prądu, ewakuacji lub nagłego zakłócenia.",
  },
  "The best crisis plans are simple enough to use under stress. This checklist focuses on water, communication, power, medical basics, and home security so you can act fast without overbuying.": {
    en: "The best crisis plans are simple enough to use under stress. This checklist focuses on water, communication, power, medical basics, and home security so you can act fast without overbuying.",
    pl: "Najlepsze plany kryzysowe są na tyle proste, że da się z nich korzystać pod presją. Ta lista kontrolna skupia się na wodzie, łączności, zasilaniu, podstawach medycznych i ochronie domu, abyś mógł działać szybko bez nadmiernych zakupów.",
  },
  "The first 72 hours are easier when your checklist is already done.": { en: "The first 72 hours are easier when your checklist is already done.", pl: "Pierwsze 72 godziny są łatwiejsze, gdy Twoja lista kontrolna jest już gotowa." },
  "Households preparing for outages or unrest": { en: "Households preparing for outages or unrest", pl: "Gospodarstwa domowe przygotowujące się na przerwy w dostawie prądu lub niepokoje" },
  "Keep Power and Communication Alive": { en: "Keep Power and Communication Alive", pl: "Utrzymaj zasilanie i łączność" },
  "Start with a portable power station and a weather radio so you can charge devices and stay informed when the grid or internet fails.": {
    en: "Start with a portable power station and a weather radio so you can charge devices and stay informed when the grid or internet fails.",
    pl: "Zacznij od przenośnej stacji zasilania i radia pogodowego, aby móc ładować urządzenia i być na bieżąco, gdy zawiedzie sieć energetyczna lub internet.",
  },
  "Secure Water First": { en: "Secure Water First", pl: "Zabezpiecz wodę najpierw" },
  "A water filtration straw is one of the fastest ways to protect your first 72 hours because it keeps the most important resource available.": {
    en: "A water filtration straw is one of the fastest ways to protect your first 72 hours because it keeps the most important resource available.",
    pl: "Słomka filtrująca wodę to jeden z najszybszych sposobów na zabezpieczenie pierwszych 72 godzin, ponieważ utrzymuje dostępność najważniejszego zasobu.",
  },
  "Keep Basic Medical Supplies Ready": { en: "Keep Basic Medical Supplies Ready", pl: "Miej gotowe podstawowe zaopatrzenie medyczne" },
  "A waterproof first aid kit helps you handle small injuries, organize supplies, and avoid scrambling when stress is already high.": {
    en: "A waterproof first aid kit helps you handle small injuries, organize supplies, and avoid scrambling when stress is already high.",
    pl: "Wodoodporna apteczka pomaga zaopatrzyć drobne urazy, uporządkować zaopatrzenie i uniknąć chaosu, gdy poziom stresu jest już wysoki.",
  },
  "Protect the Home or Leave Fast": { en: "Protect the Home or Leave Fast", pl: "Zabezpiecz dom albo szybko wyjedź" },
  "Door reinforcement and an emergency car kit help you either stay safer in place or move quickly if evacuation becomes necessary.": {
    en: "Door reinforcement and an emergency car kit help you either stay safer in place or move quickly if evacuation becomes necessary.",
    pl: "Wzmocnienie drzwi i awaryjny zestaw samochodowy pomogą Ci albo bezpieczniej pozostać na miejscu, albo szybko się przemieścić, jeśli konieczna będzie ewakuacja.",
  },

  // bug-out-bag-essentials-checklist
  "Bug Out Bag Essentials: 10 Items to Pack First": { en: "Bug Out Bag Essentials: 10 Items to Pack First", pl: "Niezbędnik torby ewakuacyjnej: 10 rzeczy do spakowania najpierw" },
  "A focused evacuation landing page for the first items to pack when you need a practical bug out bag.": {
    en: "A focused evacuation landing page for the first items to pack when you need a practical bug out bag.",
    pl: "Skoncentrowana strona o ewakuacji, prezentująca pierwsze rzeczy do spakowania, gdy potrzebujesz praktycznej torby ewakuacyjnej.",
  },
  "A simple, buyer-friendly evacuation checklist that keeps the bag light, practical, and ready fast.": {
    en: "A simple, buyer-friendly evacuation checklist that keeps the bag light, practical, and ready fast.",
    pl: "Prosta, przyjazna kupującym lista kontrolna ewakuacji, dzięki której torba pozostaje lekka, praktyczna i szybko gotowa.",
  },
  "Bug out bags convert well because the intent is clear: people want the first essentials, not a giant fantasy loadout. This guide keeps the list short and actionable so it is easier to buy and easier to use.": {
    en: "Bug out bags convert well because the intent is clear: people want the first essentials, not a giant fantasy loadout. This guide keeps the list short and actionable so it is easier to buy and easier to use.",
    pl: "Torby ewakuacyjne dobrze konwertują, ponieważ intencja jest jasna: ludzie chcą pierwszych niezbędników, a nie ogromnego, fantazyjnego wyposażenia. Ten poradnik utrzymuje listę krótką i praktyczną, dzięki czemu łatwiej ją kupić i wykorzystać.",
  },
  "The fastest checklist for a real evacuation bag.": { en: "The fastest checklist for a real evacuation bag.", pl: "Najszybsza lista kontrolna prawdziwej torby ewakuacyjnej." },
  "Families building a 72-hour evacuation bag": { en: "Families building a 72-hour evacuation bag", pl: "Rodziny budujące torbę ewakuacyjną na 72 godziny" },
  "Buyers who want the first essentials in order": { en: "Buyers who want the first essentials in order", pl: "Kupujący, którzy chcą pierwszych niezbędników w kolejności" },
  "People preparing for fast departure scenarios": { en: "People preparing for fast departure scenarios", pl: "Osoby przygotowujące się na scenariusze szybkiego wyjazdu" },
  "Communication and alerts": { en: "Communication and alerts", pl: "Łączność i alerty" },
  "Warmth and medical basics": { en: "Warmth and medical basics", pl: "Ciepło i podstawy medyczne" },
  "Start with Water": { en: "Start with Water", pl: "Zacznij od wody" },
  "Pack a filtration straw first so the bag gives you access to safe water without adding much weight.": {
    en: "Pack a filtration straw first so the bag gives you access to safe water without adding much weight.",
    pl: "Spakuj najpierw słomkę filtrującą, aby torba dawała dostęp do bezpiecznej wody bez znacznego zwiększania wagi.",
  },
  "Stay Informed": { en: "Stay Informed", pl: "Bądź na bieżąco" },
  "A solar emergency radio gives you the information layer when the internet or grid is unreliable.": {
    en: "A solar emergency radio gives you the information layer when the internet or grid is unreliable.",
    pl: "Awaryjne radio solarne daje Ci warstwę informacyjną, gdy internet lub sieć energetyczna są zawodne.",
  },
  "Add Warmth and Medical Basics": { en: "Add Warmth and Medical Basics", pl: "Dodaj ciepło i podstawy medyczne" },
  "Emergency blankets and a waterproof first aid kit give you the simplest comfort and care layer for the first 72 hours.": {
    en: "Emergency blankets and a waterproof first aid kit give you the simplest comfort and care layer for the first 72 hours.",
    pl: "Koce termiczne i wodoodporna apteczka dają Ci najprostszą warstwę komfortu i opieki na pierwsze 72 godziny.",
  },
  "What should I pack first in a bug out bag?": { en: "What should I pack first in a bug out bag?", pl: "Co spakować najpierw do torby ewakuacyjnej?" },
  "Start with water, communication, warmth, and basic medical gear because those items solve the most immediate problems in an evacuation.": {
    en: "Start with water, communication, warmth, and basic medical gear because those items solve the most immediate problems in an evacuation.",
    pl: "Zacznij od wody, łączności, ciepła i podstawowego sprzętu medycznego, ponieważ te rzeczy rozwiązują najpilniejsze problemy podczas ewakuacji.",
  },
  "Why keep the bag light?": { en: "Why keep the bag light?", pl: "Dlaczego warto, aby torba była lekka?" },
  "A lighter bag is easier to grab, carry, and trust under stress, which makes it far more likely to be used when it matters.": {
    en: "A lighter bag is easier to grab, carry, and trust under stress, which makes it far more likely to be used when it matters.",
    pl: "Lżejszą torbę łatwiej chwycić, nieść i której można zaufać pod presją, co znacznie zwiększa szansę, że zostanie użyta, gdy będzie to ważne.",
  },
  "Does this page help sales?": { en: "Does this page help sales?", pl: "Czy ta strona pomaga w sprzedaży?" },
  "Yes. It presents a focused, ordered solution to a clear problem, which tends to convert better than broad survival content.": {
    en: "Yes. It presents a focused, ordered solution to a clear problem, which tends to convert better than broad survival content.",
    pl: "Tak. Przedstawia skoncentrowane, uporządkowane rozwiązanie konkretnego problemu, co zwykle konwertuje lepiej niż ogólne treści o przetrwaniu.",
  },

  // shelter-in-place-readiness-guide
  "Shelter in Place Readiness: What to Buy Before the Next Outage": { en: "Shelter in Place Readiness: What to Buy Before the Next Outage", pl: "Gotowość na pozostanie w domu: co kupić przed kolejną przerwą w dostawie prądu" },
  "A home-first landing page that helps people secure the house and stay functional when staying put is the safest move.": {
    en: "A home-first landing page that helps people secure the house and stay functional when staying put is the safest move.",
    pl: "Strona skupiona na domu, która pomaga zabezpieczyć dom i zachować jego funkcjonalność, gdy pozostanie na miejscu jest najbezpieczniejszym rozwiązaniem.",
  },
  "A home-first preparedness guide for blackouts, storms, and moments when staying put is the safest move.": {
    en: "A home-first preparedness guide for blackouts, storms, and moments when staying put is the safest move.",
    pl: "Przewodnik przygotowawczy skupiony na domu, na wypadek przerw w dostawie prądu, burz i sytuacji, gdy pozostanie na miejscu jest najbezpieczniejsze.",
  },
  "Sometimes the best decision is to stay home, lock down, and reduce exposure. This guide focuses on the products that help a home stay functional and harder to disturb when conditions get worse.": {
    en: "Sometimes the best decision is to stay home, lock down, and reduce exposure. This guide focuses on the products that help a home stay functional and harder to disturb when conditions get worse.",
    pl: "Czasami najlepszą decyzją jest zostać w domu, zabezpieczyć się i ograniczyć ekspozycję. Ten przewodnik skupia się na produktach, które pomagają domowi pozostać funkcjonalnym i trudniejszym do zakłócenia, gdy warunki się pogarszają.",
  },
  "The home readiness checklist for staying safer indoors.": { en: "The home readiness checklist for staying safer indoors.", pl: "Lista kontrolna gotowości domu na bezpieczniejsze pozostanie w środku." },
  "Use removable layers that strengthen the apartment without drilling or permanent changes.": {
    en: "Use removable layers that strengthen the apartment without drilling or permanent changes.",
    pl: "Użyj demontowalnych warstw, które wzmacniają mieszkanie bez wiercenia czy trwałych zmian.",
  },
  "Combine door reinforcement with smarter perimeter visibility for a more complete lockdown plan.": {
    en: "Combine door reinforcement with smarter perimeter visibility for a more complete lockdown plan.",
    pl: "Połącz wzmocnienie drzwi z mądrzejszą widocznością wokół domu, aby uzyskać pełniejszy plan zabezpieczenia.",
  },
  "Keep the home functional during extended outages while reducing stress for everyone inside.": {
    en: "Keep the home functional during extended outages while reducing stress for everyone inside.",
    pl: "Utrzymaj funkcjonalność domu podczas dłuższych przerw w dostawie prądu, zmniejszając stres wszystkich domowników.",
  },
  "Harden the Main Entry": { en: "Harden the Main Entry", pl: "Wzmocnij główne wejście" },
  "A door security bar is one of the quickest ways to make a main entry feel more secure right away.": {
    en: "A door security bar is one of the quickest ways to make a main entry feel more secure right away.",
    pl: "Blokada drzwi to jeden z najszybszych sposobów, aby główne wejście od razu poczuło się bezpieczniejsze.",
  },
  "Improve Exterior Visibility": { en: "Improve Exterior Visibility", pl: "Popraw widoczność na zewnątrz" },
  "Solar motion lighting makes it easier to see movement outside and can discourage unwanted approach after dark.": {
    en: "Solar motion lighting makes it easier to see movement outside and can discourage unwanted approach after dark.",
    pl: "Oświetlenie solarne z czujnikiem ruchu ułatwia dostrzeżenie ruchu na zewnątrz i może zniechęcić do niepożądanego zbliżania się po zmroku.",
  },
  "Keep Backup Power Ready": { en: "Keep Backup Power Ready", pl: "Miej gotowe zasilanie awaryjne" },
  "A portable power station helps keep phones, lights, and essential devices charged during long outages.": {
    en: "A portable power station helps keep phones, lights, and essential devices charged during long outages.",
    pl: "Przenośna stacja zasilania pomaga utrzymać naładowane telefony, światła i najważniejsze urządzenia podczas długich przerw w dostawie prądu.",
  },
  "Door reinforcement is often the first move because it protects the main entry and gives you immediate peace of mind.": {
    en: "Door reinforcement is often the first move because it protects the main entry and gives you immediate peace of mind.",
    pl: "Wzmocnienie drzwi to często pierwszy krok, ponieważ chroni główne wejście i daje natychmiastowy spokój ducha.",
  },
  "Should I add backup power?": { en: "Should I add backup power?", pl: "Czy powinienem dodać zasilanie awaryjne?" },
  "Yes. Even a small backup power solution helps keep phones charged, lights on, and communication available during an outage.": {
    en: "Yes. Even a small backup power solution helps keep phones charged, lights on, and communication available during an outage.",
    pl: "Tak. Nawet niewielkie rozwiązanie zasilania awaryjnego pomaga utrzymać naładowane telefony, włączone światła i dostępną łączność podczas przerwy w dostawie prądu.",
  },
  "Why does this page convert?": { en: "Why does this page convert?", pl: "Dlaczego ta strona konwertuje?" },
  "Because it solves a very specific problem with a short ordered list, which makes the purchase feel more manageable.": {
    en: "Because it solves a very specific problem with a short ordered list, which makes the purchase feel more manageable.",
    pl: "Ponieważ rozwiązuje bardzo konkretny problem za pomocą krótkiej, uporządkowanej listy, dzięki czemu zakup wydaje się łatwiejszy do ogarnięcia.",
  },

  // emergency-vehicle-kit-winter-guide
  "Emergency Vehicle Kit Checklist for Winter Roads and Evacuations": { en: "Emergency Vehicle Kit Checklist for Winter Roads and Evacuations", pl: "Lista kontrolna zestawu awaryjnego do samochodu na zimowe drogi i ewakuacje" },
  "A vehicle readiness landing page built for roadside safety, winter travel, and evacuation-ready driving.": {
    en: "A vehicle readiness landing page built for roadside safety, winter travel, and evacuation-ready driving.",
    pl: "Strona o gotowości samochodowej stworzona z myślą o bezpieczeństwie na drodze, zimowych podróżach i jeździe gotowej na ewakuację.",
  },
  "A practical trunk kit guide for winter commutes, road closures, and evacuation-ready driving.": {
    en: "A practical trunk kit guide for winter commutes, road closures, and evacuation-ready driving.",
    pl: "Praktyczny przewodnik po zestawie do bagażnika na zimowe dojazdy, zamknięcia dróg i jazdę gotową na ewakuację.",
  },
  "Vehicle kits are easy wins because they solve problems drivers already understand. This checklist focuses on the items that keep you warm, informed, and mobile if the car becomes your fallback plan.": {
    en: "Vehicle kits are easy wins because they solve problems drivers already understand. This checklist focuses on the items that keep you warm, informed, and mobile if the car becomes your fallback plan.",
    pl: "Zestawy samochodowe to łatwy wybór, ponieważ rozwiązują problemy, które kierowcy już rozumieją. Ta lista kontrolna skupia się na rzeczach, które utrzymają Cię w cieple, poinformowanym i mobilnym, jeśli samochód stanie się Twoim planem awaryjnym.",
  },
  "Build the trunk kit before the roads turn bad.": { en: "Build the trunk kit before the roads turn bad.", pl: "Skompletuj zestaw do bagażnika, zanim drogi staną się niebezpieczne." },
  "Roadside basics": { en: "Roadside basics", pl: "Podstawy pomocy drogowej" },
  "Warmth and safety": { en: "Warmth and safety", pl: "Ciepło i bezpieczeństwo" },
  "Keep a trunk kit that covers the basics without taking much space in a smaller car.": {
    en: "Keep a trunk kit that covers the basics without taking much space in a smaller car.",
    pl: "Miej zestaw do bagażnika, który pokrywa podstawy, nie zajmując dużo miejsca w mniejszym samochodzie.",
  },
  "Build a vehicle fallback plan that complements the rest of your home preparedness setup.": {
    en: "Build a vehicle fallback plan that complements the rest of your home preparedness setup.",
    pl: "Zbuduj samochodowy plan awaryjny, który uzupełnia resztę Twojego domowego przygotowania.",
  },
  "Prioritize the items that keep kids and adults safer during winter travel or evacuation.": {
    en: "Prioritize the items that keep kids and adults safer during winter travel or evacuation.",
    pl: "Nadaj priorytet rzeczom, które zwiększają bezpieczeństwo dzieci i dorosłych podczas zimowych podróży lub ewakuacji.",
  },
  "Roadside Basics First": { en: "Roadside Basics First", pl: "Najpierw podstawy pomocy drogowej" },
  "Start with a purpose-built emergency car kit so you have the trunk essentials in one place.": {
    en: "Start with a purpose-built emergency car kit so you have the trunk essentials in one place.",
    pl: "Zacznij od dedykowanego awaryjnego zestawu samochodowego, aby mieć niezbędniki do bagażnika w jednym miejscu.",
  },
  "Add Warmth and Safety": { en: "Add Warmth and Safety", pl: "Dodaj ciepło i bezpieczeństwo" },
  "Emergency blankets help keep body heat in while you wait for help or move through a cold-weather stop.": {
    en: "Emergency blankets help keep body heat in while you wait for help or move through a cold-weather stop.",
    pl: "Koce termiczne pomagają zatrzymać ciepło ciała, gdy czekasz na pomoc lub zatrzymujesz się w zimową pogodę.",
  },
  "Keep a Backup Charge": { en: "Keep a Backup Charge", pl: "Miej zapasowe naładowanie" },
  "A portable power station keeps phones and lights available if the car is stranded longer than expected.": {
    en: "A portable power station keeps phones and lights available if the car is stranded longer than expected.",
    pl: "Przenośna stacja zasilania utrzymuje dostępność telefonów i świateł, jeśli samochód utknie dłużej niż oczekiwano.",
  },

  // blackout-home-security-plan
  "Blackout Home Security Plan: What to Secure When the Grid Goes Down": { en: "Blackout Home Security Plan: What to Secure When the Grid Goes Down", pl: "Plan bezpieczeństwa domu na wypadek przerwy w dostawie prądu: co zabezpieczyć, gdy zabraknie prądu" },
  "A blackout-focused home security landing page that helps people secure the house before lights and routines fail.": {
    en: "A blackout-focused home security landing page that helps people secure the house before lights and routines fail.",
    pl: "Strona o bezpieczeństwie domu skupiona na przerwach w dostawie prądu, pomagająca zabezpieczyć dom, zanim zawiodą światła i codzienna rutyna.",
  },
  "A blackout changes the risk profile fast. This guide focuses on the first home security upgrades to make before lights and routines fail.": {
    en: "A blackout changes the risk profile fast. This guide focuses on the first home security upgrades to make before lights and routines fail.",
    pl: "Przerwa w dostawie prądu szybko zmienia profil ryzyka. Ten poradnik skupia się na pierwszych usprawnieniach bezpieczeństwa domu, które warto wprowadzić, zanim zawiodą światła i codzienna rutyna.",
  },
  "When power goes out, visibility, access control, and deterrence become more important. This plan keeps the home safer without turning it into a construction project.": {
    en: "When power goes out, visibility, access control, and deterrence become more important. This plan keeps the home safer without turning it into a construction project.",
    pl: "Gdy zabraknie prądu, widoczność, kontrola dostępu i odstraszanie stają się ważniejsze. Ten plan zwiększa bezpieczeństwo domu, nie zamieniając go w projekt budowlany.",
  },
  "Blackout Prep": { en: "Blackout Prep", pl: "Przygotowanie na przerwy w dostawie prądu" },
  "What to secure before the lights go out.": { en: "What to secure before the lights go out.", pl: "Co zabezpieczyć, zanim zgasną światła." },
  "Families preparing for outages": { en: "Families preparing for outages", pl: "Rodziny przygotowujące się na przerwy w dostawie prądu" },
  "Homeowners who want better deterrence": { en: "Homeowners who want better deterrence", pl: "Właściciele domów, którzy chcą lepszego odstraszania" },
  "Buyers who need a simple blackout security plan": { en: "Buyers who need a simple blackout security plan", pl: "Kupujący, którzy potrzebują prostego planu bezpieczeństwa na wypadek przerwy w dostawie prądu" },
  "Lock down entry points": { en: "Lock down entry points", pl: "Zabezpiecz punkty wejścia" },
  "Restore perimeter visibility": { en: "Restore perimeter visibility", pl: "Przywróć widoczność wokół domu" },
  "Keep eyes on the property": { en: "Keep eyes on the property", pl: "Miej oko na posesję" },
  "Maintain backup power": { en: "Maintain backup power", pl: "Utrzymuj zasilanie awaryjne" },
  "Start with easy, removable upgrades that give you protection without permanent installation.": {
    en: "Start with easy, removable upgrades that give you protection without permanent installation.",
    pl: "Zacznij od prostych, demontowalnych usprawnień, które dają ochronę bez trwałej instalacji.",
  },
  "Add the strongest home-based layers to protect the property when the grid goes down.": {
    en: "Add the strongest home-based layers to protect the property when the grid goes down.",
    pl: "Dodaj najsilniejsze warstwy ochrony domowej, aby zabezpieczyć posesję, gdy zabraknie prądu.",
  },
  "Keep the house lit, monitored, and usable so everyone stays calmer during the outage.": {
    en: "Keep the house lit, monitored, and usable so everyone stays calmer during the outage.",
    pl: "Utrzymuj dom oświetlony, monitorowany i użyteczny, aby wszyscy zachowali spokój podczas przerwy w dostawie prądu.",
  },
  "Lock Down Entry Points": { en: "Lock Down Entry Points", pl: "Zabezpiecz punkty wejścia" },
  "A smart lock helps keep the main entry easier to control when visibility is low and routines are disrupted.": {
    en: "A smart lock helps keep the main entry easier to control when visibility is low and routines are disrupted.",
    pl: "Inteligentny zamek pomaga łatwiej kontrolować główne wejście, gdy widoczność jest ograniczona, a rutyna zakłócona.",
  },
  "Restore Perimeter Visibility": { en: "Restore Perimeter Visibility", pl: "Przywróć widoczność wokół domu" },
  "Solar motion lights give you quick visibility around entry points and can make the property less inviting after dark.": {
    en: "Solar motion lights give you quick visibility around entry points and can make the property less inviting after dark.",
    pl: "Lampy solarne z czujnikiem ruchu dają szybką widoczność wokół punktów wejścia i mogą sprawić, że posesja będzie mniej zachęcająca po zmroku.",
  },
  "Keep Eyes on the Property": { en: "Keep Eyes on the Property", pl: "Miej oko na posesję" },
  "An indoor or outdoor security camera helps you verify movement and monitor the home if the blackout lasts.": {
    en: "An indoor or outdoor security camera helps you verify movement and monitor the home if the blackout lasts.",
    pl: "Kamera wewnętrzna lub zewnętrzna pomaga zweryfikować ruch i monitorować dom, jeśli przerwa w dostawie prądu się przedłuża.",
  },
  "What should I secure first during a blackout?": { en: "What should I secure first during a blackout?", pl: "Co zabezpieczyć najpierw podczas przerwy w dostawie prądu?" },
  "Focus on the main entry, perimeter visibility, and backup power because those layers provide the most immediate protection.": {
    en: "Focus on the main entry, perimeter visibility, and backup power because those layers provide the most immediate protection.",
    pl: "Skup się na głównym wejściu, widoczności wokół domu i zasilaniu awaryjnym, ponieważ te warstwy zapewniają najbardziej natychmiastową ochronę.",
  },
  "Can a blackout make a home more vulnerable?": { en: "Can a blackout make a home more vulnerable?", pl: "Czy przerwa w dostawie prądu może zwiększyć podatność domu na zagrożenia?" },
  "Yes. Reduced visibility and disrupted routines can make a property easier to approach, so simple prep steps matter a lot.": {
    en: "Yes. Reduced visibility and disrupted routines can make a property easier to approach, so simple prep steps matter a lot.",
    pl: "Tak. Ograniczona widoczność i zakłócona rutyna mogą ułatwić zbliżenie się do posesji, dlatego proste kroki przygotowawcze mają duże znaczenie.",
  },
  "Does this page help with sales?": { en: "Does this page help with sales?", pl: "Czy ta strona pomaga w sprzedaży?" },
  "Yes. It gives buyers a clear order of action and ties each step to a specific product, which improves purchase confidence.": {
    en: "Yes. It gives buyers a clear order of action and ties each step to a specific product, which improves purchase confidence.",
    pl: "Tak. Daje kupującym jasną kolejność działań i łączy każdy krok z konkretnym produktem, co zwiększa pewność zakupu.",
  },

  // --- Favorites collections + default product proof fallback ---
  "Home Fortress Essentials": { en: "Home Fortress Essentials", pl: "Podstawy fortecy domowej" },
  "Top-performing mechanical, lighting, and alert upgrades to secure doors, windows, and dark entry points.": {
    en: "Top-performing mechanical, lighting, and alert upgrades to secure doors, windows, and dark entry points.",
    pl: "Najskuteczniejsze mechaniczne, świetlne i alarmowe usprawnienia zabezpieczające drzwi, okna i ciemne punkty wejścia.",
  },
  "Urban EDC Safety": { en: "Urban EDC Safety", pl: "Miejskie bezpieczeństwo EDC" },
  "Non-lethal personal protection tools for commuting, solo travel, and late-night confidence.": {
    en: "Non-lethal personal protection tools for commuting, solo travel, and late-night confidence.",
    pl: "Nieletalne narzędzia ochrony osobistej na dojazdy, podróże solo i pewność siebie po zmroku.",
  },
  "Emergency Readiness": { en: "Emergency Readiness", pl: "Gotowość na sytuacje awaryjne" },
  "Critical gear for survival, off-grid communication, backup power, and vehicle preparedness.": {
    en: "Critical gear for survival, off-grid communication, backup power, and vehicle preparedness.",
    pl: "Kluczowy sprzęt do przetrwania, łączności poza siecią, zasilania awaryjnego i gotowości samochodowej.",
  },
  "Cyber Shield Digital Defense": { en: "Cyber Shield Digital Defense", pl: "Tarcza cybernetyczna — cyfrowa obrona" },
  "Hardened hardware for digital identity, travel privacy, and smart home protection.": {
    en: "Hardened hardware for digital identity, travel privacy, and smart home protection.",
    pl: "Wzmocniony sprzęt do ochrony tożsamości cyfrowej, prywatności w podróży i zabezpieczenia smart domu.",
  },
  "A compact travel-ready mix of RFID protection, hidden camera checks, and portable safety tools.": {
    en: "A compact travel-ready mix of RFID protection, hidden camera checks, and portable safety tools.",
    pl: "Kompaktowy zestaw podróżny łączący ochronę RFID, sprawdzanie ukrytych kamer i przenośne narzędzia bezpieczeństwa.",
  },
  "4,000+ reviews": { en: "4,000+ reviews", pl: "4000+ opinii" },
  "Built to simplify your daily routine": { en: "Built to simplify your daily routine", pl: "Zaprojektowany, by uprościć Twoją codzienną rutynę" },
  "Creates visible comfort and confidence": { en: "Creates visible comfort and confidence", pl: "Zapewnia odczuwalny komfort i pewność siebie" },
  "Easy to maintain as a long-term habit": { en: "Easy to maintain as a long-term habit", pl: "Łatwy do utrzymania jako długoterminowy nawyk" },
  "Travel Privacy Kit": { en: "Travel Privacy Kit", pl: "Zestaw prywatności podróżnej" },
};
