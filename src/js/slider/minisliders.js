import MainSlider from './slider-main';


export default class MiniSlider extends MainSlider {
		nextSlide() {
				const active = this.slides[this.slides.length - 1]
				this.page.insertBefore(active, this.slides[0])
		}

		bindSlide() {
				this.next.addEventListener('click', () => {

						const active = this.slides[this.slides.length - 1]
						this.page.insertBefore(active, this.slides[0])
						this.setStyleSlide()
				})
				this.prev.addEventListener('click', () => {
						this.page.appendChild(this.slides[0])
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
				console.log(this.slides);
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
