

## Nav bar alatti hely kiterjesztése 767px-ig

### Probléma
Néhány oldal túl korán szünteti meg a mobil felső paddinget — a Contact oldalon `sm:pt-0` (640px-től), így 640–767px között a tartalom belóg a navbar alá.

### Változtatások

**`src/pages/Contact.tsx`** (10. sor):
- `pt-20 sm:pt-0` → `pt-20 md:pt-0`
- Így a felső padding 767px-ig megmarad, és csak 768px-től (desktop) szűnik meg.

**Többi oldal ellenőrzése:**
- **Team**: `pt-20 md:pt-0` — már jó
- **About**: `pt-[120px]` mindig — jó
- **Projects**: `pt-20 sm:pt-[120px]` — a padding megmarad, csak mérete változik, jó
- **Index**: `pt-[120px]` mindig — jó

Tehát csak a **Contact** oldalt kell javítani.

### Hatás
- **Mobil/tablet (< 768px)**: A contact oldal tartalma nem lóg be a navbar alá
- **Desktop (≥ 768px)**: Változatlan, a centered layout kezeli a pozícionálást

