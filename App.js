import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import { Platform, UIManager, YellowBox } from 'react-native';

import { appStore } from './app/store';
import AppNavigation from './components/app-navigation/app-navigation';

import * as Sentry from '@sentry/react-native';

Sentry.init({
    dsn: 'https://f6b3859e99a84687abea69eaaf47fc2d@o400464.ingest.sentry.io/5258927',
});

YellowBox.ignoreWarnings(['Require cycle:']);

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
