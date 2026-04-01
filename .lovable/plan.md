

## Egységes navbar-alatti távolság + zsugorodó képek

### Jelenlegi helyzet
- **Contact**: `md:fixed md:inset-0` + `items-center justify-center` — a glass card középre kerül, a navbar alatti rés természetesen adódik
- **About**: `justify-center`, nincs explicit top padding — a tartalom függőlegesen középre áll
- **Team**: `justify-center`, nincs top padding
- **Projects**: `pt-28` (112px) fix top padding
- **Index**: `pt-24 md:pt-28`

A navbar magassága kb. 100px (68px logo + 2×16px padding). A Contact oldalon a pill és a navbar közti távolság a vertikális centírozásból adódik.

### Terv

**1. Egységes top padding minden oldalon**
- A Contact oldal referenciaként szolgál: ott a tartalom vertikálisan középre van igazítva, és a navbar kb. 100px-t foglal
- Az About, Team és Projects oldalakra egységesen `pt-[120px]` padding-top kerül (navbar magasság + kis gap), és a `justify-center` helyett `justify-start`-ra váltunk ahol szükséges, hogy a navbar alatti rés konzisztens legyen
- Az Index oldal megtartja a jelenlegi logikáját (hero layout), de a `pt` értéke szintén 120px-re egységesül

**2. About oldal — képek zsugorodása kis képernyőn**
- A marquee képek már `clamp(180px, 18vw, 280px)` magasságúak — ez jól skálázódik
- Extra: a szöveges tartalom is kap `pt-[120px]`-t, a `justify-center` eltávolítható, hogy felülről induljon

**3. Team oldal — képek zsugorodása**
- A grid elemek `aspect-square` maradnak, de a grid kap egy `max-h` korlátot, hogy kis viewporton a képek kisebbek legyenek
- A grid wrapper kap `pt-[120px]`-t

**4. Projects oldal**
- `pt-28` → `pt-[120px]` csere
- A `height: 75vh` inline style marad, de a `pt` egységes lesz

### Érintett fájlok
- `src/pages/About.tsx` — top padding hozzáadása, justify eltávolítása
- `src/pages/Team.tsx` — top padding, képek max méretkorlát
- `src/pages/Projects.tsx` — pt egységesítés
- `src/pages/Index.tsx` — pt egységesítés

