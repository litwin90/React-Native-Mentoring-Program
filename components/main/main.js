import React, { useEffect } from 'react';
import { ScrollView, View, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import CategoryTitle from './category-title/category-title';
import CategoryPreview from './category-preview/category-preview';
import styles from './styles';
import Header from '../common/header/header';
import Divider from '../common/divider/divider';
import Warning from '../auth/form-warning/form-warning';
import { MAIN_ROUTES } from '../app-navigation/routes';
import { fetchCategories } from './mainSlice';
import { BaseStyles } from '../../app.styles';

const openMenu = navigation => {
    navigation.openDrawer();
};
const getCategoriesList = categories => {
    return categories.map(category => {
        return <CategoryTitle category={category} key={category.category_id} />;
    });
};
const gotoProductDetails = ({ navigation, product }) => {
    navigation.navigate(MAIN_ROUTES.PRODUCT_DETAILS.name, { product: product });
};

const Main = ({ navigation }) => {
    const dispatch = useDispatch();

    const { categories, isLoading, error, productsByCategoryId } = useSelector(state => state.main);

    useEffect(() => {
        if (!isLoading && !error && !categories.length) {
            dispatch(fetchCategories());
        }
    });

    return (
        <View style={styles.wrapper}>
            <Header
                title="Products"
                needToShowMenuButton={true}
                openMenu={() => {
                    openMenu(navigation);
                }}
            />
            {isLoading ? (
                <ActivityIndicator size="large" color={BaseStyles.colors.lightBlue} style={styles.spinner} />
            ) : error ? (
                <Warning error={error} />
            ) : (
                <>
                    <View>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            <View style={styles.groups}>{getCategoriesList(categories)}</View>
                        </ScrollView>
                    </View>
                    <Divider />
                    <View>
                        <ScrollView style={styles.items}>
                            {categories.map(category => {
                                return (
                                    <CategoryPreview
                                        category={category}
                                        products={productsByCategoryId[category.category_id]}
                                        gotoProductDetails={product => {
                                            gotoProductDetails({ navigation, product });
                                        }}
                                        key={category.category_id}
                                    />
                                );
                            })}
                        </ScrollView>
                    </View>
                </>
            )}
        </View>
    );
};

export default Main;
