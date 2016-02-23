$(function(){

	// вызов фенсибокса
	$('.fancybox').fancybox({
		'showCloseButton': false
	});

	// закрываем модальное
	$('.modal__close').click(function(){
		$.fancybox.close();
	});

	// слайдер
	$('.slider__block').bxSlider({
		mode: 'fade',
		controls: false,
		auto: true
	});



});