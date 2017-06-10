let currentNumber = 1

// Slide 1
function showSlide1() {
   document.querySelector('.show').classList.remove('show');
   document.querySelector( '#slide1' ).classList.add('show');
}

document.querySelector('#pin1').addEventListener('click', showSlide1);

// Slide 2
function showSlide2() {
   document.querySelector('.show').classList.remove('show');
   document.querySelector( '#slide2' ).classList.add('show');
}

document.querySelector('#pin2').addEventListener('click', showSlide2);

// Slide 3
function showSlide3() {
   document.querySelector('.show').classList.remove('show');
   document.querySelector( '#slide3' ).classList.add('show');
}

document.querySelector('#pin3').addEventListener('click', showSlide3);

// Slide 4
function showSlide4() {
   document.querySelector('.show').classList.remove('show');
   document.querySelector( '#slide4' ).classList.add('show');
}

document.querySelector('#pin4').addEventListener('click', showSlide4);

// Slide 5
function showSlide5() {
   document.querySelector('.show').classList.remove('show');
   document.querySelector( '#slide5' ).classList.add('show');
}

document.querySelector('#pin5').addEventListener('click', showSlide5);

function showNextSlide() {
	document.querySelector('.show').classList.remove('show');
}

document.querySelector('#next').addEventListener('click', showNextSlide)