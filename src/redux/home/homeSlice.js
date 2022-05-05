import { createSlice } from '@reduxjs/toolkit';
import { incrementAsync } from './thunks';

const initialState = {
	value: 0,
	status: 'idle',
};

export const counterSlice = createSlice({
	name: 'counter',
	initialState,
	reducers: {
		demoReducer: (state) => {
			//make any state changes here
		},
	},
	// below is the extra builders used to trask async thunks
	extraReducers: (builder) => {
		builder
			.addCase(incrementAsync.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(incrementAsync.fulfilled, (state, action) => {
				state.status = 'idle';
				state.value += action.payload;
			});
	},
});

export const { demoReducer } = counterSlice.actions;
export default counterSlice.reducer;

// export const selectCount = (state) => state.counter.value;

// export const incrementIfOdd = (amount) => (dispatch, getState) => {
// 	const currentValue = selectCount(getState());
// 	if (currentValue % 2 === 1) {
// 		dispatch(incrementByAmount(amount));
// 	}
// };
