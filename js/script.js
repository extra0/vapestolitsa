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

	// маска на телефон
	$('.mask').mask('+7 (999) 999-99-99');

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

	// универсальный триггер слайдинга
	$('[toggle-trigger]').click(function(){
		$(this).toggleClass('active');
		$(this).parents('[toggle-parent]').find('[toggle-target]').slideToggle(400);
	});

	// ф-я разбивки на разряды
	function numberWithCommas(x) { return x.toString().replace(/(\d{1,3}(?=(\d{3})+(?:\.\d|\b)))/g, "\$1 ");}
	
	$('[replaced-number]').each(function(){	$(this).html(numberWithCommas($(this).html()));	});

	// только цифры в инпутах
	$('[only-numbers]').bind("change keyup input click", function() {
		if (this.value.match(/[^0-9\.]/g, '')) {
		    this.value = this.value.replace(/[^0-9]/g, '');
		}
	});

	// катоснмый селект
	$('.filter__sort-select').selectmenu({
		width: 195
	});

});