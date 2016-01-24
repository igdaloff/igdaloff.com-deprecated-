(function() {

	//'OFF' TILT ON HOVER
	$('.my-name').lettering();

	$('.char13, .char14, .char15').wrapAll('<div class="off-wrap">');

	$('.my-name').on('mouseenter mouseleave focus blur', function(){
		$('.off-wrap').toggleClass('off-tilt');
	});



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

})();