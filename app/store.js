import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import rootReducer from './rootReducer';
import LogStateMiddleware from './logStateMiddleware';

export const appStore = configureStore({
    reducer: rootReducer,
    middleware: [...getDefaultMiddleware(), LogStateMiddleware],
});
