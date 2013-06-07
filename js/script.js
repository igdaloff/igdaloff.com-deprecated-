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

$('.work-nav').on('click', function(){

	var itemNumber = $(this).find('.work-item-number').html();
	var itemNumberTotal = $(this).find('.work-item-total').html();

	console.log('the number is ' + itemNumber);

	itemNumber++;

	$(this).find('.work-item-number').html(itemNumber);

	if (itemNumber > itemNumberTotal) {
		itemNumber = 1;
		$(this).find('.work-item-number').html(itemNumber);
	}

});
