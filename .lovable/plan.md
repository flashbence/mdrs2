

## Marquee lassú betöltés javítása

### Probléma
A `ready` state `false`-ként indul, és csak akkor vált `true`-ra, amikor mind a **19 kép** betöltődött (`Promise.all` az összes `img.onload`-ra vár). Ez 5-6 másodperces késleltetést okoz, amíg az összes kép letöltődik — addig a marquee `opacity-0`.

### Megoldás

Egyszerűsítés: a `ready` gate-et és az egész `useEffect`-et **töröljük**. A marquee azonnal megjelenik az animációval, a képek pedig progresszíven töltődnek be. Nincs szükség arra, hogy megvárjuk az összeset.

**`src/pages/About.tsx`**:

1. Töröljük a `useState(false)`, `useRef`, és az egész `useEffect` blokkot (33–54. sor)
2. A marquee div className-ből eltávolítjuk a feltételes logikát:

```tsx
<div
  className="flex w-max will-change-transform animate-marquee opacity-100"
  style={{ animationDuration: '180s' }}
>
```

3. A `ref={trackRef}` is törlődik a div-ről.

### Hatás
- A marquee **azonnal elindul** az oldal renderelésével — nem kell 5-6 mp-et várni
- A képek progresszíven jelennek meg ahogy betöltődnek (ez természetes viselkedés)
- Desktop és mobil egyaránt érintett, mindkettőn gyorsabb lesz

