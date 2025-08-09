document.getElementById("convert-btn").addEventListener("click", function() {
  const numInput = document.getElementById("number").value.trim();
  const outputEl = document.getElementById("output");

  if (numInput === "") {
    outputEl.textContent = "Please enter a valid number";
    return;
  }

  const num = Number(numInput);

  if (isNaN(num) || !Number.isInteger(num)) {
    outputEl.textContent = "Please enter a valid number";
    return;
  }

  if (num < 1) {
    outputEl.textContent = "Please enter a number greater than or equal to 1";
    return;
  }

  if (num > 3999) {
    outputEl.textContent = "Please enter a number less than or equal to 3999";
    return;
  }

  const romanNumerals = [
    ["M", 1000],
    ["CM", 900],
    ["D", 500],
    ["CD", 400],
    ["C", 100],
    ["XC", 90],
    ["L", 50],
    ["XL", 40],
    ["X", 10],
    ["IX", 9],
    ["V", 5],
    ["IV", 4],
    ["I", 1],
  ];

  let result = "";
  let number = num;

  for (let [roman, value] of romanNumerals) {
    while (number >= value) {
      result += roman;
      number -= value;
    }
  }

  outputEl.textContent = result;
});
