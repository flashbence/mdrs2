import { useLanguage } from "@/contexts/LanguageContext";
import { User } from "lucide-react";

const placeholderTeam = [
  // Row 1: positions 0,1 then gap at 2, then 3,4
  { row: 0, col: 0 },
  { row: 0, col: 1 },
  { row: 0, col: 3 },
  { row: 0, col: 4 },
  // Row 2: position 0, then gap at 1, then 2,3,4
  { row: 1, col: 0 },
  { row: 1, col: 2 },
  { row: 1, col: 3 },
  { row: 1, col: 4 },
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
        {/* 5-column grid with small gaps */}
        <div className="grid grid-cols-5 gap-[6px]">
          {placeholderTeam.map((member, i) => (
            <div
              key={i}
              className="group cursor-pointer"
              style={{
                gridColumn: member.col + 1,
                gridRow: member.row + 1,
              }}
            >
              <div className="aspect-square bg-muted flex items-center justify-center overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
                <User className="w-16 h-16 text-muted-foreground" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
