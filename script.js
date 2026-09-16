const button = document.getElementById("generateBtn");
const result = document.getElementById("result");

// Tells button : When someone clicks you, run this function. Event listener listens for event 'click'
button.addEventListener("click", function () {

// Creates empty array. No numbers have been generated yet
  let whiteBalls = [];


// whiteballs.length is how many numberswe currently have stored
// We want exactly 5 white balls, so keep looping until length becomes 5
// Math.random function gives a decimal betwen 0 and 0.99999999...
// multiplying by 69 gives a decimal between 0 and 68.999.....
// math.floor rounds down to a whole number between 0 and 68
// adding 1 shifts it to the range 1-69
  while (whiteBalls.length < 5) {
    let num = Math.floor(Math.random() * 69) + 1;


// includes(num) checks if the array already contains that number.
// powerball white balls cannot repeat, so we only add it if its not already there
// push(num)adds the number to the end of the array
// example: if whiteballs was [4,12] then it becomes [4,12,33]
    if (!whiteBalls.includes(num)) {
      whiteBalls.push(num);
    }
  }

// Now we have 5 unique numbers, but they might be in a random order.
// sort(...) rearranges them.
// (a, b) => a - b is a compare function:
// - If a-b is negative, a goes before b
// - If a-b is positive, b goes before a
// This sorts numbers from smallest to largest.
  whiteBalls.sort((a, b) => a - b);


// Generate the Powerball number:
// Same idea as before, but Powerball is 1 to 26.
// So:
// Math.random() * 26 -> 0 to 25.999...
// floor -> 0 to 25
// + 1 -> 1 to 26
  let powerball = Math.floor(Math.random() * 26) + 1;

// result.textContent changes the text inside the <p id="result">...</p> tag.
// whiteBalls.join(", ") turns the array into a string with commas.
// Example: [4, 12, 33, 51, 68] becomes "4, 12, 33, 51, 68"
// Then we build one full message string and display it.
  result.textContent =
    "White Balls: " + whiteBalls.join(", ") +
    " | Powerball: " + powerball;
});