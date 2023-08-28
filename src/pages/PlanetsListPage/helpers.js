export const fetchPlanets = async () => {
  try {
    const response = await fetch("https://swapi.dev/api/planets/");
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

export const filterPlanets = (
  planets,
  { keyword, minDiameter, maxDiameter }
) => {
  return planets.filter(
    (planet) =>
      planet.name.toLowerCase().includes(keyword.toLowerCase()) &&
      planet.diameter >= minDiameter &&
      planet.diameter <= maxDiameter
  );
};
