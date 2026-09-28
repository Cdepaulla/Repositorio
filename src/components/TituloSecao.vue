<template>
  <div class="section-title">
    <span class="section-title__ann mono"><slot name="annotation"></slot></span>
    <h2 class="section-title__heading"><slot name="title"></slot></h2>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'TituloSecao'
});
</script>

<style lang="scss" scoped>
@use '@/styles/variables' as *;

.section-title {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 12px;
  margin-bottom: 48px;

  &__ann {
    font-size: .78rem;
    letter-spacing: .12em;
    text-transform: uppercase;
    color: $accent-strong;
  }

  &__heading {
    margin: 0;
    font-family: $font-display;
    font-size: 2.2rem;
    font-weight: 700;
    padding-bottom: 18px;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 48px;
      height: 3px;
      border-radius: 2px;
      background: linear-gradient(90deg, $accent-strong-dark, $accent-strong);
    }
  }
}
</style>
