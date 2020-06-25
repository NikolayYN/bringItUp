import MainSlider from './slider-main';


export default class MiniSlider extends MainSlider {
		init() {
				this.page.style.cssText = `
					display: flex;
					aline-items: start;
					flex-wrap: wrap;
					overflow: hidden;					
				`
		}
}