import React from 'react';
import { useSelector } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import ProductDetails from '../product-details/product-details';
import AuthNavigation from './auth-navigation';
import Drawer from './drawer-navigation/drawer-navigation';

import { MAIN_ROUTES } from './routes';

const Stack = createStackNavigator();

const AppNavigation = () => {
    const { isSignedIn } = useSelector(state => state.auth);
    return (
        <NavigationContainer>
            <Stack.Navigator>
                {isSignedIn ? (
                    <>
                        <Stack.Screen
                            name={MAIN_ROUTES.MAIN}
                            component={Drawer}
                            options={{
                                header: () => null,
                            }}
                        />
                        <Stack.Screen
                            name={MAIN_ROUTES.PRODUCT_DETAILS}
                            component={ProductDetails}
                            options={({ route }) => ({
                                title: route.params.product.name,
                                header: () => null,
                            })}
                        />
                    </>
                ) : (
                    <Stack.Screen
                        name={MAIN_ROUTES.AUTH}
                        component={AuthNavigation}
                        options={{
                            header: () => null,
                        }}
                    />
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigation;
