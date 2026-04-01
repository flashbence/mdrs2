import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

type Category = "lako" | "kozeput" | "ipari" | "specialis" | "szakertes";

interface Project {
  name: string;
  year: string;
  description: string;
  status: string;
}

const tabLabels: Record<string, Record<Category, string>> = {
  hu: {
    lako: "Lakóépületek",
    kozeput: "Középületek",
    ipari: "Ipari létesítmények",
    specialis: "Speciális szerkezetek",
    szakertes: "Szakértői munkák",
  },
  en: {
    lako: "Residential Buildings",
    kozeput: "Public Buildings",
    ipari: "Industrial Facilities",
    specialis: "Special Structures",
    szakertes: "Expertise",
  },
};

const descriptions: Record<string, Record<Category, string>> = {
  hu: {
    lako: "Családi házak, villaépületek és többlakásos társasházak Budapesten és más településeken.",
    kozeput: "Irodaépületek, oktatási, egészségügyi és sportlétesítmények, illetve egyházi épületek.",
    ipari: "Raktárak, gyártóüzemek, csarnokok, borászati épületek, illetve ipari létesítményekhez kapcsolódó mérnöki műtárgyak.",
    specialis: "Egyedi üveg lefedések, héjszerkezetek, homlokzatburkolatok, segédszerkezetek, illetve köztéri, művészeti alkotásokhoz kapcsolódó tartószerkezetek.",
    szakertes: "Tartószerkezeti szakértői feladatok, meglévő épületek ill. műtárgyak felülvizsgálata, állapotvizsgálata, épületdiagnosztika.",
  },
  en: {
    lako: "Detached houses, villa buildings and multi-apartment residential buildings in Budapest and other municipalities.",
    kozeput: "Office buildings, educational, healthcare and sports facilities, as well as ecclesiastical buildings.",
    ipari: "Warehouses, manufacturing plants, industrial halls, winery buildings, as well as engineering structures associated with industrial facilities.",
    specialis: "Custom glass roof structures, shell structures, façade cladding systems, auxiliary structures, as well as supporting structures related to public-space artistic installations.",
    szakertes: "Structural engineering expert services, inspection and condition assessment of existing buildings and engineering structures, and building diagnostics.",
  },
};

const tableHeaders: Record<string, string[]> = {
  hu: ["Kiemelt projektek", "Tervezés éve", "Leírás", "Állapot"],
  en: ["Featured Projects", "Design Year", "Description", "Status"],
};

