const ball = document.getElementById("ball");
document.addEventListener("keydown", handleKeyPress);
let position = 0;
let position2 = 0;

function handleKeyPress(e) {
  if (e.code === "KeyL") {
    position = position - 20;
  }
  if (e.code === "KeyR") {
    position = position + 20;
  }
  if (e.code === "KeyU") {
    position2 = position2 - 20;
  }
  if (e.code === "KeyD") {
    position2 = position2 + 20;
  }
  if (position < 0) {
    position = 0;
  }
  if (position2 < 0) {
    position2 = 0;
  }
  refresh();
}

// Update the ball's position.
function refresh() {
  ball.style.left = position + "px";
  ball.style.top = position2 + "px";
}
