

## Egységes hover szövegméretek a Team oldalon

### Probléma
A Team oldal hover szövegei kisebbek, mint az oldalon máshol használt méretek:
- **Név most**: `clamp(13px, 1.1vw, 20px)`
- **Beosztás most**: `clamp(10px, 0.8vw, 15px)`

### Referencia méretek más oldalakon
- **Body szöveg** (About, Contact): `clamp(14px, 1.08vw, 16px)`
- **Alcím** (Contact subtitle): `clamp(15px, 1.19vw, 18px)`

### Javítás
A Team hover szövegeket a site-szerte használt body méretekhez igazítom:

| Elem | Jelenlegi | Új |
|------|-----------|-----|
| Név | `clamp(13px, 1.1vw, 20px)` | `clamp(15px, 1.19vw, 18px)` |
| Beosztás | `clamp(10px, 0.8vw, 15px)` | `clamp(14px, 1.08vw, 16px)` |

### Érintett fájl
- `src/pages/Team.tsx` — 2 sor módosítás a hover overlay-ben

