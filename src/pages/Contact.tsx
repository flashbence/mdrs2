import { useLanguage } from "@/contexts/LanguageContext";
import { Building2, FileText, Facebook } from "lucide-react";
import botondImg from "@/assets/team/madaras-botond.jpeg";
import koppanyImg from "@/assets/team/madaras-koppany.jpeg";

const Contact = () => {
  const { t } = useLanguage();

  return (
    <div className="relative flex items-center justify-center px-[2vw] lg:px-16 xl:px-24 md:fixed md:inset-0 md:z-10 pointer-events-none pt-20 pb-[calc(clamp(48px,10vw,80px)+env(safe-area-inset-bottom))] lg:pt-0 lg:pb-0">
      {/* Blue gradient from bottom */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'linear-gradient(to top, rgba(181,195,211,0.95) 0%, rgba(181,195,211,0.7) 30%, rgba(181,195,211,0.4) 55%, rgba(220,230,240,0.15) 75%, transparent 90%)'
      }} />

      {/* Outer glass card - centered, slightly smaller */}
      <div className="pointer-events-auto relative z-10 w-full max-w-[1100px] rounded-[32px] bg-[rgba(86,115,149,0.12)] backdrop-blur-[18px] border border-white/[0.18] shadow-[0_12px_32px_rgba(0,0,0,0.15)] p-[clamp(16px,1.8vw,32px)] box-border">
        <div className="grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-[clamp(12px,1.5vw,16px)] items-stretch">
          {/* Left - Company info */}
          <div className="rounded-[26px] bg-white/10 border border-white/[0.14] p-[clamp(14px,1.8vw,24px)]">
            {/* Header */}
            <div className="flex flex-col gap-1.5 mb-[clamp(20px,2.5vw,36px)] py-3 md:py-0">
              <h1 className="text-[clamp(1.25rem,1.84vw,28px)] font-light tracking-normal font-['Work_Sans'] text-foreground">
                {t("contact.glass.title")}
              </h1>
              <p className="text-[clamp(1rem,1.19vw,18px)] font-light text-muted-foreground">
                {t("contact.glass.subtitle")}
              </p>
            </div>

            {/* Office row */}
            <div className="flex gap-[clamp(10px,1.3vw,15px)] items-start">
              <div className="w-[clamp(26px,2.2vw,30px)] h-[clamp(26px,2.2vw,30px)] rounded-[10px] inline-flex items-center justify-center bg-white/[0.22] border border-white/[0.18] flex-shrink-0">
                <Building2 className="w-[clamp(13px,1.3vw,16px)] h-[clamp(13px,1.3vw,16px)] text-foreground/80" />
              </div>
                <div className="space-y-0.5 text-[clamp(1rem,1.08vw,18px)] font-light leading-relaxed text-foreground">
                <p className="font-light">mdrs2 Mérnöki Szolgáltató Kft.</p>
                <p className="font-light">{t("contact.office")}</p>
                <a href="mailto:info@mdrs2.hu" className="font-light hover:opacity-80 transition-opacity border-b border-transparent hover:border-foreground/40 pb-px">
                  info@mdrs2.hu
                </a>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px w-full bg-foreground/10 my-[clamp(14px,1.8vw,24px)]" />

            {/* HQ row */}
            <div className="flex gap-[clamp(10px,1.3vw,15px)] items-start">
              <div className="w-[clamp(26px,2.2vw,30px)] h-[clamp(26px,2.2vw,30px)] rounded-[10px] inline-flex items-center justify-center bg-white/[0.22] border border-white/[0.18] flex-shrink-0">
                <FileText className="w-[clamp(13px,1.3vw,16px)] h-[clamp(13px,1.3vw,16px)] text-foreground/80" />
              </div>
              <div className="space-y-0.5 text-[clamp(1rem,1.08vw,18px)] font-light leading-relaxed text-foreground">
                <p className="font-light">{t("contact.hq")}</p>
                <p className="font-light">{t("contact.taxnum")}: 26579117-2-42</p>
                <p className="font-light">{t("contact.regnum")}: 01 09 333179</p>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px w-full bg-foreground/10 my-[clamp(14px,1.8vw,24px)]" />

            {/* Facebook row */}
            <div className="flex gap-[clamp(10px,1.3vw,15px)] items-start">
              <div className="w-[clamp(26px,2.2vw,30px)] h-[clamp(26px,2.2vw,30px)] rounded-[10px] inline-flex items-center justify-center bg-white/[0.22] border border-white/[0.18] flex-shrink-0">
                <Facebook className="w-[clamp(13px,1.3vw,16px)] h-[clamp(13px,1.3vw,16px)] text-foreground/80" />
              </div>
              <div className="text-[clamp(1rem,1.08vw,18px)] font-light leading-relaxed text-foreground flex items-center">
                <p>
                  {t("contact.follow")}{" "}
                  <a
                    href="https://www.facebook.com/profile.php?id=100075795228768"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-light hover:opacity-80 transition-opacity border-b border-transparent hover:border-foreground/40 pb-px"
                  >
                    mdrs2 {t("contact.onFacebook")}
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Right - Person cards */}
          <div className="flex flex-col gap-[clamp(12px,1.5vw,16px)]">
            {/* Person 1 */}
            <div className="flex-1 rounded-[26px] bg-white/10 border border-white/[0.14] p-[clamp(14px,1.8vw,24px)] flex flex-col justify-center">
              <div className="flex items-center justify-between gap-[clamp(10px,1.3vw,15px)] mb-[clamp(12px,1.3vw,20px)]">
                <h2 className="text-[clamp(1.25rem,1.84vw,28px)] font-light font-['Work_Sans'] text-foreground">
                  {t("team.name.botond")}
                </h2>
                <div className="w-[clamp(44px,4.5vw,60px)] h-[clamp(44px,4.5vw,60px)] rounded-full overflow-hidden border border-white/[0.22] bg-white/[0.12] shadow-[0_10px_22px_rgba(0,0,0,0.14)] flex-shrink-0">
                  <img src={botondImg} alt={t("team.name.botond")} className="w-full h-full object-cover grayscale" />
                </div>
              </div>
              <div className="space-y-0.5 text-[clamp(1rem,1.08vw,18px)] font-light text-foreground">
                <a href="mailto:madaras.botond@mdrs2.hu" className="block font-light hover:opacity-80 transition-opacity">
                  madaras.botond@mdrs2.hu
                </a>
                <a href="tel:+36703114271" className="block font-light hover:opacity-80 transition-opacity">
                  +36 70 311 4271
                </a>
              </div>
            </div>

            {/* Person 2 */}
            <div className="flex-1 rounded-[26px] bg-white/10 border border-white/[0.14] p-[clamp(14px,1.8vw,24px)] flex flex-col justify-center">
              <div className="flex items-center justify-between gap-[clamp(10px,1.3vw,15px)] mb-[clamp(12px,1.3vw,20px)]">
                <h2 className="text-[clamp(1.25rem,1.84vw,28px)] font-light font-['Work_Sans'] text-foreground">
                  {t("team.name.koppany")}
                </h2>
                <div className="w-[clamp(44px,4.5vw,60px)] h-[clamp(44px,4.5vw,60px)] rounded-full overflow-hidden border border-white/[0.22] bg-white/[0.12] shadow-[0_10px_22px_rgba(0,0,0,0.14)] flex-shrink-0">
                  <img src={koppanyImg} alt={t("team.name.koppany")} className="w-full h-full object-cover grayscale" />
                </div>
              </div>
              <div className="space-y-0.5 text-[clamp(1rem,1.08vw,18px)] font-light text-foreground">
                <a href="mailto:madaras.koppany@mdrs2.hu" className="block font-light hover:opacity-80 transition-opacity">
                  madaras.koppany@mdrs2.hu
                </a>
                <a href="tel:+36704089199" className="block font-light hover:opacity-80 transition-opacity">
                  +36 70 408 9199
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
