import { configureStore } from '@reduxjs/toolkit';
import styleSlice from '../Features/styleSlice';

export const store = configureStore({
    reducer: {
        styles: styleSlice
    }
  });

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch