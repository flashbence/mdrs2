

## Marquee sebesség javítása

### Probléma
A Tailwind `animate-marquee` class csak az animáció nevét és időzítést állítja be CSS-ben, de a böngésző nem mindig alkalmazza helyesen a `180s` értéket, mert a Tailwind-generált class és a `transition-opacity` class ütközhet, vagy a generált CSS specificitása nem elég.

### Megoldás

**`src/pages/About.tsx`** — 77. sor: Az `animate-marquee` mellé inline arbitrary properties-ként kényszerítjük a duration-t:

```
className={`flex w-max will-change-transform transition-opacity duration-500 ${ready ? 'animate-marquee [animation-duration:180s] opacity-100' : 'opacity-0'}`}
```

Ez a `[animation-duration:180s]` Tailwind arbitrary property közvetlenül az elemre írja a duration-t, felülírva bármilyen ütközést.

### Hatás
- A marquee 180 másodperc alatt tesz meg egy teljes kört — lassú, nyugodt scrollozás
- Mobil és desktop egyaránt érintett, mindkettőn lassabb lesz

