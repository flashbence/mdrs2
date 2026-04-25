## Favicon helyes beállítása + cache-busting

### Cél

A böngészők gyakran agresszívan cache-elik a favicon-t. Ha a fájl neve változatlan, akkor a régi ikon ragadhat a felhasználónál akkor is, ha a tartalom új. A megoldás: új fájlnév használata (verziózott név), és a `index.html`-ben több helyes méret/típus deklarálása.

### Mit fogok csinálni

1. **Új fájlnév létrehozása** a `public/` mappában:
   - A meglévő `public/favicon.png` átmásolása `public/favicon-v2.png` néven (azonos tartalommal — csak a név változik a cache megtörése miatt).
   - A régi `public/favicon.png` egyelőre megmarad, hogy ne legyen 404 olyan helyeken, ahol esetleg még be van drótozva.

2. **`index.html` frissítése**:
   - A `<link rel="icon">` az új `/favicon-v2.png`-re mutasson.
   - Hozzáadok `apple-touch-icon` deklarációt is, hogy iOS-en is rendben legyen.
   - A `type="image/png"` és `sizes` attribútumok beállítása.

### Példa az új `<head>` blokkra

```html
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-v2.png" />
<link rel="apple-touch-icon" href="/favicon-v2.png" />
```

### Fontos megjegyzés

- A jelenlegi `public/favicon.png` **tartalma** változatlan marad — csak a név lesz új. Ha új grafikát is szeretnél a favicon-hoz, töltsd fel a képet és cseréljük le ténylegesen a fájlt is.
- A böngésződben a tab-on néha akkor is a régi ikon marad, amíg a tab-ot teljesen be nem zárod. Inkognitó ablakban azonnal látszik az új favicon.

### Érintett fájlok

- `public/favicon-v2.png` (új, az eredeti másolata)
- `index.html` (frissítve az új hivatkozással)

### Várható eredmény

- Az új favicon név miatt a böngészők kénytelenek újra lekérni az ikont.
- Helyes `type` és `sizes` attribútumok, plusz `apple-touch-icon` támogatás.
