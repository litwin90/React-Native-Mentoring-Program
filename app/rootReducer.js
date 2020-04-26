import { combineReducers } from '@reduxjs/toolkit';

import headerReducer from '../components/common/header/headerSlice';
import authReducer from '../components/auth/authSlice';
import mainReducer from '../components/main/mainSlice';

const rootReducer = combineReducers({
    header: headerReducer,
    auth: authReducer,
    main: mainReducer,
});

export default rootReducer;
