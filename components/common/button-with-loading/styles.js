import { StyleSheet } from 'react-native';

import { BaseStyles } from '../../../app.styles';

const styles = StyleSheet.create({
    signInButton: {
        width: 350,
        backgroundColor: BaseStyles.colors.blue,
        padding: BaseStyles.padding.m,
        margin: BaseStyles.margin.l,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    signInButtonCollapsed: {
        width: 100,
        backgroundColor: BaseStyles.colors.blue,
        padding: BaseStyles.padding.m,
        margin: BaseStyles.margin.l,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    signInText: {
        color: BaseStyles.colors.white,
        textTransform: 'uppercase',
        fontSize: BaseStyles.fontSize.m,
    },
});

export default styles;
