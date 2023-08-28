export const fetchPlanetInfo = async (planetName) => {
  try {
    const response = await fetch(
      `https://swapi.dev/api/planets/?search=${planetName}`
    );
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error fetching planet data:", error);
    return [];
  }
};

export const extractPlanetInfo = (data) => {
  if (data && data.length > 0) {
    return data[0];
  }
  return null;
};
