<template>
  <div class="app">
    <!-- fundo animado -->
    <div class="backdrop" aria-hidden="true">
      <div class="backdrop__grid"></div>
      <span class="backdrop__blob backdrop__blob--1"></span>
      <span class="backdrop__blob backdrop__blob--2"></span>
      <span class="backdrop__blob backdrop__blob--3"></span>

      <!-- trechos de código flutuando no fundo, com cores do VS Code -->
      <span class="backdrop__code backdrop__code--1 mono"><span class="c-plain">&lt;</span><span class="c-tag">template</span><span class="c-plain">&gt;</span></span>
      <span class="backdrop__code backdrop__code--2 mono"><span class="c-plain">git commit -m </span><span class="c-str">"Construindo interfaces"</span></span>
      <span class="backdrop__code backdrop__code--3 mono"><span class="c-kw">const</span> <span class="c-var">dev</span>: <span class="c-type">Developer</span> = {}</span>
      <span class="backdrop__code backdrop__code--4 mono"><span class="c-ctl">export default</span> <span class="c-kw">class</span> <span class="c-type">SecaoPrincipal</span></span>
      <span class="backdrop__code backdrop__code--5 mono"><span class="c-plain">&lt;</span><span class="c-tag">script</span> <span class="c-attr">lang</span><span class="c-plain">=</span><span class="c-str">"ts"</span><span class="c-plain">&gt;</span></span>
      <span class="backdrop__code backdrop__code--6 mono"><span class="c-attr">v-for</span><span class="c-plain">=</span><span class="c-str">"item in items"</span></span>
      <span class="backdrop__code backdrop__code--7 mono"><span class="c-ctl">async</span> <span class="c-kw">function</span> <span class="c-fn">fetchData</span><span class="c-plain">()</span></span>
      <span class="backdrop__code backdrop__code--8 mono"><span class="c-cm">// aprendizado contínuo</span></span>
    </div>

    <BrilhoMouse />

    <!-- barra de progresso de leitura -->
    <div class="progress-track" aria-hidden="true">
      <div class="progress-bar" :style="{ width: progress + '%' }"></div>
    </div>

    <AppCabecalho :lang="lang" :theme="theme" @change-lang="setLang" @toggle-theme="toggleTheme" />

    <main>
      <SecaoPrincipal :lang="lang" />
      <SecaoSobre v-reveal :lang="lang" />
      <SecaoTecnologias v-reveal :lang="lang" />
      <SecaoExperiencia v-reveal :lang="lang" />
      <SecaoFormacao v-reveal :lang="lang" />
      <SecaoProjetos v-reveal :lang="lang" />
      <SecaoContato v-reveal :lang="lang" />
    </main>

    <AppRodape />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Lang } from '@/types/lang';
import { Theme } from '@/types/theme';
import BrilhoMouse from '@/components/BrilhoMouse.vue';
import AppCabecalho from '@/components/AppCabecalho.vue';
import SecaoPrincipal from '@/components/SecaoPrincipal.vue';
import SecaoSobre from '@/components/SecaoSobre.vue';
import SecaoTecnologias from '@/components/SecaoTecnologias.vue';
import SecaoExperiencia from '@/components/SecaoExperiencia.vue';
import SecaoFormacao from '@/components/SecaoFormacao.vue';
import SecaoProjetos from '@/components/SecaoProjetos.vue';
import SecaoContato from '@/components/SecaoContato.vue';
import AppRodape from '@/components/AppRodape.vue';

const STORAGE_KEY = 'portfolio-lang';
const THEME_STORAGE_KEY = 'portfolio-theme';

