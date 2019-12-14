//vh
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);
// We listen to the resize event
window.addEventListener('resize', () => {
    // We execute the same script as before
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  });

//smooth scroll

var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 1700
});


//modal
const button = document.querySelectorAll('.cta');
const modalBg = document.querySelector('.modal-bg');
const modalClose = document.querySelector('.modal-close');
const modalContent = document.querySelector('.modal');

button.forEach((button)=>{
   button.addEventListener('click', ()=>{
       modalBg.classList.add('modal-visible');
       document.querySelector('body').style.position = 'fixed';
       modalContent.style.animation = 'modalanimation 400ms ease-in';
   })
})

modalClose.addEventListener('click', ()=>{
    modalBg.classList.remove('modal-visible');
    document.querySelector('body').style.position = 'static';
    modalContent.style.animation = '';
})


$(document).ready(function () {
    'use strict';
    
    var orientationChange = function () {
      var $element = $('section');
      $element.css('height', '100vh'); // Change this to your own original vh value.
      $element.css('height', $element.height() + 'px');
    };
  
    var s = screen;
    var o = s.orientation || s.msOrientation || s.mozOrientation;
    o.addEventListener('change', function () {
      setTimeout(function () {
        orientationChange();
      }, 250);
    }, false);
    orientationChange();
  });

