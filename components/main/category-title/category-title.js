import React from 'react';
import { TouchableHighlight, View, Text, Image } from 'react-native';
import { XmlEntities } from 'html-entities';

import styles from './styles';
import { BaseStyles } from '../../../app.styles';

const entities = new XmlEntities();

const CategoryTitle = ({ category, openCategoryProductList }) => {
    return (
        <TouchableHighlight
            hitSlop={BaseStyles.buttonHitSlop}
            onPress={() => {
                openCategoryProductList(category);
            }}>
            <View style={styles.group}>
                <View style={styles.groupImageWrapper}>
                    <Image source={{ uri: `http:${category.thumb}` }} style={styles.groupImage} />
                </View>
                <Text style={BaseStyles.groupName}>{entities.decode(category.name)}</Text>
            </View>
        </TouchableHighlight>
    );
};

export default CategoryTitle;
