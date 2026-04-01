import { createContext, useContext, useState, ReactNode } from "react";

type Language = "hu" | "en";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  hu: {
    // Nav
    "nav.about": "Bemutatkozás",
    "nav.team": "Munkatársaink",
    "nav.projects": "Munkáink",
    "nav.contact": "Kapcsolat",
    // Home
    "home.title": "Tartószerkezeti tervezés és szakértés",
    "home.subtitle": "Szerkezetben gondolkodunk – koncepciótól a megvalósulásig. Vasbeton, acél-, fa- és üvegszerkezetek az alapoktól a tetőig.",
    "home.cta": "Bővebben",
    // About
    "about.title": "Bemutatkozás",
    "about.p1": "Az MDRS2 Mérnökiroda tartószerkezeti tervezéssel és szakértéssel foglalkozik. Irodánk az építőipar szinte minden területén szerzett tapasztalatot az elmúlt évek során.",
    "about.p2": "Tervezési tevékenységünk kiterjed vasbeton, acél-, fa- és üvegszerkezetek komplex tervezésére, az alapozástól a tetőszerkezetig. Munkánk során a koncepcionális tervezéstől a kiviteli tervek készítéséig vállalunk feladatokat.",
    "about.p3": "Szakértői tevékenységünk keretében épületdiagnosztikát, állapotfelmérést és szerkezeti felülvizsgálatot végzünk. Célunk a megbízható, gazdaságos és esztétikus szerkezeti megoldások kidolgozása.",
    // Team
    "team.title": "Munkatársaink",
    "team.placeholder.role": "Szerkezettervező mérnök",
    // Projects
    "projects.title": "Munkáink",
    "projects.category.residential": "Lakóépület",
    "projects.category.commercial": "Kereskedelmi",
    "projects.category.industrial": "Ipari",
    "projects.category.public": "Közintézmény",
    // Contact
    "contact.title": "Kapcsolat",
    "contact.address.label": "Cím",
    "contact.phone.label": "Telefon",
    "contact.email.label": "Email",
    "contact.address": "1234 Budapest, Példa utca 1.",
    "contact.phone": "+36 1 234 5678",
    "contact.email": "info@mdrs2.hu",
  },
  en: {
    // Nav
    "nav.about": "About",
    "nav.team": "Our Team",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    // Home
    "home.title": "Structural Design & Engineering",
    "home.subtitle": "We think in structures — from concept to completion. Reinforced concrete, steel, timber and glass structures from foundations to rooftop.",
    "home.cta": "Learn More",
    // About
    "about.title": "About Us",
    "about.p1": "MDRS2 Engineering Office specializes in structural design and consulting. Our office has gained experience in almost every area of the construction industry over the past years.",
    "about.p2": "Our design activities cover the complex design of reinforced concrete, steel, timber and glass structures, from foundations to roof structures. We undertake tasks from conceptual design to detailed construction plans.",
    "about.p3": "As part of our consulting activities, we perform building diagnostics, condition assessments and structural reviews. Our goal is to develop reliable, economical and aesthetically pleasing structural solutions.",
    // Team
    "team.title": "Our Team",
    "team.placeholder.role": "Structural Engineer",
    // Projects
    "projects.title": "Our Projects",
    "projects.category.residential": "Residential",
    "projects.category.commercial": "Commercial",
    "projects.category.industrial": "Industrial",
    "projects.category.public": "Public",
    // Contact
    "contact.title": "Contact",
    "contact.address.label": "Address",
    "contact.phone.label": "Phone",
    "contact.email.label": "Email",
    "contact.address": "1234 Budapest, Példa utca 1.",
    "contact.phone": "+36 1 234 5678",
    "contact.email": "info@mdrs2.hu",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Language>("hu");

  const t = (key: string) => translations[lang][key] || key;

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};
