import Slider from './slider/slider';
import Player from './module/player';
import MainSlider from './slider/slider-main';
import MiniSlider from './slider/minisliders';
import Difference from './module/difference';
import {Form} from './form/form';
import {Validator} from './form/validator';
import Accordion from './module/accordion';
import Download from './module/download';


window.addEventListener('DOMContentLoaded', ()=> {
		const mainSliderPage = new MainSlider({
				page: '.page',
				btn: '.next'
		})
		const mainSliderModal = new MainSlider({
				page: '.moduleapp',
				btn: '.next',
				prev: '.moduleapp .prev'
		})
		mainSliderPage.render()
		mainSliderModal.render()
		const showUpSlider = new MiniSlider({
				page: '.showup__content-slider',
				next: '.showup__content .showup__next',
				prev: '.showup__content .showup__prev',
				active: 'card-active',
				animate: true
		})
		showUpSlider.init()
		const moduleSlider = new MiniSlider({
				page: '.modules__content-slider',
				next: '.modules__info-btns .slick-next',
				prev: '.modules__info-btns .slick-prev',
				active: 'card-active',
				animate: true,
				autoplay: true
		})
		moduleSlider.init()
		const feedSlider = new MiniSlider({
				page: '.feed__slider',
				next: '.feed  .slick-next',
				prev: '.feed  .slick-prev',
				active: 'feed__item-active'
		})
		feedSlider.init()
		const player = new Player('.overlay', '.close', '.play')
		player.init()
		const officerOld = new Difference(
			'.officerold',
			'.officer__card-item',
			'.plus')
		const officerNew = new Difference(
			'.officernew',
			'.officer__card-item',
			'.plus')
		officerOld.init()
		officerNew.init()

		const joinEvolutionForm = new Form('.join__evolution .form', {
				name: [Validator.require, Validator.requireMinLength(5)],
				phone: [Validator.require, Validator.requireMinLength(5)],
				email: [Validator.require, Validator.requireMinLength(5)],
				city: [],
				position: [Validator.require]
		})
		const scheduleForm = new Form('.schedule__form .form', {
				name: [Validator.require, Validator.requireMinLength(5)],
				email: [Validator.require, Validator.requireMinLength(5)],
				date: []
		})
		joinEvolutionForm.init()
		scheduleForm.init()
		new Accordion({btn: '.module__info-show .plus'}).init()
		new Download('.download').init();
})