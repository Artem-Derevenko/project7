$(document).ready(function() {


	$(".slider-header").owlCarousel({

		items: 1,
		loop: true,
		autoplay: true,
		autoplaySpeed: 1500,
		navSpeed: 1500,
		navText: "",
		// animateOut: 'fadeOut',
	  nav: true

	});

	//прокрутка перчинок 1
    $(window).scroll(function(){

        var bo = $("body").scrollTop();
        var pos = $(".advantages").offset().top + 250;

    	if ( bo > pos ) {
    		$(".pepper-1").addClass('active');
    		$(".pepper-1 img").addClass('active');
    	}

    });

    //прокрутка перчинок 2
    $(window).scroll(function(){

        var bo = $("body").scrollTop();
        var pos = $(".advantages").offset().top +150;

    	if ( bo > pos ) {
    		$(".pepper-2").addClass('active');
    		$(".pepper-2 img").addClass('active');
    	}

    });


    //вкладки с продукцией
    $("ul.tabs").jTabs({content: ".tabs_content", animate: true}); 
    $("ul.subtabs").jTabs({content: ".subtabs_content", animate: true}); 
    // $("ul.tabs-sale").jTabs({content: ".tabs-sale-content", animate: true}); 

    //перемещение мышкой
    $('.bazilik, .shrimp, .cucumber2, .cucumber3').drag();

    //прокрутка навверх, по клику на кнопку "Наверх"
    $('.top').click(function () { // При клике по кнопке "Наверх" попадаем в эту функцию
      /* Плавная прокрутка наверх */
      $('body, html').animate({
        scrollTop: 0
      }, 800);
    });

    //промотка при клике на якорь
    $('.about-anchor').click(function () { // При клике по кнопке "Наверх" попадаем в эту функцию
      /* Плавная прокрутка наверх */
      var anchorBlock = $(this).data('id-block');
      var blockPosition = $(anchorBlock).offset().top - 110;
      $('body, html').animate({
        scrollTop: blockPosition
      }, 600);
    });

    //слайдер с фасовкой продукции на странице Соусы и Майонезы
    var sliderHeight = $('.packaging').height() - $('.slider-nav').height();
    $( '#packaging-slider' ).sliderPro({
      width: 890,
      autoHeight: true,
      fade: true,
      arrows: true,
      buttons: false,
      fullScreen: false,
      shuffle: true,
      // smallSize: 500,
      // mediumSize: 1000,
      // largeSize: 3000,
      thumbnailArrows: true,
      autoplay: false
    });

    // показ/скрытие меню 
    $('.toogle').on('click', function() {
        $(".wrapp-menu").fadeToggle(600);
        $(this).toggleClass('click');
        return false;
    });

    // показ формы СВЯЗАТЬСЯ 
    $('.call').on('click', function() {
        $(".form-popup").fadeIn(300);
    });

    // скрытие формы СВЯЗАТЬСЯ 
    $('.close-form').on('click', function() {
        $(".form-popup").fadeOut(300);
    });

    // показ попапа с акциями на странице Акции сети для мобильных 
    $('.all-shares').on('click', function() {
        $(".tabs-sale-wrapp").fadeIn(300);
        $('.all-shares').addClass('close');
        $('.title-shares, .shares-item-section .block-title').addClass('visible');
        $('.all-shares-close').addClass('visible');
    });

    // скрытие попапа с акциями на странице Акции сети для мобильных 
    $('.all-shares-close').on('click', function() {
        $(".tabs-sale-wrapp").fadeOut(300);
        $('.all-shares').removeClass('close');
        $('.title-shares, .shares-item-section .block-title').removeClass('visible');
        $('.all-shares-close').removeClass('visible');
    });

});