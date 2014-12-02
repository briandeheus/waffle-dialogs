var waffle = require('waffle-app');
var modalBackground;

Dialog = function (appElm) {

	var that = this;

	if (!modalBackground) {

		modalBackground           = document.createElement('div');
		modalBackground.className = 'waffle-dialog-modal';
		appElm.appendChild(modalBackground);

	}

	this.elm           = document.createElement('div');
	this.elm.className = 'waffle-dialog';

	this.content           = document.createElement('div');
	this.content.className = 'content';

	this.closeButton                 = new waffle.Button(document.createElement('div'));
	this.closeButton.elm.textContent = 'x';
	this.closeButton.elm.className   = 'closeButton';

	this.closeButton.ontap = function () {
		that.close();
	}

	this.elm.appendChild(this.closeButton.elm);
	this.elm.appendChild(this.content);
	appElm.appendChild(this.elm);

}

Dialog.prototype.show = function () {

	modalBackground.style.display = 'block';
	this.elm.style.opacity        = 0
	this.elm.style.display        = 'block';

	this.elm.style.marginTop      = 0 - (this.elm.offsetHeight / 2) + 'px';
	this.elm.style.marginLeft     = 0 - (this.elm.offsetWidth / 2) + 'px';
	this.elm.style.marginLeft     = 0 - (this.elm.offsetWidth / 2) + 'px';

	this.elm.style.opacity        = 1;
	
}

Dialog.prototype.addButton = function (text, className, ontap) {

	if (!this.buttonWrapper) {

		this.buttonWrapper           = document.createElement('div');
		this.buttonWrapper.className = 'buttonWrapper';
		this.elm.appendChild(this.buttonWrapper);

	}


	var button             = new waffle.Button(document.createElement('div'));
	button.elm.textContent = text;
	button.elm.className   = 'button ' + className;
	button.ontap           = ontap;

	this.buttonWrapper.appendChild(button.elm);

}

Dialog.prototype.close = function () {

	modalBackground.style.display = 'none';
	this.elm.style.display        = 'none';

}

Dialog.prototype.question = function (question) {

	this.content.textContent = question;

}

module.exports = Dialog;