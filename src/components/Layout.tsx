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
      <header className="flex items-center justify-between px-6 md:px-12 py-4 bg-transparent z-50 relative">
        <Link to="/" className="text-xl md:text-2xl font-bold tracking-tight font-['Work_Sans']">
          <span className="text-foreground">MDRS</span>
          <span className="text-foreground/70">2</span>
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

        <div className="flex items-center gap-0">
          <button
            onClick={() => setLang("en")}
            className="inline-block uppercase select-none transition-colors"
            style={{
              lineHeight: '36px',
              height: '36px',
              paddingRight: '10px',
              fontSize: '14px',
              fontFamily: 'Arial',
              color: lang === "en" ? 'rgb(0,0,0)' : 'rgb(160,160,160)',
            }}
          >
            EN
          </button>
          <button
            onClick={() => setLang("hu")}
            className="inline-block uppercase select-none transition-colors"
            style={{
              lineHeight: '36px',
              height: '36px',
              fontSize: '14px',
              fontFamily: 'Arial',
              color: lang === "hu" ? 'rgb(0,0,0)' : 'rgb(160,160,160)',
            }}
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
