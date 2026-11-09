<template>
  <section id="top" class="hero">
    <div class="hero__text">
      <span class="hero__role mono">
        <template v-if="pt">// Desenvolvedor Front-End Júnior</template>
        <template v-else>// Junior Front-End Developer</template>
        <span class="cursor">_</span>
      </span>

      <h1 v-if="pt" class="hero__title">
        Olá, eu sou Caio Pereira <span class="accent">de Paula</span>. Construo interfaces para a web.
      </h1>
      <h1 v-else class="hero__title">
        Hi, I'm Caio Pereira <span class="accent">de Paula</span>. I build interfaces for the web.
      </h1>

      <p v-if="pt" class="hero__summary">
        Desenvolvedor Front-End Júnior na Fundação Carlos Chagas, formado em Análise e
        Desenvolvimento de Sistemas. Trabalho com Vue.js, JavaScript, HTML, CSS e Figma para
        criar soluções eficientes e de qualidade.
      </p>
      <p v-else class="hero__summary">
        Junior Front-End Developer at Fundação Carlos Chagas, with a degree in Systems Analysis
        and Development. I work with Vue.js, JavaScript, HTML, CSS and Figma to build efficient,
        quality solutions.
      </p>

      <div class="hero__ctas">
        <a href="#projetos" class="btn-accent">
          <span v-if="pt">Ver projetos</span>
          <span v-else>See projects</span>
        </a>
        <a href="#contato" class="btn-ghost">
          <span v-if="pt">Falar comigo</span>
          <span v-else>Get in touch</span>
        </a>
      </div>

      <div class="hero__links mono">
        <a href="https://www.linkedin.com/in/caio-de-paula/" target="_blank" rel="noopener">LinkedIn ↗</a>
        <a href="https://github.com/Cdepaulla" target="_blank" rel="noopener">GitHub ↗</a>
        <a href="mailto:caiodepaulladp@gmail.com">E-mail ↗</a>
      </div>
    </div>

    <div class="hero__aside">
      <div class="portrait">
        <div class="portrait__photo">
          <span class="portrait__glow" aria-hidden="true"></span>
          <img class="portrait__img" src="@/assets/perfil_portifolio.png" alt="Caio Pereira de Paula" />
        </div>

        <!-- linhas que saem da foto: alternam curta e longa, com atraso -->
        <div class="portrait__spokes">
          <div class="spoke spoke--1">
            <span class="spoke__line"></span>
            <span class="spoke__dot"></span>
            <span class="spoke__label">
              <span class="spoke__key mono">name</span>
              <span class="spoke__value mono">Caio P. de Paula</span>
            </span>
          </div>
          <div class="spoke spoke--2">
            <span class="spoke__line"></span>
            <span class="spoke__dot"></span>
            <span class="spoke__label">
              <span class="spoke__key mono">role</span>
              <span class="spoke__value mono">Front-End Jr</span>
            </span>
          </div>
          <div class="spoke spoke--3">
            <span class="spoke__line"></span>
            <span class="spoke__dot"></span>
            <span class="spoke__label">
              <span class="spoke__key mono">stack</span>
              <span class="spoke__value mono">Vue · TS · JS</span>
            </span>
          </div>
          <div class="spoke spoke--4">
            <span class="spoke__line"></span>
            <span class="spoke__dot"></span>
            <span class="spoke__label">
              <span class="spoke__key mono">status</span>
              <span class="spoke__value mono">aprendizado contínuo</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
import { Lang } from '@/types/lang';

export default Vue.extend({
  name: 'SecaoPrincipal',
  props: {
    lang: { type: String as () => Lang, required: true }
  },
  computed: {
    pt(): boolean {
      return this.lang === 'pt';
    }
  }
});
</script>

<style lang="scss" scoped>
@use '@/styles/variables' as *;

