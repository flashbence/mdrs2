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
    "about.p1": "MDRS2 Engineering Office specializes in structural design and consulting. Our office has gained experience in almost every area of the construction industry over the past years.",
    "about.p2": "Our design activities cover the complex design of reinforced concrete, steel, timber and glass structures, from foundations to roof structures. We undertake tasks from conceptual design to detailed construction plans.",
    "about.p3": "As part of our consulting activities, we perform building diagnostics, condition assessments and structural reviews. Our goal is to develop reliable, economical and aesthetically pleasing structural solutions.",
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
