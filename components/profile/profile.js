import React from 'react';
import { ScrollView } from 'react-native';

import Header from '../common/header/header';

import styles from './styles';
import { MAIN_ROUTES } from '../app-navigation/routes';

const Profile = ({ navigation, route }) => {
    const { title } = route.params;
    const goBack = () => navigation.goBack();
    const goToCart = () => navigation.navigate(MAIN_ROUTES.MY_CART.name, { title: MAIN_ROUTES.MY_CART.title });

    return (
        <ScrollView style={styles.wrapper}>
            <Header title={title} goBack={goBack} goToCart={goToCart} />
        </ScrollView>
    );
};

export default Profile;
