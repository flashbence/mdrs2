

## Betűvastagság és méret koherencia – Team oldal

### Probléma
A Kapcsolat oldalon `font-light` (300) van használva mindenhol, míg a Team oldalon `font-semibold` (600) a nevek és a mobilos szövegek. Ez inkonzisztens.

### Változtatások

**Team.tsx – Desktop hover overlay (sor 66-71)**
- Nevek: `font-semibold` → `font-light`, méret `clamp(11px,0.95vw,18px)` → `clamp(13px,1.1vw,20px)`
- Szerepkörök: méret `clamp(8px,0.7vw,13px)` → `clamp(10px,0.8vw,15px)`, `font-light` hozzáadás

**Team.tsx – Mobile szövegek (sor 90-95)**
- Nevek: `font-semibold text-sm` → `font-light text-base`
- Szerepkörök: `text-xs` → `text-sm`, `font-light` hozzáadás

Ezzel minden szöveg `font-light` (300) lesz az egész oldalon, koherens a Kapcsolat oldallal, és picit nagyobb méretben jelenik meg.

