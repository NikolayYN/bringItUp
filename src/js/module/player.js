export default class Player {
		constructor(overflow, close, btn) {
				this.overflow = document.querySelector(overflow);
				this.close = this.overflow.querySelector(close);
				this.btn = document.querySelectorAll(btn);
				this.onPlayerStateChange = this.onPlayerStateChange.bind(this)
		}

		init() {
				const tag = document.createElement('script');
				tag.src = 'https://www.youtube.com/iframe_api';
				const firstScriptTag = document.getElementsByTagName('script')[0];
				firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
				this.openPlayer()
				this.hidePlayer()
		}

		openPlayer() {
				this.btn.forEach((btn, i) => {
						try {
								if (i % 2) {
										btn.closest('.module__video-item').setAttribute('data-disabled', 'true');
								}
						} catch (e) {}


								btn.addEventListener('click', () => {
										if (!(btn.closest('.module__video-item')) || btn.closest('.module__video-item').getAttribute('data-disabled') !== 'true') {
										this.activeBtn = btn;
										if (document.querySelector('iframe#frame')) {
												this.overflow.style.display = 'flex'
												if (this.path !== btn.getAttribute('data-url')) {
														this.path = btn.getAttribute('data-url')
														this.player.loadVideoById(this.path)
												}
										} else {
												this.path = btn.getAttribute('data-url')
												this.onYouTubeIframeAPIReady(this.path)
										}
										}
								});
				})
		}
		hidePlayer() {
				this.close.addEventListener('click', () => {
						this.overflow.style.display = 'none';
						this.player.stopVideo()
				})
		}

		onYouTubeIframeAPIReady(url) {
				this.player = new YT.Player('frame', {
						height: '100%',
						width: '100%',
						videoId: `${url}`,
						events: {
								'onStateChange': this.onPlayerStateChange
						}
				});
				this.overflow.style.display = 'flex'
		}

		onPlayerStateChange(state) {
				try {
						const blocked = this.activeBtn.closest('.module__video-item').nextElementSibling;
						const svgBtnPlay = this.activeBtn.querySelector('svg').cloneNode(true)
						if (state.data === 0) {
								if (blocked.querySelector('.play__circle').classList.contains('closed')) {
										blocked.querySelector('.play__circle').classList.remove('closed');
										blocked.querySelector('svg').remove();
										blocked.querySelector('.play__circle').appendChild(svgBtnPlay);
										blocked.querySelector('.play__text').textContent = 'play video';
										blocked.querySelector('.play__text').classList.remove('attention');
										blocked.style.opacity = '1'
										blocked.style.filter = 'none'
										blocked.setAttribute('data-disabled', 'false')
								}
						}
				} catch (e){}
				}
}