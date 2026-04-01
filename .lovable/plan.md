

## MDRS2 Mérnökiroda – Weboldal

### Koncepció
Minimalista, no-scroll (viewport-height) oldalak, kétnyelvű (HU/EN) mérnöki cég weboldal. Világos, tiszta megjelenés a screenshot-ok alapján.

### Oldalak

**1. Kezdőlap (Hero)**
- MDRS2 logó bal felső sarokban
- Navigáció: Bemutatkozás | Munkatársaink | Munkáink | Kapcsolat
- EN/HU nyelvváltó jobb felső sarokban
- Központi cím: "Tartószerkezeti tervezés és szakértés"
- Alcím szöveg
- "Bővebben" gomb → Bemutatkozás oldalra navigál
- Háttérben 3D épületszerkezet kép

**2. Bemutatkozás (Rólunk)**
- Cégbemutató szöveg (a screenshot-on látható tartalom)
- Alul 4 projekt/referencia kép sor

**3. Munkatársaink**
- Csapattagok kártyái: név, beosztás, opcionálisan fotó
- Rácsos elrendezés, egy képernyőn elfér

**4. Munkáink**
- Projektek galériája kártyás elrendezésben
- Projekt név + kategória + kép

**5. Kapcsolat**
- Elérhetőségek: cím, telefon, email
- Középre rendezett, letisztult

### Technikai megoldások
- Nyelvváltás React context-tel (HU/EN), URL-ben `/en` prefix angol verzióhoz
- Minden oldal `h-screen` – nincs scroll
- Smooth page transitions
- Teljesen reszponzív (mobil hamburger menü)
- Képek placeholder-ként amíg a végleges tartalom megérkezik

