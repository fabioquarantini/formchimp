# jQuery ChimpForm

A customizable MailChimp plugin for jQuery

## Usage

1. Add MailChimp url to the form action

	```html
	<form action="ADD MAILCHIMP URL">
		<label for="email">Email*:</label>
		<input id="email" name="EMAIL" type="email" value="" />		
		<button type="submit" value="Subscribe">Subscribe</button>
	</form>
	```

2. Include jQuery:

	```html
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js"></script>
	```

3. Include plugin's code:

	```html
	<script src="jquery.formchimp.js"></script>
	```

4. Call the plugin:

	```javascript	
	$(".form-class").formchimp();
	```

## License

[MIT License](http://opensource.org/licenses/MIT)