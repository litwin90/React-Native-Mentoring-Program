/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Provider} from 'react-redux';

import {Login} from './components';
import {appStore} from './app/store';

class App extends Component {
    render() {
        return (
            <Provider store={appStore}>
                <Login />
            </Provider>
        );
    }
}

export default App;
