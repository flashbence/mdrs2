## Plan

A mostani megoldás azért nem látszik, mert a `MobilePageEdges` csak két fix `div`-et rajzol a React oldalon belül, miközben a valódi mobil böngésző által látható háttér továbbra is a globális `body` háttérszíne (`#FAFAFA`). Emiatt az iOS/Android felső-alsó sávja vagy overscroll területe továbbra is rossz színt mutathat.

A javítás ezt fogja megoldani:

1. A `MobilePageEdges` komponenst nem külön színcsík-rajzolásra használom, hanem route-szintű mobil háttérszinkronra.
2. Mobilon minden oldal betöltésekor a tényleges `html`/`body` háttérszínt is beállítom az adott oldal tetejének és aljának megfelelő vizuális színekhez.
3. Az oldalakhoz a most kért párosításokat rögzítem:
   - Kezdőoldal: felül fehér, alul halvány kék
   - Bemutatkozás: felül halvány kék, alul fehér
   - Munkatársaink: felül fehér, alul halvány kék
   - Munkáink: felül fehér, alul halvány kék
   - Kapcsolat: felül fehér, alul halvány kék
4. A globális CSS-ben beállítom, hogy mobilon az alap háttér ne írja felül ezt a route-specifikus megoldást.
5. Ha szükséges, a komponens fixed sávjai is megmaradnak kiegészítő biztosítékként, de a fő javítás a dokumentumszintű háttér lesz.

## Érintett fájlok

- `src/components/MobilePageEdges.tsx`
- `src/index.css`
- `src/pages/Index.tsx`
- `src/pages/About.tsx`
- `src/pages/Team.tsx`
- `src/pages/Projects.tsx`
- `src/pages/Contact.tsx`

## Technikai részletek

A várható megközelítés:

```text
Page mount
  -> MobilePageEdges/useEffect lefut
  -> html/body kap route-specifikus background értéket
  -> top/bottom fixed background helper opcionálisan megmarad
  -> page unmountkor visszaáll az alapérték
```

Konkrétan:
- `document.documentElement.style.background` és/vagy `document.body.style.background` route szerint lesz állítva mobil nézetre.
- Nem csak `backgroundColor`, hanem szükség esetén teljes gradient háttér is használható, hogy a felső és alsó átmenet is helyes legyen.
- A komponens cleanupot kap, hogy oldalváltáskor ne maradjon bent előző háttér.

## Várt eredmény

Mobilon a felső és alsó látható sáv már nem különálló idegen csík lesz, hanem az adott oldal tetejének és aljának vizuális folytatása.

Ha ezt jóváhagyod, megcsinálom a tényleges javítást.