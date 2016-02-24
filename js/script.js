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

	// меняем стиль инпута поиска
	$('.search-form__input').keyup(function(){
		if ($(this).val().length >= 3) {
			$(this).addClass('smart-open')
			$('.smart-result__block').fadeIn(400);
		} else {
			$(this).removeClass('smart-open');
			$('.smart-result__block').fadeOut(400);
		}
	});

	// показываем меню залогиненного пользователя
	$('.user__link-login').click(function(){
		$(this).next().toggleClass('active');
		$(this).toggleClass('active');
	});


});