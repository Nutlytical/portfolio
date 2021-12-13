/* <!--==================== NAV ====================--> */
const navToggle = document.getElementById('nav__toggle');
const navMenu = document.getElementById('nav__menu');

navToggle.addEventListener('click', () => {
	navMenu.classList.toggle('toggle');
});

/* <!--==================== NAV ACTIVE ====================--> */
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
	sections.forEach((current) => {
		const sectionHeight = current.offsetHeight;
		const sectionTop = current.offsetTop - 50;
		const sectionId = current.getAttribute('id');

		if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
			document
				.querySelector('.nav__menu a[href*=' + sectionId + ']')
				.classList.add('nav-active');
		} else {
			document
				.querySelector('.nav__menu a[href*=' + sectionId + ']')
				.classList.remove('nav-active');
		}
	});
});

/* <!--==================== THEME ====================--> */
const iconEl = document.getElementById('icon__theme');

const darkTheme = 'darkTheme';
const iconTheme = 'bx-sun';

const getCurrentTheme = () =>
	document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () =>
	iconEl.classList.contains(iconTheme) ? 'sun' : 'moon';

const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
iconEl.classList[selectedIcon === 'sun' ? 'add' : 'remove'](iconTheme);

iconEl.addEventListener('click', () => {
	document.body.classList.toggle(darkTheme);
	iconEl.classList.toggle(iconTheme);

	localStorage.setItem('selected-theme', getCurrentTheme());
	localStorage.setItem('selected-icon', getCurrentIcon());
});

/* <!--==================== SKILLS ====================--> */
const skillContent = document.querySelectorAll('.skill__content');

skillContent.forEach((e, i) => {
	e.addEventListener('click', () => {
		e.className === 'skill__content skill__close'
			? (skillContent[i].className = 'skill__content skill__open')
			: (skillContent[i].className = 'skill__content skill__close');
	});
});

/* <!--==================== SKILLS MODEL ====================--> */
const modelEl = document.querySelectorAll('.skill__model');
const modelImage = document.querySelectorAll('.model');
const modelClose = document.querySelectorAll('.skill__model__close');

modelImage.forEach((e, i) => {
	e.addEventListener('click', () => {
		modelEl[i].classList.add('skill__active-model');
	});
});

modelClose.forEach((e, i) => {
	e.addEventListener('click', () => {
		modelEl[i].classList.remove('skill__active-model');
	});
});

modelEl.forEach((e, i) => {
	window.addEventListener('scroll', () => {
		modelEl[i].classList.remove('skill__active-model');
	});
});

/* <!--==================== VIDEO ====================--> */
const videoFile = document.getElementById('video-file'),
	videoButton = document.getElementById('video-button'),
	videoIcon = document.getElementById('video-icon');

function playPause() {
	if (videoFile.paused) {
		videoFile.play();
		videoIcon.classList.add('bx-pause');
		videoIcon.classList.remove('bx-play');
	} else {
		videoFile.pause();
		videoIcon.classList.remove('bx-pause');
		videoIcon.classList.add('bx-play');
	}
}
videoButton.addEventListener('click', playPause);

function finalVideo() {
	videoIcon.classList.remove('bx-pause');
	videoIcon.classList.add('bx-play');
}
videoFile.addEventListener('ended', finalVideo);

/* <!--==================== SCROLL UP ====================--> */

window.addEventListener('scroll', () => {
	const scrollUp = document.getElementById('scroll-up');
	window.scrollY >= 200
		? scrollUp.classList.add('scroll-up--show')
		: scrollUp.classList.remove('scroll-up--show');
});
