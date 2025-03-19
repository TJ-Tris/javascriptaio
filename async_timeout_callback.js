/* function doProcessing() {
  var timeout;
  timeout = setTimeout(function () {
    console.log("Doing first thing");
    timeout = setTimeout(function () {
      console.log("Step 2");
      timeout = setTimeout(function () {
        console.log("Step 3");
        setTimeout(function () {
          console.log("Last thing!");
        }, 3000);
      }, 10000);
    }, 15000);
  }, 20000);

  console.log(`Timeout = ${timeout}`);
}

doProcessing();
console.log("Tris is 50 in June!");
 */

setTimeout(printToLog, 5000);

function printToLog() {
  console.log("5000000000000000000000000000000");
}
