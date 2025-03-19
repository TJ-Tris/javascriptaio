/* function doMath(value, mathToDo) {
  let result = mathToDo(value);
  return result;
}
const circumference = doMath(4, function (radius) {
  return 2 * Math.PI * radius;
});
console.log(circumference); */

// Reducing an array (although it's not really reducing it!!)
// This array method uses a special reducer callback function to 'reduce'
// the elements of the array to a single value, as determined by the reducer function logic.
// This single value is returned once all the elements have been parsed.  In this example,
// the final return value is assigned to the variable 'total'.
/* const prices = [4.99, 3.98, 54.99];
let total = 0;
total = prices.reduce(function (a, b) {
  console.log(a, b);
  return a + b;
}, 0);
console.log(total);
console.log(prices);
 */

// Mapping an array
/* const ingredients = [
  "eggs",
  "milk",
  "cheese",
  "garlic",
  "onion",
  "kale",
  "salt",
  "pepper",
];
let listItems = ingredients.map(
  (singleIngredient) => `<li>${singleIngredient}</li>`
);
console.log(listItems);
 */

// Filtering an array
/* const animalNames = [
  "aardvark",
  "alligator",
  "alpaca",
  "bear",
  "beaver",
  "cat",
  "dog",
  "elephant",
];
const animalsStartingWithA = animalNames.filter((animal) =>
  animal.startsWith("a")
);
console.log(animalNames);
console.log(animalsStartingWithA); */

// Destructuring an array
/* const person = ["Tristan J Hesford", "October House", "Beaworthy", "Devon"];
console.log(person);
let [personName, street, town, county] = person;
console.log("Name = " + personName);
console.log("Street = " + street);
console.log("Town = " + town);
console.log("County = " + county); */

// Spread syntax (array shallow copy)
const fruits = ["apple", "orange", "lemon"];
const fruitsShallowCopy = [...fruits];
fruitsShallowCopy.push("melon");
console.log(fruits);
console.log(fruitsShallowCopy);
