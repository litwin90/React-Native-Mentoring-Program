import React from 'react';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { View, Text } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
    faUser,
    faHeart,
    faShoppingCart,
    faCartArrowDown,
    faEnvelope,
    faPhoneAlt,
    faShareAlt,
} from '@fortawesome/free-solid-svg-icons';

import { MAIN_ROUTES } from '../routes';
import Main from '../../main/main';
import FakeText from '../fake-component';
import styles from './styles';
import { BaseStyles } from '../../../app.styles';

const Drawer = createDrawerNavigator();

function CustomDrawerContent({ navigation }) {
    return (
        <DrawerContentScrollView style={styles.wrapper}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Ecommerce Store</Text>
            </View>
            <View style={styles.group}>
                <View style={styles.groupHeader}>
                    <Text style={styles.groupHeaderTitle}>My Account</Text>
                </View>
                <DrawerItem
                    label="My Profile"
                    labelStyle={styles.itemLabel}
                    style={styles.item}
                    icon={() => (
                        <FontAwesomeIcon
                            style={styles.itemIcon}
                            icon={faUser}
                            size={BaseStyles.fontSize.l}
                            color={BaseStyles.colors.blue}
                        />
                    )}
                    onPress={() => navigation.navigate(MAIN_ROUTES.PROFILE)}
                />
                <DrawerItem
                    label="My Wish List"
                    labelStyle={styles.itemLabel}
                    style={styles.item}
                    icon={() => (
                        <FontAwesomeIcon
                            style={styles.itemIcon}
                            icon={faHeart}
                            size={BaseStyles.fontSize.l}
                            color={BaseStyles.colors.blue}
                        />
                    )}
                    onPress={() => navigation.navigate(MAIN_ROUTES.WISH_LIST)}
                />
                <DrawerItem
                    label="My Cart"
                    labelStyle={styles.itemLabel}
                    style={styles.item}
                    icon={() => (
                        <FontAwesomeIcon
                            style={styles.itemIcon}
                            icon={faShoppingCart}
                            size={BaseStyles.fontSize.l}
                            color={BaseStyles.colors.blue}
                        />
                    )}
                    onPress={() => navigation.navigate(MAIN_ROUTES.MY_CART)}
                />
                <DrawerItem
                    label="My Orders"
                    labelStyle={styles.itemLabel}
                    style={styles.item}
                    icon={() => (
                        <FontAwesomeIcon
                            style={styles.itemIcon}
                            icon={faCartArrowDown}
                            size={BaseStyles.fontSize.l}
                            color={BaseStyles.colors.blue}
                        />
                    )}
                    onPress={() => navigation.navigate(MAIN_ROUTES.MY_ORDERS)}
                />
            </View>

            <View style={styles.group}>
                <View style={styles.groupHeader}>
                    <Text style={styles.groupHeaderTitle}>Support</Text>
                </View>
                <DrawerItem
                    label="Email"
                    labelStyle={styles.itemLabel}
                    style={styles.item}
                    icon={() => (
                        <FontAwesomeIcon
                            style={styles.itemIcon}
                            icon={faEnvelope}
                            size={BaseStyles.fontSize.l}
                            color={BaseStyles.colors.blue}
                        />
                    )}
                    onPress={() => navigation.navigate(MAIN_ROUTES.MY_ORDERS)}
                />
                <DrawerItem
                    label="Call"
                    labelStyle={styles.itemLabel}
                    style={styles.item}
                    icon={() => (
                        <FontAwesomeIcon
                            style={styles.itemIcon}
                            icon={faPhoneAlt}
                            size={BaseStyles.fontSize.l}
                            color={BaseStyles.colors.blue}
                        />
                    )}
                    onPress={() => navigation.navigate(MAIN_ROUTES.MY_ORDERS)}
                />
            </View>

            <View style={styles.group}>
                <View style={styles.groupHeader}>
                    <Text style={styles.groupHeaderTitle}>Others</Text>
                </View>
                <DrawerItem
                    label="Share"
                    labelStyle={styles.itemLabel}
                    style={styles.item}
                    icon={() => (
                        <FontAwesomeIcon
                            style={styles.itemIcon}
                            icon={faShareAlt}
                            size={BaseStyles.fontSize.l}
                            color={BaseStyles.colors.blue}
                        />
                    )}
                    onPress={() => navigation.navigate(MAIN_ROUTES.MY_ORDERS)}
                />
            </View>
        </DrawerContentScrollView>
    );
}

const MainDrawer = () => (
    <Drawer.Navigator initialRouteName={MAIN_ROUTES.MAIN} drawerContent={CustomDrawerContent}>
        <Drawer.Screen name={MAIN_ROUTES.MAIN} component={Main} />
        <Drawer.Screen name={MAIN_ROUTES.PROFILE} component={FakeText} />
        <Drawer.Screen name={MAIN_ROUTES.WISH_LIST} component={FakeText} />
        <Drawer.Screen name={MAIN_ROUTES.MY_CART} component={FakeText} />
        <Drawer.Screen name={MAIN_ROUTES.MY_ORDERS} component={FakeText} />
    </Drawer.Navigator>
);

export default MainDrawer;
