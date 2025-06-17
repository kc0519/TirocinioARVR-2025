<template>
    <div class="cards-container">
        <div class="c1 c"></div>
        <div class="c2 c"></div>
        <div class="c3 c"></div>
        <div class="c4 c"></div>
        <div class="c5 c"></div>
    </div>
</template>

<style lang="scss" scoped>
    .cards-container {
        position: absolute;
        bottom: 0;
        left: 20%;
        width: 44%;
        aspect-ratio: 21 / 7;
        height: auto;
        z-index: 1;
    }

    .c {
        width: 25%;
        aspect-ratio: 565 / 800;
        height: auto;
        background-color: blueviolet;
        position: absolute;
        border: solid 2px black;
        background-size: cover;
        background-position: center;
        cursor: grab;
        user-select: none;
        transition: transform 0.2s ease, box-shadow 0.2s ease;
    }

    .c:hover {
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        z-index: 10;
    }

    .c:active {
        cursor:grabbing;
        aspect-ratio: 565 / 800;
        left: 50%;
        top: -200%;
        transform: translate(-50%, 50%) scale(3);
        z-index: 20;
        pointer-events: none;
    }

    .c1{
        top: 0%;
        left: 37.5%;
        box-shadow: 0 0.5% 1% rgba(0, 0, 0, 0.5);
        background-image: url('./card_frame_vintage.png');
    }

    .c1:hover {
        transform: translateY(-20px);
    }

    .c2{
        top: 6%;
        left: 56%;
        transform: rotate(10deg);
        box-shadow: 0.5% 0.5% 1% rgba(0, 0, 0, 0.5);
        background-image: url('./card_frame_vintage.png');
    }

    .c2:hover {
        transform: translateY(-20px) rotate(10deg);
    }

    .c3{
        top: 21%;
        left: 74%;
        transform: rotate(20deg);
        box-shadow: 0.5% 0.5% 1% rgba(0, 0, 0, 0.5);
        background-image: url('./card_frame_vintage.png');
    }

    .c3:hover {
        transform: translateY(-20px) rotate(20deg);
    }

    .c4{
        top: 6%;
        left: 19%;
        transform: rotate(-10deg);
        box-shadow: -0.5% 0.5% 1% rgba(0, 0, 0, 0.5);
        background-image: url('./card_frame_vintage.png');
    }

    .c4:hover {
        transform: translateY(-20px) rotate(-10deg);
    }

    .c5{
        top: 21%;
        left: 1%;
        transform: rotate(-20deg);
        box-shadow: -0.5% 0.5% 1% rgba(0, 0, 0, 0.5);
        background-image: url('./card_frame_vintage.png');
    }

    .c5:hover {
        transform: translateY(-20px) rotate(-20deg);
    }
</style>