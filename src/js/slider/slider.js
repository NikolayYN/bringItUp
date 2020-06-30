export default class Slider {
		constructor({page = '',
						btn = null,
						next = null,
						prev = null,
						active = '',
						animate,
						autoplay} ={}) {
				this.page = document.querySelector(page)
				try {
						this.slides = this.page.children;
				} catch (e) {}
				// this.slides = this.page.children;
				this.btn = document.querySelectorAll(btn);
				this.slideIndex = 1;
				this.next = document.querySelector(next)
				this.prev = document.querySelector(prev)
				this.autoplay = autoplay;
				this.animate = animate;
				this.active = active;
		}
}