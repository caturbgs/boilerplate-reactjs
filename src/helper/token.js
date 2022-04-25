const saveToken = (token) => {
	localStorage.setItem('token', token);
};

const getToken = (prefix = false) => {
	if (typeof window !== 'undefined') {
		const token = localStorage.getItem('token');

		if (token) {
			return prefix ? `Bearer ${token}` : token;
		}
	}
};

const getParsedToken = () => {
	if (typeof window !== 'undefined') {
		return JSON.parse(localStorage.getItem('token'));
	}
};

const clearToken = (all = false) => {
	if (typeof window !== 'undefined') {
		if (all) {
			localStorage.clear();
		} else {
			localStorage.removeItem('token');
		}
	}
};

export {saveToken, getToken, getParsedToken, clearToken};