.hero {
  position: relative;
  z-index: 1;
  max-width: $max-width;
  margin: 0 auto;
  padding: 72px $gutter 120px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
  gap: 48px;
  align-items: center;

  &__text { display: grid; gap: 24px; max-width: 720px; }

  &__role { font-size: .9rem; color: $accent-strong; }

  &__title {
    margin: 0;
    font-family: $font-display;
    font-weight: 700;
    font-size: clamp(2.2rem, 4.4vw, 3.4rem);
    line-height: 1.14;
    letter-spacing: -.01em;
    text-wrap: pretty;
  }

  &__summary {
    margin: 0;
    max-width: 560px;
    font-size: 1.1rem;
    color: $text-muted;
    text-wrap: pretty;
  }

  &__ctas { display: flex; flex-wrap: wrap; gap: 14px; padding-top: 6px; }

  &__links {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    font-size: .8rem;

    a {
      border: 1px solid $border;
      border-radius: $radius-sm;
      padding: 9px 14px;
      color: $text-muted;
    }
    a:hover { border-color: $accent; color: $accent; }
  }

  &__aside {
    position: relative;
    width: 100%;
    max-width: 480px;
    margin: 0 auto;
    display: grid;
    justify-items: center;
  }
}

.accent { color: $accent-strong; }

.cursor { animation: blink 1.1s step-end infinite; }

.portrait {
  width: 100%;
  max-width: 480px;
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 0;

  &__photo {
    position: relative;
    flex: 0 0 auto;
    width: 250px;
    height: 250px;
  }

  &__glow {
    position: absolute;
    inset: -14%;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(147, 199, 177, .34) 0%, rgba(94, 155, 131, .1) 55%, transparent 72%);
    filter: blur(6px);
    animation: glowpulse 4s ease-in-out infinite;
  }

  &__img {
    position: relative;
    width: 250px;
    height: 250px;
    border-radius: 50%;
    object-fit: cover;
    border: 1px solid $border;
  }

  &__spokes {
    flex: 1 1 auto;
    min-width: 0;
    display: flex;
    flex-direction: column;
    gap: 18px;
  }
}

.spoke {
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 0;

  // linhas alternadas: curta, longa, curta, longa
  &--1 .spoke__line, &--3 .spoke__line { width: 24px; }
  &--2 .spoke__line, &--4 .spoke__line { width: 44px; }

  &--1 .spoke__line  { animation-delay: .25s; }
  &--1 .spoke__dot   { animation-delay: .55s; }
  &--1 .spoke__label { animation-delay: .60s; }
  &--2 .spoke__line  { animation-delay: .40s; }
  &--2 .spoke__dot   { animation-delay: .70s; }
  &--2 .spoke__label { animation-delay: .75s; }
  &--3 .spoke__line  { animation-delay: .55s; }
  &--3 .spoke__dot   { animation-delay: .85s; }
  &--3 .spoke__label { animation-delay: .90s; }
  &--4 .spoke__line  { animation-delay: .70s; }
  &--4 .spoke__dot   { animation-delay: 1s; }
  &--4 .spoke__label { animation-delay: 1.05s; }

  &__line {
    flex: 0 0 auto;
    display: block;
    height: 1px;
    background: linear-gradient(90deg, rgba(79, 191, 148, .25), $accent-strong);
    transform: scaleX(0);
    transform-origin: left;
    animation: lineout .5s ease forwards;
  }

  &__dot {
    flex: 0 0 auto;
    display: block;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: $accent-strong;
    box-shadow: 0 0 8px rgba(79, 191, 148, .75);
    opacity: 0;
    animation: labelin .4s ease forwards;
  }

  &__label {
    min-width: 0;
    display: grid;
    gap: 1px;
    opacity: 0;
    animation: labelin .5s ease forwards;
  }

  &__key {
    font-size: .68rem;
    letter-spacing: .08em;
    text-transform: uppercase;
    color: $accent-strong;
  }

  &__value {
    font-size: .86rem;
    color: $text-bright;
    overflow-wrap: break-word;
  }
}

// em telas estreitas a foto diminui para as linhas continuarem legíveis
@media (max-width: 560px) {
  .portrait {
    &__photo, &__img { width: 180px; height: 180px; }
    &__spokes { gap: 14px; }
  }
  .spoke {
    &--2 .spoke__line, &--4 .spoke__line { width: 28px; }
    &__value { font-size: .78rem; }
  }
}
</style>
