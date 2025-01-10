// Function to handle tab switching
function openTab(evt, tabName) {
    // Get all elements with class="tab-content" and hide them
    const allTabs = document.querySelectorAll(".tab-content");
    allTabs.forEach(function(tab) {
        tab.style.display = "none";  // Hide all tab content
    });

    // Get all elements with class="tab" and remove the "active" class
    const allTabLinks = document.querySelectorAll(".tab");
    allTabLinks.forEach(function(link) {
        link.classList.remove("active");  // Remove active class from all tabs
    });

    // Show the current tab content and add the "active" class to the clicked tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.classList.add("active");  // Add active class to the clicked tab
}
  // Open the first tab on page load
  window.onload = function() {
    const firstTab = document.getElementById("tab1");
    openTab({ currentTarget: firstTab }, 'tab1content'); // Open the first tab (index 0)
  };

  // Add event listeners to tabs
  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => openTab(index));
  });

  
  //*navbarcode for small screens*//
// const hamburger = document.querySelector(".hamburger");
// const navmenu = document.querySelector(".nav-links");

// hamburger.addEventListener("click", () => {
//   hamburger.classList.toggle("active");
//   navmenu.classList.toggle("active");
// })

// document.querySelectorAll(".nav-link").forEach(n => n.addEventListener
//   ("click", () => {
//     hamburger.classList.remove("active");
//     navmenu.classList.remove("active");
//   })
// )



