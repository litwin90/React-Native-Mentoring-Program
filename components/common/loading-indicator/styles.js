import { StyleSheet } from 'react-native';
import { BaseStyles } from '../../../app.styles';

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
    },
    point: {
        width: 7,
        height: 7,
        borderRadius: 7,
        backgroundColor: BaseStyles.colors.white,
        marginLeft: 2,
        marginRight: 2,
    },
});

export default styles;
