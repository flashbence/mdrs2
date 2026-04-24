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
    "home.title": "Tartószerkezeti tervezés \nés \nszakértés",
    "home.subtitle": "Szerkezetben gondolkodunk – koncepciótól a megvalósulásig. Vasbeton, acél-, fa- és üvegszerkezetek az alapoktól a tetőig.",
    "home.cta": "Bővebben",
    // About
    "about.title": "Rólunk",
    "about.p1": "2018-ban, 20 év szerkezettervezői és szakértői gyakorlat birtokában alapítottuk az mdrs2 Mérnöki Szolgáltató Kft-t, melynek fő profilja általános tartószerkezeti tervezés és szakértés, elsődlegesen magasépítési és műtárgyépítési területen. Fő profilunk az általános szerkezettervezés, szakmai tevékenységünk kiterjed vasbeton, acél, fa és falazott szerkezetekre, építményekre",
    "about.p2": "Tervezési feladatainkat a koncepcionális alapvetésektől a kiviteli, illetve megvalósulási tervfázisokig végezzük. Portfóliónkban szerepelnek új épületek és átalakítások, felújítások, műemléki rehabilitációs feladatok egyaránt. Munkánk során célunk a műszakilag optimális, gazdaságos megoldások megtalálása, tervezése, legyen szó kisebb vagy nagyobb lakóépületről, középületről, ipari szerkezetről, speciális mérnöki műtárgyról. Kiemelt figyelemmel követjük az új technológiákat, a jövő megoldásai és anyagait egyaránt. Szakértői feladataink az általános tartószerkezeti állapotértékeléstől a speciális beavatkozások, megerősítések vizsgálatáig vagy éppen tervezéséig átfogják a szakmai területeket.",
    "about.p3": "Organikusan fejlődő irodánk büszke partnere számos építészirodának és kivitelező szakvállalatnak, folyamatosan fejlesztett szakmai kompetenciáink pedig alapot adnak a jövőbeli mérnöki kihívásoknak való megfelelésre, a jövő épületeinek és építményeinek megtervezésére! A tervezői és szakértői munkához szükséges kamarai jogosultságokkal rendelkezünk: T, SZÉS-1, VZ-TER, VZ-TEL.",
    // Team
    "team.title": "Munkatársaink",
    "team.placeholder.role": "Szerkezettervező mérnök",
    "team.role.botond": "szerkezettervező mérnök, tulajdonos, ügyvezető (T, SZÉS-1)",
    "team.role.koppany": "szerkezettervező mérnök, tulajdonos, ügyvezető (T, SZÉS-1, VZ-TER, VZ-TEL)",
    "team.role.reka": "szerkezettervező mérnök (T)",
    "team.role.milan": "szerkezettervező mérnök",
    "team.role.ozzie": "általános irodai segéderő",
    "team.role.peter": "szerkezettervező mérnök",
    "team.role.bence": "szerkezettervező mérnök",
    "team.role.erzsebet": "szerkezettervező mérnök",
    "team.name.botond": "Madaras Botond",
    "team.name.koppany": "Madaras Koppány",
    "team.name.reka": "Dobnerné Éliás Réka",
    "team.name.milan": "Kerecsanin Milán",
    "team.name.ozzie": "Ozzie",
    "team.name.peter": "Kincses Péter",
    "team.name.bence": "Gulácsy Bence",
    "team.name.erzsebet": "Bálintné Tamás Erzsébet",
    // Projects
    "projects.title": "Munkáink",
    // Contact
    "contact.title": "Kapcsolat",
    "contact.glass.title": "Lépjen velünk kapcsolatba",
    "contact.glass.subtitle": "Céges elérhetőségek és adatok",
    "contact.office": "Iroda: 1118 Budapest, Budaörsi út 131/b.",
    "contact.hq": "Székhely: 1156 Budapest, Páskomliget utca 62. II/12.",
    "contact.taxnum": "Adószám",
    "contact.regnum": "Cégjegyzékszám",
    "contact.follow": "Kövessen minket:",
    "contact.onFacebook": "a Facebookon",
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
    "about.p1": "In 2018, with 20 years of structural engineering and consulting experience, we founded mdrs2 Mérnöki Szolgáltató Kft., specializing in general structural design and consulting, primarily in building construction and civil engineering. Our core profile is general structural design, with professional activities covering reinforced concrete, steel, timber and masonry structures and buildings.",
    "about.p2": "We carry out our design tasks from conceptual foundations to construction and as-built documentation phases. Our portfolio includes new buildings, renovations, refurbishments, and heritage rehabilitation projects alike. Our goal is to find and design technically optimal, economical solutions, whether for smaller or larger residential buildings, public buildings, industrial structures, or special engineering structures. We closely follow new technologies, future solutions and materials alike. Our consulting tasks span from general structural condition assessments to the analysis or design of special interventions and reinforcements across professional fields.",
    "about.p3": "Our organically growing office is a proud partner of numerous architectural firms and construction companies, and our continuously developed professional competencies provide a foundation for meeting future engineering challenges and designing the buildings and structures of tomorrow! We hold the necessary professional chamber qualifications: T, SZÉS-1, VZ-TER, VZ-TEL.",
    // Team
    "team.title": "Our Team",
    "team.placeholder.role": "Structural Engineer",
    "team.role.botond": "structural engineer, co-owner, managing director (T, SZÉS-1)",
    "team.role.koppany": "structural engineer, co-owner, managing director (T, SZÉS-1, VZ-TER, VZ-TEL)",
    "team.role.reka": "structural engineer (T)",
    "team.role.milan": "structural engineer",
    "team.role.ozzie": "general office assistant",
    "team.role.peter": "structural engineer",
    "team.role.bence": "structural engineer",
    "team.role.erzsebet": "structural engineer",
    "team.name.botond": "Botond Madaras",
    "team.name.koppany": "Koppány Madaras",
    "team.name.reka": "Réka Dobnerné Éliás",
    "team.name.milan": "Milán Kerecsanin",
    "team.name.ozzie": "Ozzie",
    "team.name.peter": "Péter Kincses",
    "team.name.bence": "Bence Gulácsy",
    "team.name.erzsebet": "Erzsébet Bálintné Tamás",
    // Projects
    "projects.title": "Our Projects",
    // Contact
    "contact.title": "Contact",
    "contact.glass.title": "Get in touch",
    "contact.glass.subtitle": "Company details and contact information",
    "contact.office": "Office: 1118 Budapest, Budaörsi út 131/b.",
    "contact.hq": "Headquarters: 1156 Budapest, Páskomliget utca 62. II/12.",
    "contact.taxnum": "Tax number",
    "contact.regnum": "Registration number",
    "contact.follow": "Follow us:",
    "contact.onFacebook": "on Facebook",
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
