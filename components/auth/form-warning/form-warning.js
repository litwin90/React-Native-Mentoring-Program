import React from 'react';
import { View, Text } from 'react-native';

import { WarningStyles } from './styles';

export const FormWarning = props => (
    <View style={WarningStyles.errorContainer}>
        <Text style={WarningStyles.error}>{props.error}</Text>
    </View>
);
