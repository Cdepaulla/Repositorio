<template>
  <div ref="glow" class="mouse-glow" aria-hidden="true"></div>
</template>

<script lang="ts">
import Vue from 'vue';

/**
 * Halo verde que acompanha o cursor.
 * A posição é escrita direto no style via requestAnimationFrame — fora do
 * ciclo de reatividade do Vue, para não re-renderizar a cada pixel.
 */
export default Vue.extend({
  name: 'BrilhoMouse',
  data() {
    return {
      frame: null as number | null,
      x: 0,
      y: 0
    };
  },
  mounted(): void {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    window.addEventListener('pointermove', this.onMove, { passive: true });
  },
  beforeDestroy(): void {
    window.removeEventListener('pointermove', this.onMove);
    if (this.frame !== null) cancelAnimationFrame(this.frame);
  },
  methods: {
    onMove(event: PointerEvent): void {
      this.x = event.clientX;
      this.y = event.clientY;
      if (this.frame !== null) return;

      this.frame = requestAnimationFrame(() => {
        this.frame = null;
        const el = this.$refs.glow as HTMLElement | undefined;
        if (!el) return;
        el.style.opacity = '1';
        el.style.transform = `translate(${this.x}px, ${this.y}px)`;
      });
    }
  }
});
</script>

<style lang="scss" scoped>
.mouse-glow {
  position: fixed;
  top: 0;
  left: 0;
  width: 520px;
  height: 520px;
  margin: -260px 0 0 -260px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(147, 199, 177, .13),
    rgba(147, 199, 177, .05) 45%,
    transparent 70%
  );
  filter: blur(30px);
  pointer-events: none;
  z-index: 0;
  opacity: 0;
  transition: opacity .4s ease;
  will-change: transform;
}

@media (hover: none) {
  .mouse-glow { display: none; }
}
</style>
