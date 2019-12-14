

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

// // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
// let vh = window.innerHeight * 0.01;
// // Then we set the value in the --vh custom property to the root of the document
// document.documentElement.style.setProperty('--vh', `${vh}px`);

// // We listen to the resize event
// window.addEventListener('resize', () => {
//     // We execute the same script as before
//     let vh = window.innerHeight * 0.01;
//     document.documentElement.style.setProperty('--vh', `${vh}px`);
//   });

