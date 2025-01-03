import prompts from './prompts.js';

// Function to generate a random number based on the current date and category
function getSeededRandom(category) {
  const date = new Date().toDateString(); // Get the current date as a string
  const seed = `${date}-${category}`; // Combine date and category to create a unique seed
  let hash = 0;

  for (let i = 0; i < seed.length; i++) {
    hash = seed.charCodeAt(i) + ((hash << 5) - hash);
    hash = hash & hash; // Convert to 32bit integer
  }

  return Math.abs(hash);
}

// Function to get a prompt based on the seeded random number
function getDailyPrompt(category) {
  const categoryPrompts = prompts[category];
  const randomIndex = getSeededRandom(category) % categoryPrompts.length; // Use the seed to get a consistent index
  return categoryPrompts[randomIndex];
}

// Display prompts on the webpage
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("morningText").textContent = getDailyPrompt("morning");
  document.getElementById("afternoonText").textContent = getDailyPrompt("afternoon");
  document.getElementById("nightText").textContent = getDailyPrompt("night");
});
