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
			$('.smart-result__block').show();
		} else {
			$(this).removeClass('smart-open');
			$('.smart-result__block').hide();
		}
	});

	// показываем меню залогиненного пользователя
	$('.user__link-login').click(function(){
		$('.user__drop-down').toggleClass('active');
		$(this).toggleClass('active');
	});

	// сворачиваем меню пользователя по клику вне его области
	// $(document).mouseup(function(e) {
	// 	var container = $(".user__drop-down");
	// 	if (container.has(e.target).length === 0) {
	// 		$('.user__link-login').removeClass('active');
	// 		container.removeClass('active');
	// 	}
	// });

	// закрываем меню по ESC
	$(document).keyup(function(d) {
		if (d.keyCode == 27) {
			$('.user__drop-down, .user__link-login').removeClass('active');
		}
	});


});