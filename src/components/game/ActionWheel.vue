<script lang="ts" setup>
    import { ref, computed, defineExpose } from "vue";

    // Stato reattivo
    const isVisible = ref(false);
    const numberOfSlices = ref(5);
    const wheelPosition = ref({ x: 0, y: 0 });

    // Colori predefiniti per le fette
    const colors = [
        "#e74c3c", "#f39c12", "#27ae60", "#3498db", "#9b59b6",
        "#e67e22", "#2ecc71", "#34495e", "#f1c40f", "#8e44ad",
        "#16a085", "#c0392b"
    ];

    // Array di icone per i primi 5 spicchi (usa nomi dei file delle immagini)
    const sliceIcons = [
        "RunIcon",
        "GlassIcon",
        "StarIcon",
        "ChangeIcon",
        "SwordIcon"
    ];

    // Funzione per creare il path di una fetta SVG
    function createSlicePath(
        centerX: number,
        centerY: number,
        radius: number,
        startAngle: number,
        endAngle: number,
        innerRadius = 0
    ): string
    {
        const start = polarToCartesian(centerX, centerY, radius, endAngle);
        const end = polarToCartesian(centerX, centerY, radius, startAngle);
        const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
        if (innerRadius === 0)
        {
            return [
                "M", centerX, centerY,
                "L", start.x, start.y,
                "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y,
                "Z"
            ].join(" ");
        }
        else
        {
            const innerStart = polarToCartesian(centerX, centerY, innerRadius, endAngle);
            const innerEnd = polarToCartesian(centerX, centerY, innerRadius, startAngle);
            return [
                "M", start.x, start.y,
                "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y,
                "L", innerEnd.x, innerEnd.y,
                "A", innerRadius, innerRadius, 0, largeArcFlag, 1, innerStart.x, innerStart.y,
                "Z"
            ].join(" ");
        }
    }

    interface CartesianPoint {
        x: number;
        y: number;
    }
    function polarToCartesian(
        centerX: number,
        centerY: number,
        radius: number,
        angleInDegrees: number
    ): CartesianPoint
    {
        const angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;
        return {
            x: centerX + (radius * Math.cos(angleInRadians)),
            y: centerY + (radius * Math.sin(angleInRadians))
        };
    }

    interface TextPosition {
        x: number;
        y: number;
    }
    function getTextPosition(
        centerX: number,
        centerY: number,
        radius: number,
        startAngle: number,
        endAngle: number
    ): TextPosition
    {
        const midAngle = (startAngle + endAngle) / 2;
        const textRadius = radius * 0.65;
        const position = polarToCartesian(centerX, centerY, textRadius, midAngle);
        return {
            x: position.x - 10,
            y: position.y
        };
    }

    // Funzione per scurire un colore esadecimale
    function darkenColor(hex: string, amount = 0.4): string
    {
        let col = hex.replace("#", "");
        if (col.length === 3)
        {
            col = col.split("").map((x) => x + x)
                .join("");
        }
        const num = parseInt(col, 16);
        let r = (num >> 16) & 0xff;
        let g = (num >> 8) & 0xff;
        let b = num & 0xff;
        r = Math.floor(r * (1 - amount));
        g = Math.floor(g * (1 - amount));
        b = Math.floor(b * (1 - amount));
        return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
    }

    // Computed per le fette
    const slices = computed(() =>
    {
        const arr = [];
        const centerX = 150;
        const centerY = 150;
        const radius = 140;
        const anglePerSlice = 360 / numberOfSlices.value;
        for (let i = 0; i < numberOfSlices.value; i++)
        {
            const startAngle = i * anglePerSlice;
            const endAngle = (i + 1) * anglePerSlice;
            const gradId = `slice-gradient-${i}`;
            let color = colors[i % colors.length];
            let darkColor = darkenColor(color, 0.4);
            // Colori personalizzati per i primi 5 spicchi
            if (i < 5)
            {
                switch (sliceIcons[i])
                {
                    case "StarIcon":
                    case "SwordIcon":
                        color = "#FFDD00";
                        darkColor = "#991200";
                        break;
                    case "ChangeIcon":
                    case "GlassIcon":
                        color = "#008D05";
                        darkColor = "#95FF00";
                        break;
                    case "RunIcon":
                        color = "#00D9FF";
                        darkColor = "#001C99";
                        break;
                }
            }
            arr.push({
                path: createSlicePath(centerX, centerY, radius, startAngle, endAngle),
                gradId: gradId,
                color: color,
                darkColor: darkColor,
                icon: i < 5 ? sliceIcons[i] : null,
                text: i < 5 ? null : `Azione ${i + 1}`,
                textPos: getTextPosition(centerX, centerY, radius, startAngle, endAngle)
            });
        }
        return arr;
    });

    // Funzione per mostrare la ruota in una posizione specifica
    function showWheel(x: number, y: number)
    {
        wheelPosition.value = { x, y };
        isVisible.value = true;
    }

    // Funzione per nascondere la ruota
    function hideWheel()
    {
        isVisible.value = false;
    }

    defineExpose({ showWheel, hideWheel });

    // Gestione click su una fetta
    function onSliceClick(index: number)
    {
        isVisible.value = false;

        // console.log(slices.value[index].text);
    }
