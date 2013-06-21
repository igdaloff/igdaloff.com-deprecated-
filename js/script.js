//FADE IN EVERYTHING
$('.wrapper').fadeIn(800);

// RESPONSIVE HEADER
$('h1').fitText(1.25);

//'OFF' TILT ON HOVER
$('h1').lettering();

$('.char14, .char15').wrapAll('<div class="off-wrap">');

$('h1').hover( function(){
	$('.off-wrap').toggleClass('off-tilt');

});

//RESUME DROP-IN
$('body').on('click', function(){
	$('.resume').css('left','-100%');
	$('.work, header').css('opacity', '1');
	$('.about').show();

	setTimeout( function(){
		$('.resume').css('left','10%').hide().removeClass('resume-drop');
	}, 400);
});

$('#resume-link, .resume').click( function(e){
	$('.resume').fadeIn(300).addClass('resume-drop');
	$('.about').fadeOut(100);
	e.stopPropagation();

	$('.work, header').css('opacity', '0');
});

//SOCIAL DROPDOWN
var $social = $('.social');

$social.click( function(){
	$('.social-links').slideToggle();
	$(this).toggleClass('social-link-active');
	event.preventDefault();
});

//WORK CAROUSEL
$(window).load( function(){
  $(".work-carousel").responsiveSlides({
    auto 				 : false,
    pager 			 : false,
    nav 				 : true,
    navContainer : ".work-nav",
    speed				 : 800,
    namespace		 : "work-carousel"
  });
});

//WORK CAROUSEL COUNTER
$(window).load( function(){

	$('.work-nav .next').on('click', function(){

		var $itemNumberContainer = $(this).siblings('.work-item-count').find('.work-item-number');
		var $itemNumber = $itemNumberContainer.html();
		var $itemNumberTotal = $(this).siblings('.work-item-count').find('.work-item-total').html();

		$itemNumber++;

		$itemNumberContainer.html($itemNumber);

		if ($itemNumber > $itemNumberTotal) {
			$itemNumber = 1;
			$itemNumberContainer.html($itemNumber);
		}
	});

	$('.work-nav .prev').on('click', function(){

		var $itemNumberContainer = $(this).siblings('.work-item-count').find('.work-item-number');
		var $itemNumber = $itemNumberContainer.html();
		var $itemNumberTotal = $(this).siblings('.work-item-count').find('.work-item-total').html();

		$itemNumber--;

		$itemNumberContainer.html($itemNumber);

		if ($itemNumber < 1) {
			$itemNumber = $itemNumberTotal;
			$itemNumberContainer.html($itemNumberTotal);
		}
	});
})