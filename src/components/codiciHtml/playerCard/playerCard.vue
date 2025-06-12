<template>
    <div class="playerCard">
        <div class="w1">
            <p class="text">
                Nome
            </p>
        </div>

        <div class="w2">
            <p class="text">
                Nome
            </p>
        </div>

        <div class="p">
            <div class="sw">
                <p class="text">
                    Nome
                </p>
            </div>
        </div>

        <div class="hp">
        </div>

        <div class="xp">
        </div>
    </div>
</template>

<style>
    .playerCard {
        width: 33%;
        aspect-ratio: 16/9;
        position: absolute;
        right: 0;
        bottom: 0;
        display: grid;
        grid-template-columns: [weapons] 27.3% [player] 54.7% [hp] 9% [xp] 9% [end];
        grid-template-rows: [weapon1] 50% [weapon2] 50% [end];
        text-align: center;
    }

    .w1 {
        background-color: aqua;
        grid-column-start: weapons;
        grid-column-end: player;
        grid-row-start: weapon1;
        grid-row-end: weapon2;
    }

    .w2 {
        background-color: beige;
        grid-column-start: weapons;
        grid-column-end: player;
        grid-row-start: weapon2;
        grid-row-end: end;
    }

    .p {
        position: relative;
        background-color: cadetblue;
        grid-column-start: player;
        grid-column-end: hp;
        grid-row-start: weapon1;
        grid-row-end: end;
    }

    .hp {
        background-color: darkblue;
        grid-column-start: hp;
        grid-column-end: xp;
        grid-row-start: weapon1;
        grid-row-end: end;
    }

    .xp {
        background-color: firebrick;
        grid-column-start: xp;
        grid-column-end: end;
        grid-row-start: weapon1;
        grid-row-end: end;
    }

    .sw {
        background-color: gold;
        position: absolute;
        width: 33%;
        height: 33%;
        right: 0;
        top: 0;
    }

    .text {
        background-color: blueviolet;
        margin: 0;
    }
</style>