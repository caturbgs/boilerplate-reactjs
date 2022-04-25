import {get} from 'lodash';

/* eslint-disable no-template-curly-in-string */
export const validateMessages = {
	required: '${label} is required!',
	types: {
		email: '${label} is not a valid email!',
		number: '${label} is not a valid number!'
	},
	number: {
		range: '${label} must be between ${min} and ${max}'
	}
};
/* eslint-enable no-template-curly-in-string */

export const filterTable = (arrayData, columnFilteredData, filterText) =>
	(arrayData || []).filter((objectData) => {
		let newFilterText = filterText;
		let isFounds = false;

		if (!filterText) {
			return true;
		}

		if (typeof filterText === 'string') {
			newFilterText = filterText.toLowerCase();
		} else if (typeof filterText === 'number') {
			newFilterText = filterText.toString();
		}

		columnFilteredData.forEach((column) => {
			let value = get(objectData, column, 'dd');

			if (typeof value === 'string') {
				value = value.toLowerCase();
			} else if (typeof value === 'number') {
				value = value.toString();
			}

			const index = (value || '').indexOf(newFilterText);
			const validity = index > -1;

			if (validity) {
				isFounds = true;
			}
		});

		return isFounds;
	});

export const objectToQueryString = (params) => {
	const queryString = Object.keys(params)
		.filter((key) => params[key])
		.map((key) => {
			if (Array.isArray(params[key]) && params[key].length !== 0) {
				return `${key}=${params[key].join(',')}`;
			} else if (Array.isArray(params[key]) && params[key].length === 0) {
				return null;
			}

			return `${key}=${params[key]}`;
		})
		.join('&');

	return queryString;
};
