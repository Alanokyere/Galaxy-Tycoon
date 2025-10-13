export function generatePlanet(name, type) {
  const colors = {
    gas: '#88f',
    rocky: '#c93',
    ice: '#9ef'
  };

  return {
    name,
    type,
    population: Math.floor(Math.random() * 1e6),
    resources: {
      metal: Math.floor(Math.random() * 500),
      energy: Math.floor(Math.random() * 300)
    },
    color: colors[type],
    x: Math.random() * 700 + 50,
    y: Math.random() * 500 + 50,
    radius: Math.random() * 20 + 10
  };
}
