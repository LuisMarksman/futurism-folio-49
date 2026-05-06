## Goal
Match the uploaded reference screenshot exactly: a spacious centered hero, only "Home" underlined in the navbar, and the skills marquee anchored at the bottom of the hero spanning full width without overlapping content.

## Changes

### 1. `src/components/portfolio/Navbar.tsx` — Only "Home" underlined
The current scroll handler auto-detects the visible section and underlines whichever one is in view (so when the page first loads with hero showing, "Home" is correctly underlined — but on viewport edge cases another tab can briefly be active). To match the reference exactly:
- Restore navbar item spacing: change `gap-1` → `gap-2` and link padding `px-3 py-2` → `px-4 py-2`.
- Restore link text size to `text-sm` (drop the `text-xs lg:text-sm` shrink).
- Keep the "Let's talk" button width as-is (`px-8`).
- No change to the active-detection logic — "Home" will be the only underlined tab while the hero is visible (matches the reference).

### 2. `src/components/portfolio/Hero.tsx` — Restore spacious hero + fix marquee
The hero content itself is already centered, but the marquee currently sits inside the section flow with `mt-16` and can visually crowd the buttons on shorter viewports. Adjustments:

- **Hero content container**: keep `max-w-4xl mx-auto text-center` (unchanged — matches reference).
- **Section padding**: change `pt-28 pb-20` → `pt-28 pb-32` so there is breathing room above the marquee.
- **Marquee placement**: move the marquee `motion.div` to be absolutely anchored to the bottom of the section so it never pushes hero content:
  - Wrap marquee with: `absolute bottom-8 left-0 right-0 z-10 w-full h-16 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_5%,black_95%,transparent)]`
  - This keeps it full-width inside the section (no `w-screen`), prevents overlap with buttons via `pb-32` on the section, and keeps the section's `overflow-hidden` clipping.
- Keep chip styling and `animate-scroll-x` exactly as-is.

### 3. No other files affected
`src/pages/Index.tsx` already wraps everything in `overflow-x-hidden`, so no horizontal scroll risk.

## Result at 878px viewport
- Navbar: logo • Home (underlined) Projects Skills Experience Achievements Testimonials Contact • [ Let's talk ] — with comfortable spacing.
- Hero: centered, full original scale, with Contact Me / View Projects / Resume buttons.
- Skills marquee: pinned to the bottom of the hero, full container width, fading at both edges, never overlapping the CTAs.
