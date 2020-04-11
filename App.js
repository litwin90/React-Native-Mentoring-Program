import React, { Component } from 'react';
import { Provider } from 'react-redux';

import { appStore } from './app/store';
// import ProductDetails from './components/product-details/product-details';
// import { PRODUCTS } from './app/constants';
// import Main from './components/main/main';
import SignIn from './components/auth/sign-in/sign-in';
// import SignUp from './components/auth/sign-up/sign-up';

class App extends Component {
    render() {
        return (
            <Provider store={appStore}>
                {/* <ProductDetails item={PRODUCTS[0].items[0]} /> */}
                <SignIn />
                {/* <SignUp /> */}
                {/* <Main /> */}
            </Provider>
        );
    }
}

export default App;
