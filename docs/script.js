//GO TO TOP BUTTON
let goTopBtn = document.getElementById("goTopBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    goTopBtn.style.display = "block";
  } else {
    goTopBtn.style.display = "none";
  }
}

function goToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// SMOOTH SCROLLING (anchor links and go to top)
document.querySelectorAll('a[href^="#"], #goTopBtn').forEach(element => {
    element.addEventListener('click', function(e) {
        e.preventDefault();

        let targetTop = 0;
        if (this.getAttribute('href') !== '#') {
            const target = document.querySelector(this.getAttribute('href'));
            targetTop = target.offsetTop;
        }

        window.scrollTo({
            top: targetTop,
            behavior: 'smooth'
        });
    });
});
