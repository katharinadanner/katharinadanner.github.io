document.addEventListener("DOMContentLoaded", function() {
  var navbarCollapse = document.getElementById("mynavbar");
  var navbarToggler = document.querySelector(".navbar-toggler");
  var navLinks = document.querySelectorAll(".nav-link");

  // Load the JSON data
  fetch('data.json')
    .then(response => response.json())
    .then(data => {
      // Update navigation links with JSON data
      data.pages.forEach((page, index) => {
        navLinks[index].href = page.url;
        navLinks[index].innerText = page.title;
      });
    })
    .catch(error => console.error('Error fetching JSON:', error));

  navbarToggler.addEventListener("click", function() {
    navbarCollapse.classList.toggle("show");
    navbarToggler.classList.toggle("expanded");
  });

  // Close navbar when a link is clicked (for mobile view)
  navLinks.forEach(link => {
    link.addEventListener("click", function() {
      navbarCollapse.classList.remove("show");
    });
  });
});

// Adjust the content margin-top when the page is scrolled
window.addEventListener('scroll', function() {
  var navbar = document.querySelector('.navbar');
  var content = document.querySelector('.content');
  content.style.marginTop = navbar.offsetHeight + 'px';
});