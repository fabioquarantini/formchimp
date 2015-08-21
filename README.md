# jQuery FormChimp

A customizable MailChimp ajax plugin for jQuery, provides an easy and lightweight way to let your users sign up to your MailChimp list.


####Features

- Customizable Error and Success messages.
- Ability to specify which element the output should be appended to, if it exists or where the element should be created
- Automatically transforms the mailchimp signup url in the JSONP format
- Changes the value of the button if the response is successful
- This solution is language agnostic, only dependency is jQuery.
- is AJAX-enabled, but degrades gracefully if Javascript isn't turned on
- Multiple sign-up forms, for multiple lists.


####Demo

Checkout the demo at [http://www.fabioquarantini.com/formchimp/](http://www.fabioquarantini.com/formchimp/)


##Install

Choose one of the following methods:

**Download source files**

- [jquery.formchimp.min.js](https://raw.github.com/fabioquarantini/formchimp/master/jquery.formchimp.min.js)
- [jquery.formchimp.js](https://raw.github.com/fabioquarantini/formchimp/master/jquery.formchimp.js)


**Git clone**

``` bash
git clone https://github.com/fabioquarantini/formchimp.git
```

**Bower**

``` bash
bower install formchimp
```


## Usage

1. Create a form with the required attributes ( form action and input name. [Where do i find them?](http://kb.mailchimp.com/article/can-i-host-my-own-sign-up-forms))

	```html
	<form action="ADD MAILCHIMP URL">
		<label for="email">Email*:</label>
		<input id="email" name="ADD MAILCHIMP NAME ATTRIBUTE" type="email" value="" />
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
	$(".form-selector").formchimp();
	```


## Properties

#### appendElement:
*Selector*: Declare where the new element, containing the messages from Mailchimp will be appended to.

*Default*: `$(this)`

#### buttonSelector:
*String*: Set the button selector.

*Default*: `$form.find('[type="submit"]')`

#### buttonText:
*String*: The message to be written on the submit button after a successful subscription.

*Default*: `''`

#### errorMessage:
*String*: Set custom error message given when return an error.

*Default*: `''`

#### responseClass:
*Selector*: Declare custom element in page for error output.

*Default*: `mc-response`

#### successMessage:
*String*: Set a custom success message.

*Default*: `''`

#### url:
*String*: The mailchip list subscription url, to get the JSONP address just change `post` to `post-json` and append `&c=?` at the end.

*Default*: `form action attribute`

## Credits

Copyright (c) 2015 [Fabio Quarantini](http://www.fabioquarantini.com) | Contributors: [Daniel Duches](https://github.com/danielhq/)

## License

[MIT License](http://opensource.org/licenses/MIT)