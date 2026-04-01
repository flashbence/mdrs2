import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const { t } = useLanguage();

  return (
    <div className="relative h-full flex flex-col items-center justify-center px-[clamp(40px,6.5vw,120px)]">
      {/* Blue gradient from top */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'linear-gradient(to bottom, rgba(181,195,211,0.95) 0%, rgba(181,195,211,0.7) 30%, rgba(181,195,211,0.4) 55%, rgba(220,230,240,0.15) 75%, transparent 90%)'
      }} />
      <div className="w-full">
        <h1 className="text-[clamp(19px,1.84vw,28px)] font-light tracking-tight text-foreground mb-8 text-center">
          {t("about.title")}
        </h1>
        <div className="space-y-5 text-muted-foreground leading-relaxed text-[clamp(14px,1.08vw,16px)] font-light text-justify">
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
