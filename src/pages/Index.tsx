import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import heroBuilding from "@/assets/hero-building.webp";

const Index = () => {
  const { t } = useLanguage();

  return (
    <div className="relative min-h-screen md:h-screen overflow-visible md:overflow-hidden bg-white">
      {/* Blue gradient from bottom */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(181,195,211,0.95) 0%, rgba(181,195,211,0.7) 30%, rgba(181,195,211,0.4) 55%, rgba(220,230,240,0.15) 75%, transparent 90%)",
        }}
      />

      {/* Layout: text + image, pushed towards center-bottom */}
      <div className="relative z-10 flex min-h-screen md:h-full flex-col items-center justify-center sm:justify-end pb-0 pt-[120px]">
        {/* Text content */}
        <div className="px-4 sm:px-8 md:px-16 lg:px-24 text-center mb-10 sm:mb-6 shrink-0 min-w-0 w-full">
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-[3.2rem] font-light tracking-tight text-foreground leading-tight mb-4 font-heading sm:whitespace-nowrap break-words">
            {t("home.title")}
          </h1>
          <p className="text-[clamp(1rem,1.08vw,18px)] font-light text-muted-foreground leading-relaxed mb-6 max-w-4xl mx-auto font-body break-words">
            {t("home.subtitle")}
          </p>
          <Link
            to="/about"
            className="inline-flex justify-center rounded-[11px] px-[89px] py-2 bg-white/[0.12] backdrop-blur-[18px] border border-white/[0.18] text-[clamp(1rem,1.08vw,18px)] tracking-normal font-light text-foreground cursor-pointer transition-all duration-[250ms] ease-in-out shadow-[0_12px_32px_rgba(0,0,0,0.25)]"
          >
            {t("home.cta")}
          </Link>
        </div>

        {/* Hero building image — shrinks when viewport is short */}
        <div className="flex justify-center items-end px-[5vw] w-full min-h-0 flex-1">
          <img
            src={heroBuilding}
            alt="Structural engineering 3D model"
            className="max-h-full max-w-full max-w-[1100px] object-contain object-bottom"
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
