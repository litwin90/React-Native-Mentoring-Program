import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

const FormWarning = ({ error }) => (
    <View style={styles.errorContainer}>
        <Text style={styles.error}>{error}</Text>
    </View>
);

export default FormWarning;
