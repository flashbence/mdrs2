import { useLanguage } from "@/contexts/LanguageContext";
import { User } from "lucide-react";

const placeholderTeam = [
  { name: "Személy 1", nameEn: "Person 1", row: 0, col: 0 },
  { name: "Személy 2", nameEn: "Person 2", row: 0, col: 1 },
  { name: "Személy 3", nameEn: "Person 3", row: 0, col: 3 },
  { name: "Személy 4", nameEn: "Person 4", row: 0, col: 4 },
  { name: "Személy 5", nameEn: "Person 5", row: 1, col: 0 },
  { name: "Személy 6", nameEn: "Person 6", row: 1, col: 2 },
  { name: "Személy 7", nameEn: "Person 7", row: 1, col: 3 },
  { name: "Személy 8", nameEn: "Person 8", row: 1, col: 4 },
];

const Team = () => {
  const { t } = useLanguage();

  return (
    <div className="h-full flex flex-col items-center justify-center px-6 md:px-12 relative">
      {/* Blue gradient from bottom */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(181,195,211,0.45) 0%, rgba(181,195,211,0.15) 30%, transparent 60%)",
        }}
      />

      <div className="max-w-[1200px] w-full relative z-10">
        {/* Grid: 5 columns, 2 rows, with specific gaps matching the screenshot */}
        <div className="grid grid-cols-4 md:grid-cols-5 gap-3 md:gap-4">
          {placeholderTeam.map((member, i) => {
            // Calculate grid placement
            const gridCol = member.col + 1; // CSS grid is 1-indexed
            const gridRow = member.row + 1;

            return (
              <div
                key={i}
                className="group cursor-pointer"
                style={{
                  gridColumn: gridCol,
                  gridRow: gridRow,
                }}
              >
                <div className="aspect-[4/5] bg-muted flex items-center justify-center overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
                  <User className="w-16 h-16 text-muted-foreground" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Team;
