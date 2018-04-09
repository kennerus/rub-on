$(function() {
	$(document).on('click', '.js_openLocationModal', function() {
		$('.js_locationModal').fadeIn(400).css('display', 'flex');
	});

	$(document).on('click', '.js_modalClose', function() {
		$('.modal').fadeOut(400);
	});

	$(document).on('mouseenter', '.js_showCategoryList', function() {
		$(this).find('.header__dropdown').slideDown(0).css('display', 'flex');
		$(this).find('.header__link_category').addClass('header__link_hover');
	});

	$(document).on('mouseleave', '.js_showCategoryList', function() {
		$(this).find('.header__dropdown').slideUp(0);
		$(this).find('.header__link_category').removeClass('header__link_hover');
	});

	$(document).on('click', '.js_nextCategories', function() {
		$('.header__categories-wrap').toggleClass('header__categories-wrap_move');
		$(this).toggleClass('rotateCategoryBtn');
	})
})
