

## Hero épületkép tetejének levágása — Index oldal

### Mi a probléma
A kezdőoldalon a `hero-building.png` kép teteje kilóg / nem kívánt részt mutat. Le kell vágni a kép felső részét.

### Megoldás

**Index.tsx** — az img wrapper div-en `overflow-hidden` már van (a szülőn), az img-et felfelé toljuk és a tetejét levágjuk:

- Az `<img>` elemet becsomagoljuk egy `overflow-hidden` div-be
- `object-cover` + `object-bottom` kombináció: a kép alját tartja meg, a tetejét vágja le
- Opcionálisan `clip-path: inset(15% 0 0 0)` vagy negatív `margin-top` a kép tetejének eltüntetéséhez

Konkrétan:
```jsx
<div className="flex justify-center px-[5vw] w-full min-h-0 flex-1 overflow-hidden">
  <img
    src={heroBuilding}
    alt="Structural engineering 3D model"
    className="w-full max-w-[1100px] object-cover object-bottom"
  />
</div>
```

Az `object-contain` → `object-cover` + `object-bottom` váltás biztosítja, hogy a kép alja látszik, a teteje pedig levágódik a konténer határánál.

