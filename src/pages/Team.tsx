import { useLanguage } from "@/contexts/LanguageContext";
import { User } from "lucide-react";

const placeholderTeam = [
  { name: "Személy 1", nameEn: "Person 1" },
  { name: "Személy 2", nameEn: "Person 2" },
  { name: "Személy 3", nameEn: "Person 3" },
  { name: "Személy 4", nameEn: "Person 4" },
];

const Team = () => {
  const { lang, t } = useLanguage();

  return (
    <div className="h-full flex flex-col items-center justify-center px-6 md:px-12">
      <div className="max-w-4xl w-full">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-10 text-center">
          {t("team.title")}
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {placeholderTeam.map((member, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-28 h-28 md:w-32 md:h-32 rounded-full bg-muted flex items-center justify-center mb-4 group-hover:bg-secondary transition-colors">
                <User className="w-10 h-10 text-muted-foreground" />
              </div>
              <h3 className="font-semibold text-sm text-foreground">
                {lang === "hu" ? member.name : member.nameEn}
              </h3>
              <p className="text-xs text-muted-foreground mt-1">
                {t("team.placeholder.role")}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
