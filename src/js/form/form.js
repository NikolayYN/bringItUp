export class Form {
		constructor(form, fields) {
				this.form = document.querySelector(form);
				this.fields = fields;
		}

		value() {
				const value = {}
				Object.keys(this.fields).forEach(field => {
						value[field] = this.form[field].value
				})
				return value
		}

		init() {
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
					this.form[field].value = ''
				})
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

function handlerData(e) {
		e.preventDefault()
		console.log('form', this.form.city.value)
		if (this.isValid()) {
				const formData = {
						city: this.form.city.value,
						data: new Date().toLocaleDateString(),
						...this.value()
				}
				console.log(formData)
				this.clear()
		}
}