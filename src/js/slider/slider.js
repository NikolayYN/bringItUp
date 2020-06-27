export default class Slider {
		constructor({
						page = null,
						btn = null,
						next = null,
						prev = null,
						active,
						autoplay,
						animate
				} = '') {
				this.page = document.querySelector(page);
				this.slides = this.page.children;
				this.btn = document.querySelectorAll(btn);
				this.slideIndex = 1;
				this.next = document.querySelector(next)
				this.prev = document.querySelector(prev)
				this.autoplay = autoplay;
				this.animate = animate;
				this.active = active;
		}

		// check() {
		// 		const slides = this.page.children;
		// 		slides.forEach((slide, i) => {
		// 				if (slide.tagName !== 'BUTTON') {
		// 						slides.push(slide)
		// 				} else {
		// 						console.log(slide)
		// 				}
		// 				console.log(slides);
		// 		})
		// 		return slides
		// }
}