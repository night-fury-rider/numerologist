import {configureStore} from '@reduxjs/toolkit';

import dashboardSlice from '$dashboard/dashboardSlice';
import birthdaySlice from '$birthday/birthdaySlice';
import settingsSlice from '$settings/settingsSlice';

export const store = configureStore({
  reducer: {
    dashboard: dashboardSlice,
    birthday: birthdaySlice,
    settings: settingsSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type TRootState = ReturnType<typeof store.getState>;

export type TAppDispatch = typeof store.dispatch;
