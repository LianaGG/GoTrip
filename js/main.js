//Carousel 

$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
  });

  var owl = $('.owl-carousel');
    owl.owlCarousel({
    center: true, 
    loop: true,
    margin: 20,
   // startposition: 1, //если нет loop
    item:3,
    responsive:{
        850:{
            startPositions: 1,
            items:3,
        },
        1000:{
            margin:20,
            items:3,
        },
        1200:{
            margin:30,
        }
    }
});
$('.slider_bnt--prev').click(function() {
    owl.trigger('prev.owl.carousel');
})
$('.slider_bnt--next').click(function() {
    owl.trigger('next.owl.carousel');
})

//Nav icon
const navBtn=document.querySelector('.nav_toggle');
const nav=document.querySelector('.nav');
const menuicon=document.querySelector('.menu-icon');

navBtn.onclick = function(){
    nav.classList.toggle('nav-mobile')
    menuicon.classList.toggle('menu-icon-active');
}