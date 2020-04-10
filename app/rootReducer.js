import { combineReducers } from '@reduxjs/toolkit';

import counterReducer from '../components/counter/counter.reducer';
import headerReducer from '../components/common/header/header.reducer';

const rootReducer = combineReducers({
    counter: counterReducer,
    header: headerReducer,
});

export default rootReducer;
