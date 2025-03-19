/* const myLocation = {
  city: {
    id: 123456,
    cityName: "Beaworthy",
    coord: {
      lon: -0.1258,
      lat: 51.6356,
    },
  },
  country: "GB",
  type: "home",
};
console.log(myLocation.city.cityName);
console.log(myLocation.city.coord.lat);
console.log(myLocation.type);
myLocation.area = "rural";
console.log(myLocation.area); */

for (const property in document) {
  console.log(`${property}: ${document[property]}`);
}
