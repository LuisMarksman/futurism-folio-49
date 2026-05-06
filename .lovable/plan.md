## Goal
Show the horizontal tab navigation at the user's current viewport (~878px) instead of the hamburger menu, and make the "Let's talk" button longer/wider.

## Changes — `src/components/portfolio/Navbar.tsx`

1. **Switch breakpoint from `lg` to `md`** so nav tabs appear on tablets/medium screens (≥768px) — matching the user's 878px viewport.
   - Desktop `<ul>` nav: `hidden lg:flex` → `hidden md:flex`
   - "Let's talk" button: `hidden lg:inline-flex` → `hidden md:inline-flex`
   - Hamburger button: `lg:hidden` → `md:hidden`
   - Mobile menu wrapper: `lg:hidden` → `md:hidden`

2. **Tighten spacing** so all links + button fit comfortably at md sizes:
   - Tab links padding: `px-4 py-2` → `px-3 py-2`
   - Tab font: keep `text-sm` on lg, slightly smaller on md if needed (`text-xs md:text-sm`)

3. **Lengthen the "Let's talk" CTA**:
   - Increase horizontal padding: `px-5` → `px-8`
   - Optional: add `tracking-wide` for a longer visual feel

## Result
At 878px the user will see: logo • Home Projects Skills Experience Achievements Testimonials Contact • [ Let's talk ] (wider button), with no hamburger.

No other files affected.