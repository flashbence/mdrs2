import { useLanguage } from "@/contexts/LanguageContext";

import molDufi01 from "@/assets/projects/mol-dufi-01.jpg";
import mem01 from "@/assets/projects/mem-01.jpg";
import lake01 from "@/assets/projects/lake-01.jpg";
import molDufi02 from "@/assets/projects/mol-dufi-02.jpg";
import nagymaros01 from "@/assets/projects/nagymaros-01.jpg";
import kispestiOvi01 from "@/assets/projects/kispesti-ovi-01.jpg";
import pasaret01 from "@/assets/projects/pasaret-01.jpg";
import ecseri02 from "@/assets/projects/ecseri-02.jpg";
import menesi02 from "@/assets/projects/menesi-02.jpg";
import gizella02 from "@/assets/projects/gizella-02.jpg";

const projectImages = [
  molDufi01, mem01, lake01, molDufi02, nagymaros01,
  kispestiOvi01, pasaret01, ecseri02, menesi02, gizella02,
];

const About = () => {
  const { t } = useLanguage();

  return (
    <div className="relative h-full flex flex-col items-center justify-center px-8 md:px-16 lg:px-24">
      {/* Blue gradient from top */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'linear-gradient(to bottom, rgba(181,195,211,0.95) 0%, rgba(181,195,211,0.7) 30%, rgba(181,195,211,0.4) 55%, rgba(220,230,240,0.15) 75%, transparent 90%)'
      }} />
      <div className="w-full max-w-[1400px] mx-auto">
        <h1 className="text-[clamp(19px,1.84vw,28px)] font-light tracking-tight text-black mb-8 text-center">
          {t("about.title")}
        </h1>
        <div className="space-y-5 text-black leading-relaxed text-[clamp(14px,1.08vw,16px)] font-light text-justify">
          <p>{t("about.p1")}</p>
          <p>{t("about.p2")}</p>
          <p>{t("about.p3")}</p>
        </div>

        {/* Infinite scrolling image marquee */}
        <div className="mt-10 overflow-hidden">
          <div className="flex animate-marquee gap-4" style={{ width: 'max-content' }}>
            {[...projectImages, ...projectImages].map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`Project ${(i % projectImages.length) + 1}`}
                className="h-[140px] w-auto rounded object-contain flex-shrink-0"
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
