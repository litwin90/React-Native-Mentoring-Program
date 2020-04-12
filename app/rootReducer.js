import { combineReducers } from '@reduxjs/toolkit';

import counterReducer from '../components/counter/counter.reducer';
import headerReducer from '../components/common/header/header.reducer';
import authReducer from '../components/auth/authSlice';

const rootReducer = combineReducers({
    counter: counterReducer,
    header: headerReducer,
    auth: authReducer,
});

export default rootReducer;
