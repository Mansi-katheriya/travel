document.addEventListener("DOMContentLoaded", initApp);

function initApp() {
  attachSearchHandler();
  attachLearnMoreHandler();
  attachStepClickHandlers();
}

function attachSearchHandler() {
  const searchBtn = document.getElementById("searchBtn");
  const searchInput = document.getElementById("searchInput");

  if (!searchBtn || !searchInput) return;

  searchBtn.addEventListener("click", () => handleSearch(searchInput.value.trim()));
}

function handleSearch(query) {
  if (!query) {
    alert("Please enter a destination or interest!");
    return;
  }
  alert(`🔍 Searching for travel buddies in "${query}"...`);
}

function attachLearnMoreHandler() {
  const learnMoreBtn = document.getElementById("learnMoreBtn");
  if (!learnMoreBtn) return;

  learnMoreBtn.addEventListener("click", showSafetyTips);
}

function showSafetyTips() {
  alert("🛡️ Safety Tips:\n\n• Meet in public places\n• Always inform someone about your trip\n• Verify your buddy’s profile\n• Use SOS and live tracking features in the app");
}

function attachStepClickHandlers() {
  const steps = document.querySelectorAll(".step");
  steps.forEach((step, i) => {
    step.addEventListener("click", () => alert(`✅ Step ${i + 1}: \"${step.textContent.trim()}\"`));
  });
}

function toggleMenu() {
  const navLinks = document.getElementById("navLinks");
  navLinks.classList.toggle("active");
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}