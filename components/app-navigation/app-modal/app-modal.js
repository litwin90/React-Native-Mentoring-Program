import React from 'react';
import { useSelector } from 'react-redux';
import { View, Text, Modal, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import styles from './styles';
import { BaseStyles } from '../../../app.styles';
import { AppModalActions } from './app-modal.slice';

export const getHideModalButtonConfig = ({ dispatch, label }) => {
    return {
        action: () => {
            dispatch(AppModalActions.hideModal());
        },
        label,
    };
};

const getButtons = buttonsConfigs => {
    return buttonsConfigs.map((button, index) => (
        <TouchableOpacity
            key={index}
            style={styles.button}
            onPress={() => {
                button.action();
            }}>
            <Text style={styles.buttonText}>{button.label}</Text>
        </TouchableOpacity>
    ));
};

const AppModal = () => {
    const { isVisible, faIcon, message, buttons } = useSelector(state => state.appModal);
    return isVisible ? (
        <Modal animationType="slide" transparent={true} visible={isVisible}>
            <View style={styles.transparentWrapper}>
                <View style={styles.wrapper}>
                    <FontAwesomeIcon
                        icon={faIcon}
                        size={BaseStyles.fontSize.xxl}
                        color={BaseStyles.colors.warning}
                        style={styles.icon}
                    />
                    <Text style={styles.message}>{message}</Text>
                    <View style={styles.buttonsWrapper}>{getButtons(buttons)}</View>
                </View>
            </View>
        </Modal>
    ) : null;
};

export default AppModal;