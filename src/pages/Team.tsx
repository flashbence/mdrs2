import { useLanguage } from "@/contexts/LanguageContext";

import botondImg from "@/assets/team/madaras-botond.jpeg";
import koppanyImg from "@/assets/team/madaras-koppany.jpeg";
import rekaImg from "@/assets/team/elias-reka.jpeg";
import milanImg from "@/assets/team/kerecsanin-milan.jpeg";
import ozzieImg from "@/assets/team/ozzie.jpeg";
import peterImg from "@/assets/team/kincses-peter.jpeg";
import benceImg from "@/assets/team/gulacsy-bence.jpeg";
import erzsebetImg from "@/assets/team/tamas-erzsebet.jpeg";

const teamMembers = [
  { row: 0, col: 0, img: botondImg, name: "Madaras Botond", role: "szerkezettervező mérnök, tulajdonos, ügyvezető (T, SZÉS-1)" },
  { row: 0, col: 1, img: koppanyImg, name: "Madaras Koppány", role: "szerkezettervező mérnök, tulajdonos, ügyvezető (T, SZÉS-1, VZ-TER, VZ-TEL)" },
  { row: 0, col: 3, img: rekaImg, name: "Dobnerné Éliás Réka", role: "szerkezettervező mérnök (T)" },
  { row: 0, col: 4, img: milanImg, name: "Kerecsanin Milán", role: "szerkezettervező mérnök" },
  { row: 1, col: 0, img: ozzieImg, name: "Ozzie", role: "általános irodai segéderő" },
  { row: 1, col: 2, img: peterImg, name: "Kincses Péter", role: "szerkezettervező mérnök" },
  { row: 1, col: 3, img: benceImg, name: "Gulácsy Bence", role: "szerkezettervező mérnök" },
  { row: 1, col: 4, img: erzsebetImg, name: "Bálintné Tamás Erzsébet", role: "szerkezettervező mérnök" },
];

const Team = () => {
  const { t } = useLanguage();

  return (
    <div className="h-full flex flex-col items-center justify-center relative">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(181,195,211,0.45) 0%, rgba(181,195,211,0.15) 30%, transparent 60%)",
        }}
      />

      <div className="w-full relative z-10 px-[clamp(40px,6.5vw,120px)]">
        <div className="grid grid-cols-5 gap-[6px]">
          {teamMembers.map((member, i) => (
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
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
                {/* Hover overlay with name & role */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-[clamp(8px,1vw,16px)]">
                  <span className="text-white font-heading font-semibold text-[clamp(11px,0.95vw,18px)] leading-tight">
                    {member.name}
                  </span>
                  <span className="text-white/80 font-body text-[clamp(8px,0.7vw,13px)] leading-tight mt-[2px]">
                    {member.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
