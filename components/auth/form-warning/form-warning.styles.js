import {StyleSheet} from 'react-native';

import {BaseStylesSets, BaseStyles} from '../../../app.styles';

export const WarningStyles = StyleSheet.create({
    errorContainer: {
        ...BaseStylesSets.containerRightLeftMargins,
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: 'transparent',
    },
    error: {
        color: BaseStyles.colors.red,
        fontSize: BaseStyles.fontSize.small,
    },
});
