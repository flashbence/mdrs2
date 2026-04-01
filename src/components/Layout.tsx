import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { Menu, X } from "lucide-react";

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
      <header className="flex items-center justify-between px-6 md:px-12 py-4 bg-card/80 backdrop-blur-sm border-b z-50 relative">
        <Link to="/" className="text-xl md:text-2xl font-bold tracking-tight font-['Space_Grotesk']">
          <span className="text-primary">MDRS</span>
          <span className="text-primary/70">2</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm tracking-wide transition-colors hover:text-primary ${
                isActive(item.path)
                  ? "text-primary font-semibold"
                  : "text-muted-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          {/* Language switcher */}
          <button
            onClick={() => setLang(lang === "hu" ? "en" : "hu")}
            className="text-xs font-semibold tracking-widest border border-border rounded px-3 py-1.5 hover:bg-secondary transition-colors uppercase"
          >
            {lang === "hu" ? "EN" : "HU"}
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
