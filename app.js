AOS.init();

var myBacktotop = document.getElementById("myBtn");

window.onscroll = function() {topFunction()};

function topFunction() {
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
        myBacktotop.style.display = "block";
    } else {
        myBacktotop.style.display = "none";
    }
}

function toTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function anime() {
    var reveals = document.querySelectorAll(".anime");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", anime);

  anime();