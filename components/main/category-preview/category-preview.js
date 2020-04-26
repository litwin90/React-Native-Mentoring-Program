import React from 'react';
import { View, Text, TouchableHighlight, FlatList } from 'react-native';
import { XmlEntities } from 'html-entities';

import styles from './styles';
import { BaseStyles } from '../../../app.styles';
import Product from '../../common/product/product';

const entities = new XmlEntities();

const viewAllGroupItems = () => {};
const getCategoryHeader = category => (
    <View style={styles.itemsHeader}>
        <Text style={styles.itemsHeaderTitle}>{entities.decode(category.name)}</Text>
        <TouchableHighlight
            style={styles.viewAllButton}
            hitSlop={BaseStyles.buttonHitSlop}
            underlayColor={BaseStyles.colors.LinkHighlighUnderlay}
            onPress={() => viewAllGroupItems()}>
            <Text style={styles.viewAllText}>View all</Text>
        </TouchableHighlight>
    </View>
);
const CategoryPreview = ({ category, products, gotoProductDetails }) => {
    return (
        <View style={styles.wrapper}>
            <FlatList
                ListHeaderComponent={() => getCategoryHeader(category)}
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
