<template>
    <div class="board-map">
        <div class="map-content">
            <slot></slot>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.board-map {
    position: absolute;
    width: 18%;
    aspect-ratio: 1;
    height: auto;
    display: block;
}
.map-content {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-45%, -55%);
    width: 85%;
    aspect-ratio: 1;
    height: auto;
    background-color: bisque;
    z-index: 1;
    box-shadow: -0.5vw 0.5vw 1vw rgba(0, 0, 0, 0.5);
    overflow: hidden;
}
.board-map::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('./MapBoard.png');
    background-size: cover;
    background-position: center;
    z-index: 2;
    pointer-events: none;
}
</style>