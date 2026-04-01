
A hibát megtaláltam: nem az történik, hogy a böngésző “eldob” egy képet, hanem a marquee most rossz pontra resetel.

Mi történik most
- `src/pages/About.tsx`: egyetlen hosszú sor fut, benne `[..., ...projectImages]`
- erre a sorra van `w-max` + `gap-6` + `animate-marquee`
- `tailwind.config.ts`: az animáció `translate3d(-50%, 0, 0)`

Miért jelenik meg üres rész bal oldalon
- a `-50%` a teljes animált sáv felére mozgat
- de a teljes sáv nem 2 teljesen egyforma félből áll, mert a mostani flex sorban a gap-ek száma páratlan
- ezért a felezőpont nem esik pontosan az első és második képsor határára
- a loop reset egy picit túl korán / rossz helyen történik, és ez bal oldali “hiányzó képként” látszik
- a nagy, részben transzparens PNG-k ezt még feltűnőbbé teszik

Javítási terv
1. Az About marquee-t 2 külön, azonos képcsoportból építem fel, nem egyetlen összefűzött listából
2. Az animált track kap stabil szélességet: `min-w-max shrink-0`
3. A képek/itemek külön kapnak `shrink-0`-t, hogy semmi ne nyomódjon össze
4. A spacinget nem a teljes “félbevágott” track logikájára bízom, hanem az azonos csoportokon belül kezelem
5. Így a `translate3d(-50%, 0, 0)` már pontosan egy teljes csoport szélességét jelenti, tehát nem fog eltűnni kép a bal szélen

Érintett fájlok
- `src/pages/About.tsx`
- szükség esetén finomhangolás: `tailwind.config.ts`

Technikai megjegyzés
- a fő ok most a marquee szerkezete, nem az asset import
- ha a szerkezeti javítás után valamelyik kép még mindig “résesnek” látszik, akkor annak a PNG vásznában maradt túl nagy üres perem, és azt külön lehet még levágni
