import { GalaxyTycoon } from './engine.js';
import { drawStars, drawPlanet } from './canvas.js';
import { animatePlanetEntry } from './ui.js';

const canvas = document.getElementById('galaxyCanvas');
const ctx = canvas.getContext('2d');
drawStars(ctx, 200);

const game = new GalaxyTycoon(ctx);

document.getElementById('discoverBtn').addEventListener('click', () => {
  const planet = game.discoverPlanet();
  drawPlanet(ctx, planet.x, planet.y, planet.radius, planet.color);
  animatePlanetEntry(planet);
});
