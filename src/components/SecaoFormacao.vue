<template>
  <section id="formacao" class="section">
    <TituloSecao>
      <template #annotation>
        <span v-if="pt">minha trajetória</span>
        <span v-else>my path</span>
      </template>
      <template #title>
        <span v-if="pt">Formação</span>
        <span v-else>Education</span>
      </template>
    </TituloSecao>

    <div class="timeline">
      <article class="card-panel timeline__item">
        <div class="timeline__head">
          <h3 class="timeline__title">
            <template v-if="pt">Análise e Desenvolvimento de Sistemas</template>
            <template v-else>Systems Analysis and Development</template>
          </h3>
          <span class="timeline__period mono">
            <template v-if="pt">fev 2023 — jun 2025</template>
            <template v-else>feb 2023 — jun 2025</template>
          </span>
        </div>
        <p class="timeline__desc">
          <template v-if="pt">UniFECAF · Curso Superior de Tecnologia (CST)</template>
          <template v-else>UniFECAF · Technology degree (CST)</template>
        </p>
      </article>

      <article class="card-panel timeline__item">
        <div class="timeline__head">
          <h3 class="timeline__title">
            <template v-if="pt">Engenharia de Prompt para Engenheiros de Software</template>
            <template v-else>Prompt Engineering for Software Engineers</template>
          </h3>
          <span class="timeline__period mono">jan 2026</span>
        </div>
        <p class="timeline__desc">
          <template v-if="pt">MBA USP/Esalq · curso de extensão universitária</template>
          <template v-else>MBA USP/Esalq · university extension course</template>
        </p>
      </article>

      <article class="card-panel timeline__item">
        <div class="timeline__head">
          <h3 class="timeline__title">
            <template v-if="pt">JavaScript: manipulando elementos no DOM</template>
            <template v-else>JavaScript: manipulating DOM elements</template>
          </h3>
          <span class="timeline__period mono">
            <template v-if="pt">fev 2024</template>
            <template v-else>feb 2024</template>
          </span>
        </div>
        <p class="timeline__desc">
          <template v-if="pt">Alura · uma das 7 licenças e certificados concluídos</template>
          <template v-else>Alura · one of 7 completed licenses and certificates</template>
        </p>
      </article>

      <article class="card-panel timeline__item">
        <div class="timeline__head">
          <h3 class="timeline__title">
            <template v-if="pt">Idiomas</template>
            <template v-else>Languages</template>
          </h3>
          <span class="timeline__period mono">
            <template v-if="pt">em andamento</template>
            <template v-else>ongoing</template>
          </span>
        </div>
        <p class="timeline__desc">
          <template v-if="pt">Espanhol básico a intermediário · Inglês básico (English Express Pack 1)</template>
          <template v-else>Spanish basic to intermediate · English basic (English Express Pack 1)</template>
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
  name: 'SecaoFormacao',
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
