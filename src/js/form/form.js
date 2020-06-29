import {apiServer} from './serverRequest';


export class Form {
		constructor(form, fields) {
				this.form = document.querySelector(form);
				this.fields = fields;
		}
		init() {
				this.clear()
				this.initMask()
				this.validMessage('[name="email"]')
				this.form.addEventListener('submit', handlerData.bind(this))
		}

		isValid() {
				let isValidated = true;
				Object.keys(this.fields).forEach(field => {
						const validate = this.fields[field];
						let isValid = true;
						validate.forEach(valid => {
								isValid = valid(this.form[field].value) && isValid
						})
						isValid ? clearError(this.form[field]) :
							setError(this.form[field]);
						isValidated = isValidated && isValid
				})
				return isValidated
		}

		clear() {
				Object.keys(this.fields).forEach(field => {
						this.form[field].setAttribute('autocomplete', 'off')
						this.form[field].value = ''
				})
		}

		validMessage(selector) {
				const inputsMessage = document.querySelectorAll(selector);
				console.log(inputsMessage);
				inputsMessage.forEach(input => {
						input.addEventListener('keypress', (e) => {
								this.checkEmail(input)
								if (e.key.match(/[^a-z @\.]/ig)) {
										e.preventDefault()
								}
						})
				})
		}
		checkEmail(input) {
				// eslint-disable-next-line max-len
				const re = /^(([^а-яё<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{1,4}))$/;
				if (re.test(input.value.trim())) {
						showSuccess(input);
				} else {
						showError(input);
				}
		}
		initMask() {
				const setCursorPosition = (pos, elem) => {
						elem.focus();

						if (elem.setSelectionRange) {
								elem.setSelectionRange(pos, pos);
						} else if (elem.createTextRange) {
								const range = elem.createTextRange();

								range.collapse(true);
								range.moveEnd('character', pos);
								range.moveStart('character', pos);
								range.select();
						}
				};

				function createMask(event) {
						const matrix = '+1 (___) ___-____';
							let i = 0;
							const def = matrix.replace(/\D/g, '');
							let val = this.value.replace(/\D/g, '');

						if (def.length >= val.length) {
								val = def;
						}

						this.value = matrix.replace(/./g, function(a) {
								return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
						});

						if (event.type === 'blur') {
								if (this.value.length == 2) {
										this.value = '';
								}
						} else {
								setCursorPosition(this.value.length, this);
						}
				}

				const inputs = document.querySelectorAll('[name="phone"]');

				inputs.forEach(input => {
						input.addEventListener('input', createMask);
						input.addEventListener('focus', createMask);
						input.addEventListener('blur', createMask);
				});
		}
}
function setError(input) {
		clearError(input)
		const resultText = 'This field is required';
		const error = `<p class="errorInput">${resultText}</p>`
		input.insertAdjacentHTML('afterend', error)
}

function clearError(input) {
		if (input.nextSibling) {
				input.parentNode.removeChild(input.nextSibling);
		}
}

async function handlerData(e) {
		e.preventDefault()
		if (this.isValid()) {
				const formData = new FormData(this.form)
				formData.append('data', new Date().toLocaleDateString())
				await apiServer.setPost(formData)
					.then(data => console.log(data))
				this.clear()
		}
}

function showError(input) {
		input.style.border = '2px solid red';
}

function showSuccess(input) {
		input.style.border = 'none';
}