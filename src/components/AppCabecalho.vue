<template>
  <header class="site-header">
    <div class="site-header__inner">
      <a href="#top" class="logo">CP<span>.</span></a>

      <nav class="site-nav" aria-label="Seções do portfólio">
        <template v-if="pt">
          <a href="#sobre">Sobre</a>
          <a href="#tecnologias">Tecnologias</a>
          <a href="#experiencia">Experiência</a>
          <a href="#formacao">Formação</a>
          <a href="#projetos">Projetos</a>
          <a href="#contato">Contato</a>
        </template>
        <template v-else>
          <a href="#sobre">About</a>
          <a href="#tecnologias">Tech</a>
          <a href="#experiencia">Experience</a>
          <a href="#formacao">Education</a>
          <a href="#projetos">Work</a>
          <a href="#contato">Contact</a>
        </template>
      </nav>

      <div class="site-header__actions">
        <button
          type="button"
          class="theme-toggle"
          :aria-label="pt ? 'Alternar para modo ' + (theme === 'dark' ? 'claro' : 'escuro') : 'Switch to ' + (theme === 'dark' ? 'light' : 'dark') + ' mode'"
          @click="$emit('toggle-theme')"
        >{{ theme === 'dark' ? '☀' : '☾' }}</button>

        <div class="lang-switch" role="group" aria-label="Idioma">
          <button
            type="button"
            class="lang-switch__btn"
            :class="{ 'lang-switch__btn--on': pt }"
            :aria-pressed="pt"
            @click="$emit('change-lang', 'pt')"
          >PT</button>
          <button
            type="button"
            class="lang-switch__btn"
            :class="{ 'lang-switch__btn--on': !pt }"
            :aria-pressed="!pt"
            @click="$emit('change-lang', 'en')"
          >EN</button>
        </div>

        <!-- coloque o PDF em public/assets/curriculo-caio.pdf -->
        <a class="resume-btn" href="assets/curriculo-caio.pdf" download>
          <span v-if="pt">Currículo ↓</span>
          <span v-else>Resume ↓</span>
        </a>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import Vue from 'vue';
import { Lang } from '@/types/lang';
import { Theme } from '@/types/theme';

export default Vue.extend({
  name: 'AppCabecalho',
  props: {
    lang: { type: String as () => Lang, required: true },
    theme: { type: String as () => Theme, required: true }
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

.site-header {
  position: sticky;
  top: 0;
  z-index: 50;
  background: $header-bg;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-bottom: 1px solid $border;

  &__inner {
    max-width: $max-width;
    margin: 0 auto;
    padding: 16px $gutter;
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    align-items: center;
    justify-content: space-between;
  }

  &__actions { display: flex; align-items: center; gap: 10px; }
}

.logo {
  font-family: $font-display;
  font-size: 1.3rem;
  font-weight: 700;
  color: $text;

  span { color: $accent-strong; }
  &:hover { color: $text; }
}

.site-nav {
  display: flex;
  flex-wrap: wrap;
  gap: 28px;
  font-size: .85rem;
  text-transform: uppercase;
  letter-spacing: .04em;

  a { color: $text-muted; }
  a:hover { color: $accent; }
}

.theme-toggle {
  display: grid;
  place-items: center;
  width: 34px;
  height: 34px;
  border: 1px solid $border;
  border-radius: 6px;
  background: transparent;
  color: $text-muted;
  font-size: 1rem;
  line-height: 1;
  cursor: pointer;
  transition: border-color .2s ease, color .2s ease;

  &:hover { border-color: $accent; color: $accent; }
}

.lang-switch {
  display: flex;
  gap: 4px;
  border: 1px solid $border;
  border-radius: 6px;
  padding: 3px;

  &__btn {
    border: none;
    cursor: pointer;
    padding: 5px 11px;
    border-radius: 4px;
    font-family: $font-mono;
    font-size: .75rem;
    background: transparent;
    color: $text-muted;
    transition: background .2s ease, color .2s ease;

    &--on { background: $accent-strong; color: $on-accent; }
  }
}

.resume-btn {
  font-family: $font-mono;
  font-size: .85rem;
  font-weight: 500;
  background: $accent-strong;
  color: $on-accent;
  padding: 8px 16px;
  border-radius: 6px;

  &:hover { background: $accent-light; color: $on-accent; }
}

@media (max-width: 767px) {
  .site-header__inner { padding: 14px 20px; }
  .site-nav { display: none; }
}
</style>
