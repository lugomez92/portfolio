//GO TO TOP BUTTON
let goTopBtn = document.getElementById("goTopBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    goTopBtn.style.display = "block";
  } else {
    goTopBtn.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function goToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// SMOOTH SCROLLING (anchor links)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        const offsetTop = target.offsetTop;

        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    });
});

