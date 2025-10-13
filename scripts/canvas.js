export function drawStars(ctx, count) {
  for (let i = 0; i < count; i++) {
    const x = Math.random() * ctx.canvas.width;
    const y = Math.random() * ctx.canvas.height;
    ctx.fillStyle = '#fff';
    ctx.fillRect(x, y, 1, 1);
  }
}

export function drawPlanet(ctx, x, y, radius, color) {
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, 2 * Math.PI);
  ctx.fillStyle = color;
  ctx.shadowBlur = 15;
  ctx.shadowColor = color;
  ctx.fill();
}
