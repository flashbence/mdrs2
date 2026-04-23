
## Projects oldal: dinamikus desktop lista-magasság

### Cél

A Projects oldalon desktop nézetben ne legyen feleslegesen nagy üres tér a lista után, hanem a táblázat magassága igazodjon az aktuális képernyőmagassághoz.

Fontos feltétel: a felső menüsor alatt és a Projects tartalom kezdete között mindig fix távolság maradjon.

### Megoldás

A jelenlegi fix `max-h-[500px]` táblázatmagasságot lecserélem egy rugalmas, képernyőmagassághoz igazodó elrendezésre.

A Projects oldal desktopon így fog működni:

```text
képernyő teteje
│
├─ fejléc / főmenü
│
├─ fix távolság
│
├─ projekt kategória gombok
├─ kategória leírás
├─ táblázat
│  └─ a maradék desktop magasságot használja
│     ha több sor van, belül scrollozik
│
└─ fix alsó margó
```

### Konkrét módosítások

#### 1. Projects oldal fő konténerének rendezése

A `src/pages/Projects.tsx` desktop layoutját úgy állítom át, hogy:

- desktopon `h-full` / `min-h-0` alapú legyen,
- a belső tartalom teljes rendelkezésre álló magassággal számoljon,
- mobilon a mostani kártyás, természetesen görgethető működés megmaradjon.

#### 2. Fix felső térköz megtartása

A jelenlegi felső pozícionálást nem hagyom össze-vissza skálázódni.

Desktopon fix érték marad például:

```tsx
md:pt-[120px]
```

Így a főmenü és a Projects tartalom kezdete közötti távolság mindig stabil marad.

#### 3. A táblázat magasságának dinamikussá tétele

A mostani rész:

```tsx
<div className="max-h-[500px] overflow-y-auto">
```

helyett rugalmas megoldás lesz:

```tsx
<div className="flex-1 min-h-0 overflow-y-auto">
```

Ehhez a szülő konténerek is `flex flex-col min-h-0` struktúrát kapnak, hogy a táblázat pontosan a maradék képernyőmagasságot használja.

#### 4. Tabs és leírás fix magasságú blokkok maradnak

A kategória gombok és a leírás nem nyúlnak, nem ugrálnak:

```tsx
<div className="shrink-0">tabs</div>
<div className="shrink-0">description</div>
```

A táblázat kapja meg a fennmaradó helyet.

#### 5. Mobil nézet változatlan marad

A mobil layout:

- továbbra is kártyás marad,
- nem kap desktopos belső scrollt,
- a teljes oldal természetesen görgethető marad.

### Várható eredmény

Desktopon:

- nagyobb kijelzőn több projekt-sor látszik egyszerre,
- kisebb laptopon kevesebb sor látszik, de a táblázat belül scrollozható,
- megszűnik a felesleges nagy whitespace a táblázat után,
- a felső menüsor és a Projects tartalom kezdete közötti távolság fix marad,
- a mobil nézet nem változik.

### Érintett fájl

- `src/pages/Projects.tsx`

