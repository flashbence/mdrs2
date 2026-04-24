import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { Menu, X } from "lucide-react";
import logoImg from "@/assets/mdrs2-logo.png";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { lang, setLang, t } = useLanguage();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { path: "/about", label: t("nav.about") },
    { path: "/team", label: t("nav.team") },
    { path: "/projects", label: t("nav.projects") },
    { path: "/contact", label: t("nav.contact") },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-[100svh] min-h-[100dvh] md:min-h-0 md:h-screen flex flex-col overflow-visible md:overflow-hidden md:overscroll-none">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 flex items-center justify-between px-[6vw] md:px-[4vw] pb-[0.9vw] pt-3 md:pt-0 bg-transparent z-50">
        <Link to="/" className="flex items-center">
          <img src={logoImg} alt="MDRS2 Mérnökiroda" className="h-[45px] md:h-[68px] w-auto" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-[1.1rem] font-light font-['Work_Sans'] tracking-wide transition-colors text-[#242424] ${
                isActive(item.path)
                  ? "underline decoration-[0.5px] underline-offset-4"
                  : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop language switcher */}
        <div className="hidden md:flex items-center gap-1">
          <button
            onClick={() => setLang("en")}
              className={`text-[1rem] font-normal tracking-wide px-2 py-1 rounded transition-colors ${
              lang === "en" ? "text-foreground bg-[#FAFAFA]" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            EN
          </button>
          <button
            onClick={() => setLang("hu")}
              className={`text-[1rem] font-normal tracking-wide px-2 py-1 rounded transition-colors ${
              lang === "hu" ? "text-foreground bg-[#FAFAFA]" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            HU
          </button>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-foreground z-50"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <X size={44} strokeWidth={0.4} />
          ) : (
            <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.4" strokeLinecap="round">
              <line x1="4" y1="9" x2="20" y2="9" />
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="4" y1="15" x2="20" y2="15" />
            </svg>
          )}
        </button>
      </header>

      {/* Mobile fullscreen menu overlay */}
      {menuOpen && (
        <div className="fixed inset-0 bg-white z-40 md:hidden flex flex-col items-center justify-center">
          <nav className="flex flex-col items-center gap-5">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className={`text-[1.55rem] font-light font-['Work_Sans'] tracking-wide transition-colors ${
                  isActive(item.path)
                    ? "text-[#242424] underline decoration-[0.5px] underline-offset-8"
                    : "text-[#242424]/60"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Language switcher at bottom of menu */}
          <div className="absolute bottom-12 flex items-center gap-3">
            <button
              onClick={() => setLang("en")}
                className={`text-[1rem] font-light tracking-wide px-3 py-1 rounded transition-colors ${
                lang === "en" ? "text-[#242424]" : "text-[#242424]/40"
              }`}
            >
              EN
            </button>
            <span className="text-[#242424]/20">|</span>
            <button
              onClick={() => setLang("hu")}
                className={`text-[1rem] font-light tracking-wide px-3 py-1 rounded transition-colors ${
                lang === "hu" ? "text-[#242424]" : "text-[#242424]/40"
              }`}
            >
              HU
            </button>
          </div>
        </div>
      )}

      {/* Page content */}
      <main className="flex-1 overflow-visible md:overflow-hidden">
        {children}
      </main>
    </div>
  );
};

export default Layout;
