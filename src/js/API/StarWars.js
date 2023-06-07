export const getCharacters = async () => {
  try {
    const response = await fetch("https://www.swapi.tech/api/people", {
      method: "GET",
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const getVehicles = async() => {
  try {
    const response = await fetch("https://www.swapi.tech/api/vehicles", {
      method: "GET",
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const getPlanets = async () => {  try {
  const response = await fetch("https://www.swapi.tech/api//planets", {
    method: "GET",
  });
  const data = await response.json();
  return data;
} catch (error) {
  console.log(error);
}
};
