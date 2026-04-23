import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

type Category = "lako" | "kozeput" | "ipari" | "specialis" | "szakertes";

interface Project {
  name: string;
  description: Record<string, string>;
  year: string;
  status?: Record<string, string>;
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

// Status translations
const s = (hu: string, en: string): Record<string, string> => ({ hu, en });
const d = (hu: string, en: string): Record<string, string> => ({ hu, en });

const projects: Record<Category, Project[]> = {
  lako: [
    { name: "Siófok – Galerius Panorama Wellness", year: "2019-2021", description: d("132 lakásos lakóépület", "132-unit residential building"), status: s("kivitelezés alatt", "under construction") },
    { name: "Érd – Alispán utca – lakóépület", year: "2019-2020", description: d("20 lakásos lakóépület", "20-unit residential building"), status: s("megépült", "completed") },
    { name: "Budapest – Lake 11 – I. és II. telkek", year: "2021-2023", description: d("119 és 136 lakásos lakóépületek", "119 and 136-unit residential buildings"), status: s("engedélyezési és kiviteli terv", "permit and construction plans") },
    { name: "Budapest – Lake 11 - IX-XIV. telkek", year: "2021-2023", description: d("20 lakásos lakóépületek", "20-unit residential buildings"), status: s("engedélyezési és kiviteli terv", "permit and construction plans") },
    { name: "Balatonakarattya – Többlakásos társasházak", year: "2021-2022", description: d("5 lakásos lakóépületek", "5-unit residential buildings"), status: s("megépült", "completed") },
    { name: "Balatonfüred – Honvéd utca - lakóépület", year: "2021-2023", description: d("4 lakásos lakóépület", "4-unit residential building"), status: s("kivitelezés alatt", "under construction") },
    { name: "Budapest – Madárhegy Villapark", year: "2022", description: d("280 lakásos lakóépület", "280-unit residential building"), status: s("engedélyezési terv", "permit plan") },
    { name: "Székesfehérvár – Távirda utca", year: "2023-2024", description: d("8 lakásos lakóépület", "8-unit residential building"), status: s("megépült", "completed") },
    { name: "Budapest – Árnyaserdő Villapark", year: "2022-2024", description: d("101 lakásos lakóépület", "101-unit residential building"), status: s("megépült", "completed") },
    { name: "Budapest – Somfa Liget", year: "2024", description: d("150 lakásos lakóépület", "150-unit residential building"), status: s("engedélyezési terv", "permit plan") },
    { name: "Budapest – Barlang utca", year: "2020-2025", description: d("4 és 5 lakásos lakóépületek", "4 and 5-unit residential buildings"), status: s("kivitelezés alatt", "under construction") },
    { name: "Budapest – Herman Ottó út", year: "2023-2024", description: d("5 lakásos lakóépület", "5-unit residential building"), status: s("megépült", "completed") },
    { name: "Budapest – Ménesi út", year: "2023-2025", description: d("8 lakásos lakóépület", "8-unit residential building"), status: s("engedélyezési és kiviteli terv", "permit and construction plans") },
    { name: "Budapest – Apáthy Park", year: "2024-2025", description: d("5 lakásos lakóépületek", "5-unit residential buildings"), status: s("engedélyezési terv", "permit plan") },
    { name: "Budapest – Diószegi út", year: "2025", description: d("CLT szerkezetű többlakásos lakóépület", "CLT multi-unit residential building"), status: s("engedélyezési és kiviteli terv", "permit and construction plans") },
    { name: "Budapest – Gát utca 23-25", year: "2025", description: d("Lakóépület rehabilitáció", "Residential building rehabilitation"), status: s("engedélyezési és kiviteli terv", "permit and construction plans") },
    { name: "Budapest – Király utca", year: "2024-2025", description: d("Műemlék lakóépület rehabilitáció", "Listed residential building rehabilitation"), status: s("engedélyezési és kiviteli terv", "permit and construction plans") },
  ],
  kozeput: [
    { name: "Szeged - Vántus István Zeneiskola", year: "2018-2020", description: d("Műemléki épület rekonstrukciója", "Reconstruction of a listed building"), status: s("megépült", "completed") },
    { name: "Budapest – Gizella Campus fejlesztése", year: "2019-2021", description: d("Több ütemű irodaépület fejlesztés", "Multi-phase office building development"), status: s("engedélyezési és kiviteli terv", "permit and construction plans") },
    { name: "Budapest - Pasaréti Közösségi ház", year: "2019-2020", description: d("Négyszintes új közösségi ház", "Four-storey new community house"), status: s("megépült", "completed") },
    { name: "Budapest - Pasaréti Páduai Szent Antal Plébánia", year: "2019-2020", description: d("Rendház, plébánia felújítása, bővítése", "Renovation and extension of rectory and parish"), status: s("megépült", "completed") },
    { name: "Hévíz – Ortodox templom", year: "2019-2020", description: d("Templom tömör tégla falazatokkal, boltozatokkal", "Church with solid brick masonry and vaults"), status: s("megépült", "completed") },
    { name: "Budapest – New Age irodaház", year: "2020-2021", description: d("9 emeletes irodaház", "9-storey office building"), status: s("kiviteli terv", "construction plans") },
    { name: "Budapest - Richter Gedeon Zrt. pihenőparkja", year: "2020-2023", description: d("Konferenciaterem és edzőterem", "Conference hall and gym"), status: s("megépült", "completed") },
    { name: "Budapest - Millenáris Fogadóépület", year: "2020-2021", description: d("Fogadóépület rekonstrukciója, bővítése", "Reception building reconstruction and extension"), status: s("megépült", "completed") },
    { name: "Pápa - Református Gimnázium", year: "2020-2021", description: d("Ötszintes kollégiumi épület és mélygarázs", "Five-storey dormitory and underground parking"), status: s("megépült", "completed") },
    { name: "Balatonszepezd – Oktatási központ", year: "2021-2022", description: d("Szállásépület és konferenciaterem", "Accommodation building and conference hall"), status: s("megépült", "completed") },
    { name: "Kisköre – Sportközpont", year: "2021", description: d("Előregyártott vázszerkezetű épület", "Precast frame structure building"), status: s("megépült", "completed") },
    { name: "Budapest – Almássy téri szabadidőközpont", year: "2021-2023", description: d("Meglévő épület szállodává alakítása", "Conversion of existing building into a hotel"), status: s("engedélyezési és kiviteli terv", "permit and construction plans") },
    { name: "Zalacsány – Konferencia épület bővítése", year: "2022", description: d("CLT szerkezetű konferenciaterem", "CLT conference hall"), status: s("megépült", "completed") },
    { name: "Budapest – Hajós Alfréd tanuszoda bővítése", year: "2022-2023", description: d("50 m-es tanuszoda lelátóval", "50 m training pool with stands"), status: s("engedélyezési terv", "permit plan") },
    { name: "Budapest – Centrale Project", year: "2022-2023", description: d("Szolgáltatóház, iroda és hotel", "Service building, office and hotel"), status: s("engedélyezési terv", "permit plan") },
    { name: "Budapest – Kispesti Református óvoda", year: "2023", description: d("Háromszintes, négy csoportszobás óvoda", "Three-storey kindergarten with four group rooms"), status: s("engedélyezési és kiviteli terv", "permit and construction plans") },
    { name: "Budapest – DSB Budapesti Német iskola", year: "2023", description: d("Iskolabővítés konténerépülettel", "School extension with container building"), status: s("megépült", "completed") },
    { name: "Budapest – Lejtő úti strand és sportépület", year: "2023-2024", description: d("Strand fejlesztése és új sportépület", "Beach development and new sports building"), status: s("engedélyezési és kiviteli terv", "permit and construction plans") },
    { name: "Budapest – MTK Sportpark - Edzőterem", year: "2023-2024", description: d("Öltöző- és sportépület, kézilabdapálya", "Changing rooms, sports building, handball court"), status: s("megépült", "completed") },
    { name: "Budapest – Magyar Építészeti Múzeum és Központ", year: "2024-2025", description: d("Meglévő villaépületek rekonstrukciója", "Reconstruction of existing villa buildings"), status: s("engedélyezési és kiviteli terv", "permit and construction plans") },
    { name: "Budapest – Magyar Építészeti Múzeum (vázas)", year: "2024-2025", description: d("Meglévő vázas épületek rekonstrukciója", "Reconstruction of existing frame buildings"), status: s("engedélyezési és kiviteli terv", "permit and construction plans") },
    { name: "Budapest – Magyar Építészeti Múzeum (új)", year: "2024-2025", description: d("Új múzeumi épület", "New museum building"), status: s("engedélyezési és kiviteli terv", "permit and construction plans") },
    { name: "Dorog – Richter Gedeon Zrt. új irodaépülete", year: "2024-2025", description: d("Kétszintes irodaépület", "Two-storey office building"), status: s("engedélyezési és kiviteli terv", "permit and construction plans") },
    { name: "Nagymaros - Iskola", year: "2025", description: d("CLT szerkezetű földszintes iskolaépület", "CLT single-storey school building"), status: s("megépült", "completed") },
  ],
  ipari: [
    { name: "Eger – Kereskedelmi épület", year: "2024-2025", description: d("Előregyártott vázszerkezetű épület", "Precast frame structure building"), status: s("megépült", "completed") },
    { name: "Gizella Loft – EMC labor", year: "2020", description: d("Előregyártott szerkezetű raktárépület", "Precast warehouse building"), status: s("megépült", "completed") },
    { name: "Balatonfüred – Lázár borászat", year: "2021-2023", description: d("Borászati üzem és vendéglátóhely", "Winery and hospitality venue"), status: s("megépült", "completed") },
    { name: "Kál – Gabonasiló alapozása", year: "2021", description: d("Silócsoport alapozási szerkezete", "Silo group foundation structure"), status: s("engedélyezési és kiviteli terv", "permit and construction plans") },
    { name: "Bélapátfalva – Tésztaüzem", year: "2021", description: d("Acélszerkezetű gyártócsarnok", "Steel-frame production hall"), status: s("engedélyezési és kiviteli terv", "permit and construction plans") },
    { name: "Eger – OMYA üzem", year: "2022", description: d("Mészkőörlő üzem bővítése", "Limestone grinding plant extension"), status: s("engedélyezési terv", "permit plan") },
    { name: "Budapest – Római part árvízvédelmi létesítménye", year: "2022-2023", description: d("Elsőrendű árvízvédelmi vonal tervezése", "Primary flood defense line design"), status: s("vízjogi létesítési engedély", "water rights construction permit") },
    { name: "Gyermely – Ziegler ostyaüzem", year: "2022-2024", description: d("Meglévő ostyaüzem bővítése", "Existing wafer factory extension"), status: s("kivitelezés alatt", "under construction") },
    { name: "Kapuvár - Víztorony", year: "2025", description: d("Meglévő 500 m³-es víztorony rekonstrukciója", "Reconstruction of existing 500 m³ water tower"), status: s("engedélyezési és kiviteli terv", "permit and construction plans") },
    { name: "Ajka – Bakonyi erőmű", year: "2025", description: d("Új gáztüzelésű fűtőmű", "New gas-fired heating plant"), status: s("engedélyezési és kiviteli terv", "permit and construction plans") },
    { name: "MOL DUFI – Szlop medence", year: "2025", description: d("Térszín alatti vasbeton medence és lefedése", "Below-grade reinforced concrete basin and cover"), status: s("kiviteli terv", "construction plans") },
    { name: "MOL DUFI – Technológiai csőhidak", year: "2025", description: d("Technológiai acélszerkezetek", "Technological steel structures"), status: s("kiviteli terv", "construction plans") },
  ],
  specialis: [
    { name: "Budapest – W Budapest hotel", year: "2020-2021", description: d("Függesztett-feszített üveglefedés", "Suspended-tensioned glass roof"), status: s("megépült", "completed") },
    { name: "Budapest Magyar Államkincstár székháza", year: "2020", description: d("Szerkezeti rekonstrukció és új kupola", "Structural reconstruction and new dome"), status: s("megépült", "completed") },
    { name: "MVM DOME és Alba Aréna", year: "2020-2022", description: d("Hűtőbeton pályalemez", "Cooling concrete rink slab"), status: s("megépült", "completed") },
    { name: "Budapest – Széna téri 56-os emlékmű", year: "2022", description: d("Finombeton emlékmű terve", "Fine-concrete memorial design"), status: s("megépült", "completed") },
    { name: "Budapest – Ecseri úti metróállomás", year: "2022-2023", description: d("Pavilonok és látszóbeton árnyékolók", "Pavilions and exposed concrete sunscreens"), status: s("kivitelezés alatt", "under construction") },
    { name: "Sziget fesztivál – Colosseum aréna", year: "2022-2023", description: d("Egyedi raklapépítmény", "Custom pallet structure"), status: s("megépült", "completed") },
    { name: "Budapest – Elhunyt olimpiai bajnokok emlékfala", year: "2023-2024", description: d("Konzolos látszóbeton gyűrűszerkezet", "Cantilevered exposed concrete ring structure"), status: s("megépült", "completed") },
  ],
  szakertes: [
    { name: "Dunántúli Református Egyházkerület", year: "2020", description: d("Dunántúli templomok, épületek szerkezeti felülvizsgálata (8 településen)", "Structural review of churches and buildings in Transdanubia (8 municipalities)") },
    { name: "Budapest – Millenáris Park épületei", year: "2020-2025", description: d("Rendezvényekkel és kiállításokkal kapcsolatos tartószerkezeti felülvizsgálatok", "Structural reviews related to events and exhibitions") },
    { name: "Debrecen – BMW tesztpálya", year: "2020-2021", description: d("Tesztpálya acéllemez burkolatának vizsgálata", "Investigation of test track steel plate surfacing") },
    { name: "Budapest - Puskás Aréna", year: "2020-2021", description: d("Homlokzatburkolati elemek hátszerkezetének felülvizsgálata", "Review of façade cladding sub-structure") },
    { name: "Budapest – Kútvölgyi kórház", year: "2022", description: d("Kútvölgyi Klinikai Tömb toronyépületének átépítése és felújítása", "Reconstruction and renovation of hospital tower building") },
    { name: "Szeged - Dóm rekonstrukciója", year: "2023", description: d("Torony állványozási munkák felülvizsgálata", "Review of tower scaffolding works") },
    { name: "Csepel szabadkikötő", year: "2023", description: d("Gabonatárház és K2, K3 csarnokok tartószerkezeti felülvizsgálata", "Structural review of grain warehouse and K2, K3 halls") },
    { name: "Budapest – Ferencvárosi önkormányzat", year: "2023-2024", description: d("Önkormányzati ingatlanok tartószerkezet vizsgálata (34 lakóépület)", "Structural investigation of municipal properties (34 residential buildings)") },
    { name: "Budapest – Duna Vitex irodaház", year: "2023-2025", description: d("Fa fedélszerkezet és előregyártott csarnokszerkezet szakértői vizsgálata", "Expert investigation of timber roof and precast hall structure") },
    { name: "Debrecen – Viterra silópark", year: "2024-2025", description: d("Gabonatároló silók szakértői vizsgálata", "Expert investigation of grain storage silos") },
    { name: "Hello Parks raktárépületek", year: "2025", description: d("Szerkezeti összehasonlító vizsgálatok", "Comparative structural investigations") },
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
    <div
      className="min-h-screen md:h-full relative flex flex-col items-center px-[4vw] sm:px-[8vw] font-body overflow-visible md:overflow-hidden"
      style={{
        background: 'linear-gradient(to top, rgba(181,195,211,0.5) 0%, rgba(181,195,211,0.25) 30%, rgba(181,195,211,0.1) 55%, white 75%)'
      }}
    >

      <div className="relative z-10 w-full max-w-[1400px] flex flex-col items-stretch pt-20 sm:pt-[120px] pb-6 sm:pb-0" style={{ height: undefined }}>
        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-0">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-[14px] py-[6px] sm:px-6 sm:py-2 rounded-[11px] text-[clamp(1rem,1.08vw,18px)] font-light font-['Work_Sans'] tracking-wide cursor-pointer transition-all duration-200
                backdrop-blur-[18px] border whitespace-nowrap
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
        <div className="my-4 leading-[1.45] text-[clamp(1rem,1.08vw,18px)] font-normal text-foreground">
          {descriptions[lang][active]}
        </div>

        {/* Desktop Table */}
        <div className="hidden sm:block w-full rounded-[14px] overflow-hidden">
          <div className="max-h-[500px] overflow-y-auto" style={{ WebkitOverflowScrolling: 'touch' as any }}>
          <table className="w-full text-left text-[clamp(1rem,1.08vw,18px)]">
            <thead className="sticky top-0 z-[3]">
              <tr className="bg-white/[0.92] backdrop-blur-sm uppercase border-b border-black/15">
                <th className="px-3 py-2.5 font-medium text-black text-[clamp(0.875rem,1.08vw,16px)] tracking-[0.05em] whitespace-nowrap">{headers[0]}</th>
                <th className="px-3 py-2.5 font-medium text-black text-[clamp(0.875rem,1.08vw,16px)] tracking-[0.05em] whitespace-nowrap">{headers[1]}</th>
                <th className="px-3 py-2.5 font-medium text-black text-[clamp(0.875rem,1.08vw,16px)] tracking-[0.05em] whitespace-nowrap">{headers[2]}</th>
                {hasStatus && <th className="px-3 py-2.5 font-medium text-black text-[clamp(0.875rem,1.08vw,16px)] tracking-[0.05em] whitespace-nowrap">{headers[3]}</th>}
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
                  <td className="px-4 py-2.5 font-normal text-foreground">{p.year}</td>
                  <td className="px-4 py-2.5 font-normal text-foreground">{p.description[lang]}</td>
                  {hasStatus && p.status && <td className="px-4 py-2.5 font-normal text-foreground whitespace-nowrap">{p.status[lang]}</td>}
                </tr>
              ))}
            </tbody>
          </table>
          </div>
        </div>

        {/* Mobile Card Layout */}
        <div className="sm:hidden flex flex-col gap-[10px] pb-6">
          {currentProjects.map((p, i) => (
            <div
              key={i}
              className="grid gap-x-3 gap-y-2 p-3 bg-white/10 border border-white/[0.14] rounded-[14px] relative text-[clamp(0.875rem,1.08vw,16px)] text-black"
              style={{ gridTemplateColumns: hasStatus ? '0.7fr 1.3fr' : '1fr' }}
            >
              {/* Row 1: Project name - full width */}
              <div className="col-span-full font-semibold">{p.name}</div>
              {/* Row 2: Description - full width */}
              <div className="col-span-full opacity-95">{p.description[lang]}</div>
              {/* Row 3: Year (left) + Status (right) */}
              <div className="text-[clamp(0.8125rem,1vw,14px)] opacity-90">{p.year}</div>
              {hasStatus && p.status && (
                <div className="text-[clamp(0.8125rem,1vw,14px)] opacity-90 text-right">{p.status[lang]}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
