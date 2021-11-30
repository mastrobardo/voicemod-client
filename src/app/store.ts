import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { soundsApi } from '../features/MainView/main-view.service';
import soundDetailsSliceReducer from '../features/SoundDetails/sound-details.slice';
import logger from 'redux-logger';

export const store = configureStore({
  reducer: {
    [soundsApi.reducerPath]: soundsApi.reducer,
    soundsDetails: soundDetailsSliceReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([soundsApi.middleware, logger]),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
