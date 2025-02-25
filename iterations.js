/* for (let index = 0; index < 10; index++) {
  console.log(index);
}
 */

/* const pets = ["cat", "dog", "chicken"];
for (let pet of pets) {
  console.log(pet);
}
 */

/* let text = "spell me.";
for (let character of text) {
  console.log(character);
} */

let phoneNumber = "555-757-1212";
for (let digit of phoneNumber) {
  if (digit === "-") continue;
  console.log(digit);
}
