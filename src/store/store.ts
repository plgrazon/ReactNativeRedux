import {Action, configureStore, ThunkAction} from '@reduxjs/toolkit';
import {rootReducer} from '../reducers/rootReducer';

export const store = configureStore({
  reducer: rootReducer,
});

// app store types
export type AppStore = typeof store;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>;
