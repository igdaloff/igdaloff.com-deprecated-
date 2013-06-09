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