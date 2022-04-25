const getUserData = () => {
	if (typeof window !== 'undefined') {
		return JSON.parse(localStorage.getItem('user_data'));
	}
};

export default getUserData;
