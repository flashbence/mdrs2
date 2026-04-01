

## Betűméret egységesítés – Audit és terv

### Jelenlegi állapot

**Headingek (h1/h2):**
| Oldal | Méret | Súly |
|-------|-------|------|
| Index | `text-3xl md:text-5xl lg:text-[3.2rem]` | font-light |
| About | `text-3xl md:text-4xl` | **font-bold** |
| Contact h1 | `clamp(19px,1.84vw,28px)` | font-light |
| Contact h2 (nevek) | `clamp(19px,1.84vw,28px)` | font-light |
| Projects | nincs heading |
| Team | nincs heading |

**Paragrafusok / body text:**
| Oldal | Méret | Súly |
|-------|-------|------|
| Index | `text-sm md:text-base` (~14-16px) | font-light |
| About | `text-sm md:text-base` (~14-16px) | nincs megadva (normal) |
| Contact | `clamp(14px,1.08vw,16px)` | font-light |
| Projects tabs | `0.89em` (~14px) | font-normal |
| Projects description | `0.95em` (~15px) | font-normal |
| Projects table | `clamp(13px,1.08vw,15px)` | font-normal |

### Problémák
1. **About heading `font-bold`** — minden más oldalon `font-light`
2. **About paragrafus** — hiányzik a `font-light`
3. **Méretezési rendszer kevert** — Tailwind breakpointok (`text-sm md:text-base`), `clamp()`, `em` egységek vegyesen
4. **Index heading jóval nagyobb** (~3.2rem max) mint Contact heading (~28px max) — de ez szándékos lehet, mert a főoldal kiemelkedőbb

### Terv

**Egységes rendszer a Contact clamp-alapú megközelítésre:**

- **H1 (főcím)**: `text-[clamp(19px,1.84vw,28px)]` + `font-light` — About.tsx-re alkalmazni (Index megtartja a nagyobb hero méretet)
- **Body text**: `text-[clamp(14px,1.08vw,16px)]` + `font-light` — About.tsx paragrafusokra alkalmazni
- **About.tsx heading**: `font-bold` → `font-light`, méret → clamp rendszer

### Fájlok
- **About.tsx** — heading: `font-bold` → `font-light`, méret → `clamp(19px,1.84vw,28px)` ; paragrafusok: `text-sm md:text-base` → `text-[clamp(14px,1.08vw,16px)] font-light`

A többi oldal (Contact, Projects, Team, Index hero) már konzisztens marad a saját kontextusában.

