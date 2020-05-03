import React from 'react';
import { View, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import SearchIcon from '../../search-icon/search-icon';

import { BaseStyles } from '../../../../app.styles';
import styles from './styles';
import { ICON_NAMES } from '../../../../app/app-constants';

const RightIconGroup = ({ toggleSearch, isSearchVisible }) => (
    <View style={styles.wrapper}>
        <TouchableHighlight
            underlayColor={BaseStyles.colors.transparent}
            hitSlop={BaseStyles.buttonHitSlop}
            onPress={toggleSearch}>
            <SearchIcon needToDisplay={!isSearchVisible} color={BaseStyles.colors.white} />
        </TouchableHighlight>
        <TouchableHighlight
            hitSlop={BaseStyles.buttonHitSlop}
            underlayColor={BaseStyles.colors.LinkHighlighUnderlay}
            onPress={() => {
                console.log('open wishlist');
            }}>
            <Icon name={ICON_NAMES.CART} size={BaseStyles.fontSize.l} color={BaseStyles.colors.white} />
        </TouchableHighlight>
    </View>
);

export default RightIconGroup;