export default Vue.extend({
  name: 'App',
  components: {
    BrilhoMouse, AppCabecalho, SecaoPrincipal, SecaoSobre, SecaoTecnologias, SecaoExperiencia,
    SecaoFormacao, SecaoProjetos, SecaoContato, AppRodape
  },
  data() {
    return {
      lang: 'pt' as Lang,
      theme: 'dark' as Theme,
      progress: 0
    };
  },
  created(): void {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === 'pt' || saved === 'en') {
      this.lang = saved;
    }

    const savedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
    if (savedTheme === 'dark' || savedTheme === 'light') {
      this.theme = savedTheme;
    }
    document.documentElement.dataset.theme = this.theme;
  },
  mounted(): void {
    window.addEventListener('scroll', this.onScroll, { passive: true });
    this.onScroll();
  },
  beforeDestroy(): void {
    window.removeEventListener('scroll', this.onScroll);
  },
  methods: {
    setLang(lang: Lang): void {
      this.lang = lang;
      window.localStorage.setItem(STORAGE_KEY, lang);
      document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
    },
    toggleTheme(): void {
      this.theme = this.theme === 'dark' ? 'light' : 'dark';
      window.localStorage.setItem(THEME_STORAGE_KEY, this.theme);
      document.documentElement.dataset.theme = this.theme;
    },
    onScroll(): void {
      const el = document.documentElement;
      const max = el.scrollHeight - el.clientHeight || 1;
      this.progress = Math.min(100, (el.scrollTop / max) * 100);
    }
  }
});
</script>

<style lang="scss" scoped>
@use '@/styles/variables' as *;

.app { position: relative; min-height: 100vh; }

.backdrop {
  position: fixed;
  inset: 0;
  z-index: 0;
  overflow: hidden;
  pointer-events: none;

  &__grid {
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(rgba(147, 199, 177, .035) 1px, transparent 1px),
      linear-gradient(90deg, rgba(147, 199, 177, .035) 1px, transparent 1px);
    background-size: 56px 56px;
    mask-image: radial-gradient(ellipse 80% 60% at 50% 0%, #000 40%, transparent 90%);
    -webkit-mask-image: radial-gradient(ellipse 80% 60% at 50% 0%, #000 40%, transparent 90%);
  }

  &__blob {
    position: absolute;
    border-radius: 50%;
    filter: blur(90px);
    opacity: .16;

    &--1 { width: 520px; height: 520px; top: -10%; left: -8%; background: $accent-dark; animation: drift1 26s ease-in-out infinite; }
    &--2 { width: 420px; height: 420px; top: 40%; right: -10%; background: $accent; animation: drift2 32s ease-in-out infinite; }
    &--3 { width: 380px; height: 380px; bottom: -8%; left: 30%; background: $accent-dark; animation: drift3 22s ease-in-out infinite; }
  }

  &__code {
    position: absolute;
    font-size: .82rem;
    white-space: nowrap;
    user-select: none;

    &--1 { top:  9%; left: 3%;  opacity: .30; --rot: -8deg; animation: floatcode  9s ease-in-out infinite; }
    &--2 { top: 20%; right: 4%; opacity: .30; --rot:  5deg; animation: floatcode 11s ease-in-out infinite .8s; }
    &--3 { top: 34%; left: 5%;  opacity: .28; --rot: -4deg; animation: floatcode 13s ease-in-out infinite 1.6s; }
    &--4 { top: 47%; right: 5%; opacity: .26; --rot:  6deg; animation: floatcode 12s ease-in-out infinite .4s; }
    &--5 { top: 60%; left: 4%;  opacity: .30; --rot: -6deg; animation: floatcode 10s ease-in-out infinite 2.2s; }
    &--6 { top: 72%; right: 6%; opacity: .27; --rot:  4deg; animation: floatcode 14s ease-in-out infinite 1.1s; }
    &--7 { top: 84%; left: 6%;  opacity: .28; --rot: -5deg; animation: floatcode 12s ease-in-out infinite 1.4s; }
    &--8 { top: 94%; right: 4%; opacity: .30; --rot:  3deg; animation: floatcode 13s ease-in-out infinite 2s; }

    .c-kw    { color: $vs-kw; }
    .c-ctl   { color: $vs-ctl; }
    .c-str   { color: $vs-str; }
    .c-fn    { color: $vs-fn; }
    .c-type  { color: $vs-type; }
    .c-var   { color: $vs-var; }
    .c-cm    { color: $vs-cm; }
    .c-plain { color: $vs-plain; }
    .c-tag   { color: $vs-kw; }
    .c-attr  { color: $vs-var; }
  }
}

@media (max-width: 767px) {
  .backdrop__code { display: none; }
}

.progress-track {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 2px;
  z-index: 100;
  pointer-events: none;
}

.progress-bar {
  height: 100%;
  background: linear-gradient(90deg, $accent-strong-dark, $accent-strong);
  transition: width .1s linear;
}
</style>
