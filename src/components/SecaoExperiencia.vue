<template>
  <section id="experiencia" class="section">
    <TituloSecao>
      <template #annotation>
        <span v-if="pt">onde já trabalhei</span>
        <span v-else>where i have worked</span>
      </template>
      <template #title>
        <span v-if="pt">Experiência</span>
        <span v-else>Experience</span>
      </template>
    </TituloSecao>

    <div class="timeline">
      <article class="card-panel timeline__item">
        <div class="timeline__head">
          <h3 class="timeline__title">
            <template v-if="pt">Desenvolvedor Front-End Júnior</template>
            <template v-else>Junior Front-End Developer</template>
            · Fundação Carlos Chagas
          </h3>
          <span class="timeline__period mono">
            <template v-if="pt">nov 2023 — atual</template>
            <template v-else>nov 2023 — present</template>
          </span>
        </div>
        <p v-if="pt" class="timeline__desc">
          Tempo integral, presencial em São Paulo. Desenvolvimento de interfaces com Vue.js,
          JavaScript, HTML5 e CSS, apoio em análise de sistemas e testes, e prototipação no Figma
          junto com o time.
        </p>
        <p v-else class="timeline__desc">
          Full-time, on-site in São Paulo. Building interfaces with Vue.js, JavaScript, HTML5 and
          CSS, supporting systems analysis and testing, and prototyping in Figma with the team.
        </p>
      </article>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
import { Lang } from '@/types/lang';
import TituloSecao from '@/components/TituloSecao.vue';

export default Vue.extend({
  name: 'SecaoExperiencia',
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

.timeline {
  max-width: 900px;
  margin: 0 auto;
  display: grid;
  gap: 16px;

  &__item {
    padding: 26px 28px;
    &:hover { transform: translateX(4px); }
  }

  &__head {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    gap: 16px;
    flex-wrap: wrap;
    margin-bottom: 6px;
  }

  &__title { margin: 0; font-family: $font-display; font-size: 1.15rem; font-weight: 700; }

  &__period { font-size: .85rem; color: $accent-strong; white-space: nowrap; }

  &__desc { margin: 0; color: $text-muted; font-size: .98rem; text-wrap: pretty; }
}
</style>
