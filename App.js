import React, { Component } from 'react';
import { Provider } from 'react-redux';

import { appStore } from './app/store';
import ProductDetails from './components/product-details/product-details';
import { PRODUCTS } from './app/constants';
// import { Main } from './components/main/main';

class App extends Component {
    render() {
        return (
            <Provider store={appStore}>
                <ProductDetails item={PRODUCTS[0].items[0]} />
            </Provider>
        );
    }
}

export default App;
