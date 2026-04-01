

## Mobile font size increase — 17% across all pages

### Approach

Set the root `font-size` on mobile (`max-width: 767px`) to `117%` in `src/index.css`. This automatically scales all `rem`-based Tailwind classes (`text-sm`, `text-base`, `text-2xl`, etc.) by 17% on mobile without touching each component.

For `clamp()` values that use `px` (won't scale with root font-size), convert their min values from `px` to `rem` so they also respond to the root scaling.

### Changes

**1. `src/index.css`** — Add mobile root font-size override:
```css
@media (max-width: 767px) {
  html { font-size: 117%; }
}
```

**2. Update px-based clamp values to rem** in these files, so they also scale:

- **About.tsx**: `clamp(19px,...)` → `clamp(1.1875rem,...)`, `clamp(14px,...)` → `clamp(0.875rem,...)`
- **Contact.tsx**: Same pattern for all `clamp(14px,...)`, `clamp(15px,...)`, `clamp(19px,...)`
- **Projects.tsx**: Same for `clamp(14px,...)`, `clamp(13px,...)`
- **Team.tsx**: `text-base` and `text-sm` already rem-based — no changes needed
- **Index.tsx**: `text-sm`, `text-2xl` already rem-based — no changes needed
- **Layout.tsx**: Mobile nav `text-sm` and language switcher `text-xs` already rem-based — no changes needed

### Result

All text on mobile becomes 17% larger. Desktop remains unchanged. Single source of truth for the mobile scale factor.

