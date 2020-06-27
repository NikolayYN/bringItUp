import MainSlider from './slider-main';


export default class MiniSlider extends MainSlider {
		init() {
				this.page.style.cssText = `
					display: flex;
					aline-items: start;
					flex-wrap: wrap;
					overflow: hidden;					
				`
				this.next.addEventListener('click', slideNext.bind(this))
				this.prev.addEventListener('click', slidePrev.bind(this))
		}
}

function validNode(elem, node) {
		return elem.tagName === node;
}
function slidePrev(e) {
		// this.slides.forEach(slide =>{
		//
		// })
	this.page.insertBefore(this.slides[this.slides.length-1], this.slides[0])
}
function slideNext() {
		this.page.appendChild(this.slides[0])
}