const projects: Record<Category, Project[]> = {
  lako: [
    { name: "Siófok – Galerius Panorama Wellness", year: "2019-2021", description: "132 lakásos lakóépület", status: "kivitelezés alatt" },
    { name: "Érd – Alispán utca – lakóépület", year: "2019-2020", description: "20 lakásos lakóépület", status: "megépült" },
    { name: "Budapest – Lake 11 – I. és II. telkek", year: "2021-2023", description: "119 és 136 lakásos lakóépületek", status: "engedélyezési és kiviteli terv" },
    { name: "Budapest – Lake 11 - IX-XIV. telkek", year: "2021-2023", description: "20 lakásos lakóépületek", status: "engedélyezési és kiviteli terv" },
    { name: "Balatonakarattya – Többlakásos társasházak", year: "2021-2022", description: "5 lakásos lakóépületek", status: "megépült" },
    { name: "Balatonfüred – Honvéd utca - lakóépület", year: "2021-2023", description: "4 lakásos lakóépület", status: "kivitelezés alatt" },
    { name: "Budapest – Madárhegy Villapark", year: "2022", description: "280 lakásos lakóépület", status: "engedélyezési terv" },
    { name: "Székesfehérvár – Távirda utca", year: "2023-2024", description: "8 lakásos lakóépület", status: "megépült" },
    { name: "Budapest – Árnyaserdő Villapark", year: "2022-2024", description: "101 lakásos lakóépület", status: "megépült" },
    { name: "Budapest – Somfa Liget", year: "2024", description: "150 lakásos lakóépület", status: "engedélyezési terv" },
    { name: "Budapest – Barlang utca", year: "2020-2025", description: "4 és 5 lakásos lakóépületek", status: "kivitelezés alatt" },
    { name: "Budapest – Herman Ottó út", year: "2023-2024", description: "5 lakásos lakóépület", status: "megépült" },
    { name: "Budapest – Ménesi út", year: "2023-2025", description: "8 lakásos lakóépület", status: "engedélyezési és kiviteli terv" },
    { name: "Budapest – Apáthy Park", year: "2024-2025", description: "5 lakásos lakóépületek", status: "engedélyezési terv" },
    { name: "Budapest – Diószegi út", year: "2025", description: "CLT szerkezetű többlakásos lakóépület", status: "engedélyezési és kiviteli terv" },
    { name: "Budapest – Gát utca 23-25", year: "2025", description: "Lakóépület rehabilitáció", status: "engedélyezési és kiviteli terv" },
    { name: "Budapest – Király utca", year: "2024-2025", description: "Műemlék lakóépület rehabilitáció", status: "engedélyezési és kiviteli terv" },
  ],
  kozeput: [
    { name: "Szeged - Vántus István Zeneiskola", year: "2018-2020", description: "Műemléki épület rekonstrukciója", status: "megépült" },
    { name: "Budapest – Gizella Campus fejlesztése", year: "2019-2021", description: "Több ütemű irodaépület fejlesztés", status: "engedélyezési és kiviteli terv" },
    { name: "Budapest - Pasaréti Közösségi ház", year: "2019-2020", description: "Négyszintes új közösségi ház", status: "megépült" },
    { name: "Budapest - Pasaréti Páduai Szent Antal Plébánia", year: "2019-2020", description: "Rendház, plébánia felújítása, bővítése", status: "megépült" },
    { name: "Hévíz – Ortodox templom", year: "2019-2020", description: "Templom tömör tégla falazatokkal, boltozatokkal", status: "megépült" },
    { name: "Budapest – New Age irodaház", year: "2020-2021", description: "9 emeletes irodaház", status: "kiviteli terv" },
    { name: "Budapest - Richter Gedeon Zrt. pihenőparkja", year: "2020-2023", description: "Konferenciaterem és edzőterem", status: "megépült" },
    { name: "Budapest - Millenáris Fogadóépület", year: "2020-2021", description: "Fogadóépület rekonstrukciója, bővítése", status: "megépült" },
    { name: "Pápa - Református Gimnázium", year: "2020-2021", description: "Ötszintes kollégiumi épület és mélygarázs", status: "megépült" },
    { name: "Balatonszepezd – Oktatási központ", year: "2021-2022", description: "Szállásépület és konferenciaterem", status: "megépült" },
    { name: "Kisköre – Sportközpont", year: "2021", description: "Előregyártott vázszerkezetű épület", status: "megépült" },
    { name: "Budapest – Almássy téri szabadidőközpont", year: "2021-2023", description: "Meglévő épület szállodává alakítása", status: "engedélyezési és kiviteli terv" },
    { name: "Zalacsány – Konferencia épület bővítése", year: "2022", description: "CLT szerkezetű konferenciaterem", status: "megépült" },
    { name: "Budapest – Hajós Alfréd tanuszoda bővítése", year: "2022-2023", description: "50 m-es tanuszoda lelátóval", status: "engedélyezési terv" },
    { name: "Budapest – Centrale Project", year: "2022-2023", description: "Szolgáltatóház, iroda és hotel", status: "engedélyezési terv" },
    { name: "Budapest – Kispesti Református óvoda", year: "2023", description: "Háromszintes, négy csoportszobás óvoda", status: "engedélyezési és kiviteli terv" },
    { name: "Budapest – DSB Budapesti Német iskola", year: "2023", description: "Iskolabővítés konténerépülettel", status: "megépült" },
    { name: "Budapest – Lejtő úti strand és sportépület", year: "2023-2024", description: "Strand fejlesztése és új sportépület", status: "engedélyezési és kiviteli terv" },
    { name: "Budapest – MTK Sportpark - Edzőterem", year: "2023-2024", description: "Öltöző- és sportépület, kézilabdapálya", status: "megépült" },
    { name: "Budapest – Magyar Építészeti Múzeum és Központ", year: "2024-2025", description: "Meglévő villaépületek rekonstrukciója", status: "engedélyezési és kiviteli terv" },
    { name: "Budapest – Magyar Építészeti Múzeum (vázas)", year: "2024-2025", description: "Meglévő vázas épületek rekonstrukciója", status: "engedélyezési és kiviteli terv" },
    { name: "Budapest – Magyar Építészeti Múzeum (új)", year: "2024-2025", description: "Új múzeumi épület", status: "engedélyezési és kiviteli terv" },
    { name: "Dorog – Richter Gedeon Zrt. új irodaépülete", year: "2024-2025", description: "Kétszintes irodaépület", status: "engedélyezési és kiviteli terv" },
    { name: "Nagymaros - Iskola", year: "2025", description: "CLT szerkezetű földszintes iskolaépület", status: "megépült" },
  ],
  ipari: [
    { name: "Eger – Kereskedelmi épület", year: "2024-2025", description: "Előregyártott vázszerkezetű épület", status: "megépült" },
    { name: "Gizella Loft – EMC labor", year: "2020", description: "Előregyártott szerkezetű raktárépület", status: "megépült" },
    { name: "Balatonfüred – Lázár borászat", year: "2021-2023", description: "Borászati üzem és vendéglátóhely", status: "megépült" },
    { name: "Kál – Gabonasiló alapozása", year: "2021", description: "Silócsoport alapozási szerkezete", status: "engedélyezési és kiviteli terv" },
    { name: "Bélapátfalva – Tésztaüzem", year: "2021", description: "Acélszerkezetű gyártócsarnok", status: "engedélyezési és kiviteli terv" },
    { name: "Eger – OMYA üzem", year: "2022", description: "Mészkőörlő üzem bővítése", status: "engedélyezési terv" },
    { name: "Budapest – Római part árvízvédelmi létesítménye", year: "2022-2023", description: "Elsőrendű árvízvédelmi vonal tervezése", status: "vízjogi létesítési engedély" },
    { name: "Gyermely – Ziegler ostyaüzem", year: "2022-2024", description: "Meglévő ostyaüzem bővítése", status: "kivitelezés alatt" },
    { name: "Kapuvár - Víztorony", year: "2025", description: "Meglévő 500 m³-es víztorony rekonstrukciója", status: "engedélyezési és kiviteli terv" },
    { name: "Ajka – Bakonyi erőmű", year: "2025", description: "Új gáztüzelésű fűtőmű", status: "engedélyezési és kiviteli terv" },
    { name: "MOL DUFI – Szlop medence", year: "2025", description: "Térszín alatti vasbeton medence és lefedése", status: "kiviteli terv" },
    { name: "MOL DUFI – Technológiai csőhidak", year: "2025", description: "Technológiai acélszerkezetek", status: "kiviteli terv" },
  ],
  specialis: [
    { name: "Budapest – W Budapest hotel", year: "2020-2021", description: "Függesztett-feszített üveglefedés", status: "megépült" },
    { name: "Budapest Magyar Államkincstár székháza", year: "2020", description: "Szerkezeti rekonstrukció és új kupola", status: "megépült" },
    { name: "MVM DOME és Alba Aréna", year: "2020-2022", description: "Hűtőbeton pályalemez", status: "megépült" },
    { name: "Budapest – Széna téri 56-os emlékmű", year: "2022", description: "Finombeton emlékmű terve", status: "megépült" },
    { name: "Budapest – Ecseri úti metróállomás", year: "2022-2023", description: "Pavilonok és látszóbeton árnyékolók", status: "kivitelezés alatt" },
    { name: "Sziget fesztivál – Colosseum aréna", year: "2022-2023", description: "Egyedi raklapépítmény", status: "megépült" },
    { name: "Budapest – Elhunyt olimpiai bajnokok emlékfala", year: "2023-2024", description: "Konzolos látszóbeton gyűrűszerkezet", status: "megépült" },
  ],
  szakertes: [
    { name: "Dunántúli Református Egyházkerület", year: "2020", description: "Dunántúli templomok, épületek szerkezeti felülvizsgálata (8 településen)", status: "" },
    { name: "Budapest – Millenáris Park épületei", year: "2020-2025", description: "Rendezvényekkel és kiállításokkal kapcsolatos tartószerkezeti felülvizsgálatok", status: "" },
    { name: "Debrecen – BMW tesztpálya", year: "2020-2021", description: "Tesztpálya acéllemez burkolatának vizsgálata", status: "" },
    { name: "Budapest - Puskás Aréna", year: "2020-2021", description: "Homlokzatburkolati elemek hátszerkezetének felülvizsgálata", status: "" },
    { name: "Budapest – Kútvölgyi kórház", year: "2022", description: "Kútvölgyi Klinikai Tömb toronyépületének átépítése és felújítása", status: "" },
    { name: "Szeged - Dóm rekonstrukciója", year: "2023", description: "Torony állványozási munkák felülvizsgálata", status: "" },
    { name: "Csepel szabadkikötő", year: "2023", description: "Gabonatárház és K2, K3 csarnokok tartószerkezeti felülvizsgálata", status: "" },
    { name: "Budapest – Ferencvárosi önkormányzat", year: "2023-2024", description: "Önkormányzati ingatlanok tartószerkezet vizsgálata (34 lakóépület)", status: "" },
    { name: "Budapest – Duna Vitex irodaház", year: "2023-2025", description: "Fa fedélszerkezet és előregyártott csarnokszerkezet szakértői vizsgálata", status: "" },
    { name: "Debrecen – Viterra silópark", year: "2024-2025", description: "Gabonatároló silók szakértői vizsgálata", status: "" },
    { name: "Hello Parks raktárépületek", year: "2025", description: "Szerkezeti összehasonlító vizsgálatok", status: "" },
  ],
};

