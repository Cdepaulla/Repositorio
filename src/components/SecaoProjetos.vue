<template>
  <section id="projetos" class="section">
    <TituloSecao>
      <template #annotation>
        <span v-if="pt">em construção</span>
        <span v-else>in progress</span>
      </template>
      <template #title>
        <span v-if="pt">Projetos</span>
        <span v-else>Projects</span>
      </template>
    </TituloSecao>

    <div class="work-grid">
      <!-- ================== PROJETO 01 — RepoScope ================== -->
      <article class="work">
        <div class="work__thumb">
          <img src="@/assets/reposcope.png" alt="RepoScope" />
          <span class="work__num mono">01</span>
        </div>
        <div class="work__body">
          <h3 class="work__title">RepoScope</h3>
          <p v-if="pt" class="work__desc">
            Explorador de repositórios do GitHub: busque um usuário e veja seu perfil e repositórios
            públicos, com filtro por linguagem e ordenação por estrelas, mais recentes ou nome.
          </p>
          <p v-else class="work__desc">
            GitHub repository explorer: search a user and see their profile and public repositories,
            with language filtering and sorting by stars, most recent or name.
          </p>
          <div class="work__stack">
            <span class="work__tech mono">Vue.js</span>
            <span class="work__tech mono">Bootstrap</span>
            <span class="work__tech mono">Axios</span>
          </div>
          <div class="work__links mono">
            <a href="https://github.com/Cdepaulla/Reposcope" target="_blank" rel="noopener">Repositório ↗</a>
          </div>
        </div>
      </article>

      <!-- ================== PROJETO 02 — Controle de Gastos ================== -->
      <article class="work">
        <div class="work__thumb">
          <img src="@/assets/controle-gastos.png" alt="Controle de Gastos" />
          <span class="work__num mono">02</span>
        </div>
        <div class="work__body">
          <h3 class="work__title">
            <template v-if="pt">Controle de Gastos</template>
            <template v-else>Expense Tracker</template>
          </h3>
          <p v-if="pt" class="work__desc">
            Registro de receitas e despesas pessoais com tudo salvo no navegador: resumo financeiro,
            gráfico de gastos por categoria e backup/importação via JSON.
          </p>
          <p v-else class="work__desc">
            Personal income and expense tracker saved entirely in the browser: financial summary,
            spending-by-category chart, and JSON backup/import.
          </p>
          <div class="work__stack">
            <span class="work__tech mono">Vue.js</span>
            <span class="work__tech mono">Bootstrap</span>
            <span class="work__tech mono">Vitest</span>
          </div>
          <div class="work__links mono">
            <a href="https://github.com/Cdepaulla/Controle-de-Gastos" target="_blank" rel="noopener">
              Repositório ↗
            </a>
          </div>
        </div>
      </article>

      <!-- ================== PROJETO 03 — Sistema de Chamados ================== -->
      <article class="work">
        <div class="work__thumb">
          <span class="work__placeholder mono">
            <template v-if="pt">em andamento</template>
            <template v-else>in progress</template>
          </span>
          <span class="work__num mono">03</span>
        </div>
        <div class="work__body">
          <h3 class="work__title">
            <template v-if="pt">Sistema de Chamados</template>
            <template v-else>Ticket System</template>
          </h3>
          <p v-if="pt" class="work__desc">
            Sistema de abertura e acompanhamento de chamados de suporte, com status, prioridade e
            histórico de atendimento. Projeto em andamento.
          </p>
          <p v-else class="work__desc">
            Support ticket system for opening and tracking requests, with status, priority and
            service history. Project currently in progress.
          </p>
          <div class="work__stack">
            <span class="work__tech mono">Vue.js</span>
            <span class="work__tech mono">Bootstrap</span>
          </div>
          <div class="work__links mono">
            <span class="work__soon">
              <template v-if="pt">em breve ↗</template>
              <template v-else>soon ↗</template>
            </span>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
import { Lang } from '@/types/lang';
import TituloSecao from '@/components/TituloSecao.vue';

export default Vue.extend({
  name: 'SecaoProjetos',
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

.work-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
}

.work {
  background: $bg-card;
  border: 1px solid $border;
  border-radius: $radius;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: border-color .25s ease, transform .25s ease;

  &:hover { border-color: $accent; transform: translateY(-4px); }

  &__thumb {
    position: relative;
    width: 100%;
    aspect-ratio: 16 / 9;
    border-bottom: 1px solid $border;
    background: $bg-deep;
    display: flex;
    align-items: center;
    justify-content: center;

    img { width: 100%; height: 100%; object-fit: cover; }
  }

  &__placeholder { font-size: .8rem; color: $text-muted; }

  &__num {
    position: absolute;
    top: 14px;
    left: 14px;
    font-size: .75rem;
    color: $accent-strong;
    background: $badge-bg;
    border: 1px solid $accent-strong-dark;
    padding: 3px 9px;
    border-radius: 20px;
  }

  &__body {
    padding: 24px 26px 26px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    flex: 1;
  }

  &__title { margin: 0; font-family: $font-display; font-size: 1.3rem; font-weight: 700; color: $text-bright; }

  &__desc { margin: 0; color: $text-muted; font-size: .95rem; flex: 1; text-wrap: pretty; }

  &__stack { display: flex; flex-wrap: wrap; gap: 8px; }

  &__tech {
    font-size: .72rem;
    color: $text-bright;
    border: 1px solid $border;
    padding: 4px 10px;
    border-radius: 20px;
  }

  &__links { display: flex; flex-wrap: wrap; gap: 16px; font-size: .85rem; }

  &__soon { color: $accent-strong; }
}
</style>
