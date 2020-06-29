import axios from 'axios';

export function request(method, url, options) {
	const { data, params } = options;
	return new Promise(async (resolve, reject) => {
		axios({ method, url, data, params })
			.then(response => resolve(response['data']))
			.catch(error => {
				reject(error.response);
			});
	});
}
