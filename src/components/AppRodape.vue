<template>
  <footer class="site-footer">
    Caio Pereira de Paula — {{ year }} · Vue.js · TypeScript · Figma
  </footer>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'AppRodape',
  data() {
    return {
      year: new Date().getFullYear()
    };
  }
});
</script>

<style lang="scss" scoped>
@use '@/styles/variables' as *;

.site-footer {
  position: relative;
  z-index: 1;
  text-align: center;
  padding: 32px;
  color: $text-muted;
  font-size: .85rem;
  border-top: 1px solid $border;
}
</style>
