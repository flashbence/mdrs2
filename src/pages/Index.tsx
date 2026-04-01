import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Index = () => {
  const { t } = useLanguage();

  return (
    <div className="h-full relative flex items-center justify-center">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-[0.07]"
        style={{ backgroundImage: `url(${heroBg})` }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-tight mb-6">
          {t("home.title")}
        </h1>
        <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-10 max-w-xl mx-auto">
          {t("home.subtitle")}
        </p>
        <Button asChild size="lg" className="rounded-sm px-10 text-sm tracking-wide">
          <Link to="/about">{t("home.cta")}</Link>
        </Button>
      </div>
    </div>
  );
};

export default Index;
