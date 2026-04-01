import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const { t } = useLanguage();

  return (
    <div className="h-full flex flex-col items-center justify-center px-8 md:px-16 lg:px-24">
      <div className="max-w-3xl w-full">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-8">
          {t("about.title")}
        </h1>
        <div className="space-y-5 text-muted-foreground leading-relaxed text-sm md:text-base">
          <p>{t("about.p1")}</p>
          <p>{t("about.p2")}</p>
          <p>{t("about.p3")}</p>
        </div>

        {/* Reference images placeholder row */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="aspect-[4/3] rounded bg-muted flex items-center justify-center"
            >
              <span className="text-xs text-muted-foreground">Projekt {i}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
