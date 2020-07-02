export default class Accordion {
		constructor({btn}) {
				this.btns = document.querySelectorAll(btn);
		}
		init() {
				// this.setAnimation()
				this.btns.forEach((btn, i) => {
						btn.addEventListener('click', (e)=> {
								const sibling = btn.closest('.module__info-show').nextElementSibling;
								sibling.style.marginTop = '20px';
								sibling.classList.add('animated', 'flipInY');
								sibling.classList.toggle('msg');
						})
				})
		}
}