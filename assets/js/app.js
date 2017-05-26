$(function() {

	// Portfolio.
	var $portfolio = $('#portfolio');

	$(document).on('click', '#filters .button', function (ev) {
		ev.preventDefault();
		if ($(this).hasClass('active')) {
			$(this).removeClass('special active');

			$portfolio.find('article').fadeIn(666);
		}
		else {
			$('#filters .button').removeClass('special active');
			$(this).addClass('special active');

			$portfolio.find('article').hide();

			var text = $(this).text();

			$portfolio.find('.caption span a').filter(function() {
			    return $(this).text() === "#" + text;
			}).closest('article').fadeIn(666);

		}
		
	});

	// Thumbs.
	$portfolio.find('article').each(function() {

		var	$this = $(this),
    		$image = $this.find('.image'), $image_img = $image.children('img'),
    		x;

		// No image? Bail.
		if ($image.length == 0)
		  return;

		// Image.
		// This sets the background of the "image" <span> to the image pointed to by its child
		// <img> (which is then hidden). Gives us way more flexibility.

		// Set background.
		$image.css('background-image', 'url(' + $image_img.attr('src') + ')');

		// Set background position.
		if (x = $image_img.data('position'))
		$image.css('background-position', x);

		// Hide original img.
		$image_img.hide();

		// Hack: IE<11 doesn't support pointer-events, which means clicks to our image never
		// land as they're blocked by the thumbnail's caption overlay gradient. This just forces
		// the click through to the image.
		if (skel.vars.IEVersion < 11)
		$this
		.css('cursor', 'pointer')
		.on('click', function() {
			$image.trigger('click');
		});

  });

	var	$filters = $('#filters'),
			obj = {},
			htmlarr = [],
			arr;

	// Filters.
	$portfolio.find('article').each(function() {

		var	$this = $(this),
    		$hashtags = $this.find('.caption span a');

				$hashtags.each(function() {
					obj[$(this).text()] = 0;
			  });
  });

	arr = Object.keys(obj);

	for (var i = 0; i < arr.length; i++) {
		htmlarr[i] = '<li><a href="' + arr[i] + '" class="button small">' + arr[i].substring(1, arr[i].length) + '</a></li>';
	}

	$filters.html(htmlarr.join(''));
});
