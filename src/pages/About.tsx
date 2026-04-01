import { useLanguage } from "@/contexts/LanguageContext";

import molDufi01 from "@/assets/projects/mol-dufi-01.png";
import mem01 from "@/assets/projects/mem-01.png";
import lake01 from "@/assets/projects/lake-01.png";
import molDufi02 from "@/assets/projects/mol-dufi-02.png";
import nagymaros01 from "@/assets/projects/nagymaros-01.png";
import kispestiOvi01 from "@/assets/projects/kispesti-ovi-01.png";
import pasaret01 from "@/assets/projects/pasaret-01.png";
import ecseri02 from "@/assets/projects/ecseri-02.png";
import menesi02 from "@/assets/projects/menesi-02.png";
import gizella02 from "@/assets/projects/gizella-02.png";
import rg01 from "@/assets/projects/rg-01.png";
import hermanOtto01 from "@/assets/projects/herman-otto-01.png";
import ecseri01 from "@/assets/projects/ecseri-01.png";
import arnyas01 from "@/assets/projects/arnyas-01.png";
import almassyTer02 from "@/assets/projects/almassy-ter-02.png";
import papa01 from "@/assets/projects/papa-01.png";
import kiraly01 from "@/assets/projects/kiraly-01.png";
import mem02 from "@/assets/projects/mem-02.png";
import almassyTer01 from "@/assets/projects/almassy-ter-01.png";

const projectImages = [
  molDufi01, mem01, lake01, molDufi02, nagymaros01,
  kispestiOvi01, pasaret01, ecseri02, menesi02, gizella02,
  rg01, hermanOtto01, ecseri01, arnyas01, almassyTer02,
  papa01, kiraly01, mem02, almassyTer01,
];

const About = () => {
  const { t } = useLanguage();

  return (
    <div className="relative h-full flex flex-col items-center justify-center bg-white">
      {/* Blue gradient from top */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'linear-gradient(to bottom, rgba(181,195,211,0.35) 0%, rgba(181,195,211,0.15) 40%, rgba(255,255,255,0.1) 70%, white 100%)'
      }} />
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-8 md:px-16 lg:px-24">
        <h1 className="text-[clamp(19px,1.84vw,28px)] font-light tracking-tight text-black mb-8 text-center">
          {t("about.title")}
        </h1>
        <div className="space-y-5 text-black leading-relaxed text-[clamp(14px,1.08vw,16px)] font-light text-justify">
          <p>{t("about.p1")}</p>
          <p>{t("about.p2")}</p>
          <p>{t("about.p3")}</p>
        </div>
      </div>

      {/* Infinite scrolling image marquee - full width */}
      <div className="relative z-10 w-full mt-12 overflow-hidden">
        <div className="flex w-max will-change-transform animate-marquee gap-6">
          {[...projectImages, ...projectImages].map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Project ${(i % projectImages.length) + 1}`}
              className="h-[350px] w-auto object-contain flex-none"
              loading="eager"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
