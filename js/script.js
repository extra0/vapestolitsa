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
	$(document).mouseup(function(e) {
		var container = $("[click-hide]");
		if (container.has(e.target).length === 0) {
			$('.user__link-login').removeClass('active');
			$('.search-form__input').removeClass('smart-open');
			$('.smart-result__block').hide();
			container.removeClass('active');
		}
	});

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

	// показываем скрытые пункты в фильтре
	$('.filter__more-link').click(function(){
		if ($(this).hasClass('active')) {
			$(this).removeClass('active');
			$(this).prev().removeClass('active');
			$(this).find('.filter__word').html('Показать');
		} else {
			$(this).addClass('active');
			$(this).prev().addClass('active');
			$(this).find('.filter__word').html('Скрыть');
		}
	});

	// --------- КОРЗИНА

	function cart() {
		var sum = 0;

		// просчитываем общую сумму
		$('[item-total-cost]').each(function(){
			sum += parseInt($(this).attr('item-total-cost'));
		});

		// заносим данные
		$('[item-total]').html(sum);

		// корректируем вывод по разрядам числа
		$('[replaced-number]').each(function(){	$(this).html(numberWithCommas($(this).html()));	});
	}

	// удаляем позицию
	$('[item-delete]').click(function(){
		$(this).parents('[item-parent]').remove();
		cart();
	});

	// меняем значение кнопками
	$('[item-changer]').click(function(){
		var itemParent = $(this).parents('[item-parent]'),
		    input = itemParent.find('[item-val]'),
			totalCost = itemParent.find('[item-total-cost]'),
			itemCost = itemParent.find('[item-cost]');

		input.val(parseInt(input.val()) + parseInt($(this).attr('data-val')));

		if (input.val() < 1) { // не даем опустится ниже 0 значению в инпуте
			input.val('1');
		}
		if (input.val() > parseInt(input.attr('item-max-val'))) { // проверяем на максимально допутисмое значение в инпуте
			input.val(input.attr('item-max-val'));
		}

		totalCost.attr('item-total-cost', parseInt(input.val()) * parseInt(itemCost.attr('item-cost')));
		totalCost.html(totalCost.attr('item-total-cost'));

		cart();
	});

	cart();

});