# jQuery FormChimp

A customizable MailChimp ajax plugin for jQuery

##Install
Choose one of the following methods:

#### Download source files

- [jquery.formchimp.min.js](https://raw.github.com/fabioquarantini/formchimp/master/jquery.formchimp.min.js)
- [jquery.formchimp.js](https://raw.github.com/fabioquarantini/formchimp/master/jquery.formchimp.js)


#### Git clone

``` bash
git clone https://github.com/fabioquarantini/formchimp.git
```

#### Bower

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
	$(".form-class").formchimp();
	```


## Properties

#### appendElement:
*Selector*:  Declare where the new element, containing the messages from Mailchimp will be appended to.

*Default*: `$(this)`

#### buttonText:
*String*: The message to be written on the submit button after a successful subscription.

*Default*: `''`

#### errorMessage:
*String*: Set custom error message given when return an error.

*Default*: `''`

#### responseClass:
*Selector*: Declare custom element in page for error output

*Default*: `mc-response`

#### successMessage:
*String*: Set a custom success message.

*Default*: `''`

#### url:
*String*: The mailchip list subscription url, to get the JSONP address just change 'post'' to 'post-json' and append '&c=?' at the end

*Default*: `form action attribute`


## License

[MIT License](http://opensource.org/licenses/MIT)