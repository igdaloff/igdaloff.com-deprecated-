(function() {
	//FADE IN EVERYTHING
	$('.wrapper').fadeIn(800);

	// RESPONSIVE HEADER
	$('h1').fitText(1.15);

	//'OFF' TILT ON HOVER
	$('h1').lettering();

	$('.char14, .char15').wrapAll('<div class="off-wrap">');

	$('h1').on('mouseenter mouseleave', function(){
		$('.off-wrap').toggleClass('off-tilt');
	});

	//SHOW TOP ARROW
/*
	$(window).scroll( function() {

		var $headerHeight =  $('header').height();
		var $topArrow	= $('#top');

		if ( $(window).scrollTop() > $headerHeight ) {
			$topArrow.css('bottom','0');
		} else {
			$topArrow.css('bottom','-2em');
		}

	});
*/

	//RESUME DROP-IN
	var $resume = $('.resume');
	var $nonResumeContent = $('.work');

	//Drop in resume
	$('#resume-link').on('click', function(e){
		e.stopPropagation();
		$resume.fadeIn(100).addClass('resume-drop');
		$nonResumeContent.hide();
		$('body').css('min-height','80em');
	});

	//Slide off resume
	$('body, #close-resume').on('click', function(){

		if($('.resume-drop').length <=0) {
			return;
		}

		$resume.addClass('resume-off');
		$nonResumeContent.show();
		$('body').css('height','auto');

		setTimeout( function(){
			$resume.removeClass('resume-drop').hide().removeClass('resume-off');
		}, 1000);
	});

	//Don't remove resume if clicked
	$resume.on('click', function(e){
		e.stopPropagation();
	});

	//WORK CAROUSEL
	$(window).load( function(){

		$(".work-carousel").responsiveSlides({
			auto					: false,
			pager					: false,
			nav						: true,
			navContainer	: ".work-nav",
			speed					: 800,
			namespace			: "work-carousel"
		});
	});

	//WORK CAROUSEL COUNTER
	$(window).load( function(){

		$('.work-nav a').on('click', function(){

			var $itemNumberContainer = $(this).parents('.desktop-carousel-nav').siblings('.work-item-count').find('.work-item-number');
			var $itemNumber = $itemNumberContainer.html();
			var $itemNumberTotal = $(this).parents('.desktop-carousel-nav').siblings('.work-item-count').find('.work-item-total').html();

			//Count up or down 1, depending on which nav is clicked
			if ( $(this).hasClass('next') ) {
				$itemNumber++;
			} else {
				$itemNumber--;
			}

			//Replace content with new incremented number
			$itemNumberContainer.html($itemNumber);

			if ($itemNumber > $itemNumberTotal) {
				$itemNumber = 1;
				$itemNumberContainer.html($itemNumber);
			} else if ($itemNumber < 1) {
				$itemNumber = $itemNumberTotal;
				$itemNumberContainer.html($itemNumberTotal);
			}
		});
	});
})();