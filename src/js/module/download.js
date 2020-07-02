export default class Download {
		constructor(trigger) {
				this.trigger = document.querySelectorAll(trigger);
				this.path = './assets/img/Bitmap.jpg';
		}

		loadFile(path, e) {
				const link = document.createElement('a');
				e.preventDefault()
				link.setAttribute('href', path);
				link.style.display = 'none';
				link.setAttribute('download', 'picture');
				document.body.appendChild(link);
				link.click();
				document.body.removeChild(link);
		}

		init() {
				this.trigger.forEach(load => {
						load.addEventListener('click', (e) => {
								e.stopPropagation()
								this.loadFile(this.path, e);
						})
				})
		}
}