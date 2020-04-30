import React from 'react';
import { View, Text, TouchableHighlight, FlatList } from 'react-native';
import { XmlEntities } from 'html-entities';

import styles from './styles';
import { BaseStyles } from '../../../app.styles';
import Product from '../../common/product/product';

const entities = new XmlEntities();

const getCategoryHeader = ({ category, openCategoryProductList }) => (
    <View style={styles.itemsHeader}>
        <Text style={styles.itemsHeaderTitle}>{entities.decode(category.name)}</Text>
        <TouchableHighlight
            style={styles.viewAllButton}
            hitSlop={BaseStyles.buttonHitSlop}
            underlayColor={BaseStyles.colors.LinkHighlighUnderlay}
            onPress={() => {
                openCategoryProductList(category);
            }}>
            <Text style={styles.viewAllText}>View all</Text>
        </TouchableHighlight>
    </View>
);
const CategoryPreview = ({ category, products, gotoProductDetails, openCategoryProductList }) => {
    return (
        <View style={styles.wrapper}>
            <FlatList
                ListHeaderComponent={() => getCategoryHeader({ category, openCategoryProductList })}
                data={products}
                renderItem={({ item }) => {
                    return (
                        <Product
                            item={item}
                            key={item.id}
                            gotoProductDetails={() => {
                                gotoProductDetails(item);
                            }}
                        />
                    );
                }}
                keyExtractor={item => item.id}
                numColumns={2}
            />
        </View>
    );
};

export default CategoryPreview;
