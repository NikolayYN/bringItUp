export default class Slider {
		constructor({page = null, btn= null, next= null, prev= null} ='') {
				this.page = document.querySelector(page);
				this.slides = this.page.children;
				this.btn = document.querySelectorAll(btn);
				this.slideIndex = 1;
				this.next = document.querySelector(next)
				this.prev = document.querySelector(prev)
		}
}