

## Mobilon fix header + nagyobb top padding

### Jelenlegi helyzet
A header `absolute` pozíciójú és `pt-0` top paddinggel rendelkezik. Mobilon a tartalom alá scrollozható.

### Változtatások

**`src/components/Layout.tsx`**:
1. Header: `absolute` helyett mobilon `fixed`, desktopn marad `absolute` → `fixed md:absolute`
2. Top padding: `pt-0` helyett mobilon nagyobb → `pt-3 md:pt-0`
3. Háttér mobilon: átlátszó helyett legyen `bg-background/95 backdrop-blur-sm md:bg-transparent md:backdrop-blur-none` hogy scrollnál is látható maradjon
4. Main: mobilon kell egy top padding a fix header miatt → `pt-[70px] md:pt-0`

