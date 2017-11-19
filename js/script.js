$(document).ready(function(){
	// Set Options
	var speed = 500;			// Fade hastighet
	var autoswitch = true;		// Auto slider på
	var autoswitch_speed = 4000	// Auto slider hastighet

	// sätta active class till första bilden
	$('.slide').first().addClass('active');

	// Dölja alla bilder
	$('.slide').hide();

	// Visa första bilden enbart med classen active
	$('.active').show();

	// Nästa bild
	$('#next').on('click', nextSlide);

	// Föregående bild
	$('#prev').on('click', prevSlide);

	// Auto Slider på
	if(autoswitch == true){
		setInterval(nextSlide,autoswitch_speed);
	}

	// Skifta till nästa bild
	function nextSlide(){
		$('.active').removeClass('active').addClass('oldActive'); // ta bort ative class för att dölja nuvarande bild och sätter ny class

		if($('.oldActive').is(':last-child')){ // om sista bilden har oldActive då ska vi ge första bilden active class
			$('.slide').first().addClass('active');
		} else {
			$('.oldActive').next().addClass('active'); // Annars ger vi active class till nästa bild
		}

		$('.oldActive').removeClass('oldActive'); // När allt det är gort tar vi bort oldActive och kör från början
		$('.slide').fadeOut(speed); // effekter
		$('.active').fadeIn(speed);
	}

	// Skifta till föregående bild
	function prevSlide(){
		$('.active').removeClass('active').addClass('oldActive');
		if($('.oldActive').is(':first-child')){
			$('.slide').last().addClass('active');
		} else {
			$('.oldActive').prev().addClass('active');
		}
		$('.oldActive').removeClass('oldActive');
		$('.slide').fadeOut(speed);
		$('.active').fadeIn(speed);
	}
});
