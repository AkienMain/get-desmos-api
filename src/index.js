export default {
	async fetch(request, env, ctx) {
		const { pathname } = new URL(request.url)
		const { success } = await env.RATE_LIMITER.limit({ key: pathname })
		if (success) {
			let url = 'https://www.desmos.com/api/v1.12/calculator.js?apiKey=' + env.DESMOS_APIKEY;
			let response = await fetch(url);
			return response;
		} else {
			return new Response(`429 Failure – rate limit exceeded for ${pathname}`, { status: 429 })
		}
	},
};
