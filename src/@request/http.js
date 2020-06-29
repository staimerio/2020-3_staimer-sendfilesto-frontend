import * as axios from './axios';

export function reqGet(url, params = {}) {
	return axios.request('GET', url, { params });
}

export function reqPost(url, data = {}) {
	return axios.request('POST', url, { data });
}

export function reqPut(url, data = {}, params = {}) {
	return axios.request('PUT', url, { data, params });
}

export function reqDelete(url, data = {}) {
	return axios.request('DELETE', url, { data });
}
