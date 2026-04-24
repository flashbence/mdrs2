## Mobil safe-area színek oldalanként

### Probléma

Mobilon a böngésző URL sávja eltűnésekor / overscroll során, vagy ha a tartalom nem éri el pontosan a viewport szélét, a `body` háttere látszik a tetején és/vagy alján. A jelenlegi globális `body { background: hsl(--primary) }` minden oldalon kéket mutat, de oldalanként eltérő szín kell:

| Oldal | Felső szín (top) | Alsó szín (bottom) |
|---|---|---|
| Index (`/`) | fehér | kék |
| About (`/about`) | kék | fehér |
| Team (`/team`) | kék | fehér |
| Projects (`/projects`) | fehér | kék |
| Contact (`/contact`) | fehér | kék |

A lényeg: az oldal gradient-jének **legfelső** színe folytatódjon felfelé (status bar, safe-area-top), a **legalsó** színe folytatódjon lefelé (URL sáv mögé, safe-area-bottom).

### Megoldás

Minden oldal kap két `fixed` pozíciójú "extender" sávot: egyet a viewport teteje fölött (`-top`) és egyet az alja alatt (`-bottom`). Ezek a body színét felülírják az adott oldalon a saját gradientjének megfelelő full színnel.

Mivel mind az 5 oldalnál csak két szín jelenik meg (`#B5C3D3` kék és `#FAFAFA` fehér), elég egy egyszerű, újrafelhasználható komponens: `MobilePageEdges` ami `topColor` és `bottomColor` propot kap, és csak mobilon (`md:hidden`) renderel két 100px magas, fix pozíciójú sávot a viewport teteje fölé és alja alá (`top: -100px` és `bottom: -100px`).

### Tervezett módosítások

**1. `src/index.css`** — vegyük le a globális mobil body kék hátteret (visszaáll fehérre, ami az alapértelmezett `--background` #FAFAFA):

```css
/* Eltávolítjuk: */
@media (max-width: 767px) {
  html, body { background-color: hsl(var(--primary)); }
}
```

**2. Új komponens: `src/components/MobilePageEdges.tsx`**

```tsx
const MobilePageEdges = ({ topColor, bottomColor }: { topColor: string; bottomColor: string }) => (
  <>
    <div className="md:hidden fixed left-0 right-0 -top-[200px] h-[200px] z-0 pointer-events-none" style={{ backgroundColor: topColor }} />
    <div className="md:hidden fixed left-0 right-0 -bottom-[200px] h-[200px] z-0 pointer-events-none" style={{ backgroundColor: bottomColor }} />
  </>
);
```

Itt a `fixed` + negatív `top/bottom` biztosítja, hogy a viewporton kívül is folytatódjon a szín, így az iOS Safari URL sáv eltűnésekor / overscroll során is helyes szín látszik.

**3. Minden oldalhoz hozzáadjuk a helyes színeket:**

- `Index.tsx`: `<MobilePageEdges topColor="#FAFAFA" bottomColor="#B5C3D3" />`
- `About.tsx`: `<MobilePageEdges topColor="#B5C3D3" bottomColor="#FAFAFA" />` (a felső gradient kéket mutat, alul fehérbe vált)
- `Team.tsx`: `<MobilePageEdges topColor="#B5C3D3" bottomColor="#FAFAFA" />`
- `Projects.tsx`: `<MobilePageEdges topColor="#FAFAFA" bottomColor="#B5C3D3" />`
- `Contact.tsx`: `<MobilePageEdges topColor="#FAFAFA" bottomColor="#B5C3D3" />`

Megjegyzés: az `About` és `Team` gradientje `to bottom`/`to top` átlátszóságok keverékét használja átlátszó/fehér felé. A láthatatlan részen át a body fehér háttere látszik, ezért ahol a gradient ténylegesen halványul, ott fehér a vizuális szín. A fenti táblázatban már a tényleges, szemmel látható szélső színeket adtam meg.

### Érintett fájlok

- `src/index.css` (1 sor törlés)
- `src/components/MobilePageEdges.tsx` (új, ~10 sor)
- `src/pages/Index.tsx`
- `src/pages/About.tsx`
- `src/pages/Team.tsx`
- `src/pages/Projects.tsx`
- `src/pages/Contact.tsx`

### Várható eredmény

- Mobilon minden oldal teteje és alja természetesen folytatódik a viewporton kívül a megfelelő (kék vagy fehér) színnel.
- Nincs többé fehér csík kék gradientes oldalak alján, és nincs kék csík a fehér aljú oldalakon.
- Asztali nézet teljesen változatlan (a komponens `md:hidden`).
