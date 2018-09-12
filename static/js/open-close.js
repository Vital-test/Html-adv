var navMain = document.querySelector('.header__menu');
var navToggle = document.querySelector('.header__menu-toggle');

navMain.classList.remove('header__menu--nojs');

navToggle.addEventListener('click', function () {
	if (navMain.classList.contains('header__menu--closed')) {
		navMain.classList.remove('header__menu--closed');
		navMain.classList.add('header__menu--opened');
	} else {
		navMain.classList.add('header__menu--closed');
		navMain.classList.remove('header__menu--opened');
	}
});