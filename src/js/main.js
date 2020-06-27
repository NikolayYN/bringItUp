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
				active: '.card-active'
		})
		showUpSlider.init()
		const moduleSlider = new MiniSlider({
				page: '.modules__content-slider',
				next: '.modules__info-btns .slick-next',
				prev: '.modules__info-btns .slick-prev',
				active: '.card-active'
		})
		moduleSlider.init()
		const feedSlider = new MiniSlider({
				page: '.feed__slider',
				next: '.feed__slider .slick-next',
				prev: '.feed__slider .slick-prev',
				active: '.card-active',
				animate: true
		})
		feedSlider.init()
		const player = new Player('.overlay', '.close', '.play')
		player.init()
})