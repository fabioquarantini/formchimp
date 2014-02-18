/*  ==========================================================================

	jQuery FormChimp - v1.0.1
	A customizable MailChimp ajax plugin for jQuery
	Copyright (c) 2014 Fabio Quarantini - @febba
	http://www.fabioquarantini.com
	Contributors: Daniel Duches - @ildaniel8
	license: http://opensource.org/licenses/MIT

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
			'appendElement': $(this),
			'buttonText': '',
			'errorMessage': '',
			'responseClass': "mc-response",
			'successMessage': '',
			'url': actionUrl,
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