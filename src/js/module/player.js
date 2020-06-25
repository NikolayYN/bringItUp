export default class Player {
		constructor(overflow, close, btn) {
				this.overflow = document.querySelector(overflow);
				this.close = this.overflow.querySelector(close);
				this.btn = document.querySelectorAll(btn);
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
					this.btn.forEach(btn =>{
							btn.addEventListener('click', ()=> {
									if (document.querySelector('iframe#frame')) {
											this.overflow.style.display = 'flex'
									} else {
											const path = btn.getAttribute('data-url')
											this.onYouTubeIframeAPIReady(path)
									}
							});
					})
				}
				hidePlayer() {
					this.close.addEventListener('click', ()=>{
							this.overflow.style.display = 'none';
							this.player.stopVideo()
					})
				}
				onYouTubeIframeAPIReady(url) {
						this.player = new YT.Player('frame', {
								height: '100%',
								width: '100%',
								videoId: `${url}`
						});
						this.overflow.style.display = 'flex'
				}
}