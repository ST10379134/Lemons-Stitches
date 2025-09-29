// JavaScript for search suggestions
//AI Generated Code

// Example dataset (expand this as needed)
const items = {
  "Sustainability in Knitwear" : "New Stitches.html",
  "Building a Creative Community" : "New Stitches.html",
  "2025 Knitwear Trends" : "New Stitches.html",
  "New stitches for sour lemons" : "New Stitches.html",
  "Eco-friendly Yarn" : "New Stitches.html",
  "Handmade Scarves" : "Handmade Knitwear.html"
};

// Function to show suggestions while typing
function showSuggestions(value) {
  let suggestionBox = document.getElementById("suggestions");
  suggestionBox.innerHTML = ""; // Clear old results

  if (value.length === 0) return;

  // Get matches
  let matches = Object.keys(items).filter(item =>
    item.toLowerCase().includes(value.toLowerCase())
  );

  // Create clickable suggestions
  matches.forEach(match => {
    let div = document.createElement("div");
    div.classList.add("suggestion-item");
    div.textContent = match;
    div.onclick = () => {
      window.location.href = items[match]; // Redirect to the page
    };
    suggestionBox.appendChild(div);
  });
}

