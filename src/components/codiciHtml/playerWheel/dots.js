// Variabili utente
const numBigItems = 10; // Numero elementi grandi nella ruota
const numSmallDots = 4; // Numero pallini piccoli sotto

const bigRadius = 40;
const smallRadius = 70;

const container = document.getElementById("circle");

// Crea elementi grandi disposti a cerchio
for (let i = 0; i < numBigItems; i++)
{
    const angle = (360 / numBigItems) * i;
    const item = document.createElement("div");
    item.className = "circle-item";

    const rad = angle * (Math.PI / 180);
    const x = bigRadius * Math.cos(rad);
    const y = bigRadius * Math.sin(rad);

    item.style.transform = `translate(-50%, -50%) translate(${x}px, ${y}px)`;
    container.appendChild(item);
}

// Crea i pallini piccoli in basso, distribuiti su arco di 90° centrato in basso
const baseAngle = 180;
const startAngle = baseAngle - (numSmallDots - 1) * 15; // es. con 4: da 67.5 a 112.5

for (let i = 0; i < numSmallDots; i++)
{
    const angle = startAngle + i * 30; // distanza angolare uniforme
    const rad = angle * (Math.PI / 360);
    const x = smallRadius * Math.cos(rad);
    const y = smallRadius * Math.sin(rad);

    const dot = document.createElement("div");
    dot.className = "small-dot";
    dot.style.transform = `translate(-50%, -50%) translate(${x}px, ${y}px)`;
    container.appendChild(dot);
}