</script>

<template>
    <div class="controls">
        <h3>Numero Spicchi</h3>
        <div class="slider-container">
            <div class="slice-count">
                {{ numberOfSlices }}
            </div>
            <input v-model="numberOfSlices"
                   type="range"
                   min="2"
                   max="12"
                   class="slider" />
            <div class="slider-label">
                Da 2 a 12 spicchi
            </div>
        </div>
    </div>
    <div v-show="isVisible"
         id="wheel"
         class="wheel"
         :style="{
             left: wheelPosition.x + 'px',
             top: wheelPosition.y + 'px',
             display: isVisible ? 'block' : 'none',
             transform: 'translate(-50%, -50%)'
         }">
        <svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
            <g id="slices">
                <template v-for="(slice, i) in slices" :key="i">
                    <defs>
                        <linearGradient :id="slice.gradId" gradientTransform="rotate(90)">
                            <stop :offset="`0%`" :stop-color="slice.color" />
                            <stop offset="100%" :stop-color="slice.darkColor" />
                        </linearGradient>
                    </defs>
                    <g class="slice-group">
                        <path :d="slice.path"
                              :fill="`url(#${slice.gradId})`"
                              class="slice"
                              @click.stop="onSliceClick(i)" />
                        <text v-if="slice.text"
                              :x="slice.textPos.x"
                              :y="slice.textPos.y"
                              class="slice-text">
                            {{ slice.text }}
                        </text>
                        <image v-if="slice.icon"
                               :href="`./icons/${slice.icon}.png`"
                               :x="slice.textPos.x - 5"
                               :y="slice.textPos.y - 16"
                               width="32"
                               height="32"
                               class="slice-icon" />
                    </g>
                </template>
            </g>
            <circle class="center"
                    cx="150"
                    cy="150"
                    r="20"
                    @click="hideWheel" />
            <text x="150"
                  y="152"
                  text-anchor="middle"
                  dominant-baseline="middle"
                  font-size="30"
                  font-weight="bold"
                  fill="#888"
                  pointer-events="none"
                  class="center-x">
                X
            </text>
        </svg>
    </div>
</template>

<style lang ="scss" scoped>
   /* Ruota delle azioni */
.wheel {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 300px;
      height: 300px;
      transform: translate(-50%, -50%);
      display: none;
      pointer-events: none;
      filter: drop-shadow(0 0 1vw rgba(0,0,0,0.5));
    }
    .wheel svg {
      width: 100%;
      height: 100%;
      pointer-events: auto;
    }
    .slice {
      transition: filter 0.3s;
      cursor: pointer;
    }
    .slice-group:hover .slice,
    .slice-group:hover .slice-icon {
      filter: brightness(1.2);
      transform: translateY(2px);
    }
    .slice-text {
      font-size: 11px;
      font-weight: bold;
      fill: white;
      text-anchor: middle;
      dominant-baseline: middle;
      text-shadow: 1px 1px 2px rgba(0,0,0,0.7);
      pointer-events: none;
    }
    /* Centro della ruota */
    .center {
      fill: white;
      filter: drop-shadow(0 2px 8px rgba(0,0,0,0.3));
      cursor: pointer;
    }
    .center:hover {
      fill: #c0c0b8;
      transform: translateY(1px);
      box-shadow: 0 4px 8px rgba(0,0,0,0.2);
    }
    .center-x {
      transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1), fill 0.2s;
    }
    .center:hover + .center-x,
    .center-x:hover {
      transform: translateY(1px);
      fill: #5d5959;
    }
    /* Controllo slider per il numero di spicchi */
    .controls {
      position: fixed;
      top: 20px;
      left: 20px;
      background: white;
      padding: 15px;
      border-radius: 8px;
      box-shadow: 0 4px 16px rgba(0,0,0,0.1);
      z-index: 100;
      min-width: 200px;
    }
    .controls h3 {
      margin: 0 0 15px 0;
      font-size: 16px;
      text-align: center;
    }
    .slider-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
    }
    .slider {
      width: 150px;
      height: 5px;
      border-radius: 5px;
      background: #ddd;
      outline: none;
      appearance: none;
      -webkit-appearance: none;
    }
    .slider::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: #3498db;
      cursor: pointer;
    }
    .slider::-moz-range-thumb {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: #3498db;
      cursor: pointer;
      border: none;
    }
    .slice-count {
      font-size: 18px;
      font-weight: bold;
      color: #3498db;
      margin: 5px 0;
    }
        .slider-label {
          font-size: 12px;
          color: #666;
          text-align: center;
        }
</style>