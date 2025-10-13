import { generatePlanet } from './galaxy.js';

export class GalaxyTycoon {
  constructor(ctx) {
    this.ctx = ctx;
    this.planets = [];
    this.resources = { metal: 0, energy: 0 };
  }

  discoverPlanet() {
    const name = `Planet-${this.planets.length + 1}`;
    const types = ['gas', 'rocky', 'ice'];
    const type = types[Math.floor(Math.random() * types.length)];
    const planet = generatePlanet(name, type);
    this.planets.push(planet);

    this.resources.metal += planet.resources.metal;
    this.resources.energy += planet.resources.energy;

    document.getElementById('resources').innerText =
      `🔧 Metal: ${this.resources.metal} ⚡ Energy: ${this.resources.energy}`;

    return planet;
  }
}
