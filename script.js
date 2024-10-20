//your JS code here. If required.
let text = document.getElementById("text");
let del = document.getElementById("delay");
let di = document.getElementById("output");
let btn = document.getElementById("btn");

btn.addEventListener("click", async () => {
  let delayTime = parseInt(del.value); // Convert the delay to a number
  let displayText = text.value;

  // Await the delay before displaying the text
  await delay(displayText, delayTime);
});

async function delay(display, delayTime) {
  return new Promise((resolve) => {
    setTimeout(() => {
      di.textContent = display; // Use 'display' instead of 'displayText'
      resolve();
    }, delayTime);
  });
}
