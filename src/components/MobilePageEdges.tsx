import { useEffect } from "react";

/**
 * Mobile-only background sync for top/bottom viewport edges.
 *
 * Renders two fixed bands just outside the viewport AND sets the actual
 * <html> + <body> background on mobile so iOS/Android browsers show the
 * correct color in the address-bar/home-indicator/overscroll areas.
 *
 * topColor    - color visible at the very top of the page
 * bottomColor - color visible at the very bottom of the page
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

    const apply = () => {
      const html = document.documentElement;
      const body = document.body;
      if (mq.matches) {
        // Split background: top half = topColor, bottom half = bottomColor.
        // Using a hard-stop gradient avoids any blending in the middle but
        // guarantees both overscroll zones match the page edges.
        const bg = `linear-gradient(to bottom, ${topColor} 0%, ${topColor} 50%, ${bottomColor} 50%, ${bottomColor} 100%)`;
        html.style.background = bg;
        body.style.background = bg;
        // Hint browser UI (iOS Safari status bar / Android chrome) to blend.
        html.style.backgroundColor = topColor;
        body.style.backgroundColor = topColor;
      } else {
        html.style.background = "";
        body.style.background = "";
        html.style.backgroundColor = "";
        body.style.backgroundColor = "";
      }
    };

    apply();
    mq.addEventListener?.("change", apply);
    return () => {
      mq.removeEventListener?.("change", apply);
      const html = document.documentElement;
      const body = document.body;
      html.style.background = "";
      body.style.background = "";
      html.style.backgroundColor = "";
      body.style.backgroundColor = "";
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
