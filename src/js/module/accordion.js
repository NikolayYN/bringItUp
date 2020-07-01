export class Accordion {
		constructor({btn, block}) {
				this.btns = document.querySelectorAll(btn);
				this.block = document.querySelectorAll(block);
		}
		init() {
				// this.setAnimation()
				this.btns.forEach((btn, i) => {
						btn.addEventListener('click', (e)=>{
								if (this.block[i].style.display === 'block') {
										this.block[i].style.display = 'none'
										this.block[i].classList.remove('animation', 'fadeIn')
								} else {
										this.block[i].classList.add('animation', 'fadeIn')
										this.block[i].style.display = 'block'
								}
						})
				})
		}
		setAnimation() {
				this.block.forEach(block => {
						block.classList.add('animation', 'fadeIn')
				})
		}
}