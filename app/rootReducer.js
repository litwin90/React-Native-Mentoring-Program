import { combineReducers } from '@reduxjs/toolkit';

import headerReducer from '../components/common/header/header.slice';
import authReducer from '../components/auth/auth.slice';
import mainReducer from '../components/main/main.slice';
import productListReducer from '../components/product-list/product-list.slice';

const rootReducer = combineReducers({
    header: headerReducer,
    auth: authReducer,
    main: mainReducer,
    productList: productListReducer,
});

export default rootReducer;
