const dt = new Date();
const hours = dt.getHours();
let msg;
msg = hours < 12 ? "Good morning!" : "Good day!";
console.log(msg);
