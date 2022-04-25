import Axios from 'axios';
import {message} from 'antd';

const api = Axios.create({
	baseURL: process.env.REACT_APP_API_URL
});

api.interceptors.request.use(
	(config) => ({
		...config,
		headers: {
			...config.headers,
			Authorization: `Bearer ${localStorage.getItem('vox_token')}`
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
				localStorage.clear();
				message.error('Your session has expired. Please login again.', 1).then(() => {
					window.location.href = '/login';
				});
			}
		}

		return Promise.reject(error);
	}
);

export default api;
