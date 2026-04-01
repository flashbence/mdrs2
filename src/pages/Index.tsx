import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import heroBuilding from "@/assets/hero-building.png";

const Index = () => {
  const { t } = useLanguage();

  return (
    <div className="h-full relative flex flex-col items-center justify-start overflow-hidden bg-white">
      {/* Blue gradient from bottom */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(181,195,211,0.7) 0%, rgba(181,195,211,0.35) 35%, rgba(220,230,240,0.1) 60%, transparent 80%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center mt-[10vh] mb-6 px-6">
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
      <div className="relative z-10 flex-1 flex items-end justify-center w-full px-[5vw]">
        <img
          src={heroBuilding}
          alt="Structural engineering 3D model"
          className="w-full max-w-[1100px] h-auto object-contain"
        />
      </div>
    </div>
  );
};

export default Index;
