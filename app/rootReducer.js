import { combineReducers } from '@reduxjs/toolkit';

import headerReducer from '../components/common/header/header.slice';
import authReducer from '../components/auth/auth.slice';
import mainReducer from '../components/main/main.slice';
import productListReducer from '../components/product-list/product-list.slice';
import appModalReducer from '../components/app-navigation/app-modal/app-modal.slice';
import cartReducer from '../components/cart/cart.slice';

const rootReducer = combineReducers({
    header: headerReducer,
    auth: authReducer,
    main: mainReducer,
    productList: productListReducer,
    appModal: appModalReducer,
    cart: cartReducer,
});

export default rootReducer;
