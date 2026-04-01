import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import heroBuilding from "@/assets/hero-building.png";

const Index = () => {
  const { t } = useLanguage();

  return (
    <div className="relative h-screen overflow-hidden bg-white">
      {/* Blue gradient from bottom */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(181,195,211,0.7) 0%, rgba(181,195,211,0.35) 35%, rgba(220,230,240,0.1) 60%, transparent 80%)",
        }}
      />

      {/* Layout: text + image, pushed towards center-bottom */}
      <div className="relative z-10 flex h-full flex-col items-center justify-end pb-0">
        {/* Text content */}
        <div className="px-6 text-center mb-4">
          <h1 className="text-3xl md:text-5xl lg:text-[3.2rem] font-light tracking-tight text-foreground leading-tight mb-4 font-heading">
            {t("home.title")}
          </h1>
          <p className="text-sm md:text-base font-light text-muted-foreground leading-relaxed mb-6 max-w-xl mx-auto font-body">
            {t("home.subtitle")}
          </p>
          <Link
            to="/about"
            className="inline-block px-10 py-2.5 rounded-full bg-white/60 backdrop-blur-sm border border-white/40 text-sm font-light text-foreground/80 hover:bg-white/80 transition-all shadow-sm"
          >
            {t("home.cta")}
          </Link>
        </div>

        {/* Hero building image */}
        <div className="flex justify-center px-[5vw] w-full">
          <img
            src={heroBuilding}
            alt="Structural engineering 3D model"
            className="w-full max-w-[1100px] h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
