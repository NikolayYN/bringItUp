import Slider from './slider';


export default class MainSlider extends Slider {
		constructor({page, btn, prev}) {
				super({
						page,
						btn
				});
				this.previous = document.querySelectorAll(prev)
		}

		showSlide(n) {
				if (n > this.slides.length) this.slideIndex = 1;
				if (n < 1) this.slideIndex = this.slides.length;
				this.slides.forEach(slide => {
						slide.style.display = 'none'
						slide.classList.add('animated', 'fadeIn')
				});
				this.slides[this.slideIndex - 1].style.display = 'block';
				try {
						this.hanson.style.opacity = '0'
						if (this.slideIndex === 3) {
								setTimeout(() => {
										this.hanson.classList.add('animated', 'fadeInDown')
										this.hanson.style.opacity = '1';
								}, 2000)
						} else {
								this.hanson.classList.remove('animated', 'fadeInDown')
								this.hanson.style.opacity = '0';
						}
						// eslint-disable-next-line no-empty
				} catch (e) {
				}
		}

		plusSlide(n) {
				this.showSlide(this.slideIndex += n)
		}

		bindTriggerSlides() {
				this.btn.forEach(btn => {
						btn.addEventListener('click', (e) => {
								e.preventDefault()
								this.plusSlide(1);
						})
						try {
								this.hanson = document.querySelector('.hanson');
								// eslint-disable-next-line no-empty
						} catch (e) {
						}
						// eslint-disable-next-line max-len
						btn.parentNode.previousElementSibling.addEventListener('click', (e) => {
								e.preventDefault()
								this.showSlide(this.slideIndex = 1)
						})
				})
				this.previous.forEach(prev => {
						prev.addEventListener('click', (e) => {
								this.plusSlide(-1)
						})
				})
		}

		render() {
				if (this.page) {
						this.bindTriggerSlides()
				}
		}
}