// JavaScript for search suggestions

const items = {
  "Sustainability in Knitwear": "New Stitches.html",
  "Building a Creative Community": "New Stitches.html",
  "2025 Knitwear Trends": "New Stitches.html",
  "New stitches for sour lemons": "New Stitches.html",
  "Eco-friendly Yarn": "New Stitches.html",
  "Handmade Scarves": "Handmade Knitwear.html",
  "Knitting Patterns": "Digital Products.html",
  "Knitting Books": "Digital Products.html",
  "Knitting Courses": "Digital Products.html",
  "Striped Knit Beanie": "Handmade Knitwear.html",
  "Chunky Wool Scarf": "Handmade Knitwear.html",
  "Handmade Cardigan": "Handmade Knitwear.html",
  "About Our Mission": "About us.html",
  "Contact Information": "About us.html",
  "Shop Handmade Knitwear": "Shop page.html",
  "Sell With Us": "Sell with us.html",
  "Privacy Policy": "Privacy Policy.html",
  "Return Policy": "Return & Refund Policy.html",
  "Terms of Service": "Terms of Services.html",
  "Cookie Policy": "Cookie Policy.html",
  "Website Disclaimer": "Website Disclaimer.html",
  "Account Dashboard": "Account Dashboard.html",
  "Shopping Cart": "Cart.html",
  "Checkout Process": "Checkout.html"
};

// This function shows suggestions while typing
function showSuggestions(value) {
  let suggestionBox = document.getElementById("suggestions");
  suggestionBox.innerHTML = ""; // Clear old results

  if (value.length === 0) {
    suggestionBox.style.display = "no result match";
    return;
  };

  // Get matches
  let matches = Object.keys(items).filter(item =>
    item.toLowerCase().includes(value.toLowerCase())
  );

   if (value.length === 0) {
    suggestionBox.style.display = "no result match";
    return;
  };

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
  
  suggestionBox.style.display = "block";
}

// Hide suggestions when clicking elsewhere
document.addEventListener('click', function(e) {
  if (!document.getElementById('searchBox').contains(e.target)) {
    document.getElementById('suggestions').style.display = 'none';
  }
});

