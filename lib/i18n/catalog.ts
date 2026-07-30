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
};
