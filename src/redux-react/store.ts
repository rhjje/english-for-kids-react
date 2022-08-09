import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './reducer';

export const store = configureStore({ reducer });

export type AppState = ReturnType<typeof store.getState>;
