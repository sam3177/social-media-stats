$('span.slider.round').on('click', function () {
	if ($('body').css('background-color') === 'rgb(30, 32, 42)') {
		$('body').css('background', 'hsl(0, 0%, 100%)');
		$('.jumbotron').css('background', 'hsl(225, 100%, 98%)');
		$('h1').css('color', 'hsl(230, 17%, 14%)');
		$('p.card-text').css('color', 'hsl(228, 12%, 44%)');
		$('.card').css('background', 'hsl(227, 47%, 96%)');
		$('.slider').css('background', 'hsl(230, 22%, 74%)');
		$('.slider::before').css('background', 'hsl(0, 0%, 100%)');
	}
	else {
		$('body').css('background', 'hsl(230, 17%, 14%)');
		$('.jumbotron').css('background', 'hsl(232, 19%, 15%)');
		$('h1').css('color', 'hsl(0, 0%, 100%)');
		$('p.card-text').css('color', 'hsl(228, 34%, 66%)');
		$('.card').css('background', 'hsl(228, 28%, 20%)');
		$('.slider').css('background', 'linear-gradient(90deg, hsl(210, 78%, 56%) 20%, hsl(146, 68%, 55%) 100%)');
		$('.slider::before').css('background', 'hsl(230, 17%, 14%)');
	}
});
