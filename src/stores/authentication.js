import {makeAutoObservable} from 'mobx';
import api from '../helper/api';
import {STATUS_CODE_CREATED, STATUS_CODE_OK} from '../constants/statusCode';
import {clearToken, saveToken} from '../helper/token';
import {useNavigate} from 'react-router-dom';

export default class Authentication {
	isLoggedIn = false;

	constructor() {
		makeAutoObservable(this);
	}

	async login(username, password) {
		const response = await api.post('/login', {
			username,
			password
		});

		if ([STATUS_CODE_OK, STATUS_CODE_CREATED].includes(response.status)) {
			this.isLoggedIn = true;
			saveToken(response.data.token);
		}

		return response;
	}

	logout() {
		const navigate = useNavigate();

		this.isLoggedIn = false;
		clearToken();
		navigate('/login', {replace: true});
	}
}
