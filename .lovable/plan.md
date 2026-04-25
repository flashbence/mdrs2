## Plan: CSS-only iOS safe area handling

Replace the existing inline `pb-[env(safe-area-inset-bottom)]` approach with reusable utility classes, and also handle the **top** safe area (notch / dynamic island) — which the current implementation doesn't address.

### 1. `src/index.css` — add utility classes

Add outside any media query (so they apply on all viewports, but `env()` returns 0 on desktop, making them effectively mobile-only):

```css
@supports (padding-top: env(safe-area-inset-top)) {
  .safe-area-top {
    padding-top: env(safe-area-inset-top);
  }
  .safe-area-bottom {
    padding-bottom: env(safe-area-inset-bottom);
  }
}
```

### 2. Apply to each page

For each page, add `safe-area-top` to the outermost wrapper and `safe-area-bottom` to the same wrapper (or the bottommost section if it differs). I'll also remove the now-redundant inline `pb-[env(safe-area-inset-bottom)]` Tailwind classes added previously, to keep things clean.

**Files & exact targets:**

- **`src/pages/Index.tsx`** — outer `<div className="relative min-h-svh md:h-screen ... pb-[env(safe-area-inset-bottom)]">`
  → replace `pb-[env(safe-area-inset-bottom)]` with `safe-area-top safe-area-bottom`

- **`src/pages/About.tsx`** — outer `<div className="relative min-h-svh md:h-full ... pb-[env(safe-area-inset-bottom)]">`
  → replace `pb-[env(safe-area-inset-bottom)]` with `safe-area-top safe-area-bottom`

- **`src/pages/Team.tsx`** — outer `<div className="min-h-svh md:h-full ... pb-[env(safe-area-inset-bottom)]">`
  → replace `pb-[env(safe-area-inset-bottom)]` with `safe-area-top safe-area-bottom`

- **`src/pages/Projects.tsx`** — outer wrapper → add `safe-area-top safe-area-bottom` (and remove inline safe-area pb if present)

- **`src/pages/Contact.tsx`** — outer wrapper currently has `pb-[calc(clamp(48px,10vw,80px)+env(safe-area-inset-bottom))]`. Replace with `pb-[clamp(48px,10vw,80px)] safe-area-top safe-area-bottom` so the calc no longer needs the env var inline.

### Notes

- `safe-area-top` / `safe-area-bottom` add **padding**, so the page's existing background extends into the notch and home-indicator zones — no white strips, no hardcoded colors.
- On desktop, `env(safe-area-inset-*)` resolves to `0`, so there's zero visual change on desktop.
- This requires `viewport-fit=cover` in `index.html`'s viewport meta — which was already added in the previous fix, so no change there.
- No layout, component, or other styling changes.

### Files to edit
1. `src/index.css` — add the `@supports` block
2. `src/pages/Index.tsx`
3. `src/pages/About.tsx`
4. `src/pages/Team.tsx`
5. `src/pages/Projects.tsx`
6. `src/pages/Contact.tsx`
