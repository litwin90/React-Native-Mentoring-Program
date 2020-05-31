import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import style from './styles';
import { BaseStyles } from '../../../app.styles';

export default function CenterView({ color, children }) {
    return <View style={[style.main, { backgroundColor: color ? color : BaseStyles.colors.white }]}>{children}</View>;
}

CenterView.defaultProps = {
    children: null,
};

CenterView.propTypes = {
    children: PropTypes.node,
};
