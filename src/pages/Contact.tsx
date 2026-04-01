import { useLanguage } from "@/contexts/LanguageContext";
import { Building2, FileText, Facebook } from "lucide-react";

const Contact = () => {
  const { t } = useLanguage();

  return (
    <div className="h-full flex items-center justify-center px-4 md:px-8">
      {/* Outer glass card */}
      <div className="w-full max-w-[1400px] rounded-[32px] bg-[rgba(86,115,149,0.12)] backdrop-blur-[18px] border border-white/[0.18] shadow-[0_12px_32px_rgba(0,0,0,0.25)] p-[clamp(20px,2vw,40px)] box-border">
        <div className="grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-[clamp(12px,1.5vw,18px)] items-stretch">
          {/* Left - Company info */}
          <div className="rounded-[26px] bg-white/10 border border-white/[0.14] p-[clamp(16px,2vw,28px)]">
            {/* Header */}
            <div className="flex flex-col gap-2 mb-[clamp(24px,3vw,44px)]">
              <h1 className="text-[clamp(20px,2vw,30px)] font-normal tracking-normal font-['Work_Sans'] text-foreground">
                {t("contact.glass.title")}
              </h1>
              <p className="text-[clamp(16px,1.3vw,20px)] text-muted-foreground">
                {t("contact.glass.subtitle")}
              </p>
            </div>

            {/* Office row */}
            <div className="flex gap-[clamp(12px,1.5vw,17px)] items-start">
              <div className="w-[clamp(28px,2.5vw,34px)] h-[clamp(28px,2.5vw,34px)] rounded-xl inline-flex items-center justify-center bg-white/[0.22] border border-white/[0.18] flex-shrink-0">
                <Building2 className="w-[clamp(15px,1.5vw,18px)] h-[clamp(15px,1.5vw,18px)] text-foreground/80" />
              </div>
              <div className="space-y-0.5 text-[clamp(14px,1.1vw,17px)] leading-relaxed text-foreground">
                <p className="font-semibold">mdrs2 Mérnöki Szolgáltató Kft.</p>
                <p>{t("contact.office")}</p>
                <a href="mailto:info@mdrs2.hu" className="hover:opacity-80 transition-opacity border-b border-transparent hover:border-foreground/40 pb-px">
                  info@mdrs2.hu
                </a>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px w-full bg-foreground/10 my-[clamp(16px,2vw,28px)]" />

            {/* HQ row */}
            <div className="flex gap-[clamp(12px,1.5vw,17px)] items-start">
              <div className="w-[clamp(28px,2.5vw,34px)] h-[clamp(28px,2.5vw,34px)] rounded-xl inline-flex items-center justify-center bg-white/[0.22] border border-white/[0.18] flex-shrink-0">
                <FileText className="w-[clamp(15px,1.5vw,18px)] h-[clamp(15px,1.5vw,18px)] text-foreground/80" />
              </div>
              <div className="space-y-0.5 text-[clamp(14px,1.1vw,17px)] leading-relaxed text-foreground">
                <p>{t("contact.hq")}</p>
                <p>{t("contact.taxnum")}: 26579117-2-42</p>
                <p>{t("contact.regnum")}: 01 09 333179</p>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px w-full bg-foreground/10 my-[clamp(16px,2vw,28px)]" />

            {/* Facebook row */}
            <div className="flex gap-[clamp(12px,1.5vw,17px)] items-start">
              <div className="w-[clamp(28px,2.5vw,34px)] h-[clamp(28px,2.5vw,34px)] rounded-xl inline-flex items-center justify-center bg-white/[0.22] border border-white/[0.18] flex-shrink-0">
                <Facebook className="w-[clamp(15px,1.5vw,18px)] h-[clamp(15px,1.5vw,18px)] text-foreground/80" />
              </div>
              <div className="text-[clamp(14px,1.1vw,17px)] leading-relaxed text-foreground flex items-center">
                <p>
                  {t("contact.follow")}{" "}
                  <a
                    href="https://www.facebook.com/mdrs2"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold hover:opacity-80 transition-opacity border-b border-transparent hover:border-foreground/40 pb-px"
                  >
                    mdrs2 {t("contact.onFacebook")}
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Right - Person cards */}
          <div className="flex flex-col gap-[clamp(12px,1.5vw,18px)]">
            {/* Person 1 */}
            <div className="flex-1 rounded-[26px] bg-white/10 border border-white/[0.14] p-[clamp(16px,2vw,28px)] flex flex-col justify-center">
              <div className="flex items-center justify-between gap-[clamp(12px,1.5vw,17px)] mb-[clamp(14px,1.5vw,24px)]">
                <h2 className="text-[clamp(20px,2vw,30px)] font-normal font-['Work_Sans'] text-foreground">
                  Madaras Botond
                </h2>
                <div className="w-[clamp(48px,5vw,69px)] h-[clamp(48px,5vw,69px)] rounded-full overflow-hidden border border-white/[0.22] bg-white/[0.12] shadow-[0_10px_22px_rgba(0,0,0,0.14)] flex-shrink-0">
                  <div className="w-full h-full bg-muted flex items-center justify-center text-muted-foreground text-lg font-semibold">
                    MB
                  </div>
                </div>
              </div>
              <div className="space-y-1 text-[clamp(14px,1.1vw,17px)] text-foreground">
                <a href="mailto:madaras.botond@mdrs2.hu" className="block hover:opacity-80 transition-opacity">
                  madaras.botond@mdrs2.hu
                </a>
                <a href="tel:+36703114271" className="block hover:opacity-80 transition-opacity">
                  +36 70 311 4271
                </a>
              </div>
            </div>

            {/* Person 2 */}
            <div className="flex-1 rounded-[26px] bg-white/10 border border-white/[0.14] p-[clamp(16px,2vw,28px)] flex flex-col justify-center">
              <div className="flex items-center justify-between gap-[clamp(12px,1.5vw,17px)] mb-[clamp(14px,1.5vw,24px)]">
                <h2 className="text-[clamp(20px,2vw,30px)] font-normal font-['Space_Grotesk'] text-foreground">
                  Madaras Koppány
                </h2>
                <div className="w-[clamp(48px,5vw,69px)] h-[clamp(48px,5vw,69px)] rounded-full overflow-hidden border border-white/[0.22] bg-white/[0.12] shadow-[0_10px_22px_rgba(0,0,0,0.14)] flex-shrink-0">
                  <div className="w-full h-full bg-muted flex items-center justify-center text-muted-foreground text-lg font-semibold">
                    MK
                  </div>
                </div>
              </div>
              <div className="space-y-1 text-[clamp(14px,1.1vw,17px)] text-foreground">
                <a href="mailto:madaras.koppany@mdrs2.hu" className="block hover:opacity-80 transition-opacity">
                  madaras.koppany@mdrs2.hu
                </a>
                <a href="tel:+36704089199" className="block hover:opacity-80 transition-opacity">
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
