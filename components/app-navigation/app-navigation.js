import React from 'react';
import { useSelector } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import ProductDetails from '../product-details/product-details';
import AuthNavigation from './auth-navigation';
import Drawer from './drawer-navigation/drawer-navigation';

import { MAIN_ROUTES } from './routes';
import ProductList from '../product-list/product-list';

const Stack = createStackNavigator();

const AppNavigation = () => {
    const { isSignedIn } = useSelector(state => state.auth);
    return (
        <NavigationContainer>
            <Stack.Navigator>
                {isSignedIn ? (
                    <>
                        <Stack.Screen
                            name={MAIN_ROUTES.MAIN.name}
                            component={Drawer}
                            options={{
                                header: () => null,
                            }}
                        />
                        <Stack.Screen
                            name={MAIN_ROUTES.PRODUCT_DETAILS.name}
                            component={ProductDetails}
                            options={({ route }) => {
                                return {
                                    title: route.params.product.cell.name,
                                    header: () => null,
                                };
                            }}
                        />
                        <Stack.Screen
                            name={MAIN_ROUTES.PRODUCT_LIST.name}
                            component={ProductList}
                            options={{
                                header: () => null,
                            }}
                        />
                    </>
                ) : (
                    <Stack.Screen
                        name={MAIN_ROUTES.AUTH.name}
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
