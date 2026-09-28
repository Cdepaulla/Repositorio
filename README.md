# Portfólio — Caio Pereira de Paula

Vue.js 2.7 (Options API) + TypeScript + SCSS, servido com Vite. Todo o conteúdo é escrito direto no `<template>` de cada componente; o TypeScript cuida só de comportamento (idioma, tema claro/escuro, barra de progresso, animação ao rolar).

## Rodar

```bash
npm install
npm run dev         # http://localhost:5173
npm run build       # gera /dist
npm run preview     # serve o /dist gerado
npm run typecheck   # tsc --noEmit
npm run lint        # eslint em src/
```

## Falta preencher

- `public/assets/curriculo-caio.pdf` — PDF do currículo (botão "Currículo ↓" em `AppCabecalho.vue`)
- `src/components/SecaoProjetos.vue` — projeto 03 ("Sistema de Chamados") ainda está marcado como "em breve"

## Estrutura

```
index.html              entrada do Vite
vite.config.ts           plugin do Vue 2, alias @ -> src
src/
  main.ts                Vue, BootstrapVue, SCSS global, diretiva v-reveal
  App.vue                idioma (PT/EN), barra de progresso, fundo animado
  types/lang.ts           type Lang = 'pt' | 'en'
  directives/reveal.ts    v-reveal — entrada suave das seções ao rolar
  styles/                 _variables.scss (tema) e global.scss (reset, utilitários)
  components/
    AppCabecalho.vue, AppRodape.vue      header e footer
    BrilhoMouse.vue                      halo que acompanha o cursor
    SecaoPrincipal.vue                   hero
    TituloSecao.vue                      título reutilizável (slots annotation + title)
    SecaoSobre.vue, SecaoTecnologias.vue, SecaoExperiencia.vue,
    SecaoFormacao.vue, SecaoProjetos.vue, SecaoRecomendacoes.vue, SecaoContato.vue
```

## Tema

Cores, fontes e espaçamentos ficam em `src/styles/_variables.scss` — trocar o tema do site é trocar essas variáveis. Destaque principal: `$accent-strong` (#4fbf94).

## Idioma

`App.vue` guarda `lang: Lang` e passa como prop pra cada seção; os templates alternam com `v-if="pt"` / `v-else`. A escolha fica salva no `localStorage`.

## Publicar no GitHub Pages

1. `npm run build`
2. Suba o conteúdo de `dist/` na branch `gh-pages`
3. Em Settings → Pages, aponte para essa branch
