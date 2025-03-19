/* const user = { username: "funguy37", password: "123456" };
const loginStatus = login(user);
console.log(loginStatus);
console.warn(`The password is now ${user.password}`);

function login(userCredentials) {
  if (userCredentials.password === "123456") {
    let randomString = Math.random().toString(36).slice(-16);
    userCredentials.password = randomString;
    return `Terrible password. Your password has been set to a random string.`;
  }
  return "Logged in.";
} */

/* function sortList(orderBy, ...items) {
  console.log(orderBy);
  console.log(items);
  console.log(items[1]);
}

sortList("name", "Tristan", "Joel", "Carol", "Maureen", "Jonathan", "Anthony"); */

/* function makeNumberedList() {
  let numberedList = "<ol>";
  for (let i = 0; i < arguments.length; i++) {
    numberedList += `<li>${arguments[i]}</li>`;
  }
  numberedList += "</ol>";
  return numberedList;
}
let HTMLList = makeNumberedList(1.2, "Tristan", true);
console.log(HTMLList); */

/* function greetInSpanish(name) {
  return `Hola, ${name}`;
}

function getUserName(callback) {
  let firstName = prompt("Enter your first name");
  return callback(firstName);
}

getUserName(greetInSpanish);

function makeUnorderedList(array = []) {
  let listitems = array.map(function (element) {
    return `<li>${element}</li>`;
  });
  return `<ul>${listitems.join("")}</ul>`;
}
 */

function getThere(distance) {
  let estimatedTripDuration;
  if (water === true) {
    const getSwimTime = function () {
      return distance / 2;
    };
    estimatedTripDuration = getSwimTime();
  } else {
    const getWalkTime = function () {
      return distance / 4;
    };
    estimatedTripDuration = getWalkTime();
  }
  return estimatedTripDuration;
}

let water = true;
let distance = 30;

console.log(`It will take ${getThere(distance)} hours to get there.`);
