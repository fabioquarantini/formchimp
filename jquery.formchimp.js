/*  ==========================================================================

	jQuery FormChimp - v1.2.1
	A customizable MailChimp ajax plugin for jQuery
	Fabio Quarantini - @febba
	http://www.fabioquarantini.com/formchimp/

	==========================================================================  */


;( function( $, window, document, undefined ) {

	$.fn.formchimp = function( settings ) {

		var $form = $(this);
		var $body = $('body');
		var actionUrl = $form.attr('action').replace('/post?', '/post-json?').concat('&c=?');
		var $button = $form.find('[type="submit"]');
		var defaults = {
			'appendElement': $form,					// Declare where the new element, containing the messages from Mailchimp will be appended to.
			'buttonSelector': $button,				// Set the button selector.
			'buttonText': '', 						// The message to be written on the submit button after a successful subscription.
			'debug': false, 						// Activate debug message in console.
			'errorMessage': '',						// Set custom error message given when return an error.
			'onMailChimpSuccess': function() {},	// Callback that fires on success.
			'onMailChimpError': function() {},		// Callback that fires on errors.
			'responseClass': "mc-response",			// Declare custom element in page for message output.
			'successMessage': '',					// Set a custom success message.
			'url': actionUrl,						// The mailchip list subscription url, to get the JSONP address just change `post` to `post-json` and append `&c=?` at the end.
		};
		var originalButtonText = defaults.buttonSelector.text();

		// Merge default whith settings
		$.extend( defaults, settings );

		// On submit
		$( $form ).on( 'submit', function( event ) {

			// Disable default action of submit
			event.preventDefault();

			// Remove status class and add the loading
			$body.removeClass('mc-success mc-error').addClass('mc-loading');

			// If the response container does not exists
			if ( $("." + defaults.responseClass).length === 0 ) {

				// Add response container to append element
				$responseContainer = $('<div/>').addClass( defaults.responseClass ).appendTo( defaults.appendElement );

			} else {

				// Remove old message
				$responseContainer.html('');

			}

			// Perform an Ajax request
			$.ajax({

				url: defaults.url,
				data: $form.serialize(),
				dataType: 'jsonp'

			}).done( function( data ) {

				// If debug is active
				if ( defaults.debug ) {

					// Log in cosole the Mailchimp data
					console.log( JSON.stringify(data) );
				}

				// Save the Mailchimp data
				var responseMessage = data.msg;

				// If the message start with a number e contain "-"
				if( !isNaN(responseMessage.charAt(0)) && responseMessage.charAt(2) === '-' ) {

					// Remove first 3 characters
					responseMessage = responseMessage.substring(3);

				}

				// Add status class and remove the loading class
				$body.addClass('mc-' + data.result).removeClass('mc-loading');

				// If the Mailchimp result is success
				if ( data.result === 'success' ) {

					// If success message parameter is not empty
					if ( defaults.successMessage !== '' ) {

						// Replace the default success message with parameter
						responseMessage = defaults.successMessage;

					}

					// If button text parameter is not empty
					if ( defaults.buttonText !== '' ) {

						// Replace the default button text with parameter
						defaults.buttonSelector.text(defaults.buttonText);

					}

					// Add event on error
					$(document).trigger('mailChimpSuccess');

					// Run callback
					defaults.onMailChimpSuccess.call();

				} else { // If there is an error

					// If error message parameter is not empty
					if ( defaults.errorMessage !== '' ) {

						// Replace the default error message with parameter
						responseMessage = defaults.errorMessage;

					}

					// If button text parameter is not empty
					if ( defaults.buttonText !== '' ) {

						// Replace the default button text with the original text
						defaults.buttonSelector.text(originalButtonText);

					}

					// Add event on error
					$(document).trigger('mailChimpError');

					// Run callback
					defaults.onMailChimpError.call();

				}

				// Show the message
				$responseContainer.html(responseMessage);

			});

		});

	};

})( jQuery, window, document );