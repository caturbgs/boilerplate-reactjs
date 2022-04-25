import Axios from 'axios';
import {message} from 'antd';
import {clearToken, getToken} from './token';

const api = Axios.create({
	baseURL: process.env.REACT_APP_API_URL
});

api.interceptors.request.use(
	(config) => ({
		...config,
		headers: {
			...config.headers,
			Authorization: getToken(true)
		}
	}),
	(error) => Promise.reject(error)
);

api.interceptors.response.use(
	(response) =>
		// Any status code that lie within the range of 2xx cause this function to trigger
		// Do something with response data
		response,
	(error) => {
		if (error.response) {
			if ([401, 403].includes(error.response.status)) {
				clearToken();
				message.error('Your session has expired. Please login again.', 1).then(() => {
					window.location.href = '/login';
				});
			}
		}

		return Promise.reject(error);
	}
);

export default api;
