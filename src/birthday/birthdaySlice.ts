import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

import {TBirthdayState} from '$birthday/birthday.types';

const initialState: TBirthdayState = {
  history: [],
  lastModifiedTime: Date.now(),
};

const _setHistory = (
  state: TBirthdayState,
  action: PayloadAction<string[]>,
) => {
  state.history = action.payload;
};

export const birthdaySlice = createSlice({
  name: 'birthday',
  initialState,
  reducers: {
    setHistory: _setHistory, // Used in case of update/delete
  },
});

export const {setHistory} = birthdaySlice.actions;

export default birthdaySlice.reducer;