const categories: Category[] = ["lako", "kozeput", "ipari", "specialis", "szakertes"];

const Projects = () => {
  const { lang } = useLanguage();
  const [active, setActive] = useState<Category>("lako");
  const headers = tableHeaders[lang];
  const currentProjects = projects[active];
  const hasStatus = active !== "szakertes";

  return (
    <div className="h-full relative flex flex-col items-center justify-center px-4 md:px-8">
      {/* Blue gradient from bottom */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'linear-gradient(to top, rgba(181,195,211,0.45) 0%, rgba(181,195,211,0.15) 35%, transparent 65%)'
      }} />

      <div className="relative z-10 w-full max-w-[1400px] flex flex-col items-stretch" style={{ maxHeight: '75vh' }}>
        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-0">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 rounded-[11px] text-[0.89em] font-normal cursor-pointer transition-all duration-200
                backdrop-blur-[18px] border
                ${active === cat
                  ? "bg-[#567395] text-white border-[#111] shadow-[0_12px_32px_rgba(0,0,0,0.25)]"
                  : "bg-white/[0.12] text-foreground border-white/[0.18] shadow-[0_12px_32px_rgba(0,0,0,0.25)] hover:bg-[#567395] hover:text-white hover:border-[#111]"
                }`}
            >
              {tabLabels[lang][cat]}
            </button>
          ))}
        </div>

        {/* Description */}
        <div className="my-4 leading-relaxed text-[0.95em] font-normal text-foreground min-h-[2.5em]">
          {descriptions[lang][active]}
        </div>

        {/* Table */}
        <div className="w-full rounded-[14px] overflow-hidden" style={{ maxHeight: '480px', overflowY: 'auto', WebkitOverflowScrolling: 'touch' }}>
          <table className="w-full text-left text-[clamp(12px,1vw,14px)]">
            <thead className="sticky top-0">
              <tr className="bg-[rgba(86,115,149,0.18)]">
                <th className="px-4 py-3 font-medium text-foreground">{headers[0]}</th>
                <th className="px-4 py-3 font-medium text-foreground">{headers[1]}</th>
                <th className="px-4 py-3 font-medium text-foreground">{headers[2]}</th>
                {hasStatus && <th className="px-4 py-3 font-medium text-foreground">{headers[3]}</th>}
              </tr>
            </thead>
            <tbody>
              {currentProjects.map((p, i) => (
                <tr
                  key={i}
                  className={`border-b border-foreground/5 transition-colors hover:bg-foreground/[0.03] ${
                    i % 2 === 0 ? "bg-white/[0.04]" : "bg-transparent"
                  }`}
                >
                  <td className="px-4 py-2.5 font-normal text-foreground">{p.name}</td>
                  <td className="px-4 py-2.5 font-normal text-muted-foreground whitespace-nowrap">{p.year}</td>
                  <td className="px-4 py-2.5 font-normal text-muted-foreground">{p.description}</td>
                  {hasStatus && <td className="px-4 py-2.5 font-normal text-muted-foreground whitespace-nowrap">{p.status}</td>}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Projects;
