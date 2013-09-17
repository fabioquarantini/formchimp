$(document).ready(function() {

	var $form = $("#newsletter-form");
	var $response = $("<div/>");
	var buttonText = $("button").text();

	$form.submit( function( event ) {

		var actionUrl = $form.attr('action').replace('/post?', '/post-json?').concat('&c=?');
		var serializedData = $form.serialize();
		var $button = $form.find('button');
		
		$button.addClass('button-loading');
		$form.removeClass();
		$(".mc-response").remove();

		function callbackCall ( data) {

			$form.addClass("mc-" + data.result);
			$response.removeClass().addClass("mc-response").text("").html(data.msg);
			$response.appendTo( $form );
			$button.removeClass();
			
			if( $form.hasClass('mc-success') ) {
				$button.text("Thanks");
			} else {
				$button.text(buttonText);
			}

		}

		$.ajax({

			url: actionUrl,
			data: serializedData,
			success: callbackCall,
			dataType: 'jsonp'

		});

		event.preventDefault();
		
	});

});


/* Add form action http://kb.mailchimp.com/article/can-i-host-my-own-sign-up-forms. Change "post?" to "post-json?" and add "&c=?" at the end */
//var actionUrl = 'http://fabioquarantini.us7.list-manage2.com/subscribe/post-json?u=679769a7357f9ee98247a003d&amp;id=cdb15a7d9d&c=?';