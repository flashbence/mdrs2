
## About oldal képcsúszka: induljon az első 5-6 képpel

### Cél

Igen, meg tudjuk csinálni: az `/about` oldali képcsúszka ne várjon minden képre, hanem az első látható 5-6 képet töltse be prioritással, ezek után induljon el az animáció stabil sebességgel.

Így a felhasználó gyorsabban lát működő csúszkát, miközben a többi kép csak utána töltődik be a háttérben.

### Miért jobb ez?

Most a probléma valószínűleg az, hogy:

- 19 kép van,
- ezek duplázva jelennek meg az infinite marquee miatt,
- tehát a böngésző egyszerre sok képet próbál letölteni / dekódolni,
- az animáció már akkor elindul, amikor a képek mérete és szélessége még nem stabil,
- ezért az első betöltésnél villogás, lassulás, layout-újraszámolás történik,
- frissítés után pedig azért jó, mert a képek már cache-ben vannak.

### Tervezett megoldás

A `src/pages/About.tsx` fájlban átalakítom a képcsúszkát úgy, hogy:

1. **Az első 6 képet külön prioritással kezeljük**
   - ezek `loading="eager"` értéket kapnak,
   - `fetchPriority="high"` értéket kapnak,
   - `decoding="async"` marad, hogy ne blokkolja a teljes oldalt.

2. **Az animáció kezdetben szünetel**
   - a marquee nem indul el azonnal,
   - csak akkor indul, amikor az első 6 kép betöltődött.

3. **A többi kép később töltődik**
   - az első látható képek után a többi kép alacsonyabb prioritással tölt be,
   - így nem terheli egyszerre a böngészőt.

4. **A képek helyét stabilizáljuk**
   - fix, kiszámítható képdobozokat adunk a csúszkában,
   - így a marquee szélessége nem ugrál betöltés közben,
   - ez csökkenti a villogást és a sebességváltozást.

5. **Az animáció sebessége marad kontrollált**
   - a jelenlegi `180s` animációs idő megtartható,
   - ha a stabilizálás után még túl lassúnak érződik első betöltéskor, finoman lehet rövidíteni például `150s` környékére.

### Technikai részletek

A megoldás kb. ilyen logikát kap:

```tsx
const INITIAL_VISIBLE_IMAGE_COUNT = 6;
const [canStartMarquee, setCanStartMarquee] = useState(false);
const loadedInitialImages = useRef(new Set<number>());

const handleInitialImageLoad = (index: number) => {
  if (index >= INITIAL_VISIBLE_IMAGE_COUNT) return;

  loadedInitialImages.current.add(index);

  if (loadedInitialImages.current.size >= INITIAL_VISIBLE_IMAGE_COUNT) {
    setCanStartMarquee(true);
  }
};
```

Majd az animáció:

```tsx
style={{
  animationDuration: "180s",
  animationPlayState: canStartMarquee ? "running" : "paused",
}}
```

A képeknél:

```tsx
<img
  src={img}
  loading={i < 6 ? "eager" : "lazy"}
  fetchPriority={i < 6 ? "high" : "auto"}
  decoding="async"
  onLoad={() => handleInitialImageLoad(i)}
/>
```

És a képhelyeket stabilizáljuk például egy fix méretű wrapperrel:

```tsx
<div className="h-[clamp(130px,13vw,200px)] w-[clamp(200px,20vw,320px)] shrink-0 flex items-center justify-center">
  <img className="max-h-full max-w-full object-contain" />
</div>
```

### Fontos megjegyzés

Nem az összes képet kell megvárni, csak az első látható 5-6 képet.  
Ez gyorsabb indítást ad, de közben mégis stabilabb lesz, mert az animáció már nem teljesen vakon indul el.

### Érintett fájl

- `src/pages/About.tsx`

### Várható eredmény

- Az `/about` oldalon a képcsúszka nem villogva indul.
- Az első 5-6 kép gyorsabban és stabilabban jelenik meg.
- Az animáció csak akkor indul el, amikor ezek már rendelkezésre állnak.
- A többi kép háttérben töltődik tovább.
- Frissítés nélkül is közelebb lesz ahhoz az állapothoz, amit most csak reload után látsz.
