'use strict';

// SCROLL-DOWN
$(document).on('click', function(event) {
	var eventTarget = event.target;
	if(!($(eventTarget).hasClass('header__link') || $(eventTarget).hasClass('burger-menu__link')
		|| $(eventTarget).hasClass('header__scroll-down') || $(eventTarget).hasClass('header__btn') || $(eventTarget).hasClass('footer__img-arrow-up'))) {
		return;
} else {
	if ($(eventTarget).hasClass('footer__img-arrow-up')) scroll(eventTarget.parentNode);
	scroll(eventTarget);
}

if($(eventTarget).hasClass('header__btn')) {
	$('#in-focus').focus();
}
});

function scroll (eventTarget) {
	$('html, body').animate({
		scrollTop: $($.attr(eventTarget, 'href')).offset().top
	}, 600);
	return false;
}
// SCROLL-DOWN

// BURGER-BUTTON
$('.burger-btn').on('click', function() {
	$(this).toggleClass('burger-btn_is-active');
	$('.burger-menu').fadeToggle('fast');
});
// BURGER-BUTTON

// GALLERY-SLIDER
function callSlider(arg) {
	$(arg).css('display', 'flex');
	$(arg + ' .gallery__slider').slick({
		appendArrows: $(arg + ' .gallery__arrows'),
		prevArrow: '<div class="gallery__wrapper gallery__wrapper_prev"><div class="gallery__arrow gallery__arrow_prev"></div></div>',
		nextArrow: '<div class="gallery__wrapper gallery__wrapper_next"><div class="gallery__arrow gallery__arrow_next"></div></div>',
		// autoplay: true,
		// autoplaySpeed: 2000,
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: false,
	});
}

function closeSlider(arg) {
	$(arg).css('display', 'none');
	$(arg + ' .gallery__slider').slick('unslick');
}

$(document).keydown(function(event) {
	if(event.keyCode == 27) {
		$('.gallery').css('display', 'none');
	}
});
// GALLERY-SLIDER


