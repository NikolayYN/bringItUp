export class Validator {
		static require(value) {
				return value && value.trim()
		}
		static requireMinLength(length) {
				return function l(value) {
						return value.length >= length;
				}
		}
}
