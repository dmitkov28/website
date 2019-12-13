//vh fix
(function() {
    $(function() {
      var onResize = function() {
        //var docHeight = window.innerHeight;
        var docHeight = $(window).outerHeight();
        $(".hero").css({ height: docHeight });
        $(".hero").html(docHeight);
      };
      $(window).on("resize", onResize);
      onResize();
    });
  })();
  


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
