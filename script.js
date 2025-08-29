// 🚀 Assignment: Mastering JavaScript Fundamentals

// ===============================
// Part 1: Variables & Conditionals
// ===============================
let age = 20;  // Variable declaration
let basicsOutput = document.getElementById("basics-output");

// Simple conditional
if (age >= 18) {
  basicsOutput.textContent = `You are ${age}. You are an adult.`;
} else {
  basicsOutput.textContent = `You are ${age}. You are a minor.`;
}

// ===============================
// Part 2: Functions
// ===============================

// Function 1: Calculate total with tax
function calculateTotal(price, taxRate) {
  return price + (price * taxRate);
}

// Function 2: Format a greeting
function greetUser(name) {
  return `Hello, ${name}! Welcome to JavaScript practice.`;
}

// Hook up function to button
document.getElementById("calc-btn").addEventListener("click", () => {
  let total = calculateTotal(100, 0.15);
  document.getElementById("calc-output").textContent =
    `${greetUser("Yordanos")} Your total with tax is $${total}.`;
});

// ===============================
// Part 3: Loops
// ===============================
let list = document.getElementById("loop-list");

// Loop 1: For loop
for (let i = 1; i <= 5; i++) {
  let li = document.createElement("li");
  li.textContent = `Number: ${i}`;
  list.appendChild(li);
}

// Loop 2: While loop
let count = 5;
while (count > 0) {
  console.log(`Countdown: ${count}`);
  count--;
}

// ===============================
// Part 4: DOM Manipulation
// ===============================

// DOM Interaction 1: Change text on load
document.getElementById("dom-text").textContent = "This text was changed by JavaScript!";

// DOM Interaction 2: Toggle class
document.getElementById("toggle-btn").addEventListener("click", () => {
  document.getElementById("dom-text").classList.toggle("highlight");
});

// DOM Interaction 3: Add new element dynamically
let newPara = document.createElement("p");
newPara.textContent = "This paragraph was added dynamically with JavaScript!";
document.body.appendChild(newPara);
