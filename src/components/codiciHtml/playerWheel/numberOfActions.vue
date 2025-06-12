<script lang="ts" setup>
    // Variabili utente
    const numSmallDots = 4;

    // const bigRadius = computed(() => windowWidth.value > 1200 ? 31.25 : (40 * windowWidth.value) / 1536);
    // const smallRadius = computed(() => windowWidth.value > 1200 ? 54.6875 : (70 * windowWidth.value) / 1536);

    // const bigRadius = ref(44.921875);
    // const smallRadius = ref(78.61328125);
</script>

<template>
    <div class="number-of-actions" :class="`actionDots-${numSmallDots}`">
        <div v-for="item in numSmallDots"
             :key="item"
             class="small-dot"></div>
    </div>
</template>

<style lang="scss" scoped>

.number-of-actions {
    --hand-rotation: 90deg; // Angolo di rotazione iniziale della mano
    --circle-radius: calc(var(--circle-width) * 0.75);

    width: var(--circle-width);
    // position: absolute;
    // top: 1%;
    // left: 1%;
    position: relative;
}

.small-dot {
    position: absolute;
    top: 50%;
    left: 50%;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    width: 7%;
    aspect-ratio: 1/1;
    background-color: #ff4081;
}

@for $i from 3 through 5 {
  .actionDots-#{$i} {
    .small-dot {
      position: absolute;
      top: calc(var(--circle-width) * -0.55);
      left: 50%;
      transform: translate(-50%, -50%);
      // Posizionamento dinamico tramite nth-child
      @for $j from 1 through $i {
        &:nth-child(#{$j}) { // +1: .hand, +1: .circle-item, +$i: offset per i big items
          $angle: (180deg - ($i - 1) * 15deg) + ($j - 1) * 30deg;
          $rad: $angle * 3.14159265359 / 360deg;

          transform: translate(-50%, -50%) translate(
            calc(var(--circle-radius) * cos(#{$rad})),
            calc(var(--circle-radius) * sin(#{$rad}))
          );
        }
      }
    }
  }
}
</style>