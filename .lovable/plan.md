## Fehér csík mobil nézet alján

### Mi okozza?

Mobilon a Layout `min-h-screen` magas, de a `body` háttérszíne `--background` (#FAFAFA, gyakorlatilag fehér). A kék gradient minden oldalon csak az adott oldal divjén belül van, és nem ér el az alsó képernyőszélig (pl. mert az oldal tartalma rövidebb, vagy a böngésző URL sávja eltűnik görgetéskor és felfedi a body-t alul).

Ez nem a Lovable preview badge: az csak a szerkesztőben látszik. A felhasználó által tapasztalt fehér csík a böngésző viewport alján marad, mert a `body` fehér háttere átüt.

### Megoldás

A legegyszerűbb és legbiztosabb megoldás: a `body` és a `html` háttérszínét mobilon a kék gradient legalsó tónusára állítani, hogy ha valami "túllóg" vagy nem ér le teljesen, akkor is a kék szín legyen alul, ne fehér.

A meglévő gradientek alja `rgba(181,195,211,0.95)` — ez a `#B5C3D3` (a `--primary` token) szín. Ezt használjuk.

### Tervezett módosítások

**`src/index.css`** — a `body`-nak adunk háttérszínt mobilon, ami megegyezik a gradient aljával:

```css
@media (max-width: 767px) {
  html, body {
    background-color: hsl(var(--primary));
  }
}
```

Így ha bárhol a body kilátszik (pl. iOS Safari URL sáv eltűnik, overscroll, rövidebb tartalom), a kék szín lesz látható, nem fehér csík.

Asztali nézeten nem változik semmi, mert ott `overflow: hidden` és pontosan `100vh` magas a layout.

### Érintett fájl

- `src/index.css`

### Várható eredmény

- Mobilon az oldalak alján már nem lesz fehér csík.
- A kék gradient természetesen folytatódik a viewport aljáig.
- Asztali nézet változatlan.
