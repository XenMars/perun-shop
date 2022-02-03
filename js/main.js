$(document).ready(function() {
    $('.menu-parent-item').hover(function() {
        if(!$('.menu-parent-item').hasClass('openDone'))
        {
            $('.menu-parent-item').addClass('openDone');
            $('.nav-icon3').css("left", "410px");
        }
        else
        {
            $('.menu-parent-item').removeClass('openDone');
            $('.nav-icon3').css("left", "210px");
        }
    });
    $('.menu-child-item').hover(function() {
        if(!$('.menu-child-item').hasClass('openDone'))
        {
            $('.menu-child-item').addClass('openDone');
            $('.nav-icon3').css("left", "610px");
        }
        else
        {
            $('.menu-child-item').removeClass('openDone');
            $('.nav-icon3').css("left", "410px");
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {

	// получаем все элементы с классом pushmenu
	const pushmenu = document.getElementsByClassName('pushmenu');

	// получаем элемент с классом hidden-overley
	const hiddenOverley = document.querySelector('.hidden-overley');

	// отслеживаем клик клика по оверлею
	hiddenOverley.addEventListener('click', (e) => {
		e.currentTarget.classList.toggle('show');
		document.querySelector('.sidebar').classList.toggle('show');
		document.querySelector('.nav-icon3').classList.toggle('show');
		document.querySelector('body').classList.toggle('sidebar-opened');
		for( i=0; i < pushmenu.length; i++ ){
				pushmenu[i].classList.toggle('open');
		}
	});

	const pushmenuFunction = function() {
		document.querySelector('.pushmenu').classList.toggle('open');
		document.querySelector('.sidebar').classList.toggle('show');
		document.querySelector('.nav-icon3').classList.toggle('show');
		document.querySelector('.hidden-overley').classList.toggle('show');
		document.body.classList.toggle('sidebar-opened')
		
	};

	// Отслеживаем клики кнопок с классом pushmenu 
	for( i=0; i < pushmenu.length; i++ ){
		pushmenu[i].addEventListener('click', pushmenuFunction, false);
	}

	// Получим все родительские элементы в меню
	const sidebarAccordeon = document.querySelectorAll('.sidebar .menu-parent-item a:first-child');
	const accordeonFunction =  function() { 
		this.parentNode.querySelector('ul').classList.toggle('show');
		this.querySelector('i').classList.toggle('rotate');
	}
	// Отслеживаем клики родительских пунктов меню 
	for( i=0; i < sidebarAccordeon.length; i++ ){
		sidebarAccordeon[i].addEventListener('click', accordeonFunction, false);
	}
});



let flag = false;
$('.dropdown1').click(function () {
	if(!flag) {
		$('.dropdown1-element').slideDown();
	}else{
		$('.dropdown1-element').slideUp();
	}
	flag = !flag;
});

$('.dropdown2').click(function () {
	if(!flag) {
		$('.dropdown2-element').slideDown();
	}else{
		$('.dropdown2-element').slideUp();
	}
	flag = !flag;
});

$('.dropdown3').click(function () {
	if(!flag) {
		$('.dropdown3-element').slideDown();
	}else{
		$('.dropdown3-element').slideUp();
	}
	flag = !flag;
});






$(document).ready(function(){
	$('.slider').slick({
		autoplay: true,
		autoplaySpeed: 5000,
		dots: true,
		fade: true,
		cssEase: 'linear',
		zIndex: 9,
	});
});

$(document).ready(function(){
	$('.more-button').click(function(){
		$('.hidden-card').slideToggle(300, function(){
			if ($(this).is(':hidden')) {
				$('.more-button').html('Посмотреть еще новинки');
				$('.more-button').removeClass('open');
			} else {
				$('.more-button').html('Скрыть');
				$('.more-button').addClass('open');
			}							
		});
		return false;
	});
});


$(document).ready(function(){
	$('.read-more-button').click(function(){
		$('.seo-text').toggleClass('hide-text');	
		if ($('.seo-text').hasClass('hide-text')) {
			$('.read-more-button').html('Читать далее');
		} else {
			$('.read-more-button').html('Скрыть');
		}
		return false;
	});				
});

$(function() {      
  $(window).scroll(function(){
    if ($(this).scrollTop() > 200) {
      $('.scroll-to-top').fadeIn();
    } else {
      $('.scroll-to-top').fadeOut();
    }
  });     
 
  $('.scroll-to-top').click(function(){
    $("html, body").animate({ scrollTop: 0 }, 800);
    return false;
  });
});


$(document).ready(function(){
	$('.brands-slider-tablet').slick({
		centerMode: true,
		centerPadding: '60px',
		slidesToShow: 3,
		infinite: true,
	});
});

$(document).ready(function(){
	$('.search-mobile').click(function(){
  		$(".search-mobile-fullscreen").css("display", "flex");
	});
	$('.close-search-mobile').click(function(){
  $(".search-mobile-fullscreen").css("display", "none");
});
});
