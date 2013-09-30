/*  ==========================================================================

	jQuery FormChimp - v1.0 - 19-09-2013
	Description plugin
	Copyright (c) 2013 Fabio Quarantini - @febba
	http://www.fabioquarantini.com 
	Contributors: Daniel Duches - @ildaniel8
	license: http://www.opensource.org/licenses/mit-license.php

	==========================================================================  */


;(function($, window, document, undefined) {

	$.fn.formchimp = function(settings) {

		var $form = $(this);
		var $body = $("body");
		var $button = $form.find('[type="submit"]');
		var buttonText = $button.text();
		var actionUrl = $form.attr('action').replace('/post?', '/post-json?').concat('&c=?');
		var $response;

		var defaults = {
			'url': actionUrl,
			'buttonText': '',
			'appendElement': $(this),
			'responseClass': "mc-response",
			'successMessage': '',
			'errorMessage': '',
		};

		$.extend(defaults, settings);

		$form.submit(function(event) {

			var serializedData = $form.serialize();

			if ($("." + defaults.responseClass).length === 0) {
				$response = $('<div/>').addClass(defaults.responseClass).appendTo(defaults.appendElement);
			}

			$response.html('').hide();
			$body.removeClass('mc-success mc-error').addClass('mc-loading');

			function callbackFunction(data) {

				var responseMessage = data.msg;
				var errorCode;
				$button.text(buttonText);
				$body.addClass("mc-" + data.result).removeClass('mc-loading');

				if (data.result === "success") {

					if (defaults.successMessage.length > 0) {
						responseMessage = defaults.successMessage;
					}

					if (defaults.buttonText.length > 0) {
						$button.text(defaults.buttonText);
					}

				} else {

					if (defaults.errorMessage.length > 0) {
						responseMessage = defaults.errorMessage;
					}
					
				}

				$response.show().html(responseMessage);

			}

			$.ajax({

				url: actionUrl,
				data: serializedData,
				success: callbackFunction,
				dataType: 'jsonp'

			});

			event.preventDefault();

		});

	};

})(jQuery, window, document);