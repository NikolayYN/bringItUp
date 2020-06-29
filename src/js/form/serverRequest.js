class ApiRequest {
		constructor(baseUrl) {
				this.url = baseUrl;
		}
		async setPost(post) {
				try {
						const request = new Request(this.url, {
								method: 'POST',
								body: post
						})
						return getResponse(request);
				} catch (error) {
						console.log('eto  oshibka', error);
				}
		}
}


async function getResponse(request) {
		const response = await fetch(request);
		return await response.text();
}
export const apiServer = new ApiRequest('./assets/question.php');