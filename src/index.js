export default {
	async fetch(request, env, ctx) {
		let url = 'https://www.desmos.com/api/v1.12/calculator.js?apiKey=' + env.DESMOS_APIKEY;
		let response = await fetch(url);
		return response;
	},
};
