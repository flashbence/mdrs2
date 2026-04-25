## Plan: Fix top/bottom white strips on iOS Safari

Targeted fix only — no other styling, layout, or desktop behavior changes.

### Changes

**1. `src/index.css`** — add a global rule outside any media query so `html`, `body`, and `#root` always fill the dynamic viewport with the app background (eliminates white showing through behind safe areas / dynamic toolbar):
```css
html, body, #root {
  min-height: 100dvh;
  background-color: hsl(var(--background));
}
```
Placed after the existing `@media (min-width: 768px)` block, before `@layer base`.

**2. `src/pages/Index.tsx`** — replace both occurrences of `min-h-svh` with `min-h-[100dvh]`:
- Outer wrapper: `relative min-h-svh md:h-screen ...` → `relative min-h-[100dvh] md:h-screen ...`
- Inner flex container: `flex min-h-svh md:h-full ...` → `flex min-h-[100dvh] md:h-full ...`

**3. `src/components/Layout.tsx`** — replace `min-h-svh` with `min-h-[100dvh]` on the root layout div:
- `min-h-svh md:h-screen flex flex-col ...` → `min-h-[100dvh] md:h-screen flex flex-col ...`

### Notes
- No changes to `tailwind.config.ts`, `About.tsx`, `Team.tsx`, `Projects.tsx`, `Contact.tsx`, or `index.html`.
- Desktop (`md:` breakpoint) behavior is preserved — `md:h-screen` / `md:h-full` are untouched.
- `100dvh` matches the dynamic viewport on iOS Safari, eliminating the white strips at top and bottom caused by the address bar / home indicator.