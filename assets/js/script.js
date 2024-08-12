
$(document).ready(function(){
    $('.feedback-slider').owlCarousel({
        loop: false,
        margin: 10,
        nav: true,
        items: 1,
        autoplay: true,
        navText: ["<i class = 'fas fa-arrow-left'></i>", "<i class = 'fas fa-arrow-right'></i>"]
    });

    // stop animation on resize
    let resizeTimer;
    $(window).resize(function(){
        $(document.body).addClass('resize-animation-stopper');
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            $(document.body).removeClass('resize-animation-stopper');
        }, 400);
    });

    $('.navbar-show-btn').click(function(){
        $('.navbar-box').addClass('navbar-box-show');
    });

    $('.navbar-hide-btn').click(function(){
        $('.navbar-box').removeClass("navbar-box-show");
    })
});


// Slider
const slides = document.querySelector('.slides');
const slide = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.slider-dot');

let index = 0;
const totalSlides = slide.length;

function updateSlide() {
  slides.style.transform = `translateX(${-index * 100}%)`;

  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });
}

function nextSlide() {
  index = (index + 1) % totalSlides;
  updateSlide();
}

dots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    index = i;
    updateSlide();
  });
});

setInterval(nextSlide, 3000); // Cambia el slide cada 3 segundos (ajusta según tu preferencia)

updateSlide(); // Inicia con el primer slide activo
