gsap.to('#header1',{
  scrollTrigger : {
    scrub: 1
},
x: -500
});

gsap.to('#header2',{
  scrollTrigger : {
    scrub: 1
},
x: 1000
});

var swiper = new Swiper('.swiper', {
    spaceBetween: 20,
    grabCursor:true,
    loop:true,

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    mousewheel: true,
    keyboard: true,
  });

  tippy('[data-tippy-content]');

  AOS.init();