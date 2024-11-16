const circle = document.getElementById('circle');
const scoreElement = document.getElementById('score');
let score = 0;

function getRandomPosition() {
    const gameArea = document.getElementById('game-area');
    const gameAreaWidth = gameArea.offsetWidth;
    const gameAreaHeight = gameArea.offsetHeight;

    const x = Math.random() * (gameAreaWidth - 50);
    const y = Math.random() * (gameAreaHeight - 100);

    return { x, y };
}

function moveCircle() {
    const { x, y } = getRandomPosition();
    circle.style.left = `${x}px`;
    circle.style.top = `${y}px`;
}

circle.addEventListener('click', () => {
    score++;
    scoreElement.textContent = score;
    moveCircle();
    play.suond.
});

setInterval(() => {
    moveCircle();
}, 1000);

moveCircle();