<template>
  <section id="tecnologias" class="section">
    <TituloSecao>
      <template #annotation>
        <span v-if="pt">o que já sei aplicar</span>
        <span v-else>what i can apply</span>
      </template>
      <template #title>
        <span v-if="pt">Tecnologias</span>
        <span v-else>Technologies</span>
      </template>
    </TituloSecao>

    <div class="tech-grid">
      <!-- card 1: front-end -->
      <div class="flip" tabindex="0">
        <div class="flip__inner">
          <div class="flip__face flip__face--front">
            <span class="flip__glyph mono">&lt;/&gt;</span>
            <div class="flip__meta">
              <strong class="flip__title">Front-end</strong>
              <span class="flip__hint mono">
                <template v-if="pt">passe o mouse ↻</template>
                <template v-else>hover ↻</template>
              </span>
            </div>
          </div>
          <div class="flip__face flip__face--back">
            <strong class="flip__title">Front-end</strong>
            <p v-if="pt" class="flip__desc">
              Construo interfaces web com Vue.js, estruturando marcação semântica e estilos
              responsivos que funcionam em qualquer tela.
            </p>
            <p v-else class="flip__desc">
              I build web interfaces with Vue.js, writing semantic markup and responsive styles
              that work on any screen.
            </p>
            <div class="pills">
              <span class="pills__item mono">Vue.js</span>
              <span class="pills__item mono">Nuxt.js</span>
              <span class="pills__item mono">JavaScript</span>
              <span class="pills__item mono">TypeScript</span>
              <span class="pills__item mono">HTML5</span>
              <span class="pills__item mono">CSS</span>
              <span class="pills__item mono">Tailwind CSS</span>
            </div>
          </div>
        </div>
      </div>

      <!-- card 2: ferramentas -->
      <div class="flip" tabindex="0">
        <div class="flip__inner">
          <div class="flip__face flip__face--front">
            <span class="flip__glyph mono">&gt;_</span>
            <div class="flip__meta">
              <strong class="flip__title">
                <template v-if="pt">Ferramentas</template>
                <template v-else>Tools</template>
              </strong>
              <span class="flip__hint mono">
                <template v-if="pt">passe o mouse ↻</template>
                <template v-else>hover ↻</template>
              </span>
            </div>
          </div>
          <div class="flip__face flip__face--back">
            <strong class="flip__title">
              <template v-if="pt">Ferramentas</template>
              <template v-else>Tools</template>
            </strong>
            <p v-if="pt" class="flip__desc">
              Versionamento, prototipação e teste de API fazem parte do dia a dia, do primeiro
              commit até a entrega.
            </p>
            <p v-else class="flip__desc">
              Version control, prototyping and API testing are part of the daily routine, from
              the first commit to delivery.
            </p>
            <div class="pills">
              <span class="pills__item mono">Git</span>
              <span class="pills__item mono">VS Code</span>
              <span class="pills__item mono">Azure DevOps</span>
              <span class="pills__item mono">Figma</span>
              <span class="pills__item mono">Insomnia</span>
              <span class="pills__item mono">SQL Server</span>
              <span class="pills__item mono">Inkscape</span>
            </div>
          </div>
        </div>
      </div>

      <!-- card 3: análise e qualidade -->
      <div class="flip" tabindex="0">
        <div class="flip__inner">
          <div class="flip__face flip__face--front">
            <span class="flip__glyph mono">◇</span>
            <div class="flip__meta">
              <strong class="flip__title">
                <template v-if="pt">Análise e qualidade</template>
                <template v-else>Analysis &amp; QA</template>
              </strong>
              <span class="flip__hint mono">
                <template v-if="pt">passe o mouse ↻</template>
                <template v-else>hover ↻</template>
              </span>
            </div>
          </div>
          <div class="flip__face flip__face--back">
            <strong class="flip__title">
              <template v-if="pt">Análise e qualidade</template>
              <template v-else>Analysis &amp; QA</template>
            </strong>
            <p v-if="pt" class="flip__desc">
              Além do código, atuo em análise de sistemas e de negócios e em testes de software,
              entendendo o problema antes de resolver.
            </p>
            <p v-else class="flip__desc">
              Beyond code, I work on systems and business analysis and on software testing,
              understanding the problem before solving it.
            </p>
            <div class="pills">
              <span class="pills__item mono">Vue.js</span>
              <span class="pills__item mono">TypeScript</span>
              <span class="pills__item mono">SQL</span>
              <span class="pills__item mono">Regras de Negócio</span>
              <span class="pills__item mono">Levantamento de Requisitos</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
import { Lang } from '@/types/lang';
import TituloSecao from '@/components/TituloSecao.vue';

export default Vue.extend({
  name: 'SecaoTecnologias',
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

.tech-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
}

.flip {
  perspective: 1200px;
  height: 300px;
  outline-offset: 4px;

  &__inner {
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform .7s cubic-bezier(.4, .2, .2, 1);
    transform-style: preserve-3d;
  }

  &:hover &__inner,
  &:focus &__inner,
  &:focus-within &__inner { transform: rotateY(180deg); }

  &__face {
    position: absolute;
    inset: 0;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    border-radius: $radius;
    padding: 28px;
    display: flex;
    flex-direction: column;

    &--front {
      border: 1px solid $border;
      background: $bg-card;
      align-items: flex-start;
      justify-content: space-between;
    }

    &--back {
      transform: rotateY(180deg);
      border: 1px solid $accent-dark;
      background: linear-gradient(160deg, rgba(147, 199, 177, .08), $bg-card 60%);
      justify-content: center;
      gap: 16px;
    }
  }

  &__glyph { font-size: 2.6rem; font-weight: 700; color: $accent; line-height: 1; }

  &__meta { display: grid; gap: 10px; }

  &__title { font-family: $font-display; font-size: 1.15rem; font-weight: 700; }

  &__hint { font-size: .72rem; color: $text-muted; }

  &__desc { margin: 0; font-size: .9rem; color: $text-muted; text-wrap: pretty; }
}

.pills {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  &__item {
    font-size: .78rem;
    color: $text-bright;
    border: 1px solid $border;
    padding: 5px 11px;
    border-radius: 20px;
  }
}
</style>
