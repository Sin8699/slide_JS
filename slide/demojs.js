const slide = document.querySelector('#slide');
const slideImg = document.querySelector('.slide img');
//Buttons
const preBtn = document.querySelector('#pre');
const nextBtn = document.querySelector('#next');

//Counter
let counter = 0;
const size = 200;


preBtn.addEventListener('click', () => {
    slide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    slide.style.transform = 'translateX(' + (-size * counter) + 'px)';


});
nextBtn.addEventListener('click', () => {
    slide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    slide.style.transform = 'translateX(' + (-size * counter) + 'px)';

})

slide.addEventListener('transitionend', () => {
    console.log(counter);
    if (counter < 0) {
        slide.style.transition = "none";
        counter = 2;
        slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    if (counter == 3) {
        slide.style.transition = "none";
        counter = 0;
        slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
})
