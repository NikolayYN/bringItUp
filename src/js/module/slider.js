export default class Slider {
		constructor(page, btn) {
				this.page = document.querySelector(page);
				this.slides = this.page.children;
				this.btn = document.querySelectorAll(btn);
				this.slideIndex = 1;
		}

		showSlide(n) {
				if (n > this.slides.length) this.slideIndex = 1;
				if (n < 1) this.slideIndex = this.slides.length;
				this.slides.forEach(slide => {
						slide.style.display = 'none'
						slide.classList.add('animated', 'fadeIn')
				});
				this.slides[this.slideIndex - 1].style.display = 'block';
		}

		plusSlide(n) {
				this.showSlide(this.slideIndex += n)
		}

		render() {
				this.btn.forEach(btn => {
						btn.addEventListener('click', (e) => {
								e.preventDefault()
								this.plusSlide(1);
						})
						// eslint-disable-next-line max-len
						btn.parentNode.previousElementSibling.addEventListener('click', (e) => {
								e.preventDefault()
								this.showSlide(this.slideIndex = 1)
						})
				})
		}
}