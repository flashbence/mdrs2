

## Kezdőoldal kép javítása

### Probléma
- A kép `object-cover`-rel jelenik meg → levágja az oldalát/alját
- `overflow-hidden` + `flex-1` → a kép kitölti a maradék helyet, de levágódik
- Nincs gap a CTA gomb és a kép között

### Megoldás
- A képet `object-contain`-re cseréljük, így soha nem vágódik le
- A kép wrapper-ről levesszük az `overflow-hidden`-t és a `flex-1`-et
- Helyette a kép kap egy `max-h`-t ami a rendelkezésre álló helyet tölti ki: `flex-1 min-h-0` a wrapper-en, a kép pedig `max-h-full max-w-full object-contain`
- CTA gomb alá `mb-6` (gap a kép felé)

### Konkrét változások — `src/pages/Index.tsx`

| Elem | Jelenlegi | Új |
|------|-----------|-----|
| Text div | `mb-0` | `mb-6` |
| Image wrapper | `flex-1 overflow-hidden` | `flex-1 min-h-0` (overflow nélkül) |
| img | `w-full max-w-[1100px] object-cover object-bottom` | `max-h-full max-w-full max-w-[1100px] object-contain object-bottom` |

Így a kép mindig teljesen látszik (alja + oldalai), és ha kevés a hely, arányosan kisebb lesz.

