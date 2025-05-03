// Trigger animation on button click
document.getElementById("animateBtn").addEventListener("click", () => {
  const btn = document.getElementById("animateBtn");
  btn.classList.add("animate");

  // Remove class after animation ends
  setTimeout(() => {
    btn.classList.remove("animate");
  }, 600);
});

// Store user preference in localStorage
document.getElementById("savePreferenceBtn").addEventListener("click", () => {
  localStorage.setItem("userPreference", "darkMode");
  document.getElementById("output").innerText = "Preference saved: darkMode";
});

// Retrieve on page load
window.addEventListener("load", () => {
  const pref = localStorage.getItem("userPreference");
  if (pref) {
    document.getElementById("output").innerText = `Loaded preference: ${pref}`;
  }
});
