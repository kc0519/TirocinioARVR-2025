<template>
    <div class="cards-container">
        <div class="c1"></div>
        <div class="c2"></div>
        <div class="c3"></div>
        <div class="c4"></div>
        <div class="c5"></div>
    </div>
</template>
<style lang="scss" scoped>
    .cards-container {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0;
        height: 0;
        }
    .c1{
        width: 15vh;
        height: 20vh;
        background-color: blueviolet;
        position: absolute;
        bottom: -8.5vh;
        left: 30vw;
        border: solid 2px black;
        box-shadow: 0 0.5vw 1vw rgba(0, 0, 0, 0.5);
        background-image: url('./card_frame_vintage.png');
        background-size: cover;
        background-position: center;
        cursor: grab;
        user-select: none;
        transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    .c1:hover {
        transform: translateY(-20px);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        z-index: 10;
    }
    .c1:active{
        cursor:grabbing;
        left: 50vw;
        bottom: 50vh;
        transform: translate(-50%, 50%) scale(3);
    }
    .c2{
        width: 15vh;
        height: 20vh;
        background-color: blueviolet;
        position: absolute;
        bottom: -10vh;
        left: 36vw;
        transform: rotate(10deg);
        border: solid 2px black;
        box-shadow: 0.5vw 0.5vw 1vw rgba(0, 0, 0, 0.5);
        background-image: url('./card_frame_vintage.png');
        background-size: cover;
        background-position: center;
        cursor: grab;
        user-select: none;
        transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    .c2:hover {
        transform: translateY(-20px) rotate(10deg);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        z-index: 10;
    }
    .c2:active{
        cursor:grabbing;
        left: 50vw;
        bottom: 50vh;
        transform: translate(-50%, 50%) scale(3);
    }
    .c3{
        width: 15vh;
        height: 20vh;
        background-color: blueviolet;
        position: absolute;
        bottom: -13vh;
        left: 41vw;
        transform: rotate(20deg);
        border: solid 2px black;
        box-shadow: 0.5vw 0.5vw 1vw rgba(0, 0, 0, 0.5);
        background-image: url('./card_frame_vintage.png');
        background-size: cover;
        background-position: center;
        cursor: grab;
        user-select: none;
        transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    .c3:hover {
        transform: translateY(-20px) rotate(20deg);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        z-index: 10;
    }
    .c3:active{
        cursor:grabbing;
        left: 50vw;
        bottom: 50vh;
        transform: translate(-50%, 50%) scale(3);
    }
    .c4{
        width: 15vh;
        height: 20vh;
        background-color: blueviolet;
        position: absolute;
        bottom: -10vh;
        left: 24vw;
        transform: rotate(-10deg);
        border: solid 2px black;
        box-shadow: -0.5vw 0.5vw 1vw rgba(0, 0, 0, 0.5);
        background-image: url('./card_frame_vintage.png');
        background-size: cover;
        background-position: center;
        cursor: grab;
        user-select: none;
        transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    .c4:hover {
        transform: translateY(-20px) rotate(-10deg);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        z-index: 10;
    }
    .c4:active{
        cursor:grabbing;
        left: 50vw;
        bottom: 50vh;
        transform: translate(-50%, 50%) scale(3);
    }
    .c5{
        width: 15vh;
        height: 20vh;
        background-color: blueviolet;
        position: absolute;
        bottom: -13vh;
        left: 19vw;
        transform: rotate(-20deg);
        border: solid 2px black;
        box-shadow: -0.5vw 0.5vw 1vw rgba(0, 0, 0, 0.5);
        background-image: url('./card_frame_vintage.png');
        background-size: cover;
        background-position: center;
        cursor: grab;
        user-select: none;
        transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    .c5:hover {
        transform: translateY(-20px) rotate(-20deg);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        z-index: 10;
    }
    .c5:active{
        cursor:grabbing;
        left: 50vw;
        bottom: 50vh;
        transform: translate(-50%, 50%) scale(3);
    }
</style>