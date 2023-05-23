// create an array of 3 cities with temperature property
const cities = [
  { name: "New York", temperature: 20 },
  { name: "Paris", temperature: 18 },
  { name: "Tokyo", temperature: 26 },
];

// console log each city temperature
cities.forEach((city) => {
  console.log(`${city.name} temperature is ${city.temperature}°C`);
});
