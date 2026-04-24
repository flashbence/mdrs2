import { useLanguage } from "@/contexts/LanguageContext";

import botondImg from "@/assets/team/madaras-botond.jpeg";
import koppanyImg from "@/assets/team/madaras-koppany.jpeg";
import rekaImg from "@/assets/team/elias-reka.jpeg";
import milanImg from "@/assets/team/kerecsanin-milan.jpeg";
import ozzieImg from "@/assets/team/ozzie.jpeg";
import peterImg from "@/assets/team/kincses-peter.jpeg";
import benceImg from "@/assets/team/gulacsy-bence.jpeg";
import erzsebetImg from "@/assets/team/tamas-erzsebet.jpeg";

const desktopTeam = [
  { row: 0, col: 0, img: botondImg, nameKey: "team.name.botond", roleKey: "team.role.botond" },
  { row: 0, col: 1, img: koppanyImg, nameKey: "team.name.koppany", roleKey: "team.role.koppany" },
  { row: 0, col: 3, img: rekaImg, nameKey: "team.name.reka", roleKey: "team.role.reka" },
  { row: 0, col: 4, img: milanImg, nameKey: "team.name.milan", roleKey: "team.role.milan" },
  { row: 1, col: 0, img: ozzieImg, nameKey: "team.name.ozzie", roleKey: "team.role.ozzie" },
  { row: 1, col: 2, img: peterImg, nameKey: "team.name.peter", roleKey: "team.role.peter" },
  { row: 1, col: 3, img: benceImg, nameKey: "team.name.bence", roleKey: "team.role.bence" },
  { row: 1, col: 4, img: erzsebetImg, nameKey: "team.name.erzsebet", roleKey: "team.role.erzsebet" },
];

const mobileTeam = [
  { img: botondImg, nameKey: "team.name.botond", roleKey: "team.role.botond" },
  { img: koppanyImg, nameKey: "team.name.koppany", roleKey: "team.role.koppany" },
  { img: rekaImg, nameKey: "team.name.reka", roleKey: "team.role.reka" },
  { img: milanImg, nameKey: "team.name.milan", roleKey: "team.role.milan" },
  { img: peterImg, nameKey: "team.name.peter", roleKey: "team.role.peter" },
  { img: benceImg, nameKey: "team.name.bence", roleKey: "team.role.bence" },
  { img: erzsebetImg, nameKey: "team.name.erzsebet", roleKey: "team.role.erzsebet" },
  { img: ozzieImg, nameKey: "team.name.ozzie", roleKey: "team.role.ozzie" },
];

const Team = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-svh md:h-full flex flex-col items-center justify-center relative pt-20 md:pt-0">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(181,195,211,0.6) 0%, rgba(181,195,211,0.3) 35%, rgba(181,195,211,0.1) 65%, transparent 100%)",
        }}
      />

      <div className="w-full relative z-10 px-[2vw] md:px-[clamp(40px,6.5vw,120px)]">
        {/* Desktop: 5-col grid with gaps, grayscale hover */}
        <div className="hidden md:grid grid-cols-5 gap-[6px] max-h-[calc(100vh-180px)]">
          {desktopTeam.map((member, i) => (
            <div
              key={i}
              className="group cursor-pointer relative"
              style={{
                gridColumn: member.col + 1,
                gridRow: member.row + 1,
              }}
            >
              <div className="aspect-square bg-muted overflow-hidden grayscale hover:grayscale-0 transition-all duration-500 relative">
                <img
                  src={member.img}
                  alt={t(member.nameKey)}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-[clamp(8px,1vw,16px)] pt-[clamp(40px,4vw,70px)]">
                  <span className="text-white font-heading font-light text-[clamp(19px,1.5vw,23px)] leading-tight">
                    {t(member.nameKey)}
                  </span>
                  <span className="text-white/80 font-body font-light text-[clamp(1rem,1.08vw,18px)] leading-tight mt-[2px]">
                    {t(member.roleKey)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: 2-col grid, no grayscale, visible text below */}
        <div className="grid md:hidden grid-cols-2 gap-3 px-[2vw] py-4">
          {mobileTeam.map((member, i) => (
            <div key={i}>
              <div className="aspect-square bg-muted overflow-hidden">
                <img
                  src={member.img}
                  alt={t(member.nameKey)}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-1.5">
                <p className="font-heading font-light text-[clamp(1rem,1.2vw,20px)] leading-tight text-foreground">
                  {t(member.nameKey)}
                </p>
                <p className="font-body font-light text-[clamp(1rem,1.08vw,18px)] leading-tight text-muted-foreground mt-0.5">
                  {t(member.roleKey)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
