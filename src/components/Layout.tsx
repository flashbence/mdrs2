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
    <div className="h-screen flex flex-col overflow-hidden">
      {/* Header */}
      <header className="flex items-center justify-between px-[clamp(40px,6.5vw,120px)] py-4 bg-transparent z-50 relative">
        <Link to="/" className="flex items-center">
          <img src={logoImg} alt="MDRS2 Mérnökiroda" className="h-[30px] md:h-[45px] w-auto" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-[1.25rem] font-light font-['Source_Sans_3'] tracking-wide transition-colors hover:text-primary ${
                isActive(item.path)
                  ? "text-primary"
                  : "text-muted-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          {/* Language switcher - two separate buttons */}
          <button
            onClick={() => setLang("en")}
            className={`text-xs font-medium tracking-wide px-2 py-1 transition-colors ${
              lang === "en" ? "text-foreground" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            EN
          </button>
          <button
            onClick={() => setLang("hu")}
            className={`text-xs font-medium tracking-wide px-2 py-1 transition-colors ${
              lang === "hu" ? "text-foreground" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            HU
          </button>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile nav overlay */}
        {menuOpen && (
          <div className="absolute top-full left-0 right-0 bg-card border-b shadow-lg md:hidden">
            <nav className="flex flex-col py-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMenuOpen(false)}
                  className={`px-6 py-3 text-sm tracking-wide transition-colors hover:bg-secondary ${
                    isActive(item.path)
                      ? "text-primary font-semibold bg-secondary"
                      : "text-muted-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Page content */}
      <main className="flex-1 overflow-hidden">
        {children}
      </main>
    </div>
  );
};

export default Layout;
