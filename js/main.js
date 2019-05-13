// vars

const menuToggler = document.querySelector('.menu-toggler'),
	nav = document.querySelector('.nav-cont'),
	x = window.matchMedia("(max-width: 991px)");



// events

function addEvents() {
	menuToggler.addEventListener('click', toggleMenu);
}

addEvents();



// functions

function toggleMenu() {
	if (x.matches) {
		if (nav.style.display === '') {
			nav.style.display = 'block';
		} else {
			nav.style.display = '';
		}
	}
}