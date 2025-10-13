export function animatePlanetEntry(planet) {
  const el = document.createElement('div');
  el.className = 'planet-entry';
  el.innerText = `${planet.name} (${planet.type}) discovered!`;
  el.style.position = 'absolute';
  el.style.top = '20px';
  el.style.left = '50%';
  el.style.transform = 'translateX(-50%)';
  el.style.background = planet.color;
  el.style.color = '#000';
  el.style.padding = '0.5rem 1rem';
  el.style.borderRadius = '8px';
  el.style.boxShadow = `0 0 10px ${planet.color}`;
  document.body.appendChild(el);

  setTimeout(() => {
    el.remove();
  }, 2000);
}
