$(document).ready(function() {

	var $response = $("<div/>");
	
	$("button").on("click", function(e) {

		var responseClasses = "";
		var $form = $("#newsletter-form");
		var serializedData = $form.serialize();
		
		/* Add form action http://kb.mailchimp.com/article/can-i-host-my-own-sign-up-forms. Change "post?" to "post-json?" and add "&c=?" at the end */
		var actionUrl = 'http://fabioquarantini.us7.list-manage2.com/subscribe/post-json?u=679769a7357f9ee98247a003d&amp;id=cdb15a7d9d&c=?';

		$form.find('button').addClass('button-loading');

		$.post( actionUrl , serializedData, function(data) {
			responseClasses = "mc-" + data.result + " mc-response";
			$response.removeClass().addClass(responseClasses).text("").text(data.msg);
			$response.appendTo( $form );
			$form.find('button').removeClass();
		}, "jsonp");

		e.preventDefault();
	});

});