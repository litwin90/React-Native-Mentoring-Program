import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import { Platform, UIManager } from 'react-native';

import { appStore } from './app/store';
import AppNavigation from './components/app-navigation/app-navigation';

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

const App = () => {
    return (
        <Provider store={appStore}>
            <AppNavigation />
        </Provider>
    );
};

export default App;
