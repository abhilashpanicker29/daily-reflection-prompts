// script.js

import prompts from './prompts.js';

// Function to get a random prompt from a category
function getRandomPrompt(category) {
  const categoryPrompts = prompts[category];
  const randomIndex = Math.floor(Math.random() * categoryPrompts.length);
  return categoryPrompts[randomIndex];
}

// Display prompts on the webpage
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("morningText").textContent = getRandomPrompt("morning");
  document.getElementById("afternoonText").textContent = getRandomPrompt("afternoon");
  document.getElementById("nightText").textContent = getRandomPrompt("night");
});
