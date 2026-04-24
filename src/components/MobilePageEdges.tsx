import { useEffect } from "react";

/**
 * Mobile-only background sync for top/bottom viewport edges.
 *
 * - Sets <html> and <body> background to a hard-stop split gradient so iOS
 *   Safari overscroll/safe-area regions match the page edges.
 * - Updates the <meta name="theme-color"> to topColor so the iOS/Android
 *   browser chrome (status bar / address bar) blends with the page top.
 * - Renders two off-screen fixed bands as belt-and-suspenders.
 */
const MobilePageEdges = ({
  topColor,
  bottomColor,
}: {
  topColor: string;
  bottomColor: string;
}) => {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(max-width: 767px)");

    // Ensure a theme-color meta tag exists.
    let themeMeta = document.querySelector<HTMLMetaElement>(
      'meta[name="theme-color"]'
    );
    let createdThemeMeta = false;
    if (!themeMeta) {
      themeMeta = document.createElement("meta");
      themeMeta.name = "theme-color";
      document.head.appendChild(themeMeta);
      createdThemeMeta = true;
    }
    const previousThemeColor = themeMeta.getAttribute("content");

    const apply = () => {
      const html = document.documentElement;
      const body = document.body;
      if (mq.matches) {
        const bg = `linear-gradient(to bottom, ${topColor} 0%, ${topColor} 50%, ${bottomColor} 50%, ${bottomColor} 100%)`;
        // html drives overscroll color on iOS Safari; use solid top color so
        // the rubber-band area at the top stays clean.
        html.style.backgroundColor = topColor;
        html.style.background = topColor;
        // body holds the actual split gradient under the page content.
        body.style.background = bg;
        body.style.backgroundColor = topColor;
        body.style.backgroundAttachment = "fixed";
        // Browser chrome color (iOS Safari status bar tint, Android URL bar).
        themeMeta!.setAttribute("content", topColor);
      } else {
        html.style.background = "";
        html.style.backgroundColor = "";
        body.style.background = "";
        body.style.backgroundColor = "";
        body.style.backgroundAttachment = "";
        if (previousThemeColor !== null) {
          themeMeta!.setAttribute("content", previousThemeColor);
        }
      }
    };

    apply();
    mq.addEventListener?.("change", apply);
    return () => {
      mq.removeEventListener?.("change", apply);
      const html = document.documentElement;
      const body = document.body;
      html.style.background = "";
      html.style.backgroundColor = "";
      body.style.background = "";
      body.style.backgroundColor = "";
      body.style.backgroundAttachment = "";
      if (createdThemeMeta) {
        themeMeta?.parentNode?.removeChild(themeMeta);
      } else if (previousThemeColor !== null) {
        themeMeta?.setAttribute("content", previousThemeColor);
      }
    };
  }, [topColor, bottomColor]);

  return (
    <>
      {/* Belt-and-suspenders: visible bands just outside the viewport */}
      <div
        aria-hidden
        className="md:hidden fixed left-0 right-0 -top-[200px] h-[200px] z-0 pointer-events-none"
        style={{ backgroundColor: topColor }}
      />
      <div
        aria-hidden
        className="md:hidden fixed left-0 right-0 -bottom-[200px] h-[200px] z-0 pointer-events-none"
        style={{ backgroundColor: bottomColor }}
      />
    </>
  );
};

export default MobilePageEdges;
