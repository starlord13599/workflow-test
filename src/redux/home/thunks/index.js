import { createAsyncThunk } from '@reduxjs/toolkit';

export const incrementAsync = createAsyncThunk(
	'counter/fetchCount',
	async (amount, { rejectWithValue }) => {
		if (amount > 5) {
			return rejectWithValue('Sorry, this is an Error');
		}
		return 'Horray!';
	}
);
