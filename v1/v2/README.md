# toddclarkston.com v2

Expo Router + React Native Web profile site built with
[`@wireservers/react-natives`](https://github.com/wireservers/react-natives).
Four design variants share one data source so they can be compared side by side.

| Route        | Variant                |
| ------------ | ---------------------- |
| `/`          | Gallery of all variants |
| `/executive` | Executive Minimal      |
| `/bold`      | Dark Tech              |
| `/editorial` | Editorial Two-Column   |
| `/bento`     | Bento Grid             |

## Commands

```bash
npm install
npm run web        # dev server
npm run build      # static export to dist/
npm run typecheck
```

## Where things live

- `src/data/resume.ts` — all résumé content (mirrors the ATS résumé). Edit here, not in the variants.
- `src/themes.ts` — per-variant color tokens, applied with the library's `ThemeScope`.
- `src/variants/*.tsx` — one file per design; `app/*.tsx` just re-export them.
- `src/components/` — shared pieces (contact, downloads, tags, variant switcher, breakpoints).
- `public/data/` — downloadable CVs; `public/images/` — photos.

`useBreakpoint` reports the phone layout until after mount so the statically
rendered HTML hydrates cleanly; layouts switch to the real width right after.
