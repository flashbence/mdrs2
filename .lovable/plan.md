

## Betűméretek egységesítése

### Jelenlegi állapot

| Elem | About | Contact | Projects |
|------|-------|---------|----------|
| **Címsor (h1/h2)** | `clamp(1.1875rem,1.84vw,28px)` | `clamp(1.1875rem,1.84vw,28px)` | — |
| **Body szöveg** | `clamp(0.875rem,1.08vw,16px)` | `clamp(0.875rem,1.08vw,16px)` | vegyes (`0.89em`, `0.95em`, `0.86rem`, `0.82rem`) |
| **Alcím** | — | `clamp(0.9375rem,1.19vw,18px)` | — |
| **Táblázat fejléc** | — | — | `0.89rem` fix |
| **Táblázat body** | — | — | `clamp(0.8125rem,1.08vw,15px)` |
| **Tab gombok** | — | — | `0.75rem` / `1.1rem` |
| **Leírás** | — | — | `0.89em` / `0.95em` |
| **Mobil kártyák** | — | — | `0.86rem`, `0.82rem` |

A Contact és About már egységes. A **Projects** oldal használ vegyes `rem`/`em` értékeket, amik eltérnek a többi oldaltól.

### Terv

Egységesítjük a Projects oldalt a többi oldal mintájára, `clamp()` alapú méretezéssel:

**`src/pages/Projects.tsx`**:

1. **Tab gombok** (164. sor): `text-[0.75rem] sm:text-[1.1rem]` → `text-[clamp(0.875rem,1.08vw,16px)]`
2. **Leírás** (177. sor): `text-[0.89em] sm:text-[0.95em]` → `text-[clamp(0.875rem,1.08vw,16px)]`
3. **Táblázat fejléc** (187-190. sor): `text-[0.89rem]` → `text-[clamp(0.875rem,1.08vw,16px)]`
4. **Táblázat body** (184. sor): `text-[clamp(0.8125rem,1.08vw,15px)]` → `text-[clamp(0.875rem,1.08vw,16px)]`
5. **Mobil kártyák** (217. sor): `text-[0.86rem]` → `text-[clamp(0.875rem,1.08vw,16px)]`
6. **Mobil év/státusz** (225, 227. sor): `text-[0.82rem]` → `text-[clamp(0.8125rem,1vw,14px)]` (kisebb, de clamp-alapú)

### Eredmény
Minden oldalon azonos `clamp()` rendszer:
- Címsorok: `clamp(1.1875rem, 1.84vw, 28px)`
- Body/általános szöveg: `clamp(0.875rem, 1.08vw, 16px)`
- Kisebb szöveg (év, státusz): `clamp(0.8125rem, 1vw, 14px)`

