# PremioClub landing

Single-page, Spanish-language lead-capture landing for a daily-giveaway club whose goal is to send visitors to a WhatsApp channel (and optionally capture name + phone via Netlify Forms).

## Architecture

- `src/data/site.ts`: **all copy and config** (brand, `whatsappUrl`, prize, `drawHour`, stats, winners, steps, reasons, testimonials, FAQ) plus `joinForm` name/endpoint. Edit content here, not in components. Winners/stats/testimonials are sample data.
- `src/components/LandingPage.tsx`: the whole page (hero, countdown, stats, winners marquee, steps, signup, testimonials, FAQ, final CTA, sticky mobile CTA).
- `src/components/JoinForm.tsx`: Netlify Forms signup (`registro-club`: `nombre`, `whatsapp`, honeypot `bot-field`). On success it shows a WhatsApp channel button.
- `public/__forms.html`: static registration for Netlify form detection; keep fields in sync with `JoinForm`. The form POSTs here because `/` is handled by SSR.
- `src/styles.css`: Tailwind 4 theme (`font-display` = Bricolage Grotesque), `.cta`, `.form-input`, hero mask and marquee animations (disabled for reduced motion).
- `src/routes/__root.tsx`: `lang="es"`, metadata from `site`, Google Fonts links.

## Conventions and decisions

- Single conversion goal: every CTA goes to WhatsApp or the `#registro` form. Avoid adding navigation that distracts from it.
- The countdown renders `--` on the server and starts in `useEffect` to avoid hydration mismatches.
- The hero image is AI-generated and served via Netlify Image CDN (`/.netlify/images?url=/img/hero-premios.png&w=…&fm=webp`).
- Brand palette: deep violet `#1c0d47` background, lime-300 primary CTA, yellow/fuchsia accents.
- TypeScript stays on 6 because the Netlify adapter build tooling needs it.
