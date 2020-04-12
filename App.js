import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { appStore } from './app/store';
import ProductDetails from './components/product-details/product-details';
import Main from './components/main/main';
import SignIn from './components/auth/sign-in/sign-in';
import SignUp from './components/auth/sign-up/sign-up';
import { BaseStyles } from './app.styles';

const Stack = createStackNavigator();

class App extends Component {
    render() {
        return (
            <Provider store={appStore}>
                <NavigationContainer>
                    <Stack.Navigator initialRouteName="SignIn">
                        <Stack.Screen
                            name="Main"
                            component={Main}
                            options={{
                                title: 'Products',
                                headerStyle: {
                                    backgroundColor: BaseStyles.colors.lightBlue,
                                    height: 50,
                                },
                                headerTintColor: BaseStyles.colors.white,
                                headerTitleStyle: {
                                    fontWeight: 'bold',
                                },
                            }}
                        />
                        <Stack.Screen
                            name="ProductDetails"
                            component={ProductDetails}
                            options={({ route }) => ({
                                title: route.params.product.name,
                                headerStyle: {
                                    backgroundColor: BaseStyles.colors.lightBlue,
                                },
                                headerTintColor: BaseStyles.colors.white,
                                headerTitleStyle: {
                                    fontWeight: 'bold',
                                },
                            })}
                        />
                        <Stack.Screen
                            name="SignIn"
                            component={SignIn}
                            options={{
                                header: () => null,
                            }}
                        />
                        <Stack.Screen
                            name="SignUp"
                            component={SignUp}
                            options={{
                                header: () => null,
                            }}
                        />
                    </Stack.Navigator>
                </NavigationContainer>
            </Provider>
        );
    }
}

export default App;
