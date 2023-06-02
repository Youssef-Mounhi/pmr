document.addEventListener("DOMContentLoaded", () => {

  var slideCount = document.querySelectorAll('.slider .slide-item').length;
  var slideWidth = document.querySelectorAll('.slider-outer')[0].offsetWidth;
  var slideHeight = document.querySelectorAll(".slider-outer")[0].offsetHeight;

  var sliderUlWidth = slideCount * slideWidth;
  document.querySelectorAll('.slider')[0].style.cssText = "width:" + sliderUlWidth + "px";

  for (var i = 0; i < slideCount; i++) {
    document.querySelectorAll('.slide-item')[i].style.cssText = "width:" + slideWidth + "px;height:" + slideHeight + "px";
  }

  setInterval(function() {
    moveRight();
  }, 5000);
  var counter = 1;

  function moveRight() {
    var slideNum = counter++
      if (slideNum < slideCount) {
        var transformSize = slideWidth * slideNum;
        document.querySelectorAll('.slider')[0].style.cssText = 
          "width:" + sliderUlWidth + "px; -webkit-transition:all 800ms ease; -webkit-transform:translate3d(-" + transformSize + "px, 0px, 0px);-moz-transition:all 800ms ease; -moz-transform:translate3d(-" + transformSize + "px, 0px, 0px);-o-transition:all 800ms ease; -o-transform:translate3d(-" + transformSize + "px, 0px, 0px);transition:all 800ms ease; transform:translate3d(-" + transformSize + "px, 0px, 0px)";

      } else {
        counter = 1;
        document.querySelectorAll('.slider')[0].style.cssText = "width:" + sliderUlWidth + "px;-webkit-transition:all 800ms ease; -webkit-transform:translate3d(0px, 0px, 0px);-moz-transition:all 800ms ease; -moz-transform:translate3d(0px, 0px, 0px);-o-transition:all 800ms ease; -o-transform:translate3d(0px, 0px, 0px);transition:all 800ms ease; transform:translate3d(0px, 0px, 0px)";
      }

  }

    const swiper = new Swiper('.swiper', {
        spaceBetween: 40,
        slidesPerView: 1.2,
        centeredSlides: true,
        // Responsive breakpoints   
        breakpoints: {     
          320: {       
            slidesPerView: 1.2,       
            spaceBetween: 20     
          } 

        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar',
        },
      });

      
    document.querySelector("button#scroll-down").addEventListener("click", function(){
      document.getElementById("notreprojet").scrollIntoView({ behavior: 'smooth' });
    })

    document.querySelectorAll(".navbar-menu .navbar-item").forEach(elem=>{
      elem.addEventListener("click", function(e){
        e.preventDefault();
        const target = elem.getAttribute("data-target");
        document.getElementById(target).scrollIntoView({ behavior: 'smooth' });
      })
    })

    const handleSubmit = function(event) {
      event.preventDefault();
      const myForm = event.target;
      const formData = new FormData(myForm);
      document.getElementById("form-status-error").classList.add("is-hidden");
      document.getElementById("form-status-error").classList.add("is-hidden");
      
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      })
        .then(() => {
            document.getElementById("form-status-success").classList.remove("is-hidden");
        })
        .then(()=> myForm.reset())
        .catch((error) => document.getElementById("form-status-error").classList.remove("is-hidden"));
    };
    
    document
      .querySelector("form")
      .addEventListener("submit", handleSubmit);

    document.querySelector("#form-status-success button").addEventListener("click", function(){
      document.querySelector("#form-status-success").classList.add("is-hidden")
    })
    document.querySelector("#form-status-error button").addEventListener("click", function(){
      document.querySelector("#form-status-error").classList.add("is-hidden")
    })

});