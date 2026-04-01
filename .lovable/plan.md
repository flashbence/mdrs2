

## Problem

The Projects page layout has two issues:
1. The table container uses `md:h-[calc(100vh-260px)]` — a viewport-relative height that doesn't lock the table position
2. When switching tabs, shorter lists cause layout shifts because the container resizes

## What needs to happen

The About page uses `pt-[120px]` for the gap between navbar and content. The Projects page already has `sm:pt-[120px]` — so the top spacing matches. The real fix is the table area:

**File: `src/pages/Projects.tsx`**

1. Remove `md:justify-center` from the outer container — content should flow from top, not be vertically centered
2. Remove the dynamic height (`md:h-[calc(100vh-260px)]`, `md:min-h-[400px]`, `md:overflow-y-auto`, `flex-1`, `min-h-0`) from the desktop table wrapper
3. Instead, make the table wrapper a simple container with `overflow-hidden rounded-[14px]`, and inside it put a scrollable div with `max-h-[500px] overflow-y-auto` — this locks the table to its position right after the description, and caps the scrollable area at 500px
4. The outer content div keeps `sm:pt-[120px]` to match the About page spacing

### Resulting structure (desktop):

```
outer container (no vertical centering)
  └─ content wrapper (pt-[120px], max-w-[1400px])
      ├─ tabs
      ├─ description (my-4)
      └─ table wrapper (rounded-[14px], overflow-hidden)
          └─ inner scroller (max-h-[500px], overflow-y-auto)
              └─ table
```

This locks the table top edge to the same position regardless of which tab is active, and the 500px inner scroll handles long lists.

