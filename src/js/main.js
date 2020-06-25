import Slider from './slider/slider';
import Player from './module/player';
import MainSlider from './slider/slider-main';
import MiniSlider from './slider/minisliders';


window.addEventListener('DOMContentLoaded', ()=> {
		const mainSlider = new MainSlider({
				page: '.page',
				btn: '.next'
		})
		mainSlider.render()
		const showUpSlider = new MiniSlider({
				page: '.showup__content-slider',
				next: '.showup__content .showup__next',
				prev: '.showup__content .showup__prev',
		})
		showUpSlider.init()
		const player = new Player('.overlay', '.close', '.play')
		player.init()
})