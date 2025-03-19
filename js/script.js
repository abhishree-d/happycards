let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar')

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}



window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
};



var swiper = new Swiper(".home-slider", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 3,
    spaceBetween: 10,
    coverflowEffect: {
      rotate: 10,
      stretch: 50,
      depth: 150,
      modifier: 1.5,
      slideShadows: true,
    },


    loop:true,
    autoplay:{
        delay: 1200,
        disableOnInteraction: false,
    }
  });

  var swiper = new Swiper(".review-slider" ,{
    slidesPerView: 1,
    grabCursor: true,
    loop:true,
    spaceBetween:10,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        700: {
            slidesPerView: 2,
        },
        1050: {
            slidesPerView: 3,
        },
    },
    autoplay:{
        delay: 2500,
        disableOnInteraction: false,
    }
  });



  

 