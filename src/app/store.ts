import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { soundsApi } from '../features/MainView/main-view.service';

export const store = configureStore({
  reducer: {
    [soundsApi.reducerPath]: soundsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(soundsApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
