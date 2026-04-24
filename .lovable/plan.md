## Cél

A mobil nézet alsó/felső "biztonsági sáv" színeit hozzáigazítani a felhasználó által kért színekhez minden oldalon, és — ahol szükséges — a szekció gradient-jét is megfordítani, hogy a látható tartalom teteje/alja tényleg az adott színnel záruljon.

## Kért állapot

| Oldal | Tetejére | Aljára |
|---|---|---|
| Kezdőoldal (/) | fehér | halvány kék |
| Bemutatkozás (/about) | halvány kék | fehér |
| Munkatársaink (/team) | fehér | halvány kék |
| Munkáink (/projects) | fehér | halvány kék |
| Kapcsolat (/contact) | fehér | halvány kék |

(fehér = `#FAFAFA`, halvány kék = `#B5C3D3`)

## Változtatások

### 1. `MobilePageEdges` színek frissítése

A komponens már létezik és helyesen működik — csak a paramétereket kell frissíteni az érintett oldalakon:

- **Index.tsx** — már jó (`top #FAFAFA`, `bottom #B5C3D3`), nem kell módosítani.
- **About.tsx** — már jó (`top #B5C3D3`, `bottom #FAFAFA`), nem kell módosítani.
- **Team.tsx** — JELENLEG fordítva van (`top #B5C3D3`, `bottom #FAFAFA`) → módosítani: `top #FAFAFA`, `bottom #B5C3D3`.
- **Projects.tsx** — már jó (`top #FAFAFA`, `bottom #B5C3D3`), nem kell módosítani.
- **Contact.tsx** — már jó (`top #FAFAFA`, `bottom #B5C3D3`), nem kell módosítani.

### 2. Szekción belüli gradientek igazítása

A `MobilePageEdges` csak a viewporton kívüli sávot festi. Ha a gradient maga "rossz oldalon" hagy színt a szekció szélén, a két szín nem fog folytonosnak tűnni — látszik a váltás. Ezért a Team oldal gradient-jét is meg kell fordítani, hogy az alja legyen halvány kék (most a tetejéhez van közelebb a kék, az alja átlátszó).

- **Team.tsx**: jelenlegi `linear-gradient(to top, kék 0%, … transparent 100%)` — ez azt jelenti, hogy az alja kék, a teteje átlátszó/fehér. Ez DESKTOP-on jól néz ki, de mobilon a `MobilePageEdges` aljához (kék) is illeszkedik. ⇒ **A Team gradient JÓ marad.** (alja kék, teteje fehér felé halad)
  - Csak a `MobilePageEdges` paramétereket kell felcserélni rajta.

- **About.tsx**: gradient `to bottom, kék 0% → fehér 100%` — teteje kék, alja fehér ✅ megfelel a kérésnek, marad.

- **Index.tsx, Projects.tsx, Contact.tsx**: gradient alja kék, teteje fehér/átlátszó ✅ marad.

### 3. Összefoglaló: ténylegesen módosítandó fájl

Csak **egy** sor változik:

**`src/pages/Team.tsx`** (51. sor)
```tsx
// Előtte:
<MobilePageEdges topColor="#B5C3D3" bottomColor="#FAFAFA" />
// Utána:
<MobilePageEdges topColor="#FAFAFA" bottomColor="#B5C3D3" />
```

## Miért csak ennyi?

A többi oldal `MobilePageEdges` paraméterei már megfelelnek a most kért állapotnak — a korábbi loop helyesen állította be őket. A "még mindig nem jó" érzés a Team oldalra vonatkozik, ahol a kérés most felülírja a korábbi (fordított) beállítást.

Ha a tesztelés után más oldalon is észlelhető eltérés (pl. mert a gradient utolsó stop-ja nem pontosan `#B5C3D3` hanem `rgba(181,195,211,0.95)`, ami enyhén áttetsző és így halványabb), egy követő körben az érintett gradient utolsó színstop-ját átállítjuk teljesen átlátszatlan `#B5C3D3`-ra, hogy a `MobilePageEdges` sávjával vizuálisan egybefolyjon.
