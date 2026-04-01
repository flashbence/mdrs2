

## Szövegszélesség egyeztetés – About vs Projects

### Jelenlegi állapot

- **Projects oldal**: `px-8 md:px-16 lg:px-24` padding + `max-w-[1400px]` belső konténer
- **About oldal**: `px-[clamp(40px,6.5vw,120px)]` padding, nincs max-width korlátozás

Ezek eltérő szélességet adnak — az About oldal más padding-logikát követ.

### Terv

**About.tsx** — a külső konténer paddingját és a belső wrapper-t a Projects oldalhoz igazítjuk:

1. Külső div padding: `px-[clamp(40px,6.5vw,120px)]` → `px-8 md:px-16 lg:px-24`
2. Belső `w-full` div-hez hozzáadni: `max-w-[1400px] mx-auto` (mint a Projects-ben)

Így a szöveg és a táblázat pontosan ugyanolyan széles lesz mindkét oldalon.

