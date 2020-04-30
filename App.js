import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';

import { appStore } from './app/store';
import AppNavigation from './components/app-navigation/app-navigation';

const App = () => {
    return (
        <Provider store={appStore}>
            <AppNavigation />
        </Provider>
    );
};

export default App;
