## Plan

A mostani megoldás iPhone-on valószínűleg azért hibázik, mert a böngésző felső/alsó sávja nem ugyanúgy kezeli a Reacten belüli fixed elemeket, mint a dokumentumszintű hátteret. Emellett hiányzik néhány mobil Safari-specifikus beállítás is, ezért a felső sáv szürkés, az alsó pedig fehér maradhat akkor is, ha az oldalon belül más színek látszanak.

A javítás ezt fogja megoldani:

1. A mobil safe-area hátteret nem csak `div`-ekkel, hanem valódi dokumentumszinten fogom kezelni.
2. iPhone/Safari számára hozzáadom a szükséges viewport és theme-color meta beállításokat.
3. A `MobilePageEdges` komponenst úgy alakítom át, hogy ne csak fix sávokat rajzoljon, hanem route-váltáskor a `html` és `body` hátterét, illetve a theme-color meta taget is frissítse.
4. A felső és alsó színt oldalanként a kért párosítás szerint tartom meg:
   - Kezdőoldal: felül fehér, alul halvány kék
   - Bemutatkozás: felül halvány kék, alul fehér
   - Munkatársaink: felül fehér, alul halvány kék
   - Munkáink: felül fehér, alul halvány kék
   - Kapcsolat: felül fehér, alul halvány kék
5. A fő mobil konténereket stabil viewport-magasságra igazítom, hogy az iOS alsó browser UI ne hagyjon külön fehér „plusz” területet.

## Érintett fájlok

- `index.html`
- `src/components/MobilePageEdges.tsx`
- `src/index.css`
- `src/components/Layout.tsx`
- szükség szerint a fő oldalak (`src/pages/Index.tsx`, `About.tsx`, `Team.tsx`, `Projects.tsx`, `Contact.tsx`)

## Technikai részletek

A várható megközelítés:

```text
Page mount / route change
  -> MobilePageEdges beállítja a html/body háttért
  -> MobilePageEdges frissíti a meta[name="theme-color"] értéket
  -> iPhone Safari a felső UI-hoz a topColor-t kapja
  -> oldalkonténer legalább viewport-magas lesz mobilon
  -> alsó safe area nem külön fehér sávként jelenik meg
  -> cleanup visszaállítja az alap meta / style értékeket
```

Konkrétan:
- `index.html` kap mobilbarát viewport beállítást, várhatóan `viewport-fit=cover` kiegészítéssel.
- Hozzáadok `meta name="theme-color"` taget, amit a React oldal route szerint felül tud írni.
- A `MobilePageEdges` cleanup-pal együtt menti és visszaállítja az eredeti document/meta állapotot.
- Mobilon a fő wrapper(ek) `min-h-screen` helyett vagy mellett stabilabb `min-h-[100svh]` / `min-h-[100dvh]` logikát kapnak, hogy iOS-en ne maradjon külön alsó üres sáv.
- Ha kell, a jelenlegi off-screen fixed sávok megmaradnak tartalék biztosítékként, de nem ezek lesznek a fő mechanizmus.

## Várt eredmény

iPhone nézetben:
- a kezdőoldal teteje fehér lesz,
- az alja halvány kék lesz,
- és ugyanez oldalanként a megadott felső/alsó színpár szerint fog folytatódni,
- anélkül hogy külön szürke vagy fehér idegen csík jelenne meg a browser UI körül.

Ha ezt jóváhagyod, megcsinálom a tényleges iPhone-kompatibilis javítást.