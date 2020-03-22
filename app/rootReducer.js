import {combineReducers} from '@reduxjs/toolkit';

import counterReducer from '../components/counter/counter.reducer';

const rootReducer = combineReducers({
    counter: counterReducer,
});

export default rootReducer;
