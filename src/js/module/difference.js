export default class Difference {
		constructor(container, slides, btn) {
			try {
					this.container = document.querySelector(container);
					this.slides = this.container.querySelectorAll(slides);
					this.btn = this.container.querySelector(btn)
			} catch (e) {}
		}
		hideSlides() {
				for (let i = 0; i < this.slides.length -1; i++) {
						this.slides[i].classList.add('animated', 'fadeIn');
						this.slides[i].style.display = 'none'
						this.indexSlide = 0;
				}
		}
		showNextSlide() {
				this.btn.addEventListener('click', ()=>{
						if (this.indexSlide < this.slides.length - 2) {
								this.slides[this.indexSlide].style.display = 'flex'
								this.indexSlide += 1;
						} else {
								this.slides[this.indexSlide].style.display = 'flex'
								this.slides[this.slides.length - 1].remove()
						}
				})
		}
		init() {
				try {
						this.hideSlides()
						this.showNextSlide()
				} catch (e) {}
		}
}