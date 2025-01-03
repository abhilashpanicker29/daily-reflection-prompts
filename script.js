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
  document.getElementById("morningPrompt").textContent = getRandomPrompt("morning");
  document.getElementById("afternoonPrompt").textContent = getRandomPrompt("afternoon");
  document.getElementById("nightPrompt").textContent = getRandomPrompt("night");
});
