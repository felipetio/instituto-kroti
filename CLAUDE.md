# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development

```bash
npm run dev       # Vite dev server with HMR
npm run build     # Production build to dist/
npm run preview   # Preview production build
```

## Architecture

- **Stack**: React 19 + Vite, no router library. CSS (no preprocessor).
- **Routing**: Hash-based (`#/sobre`, `#/povo`, etc.) via `useHash()` hook in `src/App.jsx`. Routes mapped to page components in the `App` component.
- **i18n**: `useLang()` hook from `LangProvider` context. PT/EN dictionary lives in `src/i18n.jsx`. Call `t('key')` or `t('key', { var: value })` for interpolation. Mebêngôkre words are kept untranslated in both languages. `DICT` is also exported for direct access (used by `PovoPage` for glossary arrays).
- **Edit mode / Tweaks panel**: Default values in `src/App.jsx` inside `/*EDITMODE-BEGIN*/.../*EDITMODE-END*/` (heroVariant, lang, dark). Panel activated via `postMessage` protocol: site posts `__edit_mode_available`, parent responds with `__activate_edit_mode`.
- **Dark mode**: Toggling `body.dark` remaps CSS custom properties. Dark overrides are in `styles/site.css`.

## Design System

Palette is Mebêngôkre-inspired (defined in `styles/tokens.css`):
- **urucum** (`#A8321C`) -- red accent, from achiote seed dye
- **jenipapo** (`#141210`) -- dark ink, from genipap fruit dye
- **argila** (`#C9A57B`) -- warm neutral
- **cal** (`#F2EAD8`) -- light, used for inverse/on-dark text
- **papel** (`#F5EEDD`) -- main background
- **osso** (`#EDE4D0`) -- alternate background

Typography: Cinzel (display/headings), Lora (body/editorial), Inter (UI/labels/nav).

Kayapo geometric pattern (`assets/padrao-kayapo.png`) is used as decorative bars (`PatternBar` component) and subtle background textures.

## Key Files

- `src/App.jsx` -- Entry component: routing, tweaks panel, edit mode protocol
- `src/main.jsx` -- Vite entry point, mounts App and imports CSS
- `src/i18n.jsx` -- Translation dictionary (DICT) and LangProvider/useLang
- `src/Primitives.jsx` -- Shared UI: Button, Badge, Eyebrow, PatternBar, Icon (inline SVG paths), Placeholder, Mbk
- `src/Chrome.jsx` -- Header + Footer (site shell)
- `src/Home.jsx` -- Home sections with 3 Hero variants: editorial (dark), split (photo left), pattern (full-bleed Kayapo pattern)
- `src/Pages.jsx` -- All subpages: Sobre, Povo, Videos, Equipe, Transparencia, Apoiar, Contato
- `src/FooterLogo.jsx` -- Inline SVG wordmark
- `styles/tokens.css` -- Design tokens (colors, type scale, spacing, shadows, motion)
- `styles/site.css` -- All component styles, dark mode overrides, responsive breakpoint at 900px
