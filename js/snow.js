const canvas = document.getElementById("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const canvasContext = canvas.getContext("2d");
const numberOfSnowballs = 100;
const snowballs = createSnowballs(canvas, numberOfSnowballs);

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createSnowballs(canvas, numberOfSnowballs) {
  return [...Array(numberOfSnowballs)].map(() => {
    return {
      x: random(0, canvas.width),
      y: random(0, canvas.height),
      opacity: random(0.5, 1),
      radius: random(2, 4),
      speedX: random(-3, 3),
      speedY: random(1, 3),
    };
  });
}

function drawSnowball(canvasContext, snowball) {
  canvasContext.beginPath();
  canvasContext.arc(snowball.x, snowball.y, snowball.radius, 0, Math.PI * 2);
  canvasContext.fillStyle = `rgba(255,255,255, ${snowball.opacity})`;
  canvasContext.fill();
}

function moveSnowball(canvas, snowball) {
  snowball.x += snowball.speedX;
  snowball.y += snowball.speedY;

  if (snowball.x > canvas.width) {
    snowball.x = 0;
  } else if (snowball.x < 0) {
    snowball.x = canvas.width;
  }

  if (snowball.y > canvas.height) {
    snowball.y = 0;
  }
}

setInterval(() => {
  canvasContext.clearRect(0, 0, canvas.width, canvas.height);
  snowballs.forEach((snowball) => drawSnowball(canvasContext, snowball));
  snowballs.forEach((snowball) => moveSnowball(canvas, snowball));
}, 50);
