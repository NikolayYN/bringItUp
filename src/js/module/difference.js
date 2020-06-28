export default class Difference {
		constructor(container, slides, btn) {
				this.container = document.querySelector(container);
				this.slides = this.container.querySelectorAll(slides);
				this.btn = this.container.querySelector(btn)
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
						if (this.indexSlide < 3) {
								this.slides[this.indexSlide].style.display = 'flex'
						}
						this.indexSlide += 1;
				})
		}
		init() {
				this.hideSlides()
				this.showNextSlide()
		}
}