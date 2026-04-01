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
  // Row 1: Botond, Koppány, gap, Réka, Milán
  { row: 0, col: 0, img: botondImg, name: "Madaras Botond" },
  { row: 0, col: 1, img: koppanyImg, name: "Madaras Koppány" },
  { row: 0, col: 3, img: rekaImg, name: "Éliás Réka" },
  { row: 0, col: 4, img: milanImg, name: "Kerecsanin Milán" },
  // Row 2: Ozzie, gap, Péter, Bence, Erzsébet
  { row: 1, col: 0, img: ozzieImg, name: "Ozzie" },
  { row: 1, col: 2, img: peterImg, name: "Kincses Péter" },
  { row: 1, col: 3, img: benceImg, name: "Gulácsy Bence" },
  { row: 1, col: 4, img: erzsebetImg, name: "Tamás Erzsébet" },
];

const Team = () => {
  const { t } = useLanguage();

  return (
    <div className="h-full flex flex-col items-center justify-center relative">
      {/* Blue gradient from bottom */}
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
              className="group cursor-pointer"
              style={{
                gridColumn: member.col + 1,
                gridRow: member.row + 1,
              }}
            >
              <div className="aspect-square bg-muted overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
