## Vercel SPA rewrites: `vercel.json` a projekt gyökerébe

### Cél

Ha a publikált oldalt Vercel-en hosztoljuk, a közvetlen URL-ek (pl. `/about`, `/projects`, `/team`, `/contact`) frissítéskor vagy direkt megnyitáskor ne dobjanak 404-et, hanem a React Router (BrowserRouter) tudja kezelni őket.

Ehhez egy `vercel.json` fájl kell a projekt gyökerébe SPA rewrite szabállyal, ami minden ismeretlen útvonalat az `index.html`-re irányít.

### Megjegyzés a Lovable hostingról

A Lovable saját hostingján (`.lovable.app` domain és Lovable-en keresztül kötött custom domain) a SPA fallback automatikus, ott nem kell semmilyen konfig fájl. Ez a `vercel.json` **csak akkor lép működésbe, ha Vercelre deployoljuk** a projektet — a Lovable hosting figyelmen kívül hagyja, tehát nem okoz mellékhatást.

### Tervezett fájl

Új fájl: `vercel.json` a repo gyökerében.

Tartalom:

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

### Hogyan működik

- A Vercel minden bejövő kérést megpróbál először statikus fájlként kiszolgálni (`/assets/...`, képek, JS, CSS stb.).
- Ha nincs hozzá fájl (pl. `/about`), a rewrite szabály miatt visszaadja az `index.html`-t.
- A böngésző betölti a React appot, és a `BrowserRouter` lekezeli az URL-t, megjelenítve a megfelelő oldalt (`About`, `Projects`, stb.).
- A `*` route-on definiált `NotFound` oldal csak akkor jelenik meg, ha a React Routerben sincs ilyen útvonal — ez a helyes viselkedés.

### Érintett fájl

- új: `vercel.json`

### Várható eredmény

- Vercelre történő deploy után a `/about`, `/team`, `/projects`, `/contact` URL-ek közvetlen megnyitása és frissítése is működik 404 nélkül.
- A Lovable hostingon semmi nem változik.
