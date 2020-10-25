$(function () {

	$('.banner-section__slider').slick({
		dots: true,
		prevArrow: '<button class="banner-section__slider-btn banner-section__slider-btnprev"><img src="images/arrow-left.svg" alt=""></button>',
		nextArrow: '<button class="banner-section__slider-btn banner-section__slider-btnnext"><img src="images/arrow-right.svg" alt=""></button>',
		autoplay: true,
		infinite: true,
		responsive: [
			{
				breakpoint: 969,
				settings: {
					arrows: false,
				}
    },
  ]
	});


	$('.tab').on('click', function (e) { //при клике
		e.preventDefault(); // убрать стандарное действие кнопки/ссылки

		$($(this).siblings()).removeClass('tab--active'); //убрать у ВСЕХ табов класс активен
		$($(this).parent().siblings().find('div')).removeClass('tabs-content--active'); //убрать у ВСЕГО контента класс активен

		$(this).addClass('tab--active'); //добавить ЭТОМУ табу класс активен
		$($(this).attr('href')).addClass('tabs-content--active') //обращение к контенту на который нажимаю, и добавление "контент активен"

	});


	$('.products-item__favorite').on('click', function () {
		$(this).toggleClass('products-item__favorite--active')
	});

	$('.products-slider').slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		prevArrow: '<button class="products-slider__slider-btn products-slider__slider-btnprev"><img src="images/arrow-black-left.svg" alt=""></button>',
		nextArrow: '<button class="products-slider__slider-btn products-slider__slider-btnnext"><img src="images/arrow-black-right.svg" alt=""></button>',

		responsive: [
			{
				breakpoint: 1301,
				settings: {
					arrows: false,
					dots: true,
				}
			},
			{
				breakpoint: 1201,
				settings: {
					slidesToShow: 3,
					arrows: false,
					dots: true,
				}
			},
			{
				breakpoint: 870,
				settings: {
					slidesToShow: 2,
					arrows: false,
					dots: true,
				}
			},
			{
				breakpoint: 591,
				settings: {
					slidesToShow: 1,
					arrows: false,
					dots: true,
				}
			}
		]
	});

	$('.filter-style').styler();

	$('.filter__item-drop').on('click', function () {
		$(this).toggleClass('filter__item-drop--active');
		$(this).next().slideToggle(200);
	});

	$(".js-range-slider").ionRangeSlider({
		grid: false,
		type: "double",
		min: 100000,
		max: 500000,
	});

	$('.filter__extra').on('click', function () {
		$(this).toggleClass('filter__extra--active');
		$(this).next().slideToggle(200);
	});

	$('.catalog__filter-btngrid').on('click', function () {
		$(this).addClass('catalog__filter--active');
		$('.catalog__filter-btnline').removeClass('catalog__filter--active');
		$('.products-item__wrapper').removeClass('products-item__wrapper--line')
	});

	$('.catalog__filter-btnline').on('click', function () {
		$(this).addClass('catalog__filter--active');
		$('.catalog__filter-btngrid').removeClass('catalog__filter--active');
		$('.products-item__wrapper').addClass('products-item__wrapper--line')
	});

	$(".rate-yo").rateYo({
		ratedFill: "#1C62CD",
		spacing: "7px",
		normalFill: "#c4c4c4"
	});

	$('.menu__btn').on('click', function () {
		$('.menu-mobile__list').toggleClass('menu-mobile__list--active');
		$('.menu__btn').toggleClass('menu__btn--active');
	});

	$('.footer__top-title').on('click', function () {
		$(this).next().slideToggle();
	});

	$('.footer__topdrop').on('click', function () {
		$(this).toggleClass('footer__topdrop--active');
	});

	$('.aside-btn').on('click', function () {
		$(this).next().slideToggle();
	});

});
