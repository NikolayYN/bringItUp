import MainSlider from './slider-main';


export default class MiniSlider extends MainSlider {
		nextSlide() {
				const sliderArr = this.check();
				const active = sliderArr[sliderArr.length - 1]
				this.page.insertBefore(sliderArr[0], active)
		}

		check() {
				let slides = [...this.page.children];
				slides = slides.filter((slide, i) => {
						return slide.tagName !== 'BUTTON';
				})
				return slides
		}

		bindSlide() {
				this.next.addEventListener('click', () => {
						const slidesArr = this.check()
						// eslint-disable-next-line max-len
						this.page.insertBefore(slidesArr[0], slidesArr[slidesArr.length - 1])
						this.setStyleSlide()
				})
				this.prev.addEventListener('click', () => {
						const slidesArr = this.check()
						console.log(slidesArr);
						const active = slidesArr[slidesArr.length - 1]
						console.log('active', active);
						this.page.insertAdjacentElement('afterbegin', active)
						this.setStyleSlide()
				})
		}

		init() {
				this.page.style.cssText = `
					display: flex;
					aline-items: start;
					flex-wrap: wrap;
					overflow: hidden;					
				`
				this.bindSlide()
				if (this.autoplay) {
						setInterval(() => {
								this.nextSlide()
								this.setStyleSlide()
						}, 5000)
				}
		}

		setStyleSlide() {
				this.slides.forEach(slide => {
						slide.classList.remove(this.active);
						if (this.animate) {
								slide.querySelector('.card__controls-count')
									.style.opacity = '0';
								slide.querySelector('.card__controls-arrow')
									.style.opacity = '0';
						}
				})
				this.slides[0].classList.add(this.active)
				if (this.animate) {
						this.slides[0].querySelector('.card__controls-count')
							.style.opacity = '1';
						this.slides[0].querySelector('.card__controls-arrow')
							.style.opacity = '1';
				}
		}
}

function validNode(elem, node) {
		return elem.tagName === node;
}
