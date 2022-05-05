import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './home/homeSlice';

export const store = configureStore({
	reducer: {
		counter: counterReducer,
	},
});
