const getCharacters = async () => {
  try {
    const response = await fetch("https://www.swapi.tech/api/people", {
      method: "GET",
    });
    const data = await response.json();
    return data;
  } catch (error) {
    return;
  }
};
const getVehicles = () => {};
const getPlanets = () => {};
