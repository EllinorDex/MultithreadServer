$(document).ready(function() {
	    $('.close_window, .close_w').click(function() {
    	        $('html, body').animate({
	            scrollTop: $('#similar').offset().top - 20
	    }, 600);
	    });
	function li_line() {
		var index_li =  $('.author_satbar li:last').index();
		var last_li = index_li % 2;
		if(last_li == 0){
			$('.author_satbar li:last()').after('<div class="line_li">');
		}
		$('.author_satbar li:nth-child(2n)').after('<div class="line_li">');
	}
	li_line();


	$('.mobile_menu').click(function(event) {
		$('.mobile_nav').slideToggle(400);
	});

	var offset_ul;
	$(window).load(function() {
		offset_ul = $('.saitbar .fixed_bar').offset();
	});


	$(window).scroll(function()
	{
		if ($(this).scrollTop() > offset_ul.top){
				$('.saitbar .fixed_bar').addClass('position')
			}
		else{
			$('.saitbar .fixed_bar').removeClass('position')
		}
	});


	/*********Select*********/
	$('.select').click(function(event) {
		$(this).find('.option').slideToggle(0)
	});

	$('.select').each(function() {
		var text_sel = $(this).find('.option div').first().text();
		text_sel = $.trim(text_sel);
		$(this).find('input').attr({value: text_sel});
	});

	$('.select').hover(function() {
	}, function() {
		$(this).find('.option').fadeOut(300)
	});
	$('.select .option div').click(function(event) {
		var text_div = $(this).text();
		text_div = $.trim(text_div);

		$(this).parent('.option').parent('.select').find('input').attr({value: text_div});
	});
	/*********Select*********/
	/*********modal window*********/
	$('.regestration').click(function(event) {
		$('body').addClass('overflow');
		$('.modal_window').show();
		$('.window_block').slideDown(500);

	});

	$('.close_window, .close_w').click(function(event) {
		$('.window_block').slideUp(500);
		setTimeout(function(){
			$('.modal_window').hide();
			$('body').removeClass('overflow');
		}, 600);
	});
	/*********modal window*********/


	$('.download_window').click(function(event) {
		$('body').addClass('overflow');
		$('.modal_window').show();
		$('.window_block').slideDown(500);
	});




});