import {apiServer} from './serverRequest';


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

async function handlerData(e) {
		e.preventDefault()
		if (this.isValid()) {
				const formData = {
						data: new Date().toLocaleDateString(),
						...this.value()
				}
				try {
						formData.city = this.form.city.value;
						formData.date= this.form.date.value;
				} catch {}

				await apiServer.setPost(formData)
					.then(data => console.log(data))
				this.clear()
		}
}