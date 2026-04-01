

## Desktop scroll "pattogás" javítása

### Probléma
A `div` wrapper-en van `md:overflow-hidden`, de a `html`, `body` és `#root` elemek nem korlátozzák a scrollt, így az egér görgetésre "pattog" az oldal desktopn.

### Megoldás

**`src/index.css`** — Új media query hozzáadása a meglévő `@media (max-width: 767px)` blokk mellé:

```css
@media (min-width: 768px) {
  html, body, #root {
    height: 100%;
    overflow: hidden;
    overscroll-behavior: none;
  }
}
```

### Hatásvizsgálat
- **Desktop**: Teljesen megszünteti a scroll/pattogást. A `h-screen` + `overflow-hidden` elrendezés így ténylegesen zárt lesz.
- **Mobil**: Nincs hatása, mert a szabály csak `min-width: 768px` felett él. A mobil scrollozás (`min-h-screen`, `overflow-visible`) változatlan marad.

