import React from 'react';
import { useSelector } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import { BaseStyles } from '../../app.styles';

import ProductDetails from '../product-details/product-details';
import Main from '../main/main';
import SignIn from '../auth/sign-in/sign-in';
import SignUp from '../auth/sign-up/sign-up';

const Stack = createStackNavigator();

const AppNavigation = () => {
    const { isSignedIn } = useSelector(state => state.auth);
    return (
        <NavigationContainer>
            <Stack.Navigator>
                {isSignedIn ? (
                    <>
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
                    </>
                ) : (
                    <>
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
                    </>
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigation;
