import {createSlice} from '@reduxjs/toolkit';

// eslint-disable-next-line import/prefer-default-export
export const counterSlice = createSlice({
	name: 'counter',
	initialState: {
		value: 0
	},
	reducers: {
		increment: (state) => {
			state.value += 1;
		},
		decrement: (state) => {
			state.value -= 1;
		},
		reset: (state) => {
			state.value = 0;
		},
		incrementByValue: (state, action) => {
			state.value += action.payload;
		},
		decrementByValue: (state, action) => {
			state.value -= action.payload;
		}
	}
});

export const {increment, decrement, reset, incrementByValue, decrementByValue} = counterSlice.actions;

export default counterSlice.reducer;
