<template>
  <section id="contato" class="section">
    <TituloSecao>
      <template #annotation>
        <span v-if="pt">bora conversar</span>
        <span v-else>let's talk</span>
      </template>
      <template #title>
        <span v-if="pt">Contato</span>
        <span v-else>Contact</span>
      </template>
    </TituloSecao>

    <p v-if="pt" class="contact__lead">
      Estou aberto a novas oportunidades como desenvolvedor front-end. Se você gostou do meu
      trabalho, vamos conversar.
    </p>
    <p v-else class="contact__lead">
      I'm open to new opportunities as a front-end developer. If you liked my work, let's talk.
    </p>

    <div class="contact">
      <a class="contact__row" href="mailto:caiodepaulladp@gmail.com">
        <span class="contact__label mono">Email</span>
        <span class="contact__value mono">caiodepaulladp@gmail.com ↗</span>
      </a>

      <a class="contact__row" href="https://wa.me/5511959716258" target="_blank" rel="noopener">
        <span class="contact__label mono">WhatsApp</span>
        <span class="contact__value mono">+55 11 95971-6258 ↗</span>
      </a>

      <a
        class="contact__row"
        href="https://www.linkedin.com/in/caio-de-paula/"
        target="_blank"
        rel="noopener"
      >
        <span class="contact__label mono">LinkedIn</span>
        <span class="contact__value mono">in/caio-de-paula ↗</span>
      </a>

      <a class="contact__row" href="https://github.com/Cdepaulla" target="_blank" rel="noopener">
        <span class="contact__label mono">GitHub</span>
        <span class="contact__value mono">Cdepaulla ↗</span>
      </a>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
import { Lang } from '@/types/lang';
import TituloSecao from '@/components/TituloSecao.vue';

export default Vue.extend({
  name: 'SecaoContato',
  components: { TituloSecao },
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

.contact {
  max-width: 760px;
  margin: 0 auto;
  display: grid;
  gap: 14px;

  &__lead {
    color: $text-muted;
    font-size: 1.05rem;
    max-width: 560px;
    margin: 0 auto 40px;
    text-align: center;
    text-wrap: pretty;
  }

  &__row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
    flex-wrap: wrap;
    padding: 18px 24px;
    background: $bg-card;
    border: 1px solid $border;
    border-radius: 10px;
    transition: border-color .2s ease, background .2s ease;

    &:hover { border-color: $accent; background: rgba(147, 199, 177, .05); }
  }

  &__label { font-size: .9rem; color: $text; font-weight: 500; }

  &__value { font-size: .95rem; color: $accent-strong; }
}
</style>
