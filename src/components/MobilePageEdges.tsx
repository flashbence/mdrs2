/**
 * Mobile-only fixed bands placed just outside the viewport (top and bottom)
 * to ensure correct color continuation when the iOS/Android browser URL bar
 * shows/hides or when overscrolling. Each page passes the color of its
 * top-most and bottom-most visible edge.
 */
const MobilePageEdges = ({
  topColor,
  bottomColor,
}: {
  topColor: string;
  bottomColor: string;
}) => (
  <>
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

export default MobilePageEdges;
