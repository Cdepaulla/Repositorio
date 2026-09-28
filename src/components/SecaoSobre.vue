<template>
  <section id="sobre" class="section">
    <TituloSecao>
      <template #annotation>
        <span v-if="pt">quem sou</span>
        <span v-else>who i am</span>
      </template>
      <template #title>
        <span v-if="pt">Sobre mim</span>
        <span v-else>About me</span>
      </template>
    </TituloSecao>

    <div v-if="pt" class="about">
      <p class="about__p about__p--lead">
        Tenho 3 anos de experiência na área e atualmente atuo como Desenvolvedor Front-End
        Júnior, utilizando minhas habilidades
        técnicas em Vue.js, JavaScript, HTML, CSS e Figma para criar soluções eficientes e de
        qualidade na área de tecnologia.
      </p>
      <p class="about__p">
        Tenho como diferencial uma comunicação clara e eficaz, que facilita o trabalho em equipe
        e a colaboração em projetos. Busco constantemente aprimorar meus conhecimentos e
        habilidades, com o objetivo de me tornar um profissional referência no desenvolvimento
        de software. Estou focado em superar desafios, aprender novas tecnologias e metodologias.
      </p>
    </div>

    <div v-else class="about">
      <p class="about__p about__p--lead">
        I have 3 years of experience in the field and currently work as a Junior Front-End
        Developer, using my technical skills in Vue.js,
        JavaScript, HTML, CSS and Figma to build efficient, quality solutions in tech.
      </p>
      <p class="about__p">
        Clear and effective communication is what sets me apart — it makes teamwork and
        collaboration easier. I'm constantly improving my knowledge and skills, aiming to become
        a reference professional in software development, focused on taking on challenges and
        learning new technologies and methodologies.
      </p>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
import { Lang } from '@/types/lang';
import TituloSecao from '@/components/TituloSecao.vue';

export default Vue.extend({
  name: 'SecaoSobre',
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

.about {
  max-width: 760px;
  margin: 0 auto;
  display: grid;
  gap: 20px;

  &__p {
    margin: 0;
    font-size: 1.05rem;
    color: $text-muted;
    text-wrap: pretty;

    &--lead { color: $text-soft; }
  }
}
</style>
