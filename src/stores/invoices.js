import {makeAutoObservable} from 'mobx';
import api from '../helper/api';
import {objectToQueryString} from '../helper/helpers';

export default class Invoices {
	data = [];

	constructor() {
		makeAutoObservable(this);
	}

	async getInvoices(params) {
		const {data} = await api.get(`invoices/vo?${objectToQueryString(params)}`);

		this.data = data.result.rows;
	}
}
