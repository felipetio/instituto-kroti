# Instituto Kroti Kayapo

Website institucional do Instituto Kroti Kayapo, organizacao indigena Mebengokre sediada na Aldeia Kaprankere, Pau D'Arco - PA.

## Desenvolvimento

```bash
npm install
npm run dev       # servidor local com HMR
npm run build     # build de producao em dist/
npm run preview   # preview do build
```

## Stack

- React 19 + Vite
- CSS puro com design tokens (sem preprocessador)
- i18n proprio (PT/EN)
- Roteamento por hash

## Estrutura

```
src/
  main.jsx        # entry point
  App.jsx         # rotas, tweaks panel, edit mode
  i18n.jsx        # dicionario PT/EN e LangProvider
  Primitives.jsx  # componentes base (Button, Icon, PatternBar...)
  Chrome.jsx      # Header + Footer
  Home.jsx        # secoes da home (Hero, Stats, Programs, Quote)
  Pages.jsx       # paginas internas (Sobre, Povo, Videos, Equipe...)
  FooterLogo.jsx  # wordmark SVG
styles/
  tokens.css      # paleta, tipografia, espacamento
  site.css        # estilos de componentes, dark mode, responsivo
assets/
  logo-kroti.svg
  logo-kroti-mark.svg
  padrao-kayapo.png
  padrao-kayapo-tile.svg
```

## Paleta

Inspirada nas tintas corporais Mebengokre:

| Token | Cor | Origem |
|-------|-----|--------|
| urucum | `#A8321C` | semente de urucuzeiro (vermelho) |
| jenipapo | `#141210` | fruto do jenipapeiro (preto-azulado) |
| argila | `#C9A57B` | neutro quente |
| cal | `#F2EAD8` | claro, texto sobre fundo escuro |
| papel | `#F5EEDD` | fundo principal |

## Licenca

Todos os direitos reservados. Instituto Kroti Kayapo.
CNPJ 36.497.323/0001-80
