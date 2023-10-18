const slides = [
	{
		"image": "./assets/images/slideshow/slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "./assets/images/slideshow/slide2.jpg.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "./assets/images/slideshow/slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "./assets/images/slideshow/slide4.jpg",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
];

// const dots [
// 	{ "dot"},
// 	{ "dot"},
// 	{ "dot"},
// 	{ "dot"}
// ]
// const items = document.querySelectorAll('.banner-img')
// const nbSlides = slides.length
// // const nbDots = dots.length
// const suivant = document.querySelector('.arrow_right')
// const precedent = document.querySelector('.arrow_left')
// let compteur = 0


// // console.log(items)

// function slideSuivante() {
// 	// items[compteur].classList.remove('slide')
// 	img.src = slides[compteur].image


// 	if (compteur < nbSlides - 1) {
// 		compteur++
// 	}
// 	else {
// 		compteur = 0
// 	}

// 	// img.src = slides[compteur].image
// 	// items[compteur].classList.add('slide')
// }

// function slidePrecedent() {
// 	img.src = slides[compteur].image

// 	if (compteur > 0) {
// 		compteur--
// 	}
// 	else {
// 		compteur = 3
// 	}

// 	// items[compteur].classList.add('slide')
// }


// function dotSuivant() {
// 	items[compteur].classList.remove('.dot_selected')

// 	if (compteur < nbDots - 1) {
// 		compteur++
// 	}
// 	else {
// 		compteur = 0
// 	}

// 	items[compteur].classList.add('.dot_selected')
// }

// function dotPrecedent() {
// 	items[compteur].classList.remove('.dot_selected')

// 	if (compteur > 0) {
// 		compteur--
// 	}
// 	else {
// 		compteur = 3
// 	}

// 	items[compteur].classList.add('.dot_selected')
// }

// suivant.addEventListener('click', slideSuivante)
// suivant.addEventListener('click', dotSuivant)

// precedent.addEventListener('click', slidePrecedent)
// precedent.addEventListener('click', dotPrecedent)

// // items[compteur].classList.add()

// // console.log(slides);

// // let monBouton = document.querySelectorByld("monBouton")
// // monBouton.addEnventListener("Click", () => {
// // 	let header = document.querySelector("header")

// // }

// // let banner = document.querySelectorById("banner")
// let flecheDroite = document.getElementById("banner")
// banner.addEventListener("Click", () => {
// 	i = i + 1
// })



// class banner {


// 	// 	@param { HTMLElement } element
// 	// @param { Object } Options
// 	// @param { Object } options.slidesToScroll Nombre d'éléments a faire défiler
// 	// @param { Object } options.slidesVisible Nombre d'éléments visible dans un slide




// 	constructor(element, option = {}) {
// 		this.element = element
// 		this.options = object.assign({}, {
// 			slidesToScroll: 1
// 	    slidesVisible: 1
// 		}, options)
// 		debugger
// 	}

// }


// Carousel(document.querySelector('#banner'), {
// 	slidesToScroll: 4
// 	slidesVisible: 1
// })


// let dot = {

// }

// for (let compteur = 0; compteur < 3; compteur = compteur + 1)


// let slides = 


const leftArrow = document.querySelector('.arrow');
// const rightArrow = document.querySelector('.arrow_right');
// const dots = document.querySelector('.dots');
// const img = document.querySelector('.banner-img');
// let positionSlide = 0;
// const txt = document.querySelector('.banner-txt');

// leftArrow.addEventListener('click', function () {
// 	positionSlide--;
// 	if (positionSlide === -1) {
// 		positionSlide = slides.length - 1;
// 	}
// 	img.src = slides[positionSlide].image;
// 	txt.innerHTML = slides[positionSlide].tagLine;
// 	console.log('On clique sur la flèche de gauche');
// 	updateDots();
// });

// rightArrow.addEventListener('click', () => {
// 	positionSlide++;
// 	if (positionSlide === slides.length) {
// 		positionSlide = 0;
// 	}
// 	img.src = slides[positionSlide].image;
// 	txt.innerHTML = slides[positionSlide].tagLine;
// 	console.log('On clique sur la flèche de droite');
// 	updateDots();
// });

// for (let i = 0; i < slides.length; i++) {
// 	const newDot = document.createElement('div');
// 	newDot.classList = 'dot';
// 	dots.appendChild(newDot);
// 	newDot.addEventListener('click', function () {
// 		positionSlide = i;
// 		img.src = slides[positionSlide].image;
// 		txt.innerHTML = slides[positionSlide].tagLine;
// 		updateDots();
// 	});
// }

// let dot = document.querySelectorAll('.dot');
// dot[0].classList.add('dot_selected');

// function updateDots() {
// 	for (let i = 0; i < dot.length; i++) {
// 		if (i === positionSlide) {
// 			dot[i].classList.add('dot_selected');
// 		} else {
// 			dot[i].classList.remove('dot_selected');
// 		}
// 	}
// }

leftArrow.addEventListener('click', () => {
	console.log("5")
})

console.log(leftArrow)