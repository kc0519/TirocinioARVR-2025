<script lang="ts" setup>
    import { ref, onMounted, onUnmounted } from "vue";

    const windowWidth = ref(0);
    const windowHeight = ref(0);

    function updateWindowSize()
    {
        windowWidth.value = window.innerWidth;
        windowHeight.value = window.innerHeight;
    }

    onMounted(() =>
    {
        updateWindowSize();
        window.addEventListener("resize", updateWindowSize);
    });

    onUnmounted(() =>
    {
        window.removeEventListener("resize", updateWindowSize);
    });

    // Variabili utente
    const numBigItems = 6;

    // const bigRadius = computed(() => windowWidth.value > 1200 ? 31.25 : (40 * windowWidth.value) / 1536);
    // const smallRadius = computed(() => windowWidth.value > 1200 ? 54.6875 : (70 * windowWidth.value) / 1536);

    // const bigRadius = ref(44.921875);
    // const smallRadius = ref(78.61328125);

    const hand = ref<HTMLElement | null>(null);
    let rotation = 90;
    const angleRotation = 360 / numBigItems;

    function animate()
    {
        rotation += angleRotation;

        hand.value.style
            .setProperty("--hand-rotation", `${rotation}deg`);
    }
</script>

<template>
    <div class="playerOrder" :class="`playerOrder-${numBigItems}`">
        <div ref="hand" class="hand"></div>
        <div v-for="item in numBigItems"
             :key="item"
             class="circle-item"></div>

        <button id="myButton" @click="animate()">
            bo
        </button>
    </div>
</template>

<style lang="scss" scoped>
.playerOrder {
    --hand-rotation: 90deg; // Angolo di rotazione iniziale della mano
    --circle-radius: calc(var(--circle-width) * 0.48);

    width: var(--circle-width);
    aspect-ratio: 1/1;
    position: relative;
}

.circle-item {
    position: absolute;
    top: 50%;
    left: 50%;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    width: 12%;
    aspect-ratio: 1/1;
    background-color: #00bcd4;
}

.hand {
    width: 7%;
    aspect-ratio: 1/4;
    background-color: red;
    position: absolute;
    top: 50%;
    left: 50%;
    transform-origin: bottom center;
    transform: translate(-50%, -100%) rotate(var(--hand-rotation, 90deg));
    transition: transform 0.5s ease-in-out;
    z-index: 2;
}

@for $i from 3 through 13 {
  .playerOrder-#{$i} {
    .circle-container {
      position: relative;
    }
    .circle-item {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      // Posizionamento dinamico tramite nth-child
      @for $j from 1 through $i {
        &:nth-child(#{$j + 1}) { // +2 per saltare .hand e .circle-container
          $angle: (360deg / $i) * ($j - 1);
          $rad: $angle * 3.14159265359 / 180deg;

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