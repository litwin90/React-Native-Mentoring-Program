import React, { useEffect } from 'react';
import { Text, TextInput, TouchableHighlight, KeyboardAvoidingView, ScrollView, LayoutAnimation } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useDispatch, useSelector } from 'react-redux';

import styles, { BackgroundGradientColors } from './styles';
import { BaseStyles } from '../../../app.styles';
import FormWarning from '../form-warning/form-warning';
import { AuthActions, fetchSignIn } from '../auth.slice';
import { isEmail } from '../utils';
import { AUTH_ROUTES } from '../../app-navigation/routes';
import LoadingIndicator from '../../common/loading-indicator/loading-indicator';

function onChangeEmailField(dispatch, text) {
    if (isEmail(text)) {
        dispatch(AuthActions.setSignInEmail({ email: text }));
    } else {
        dispatch(AuthActions.setSignInUserName({ userName: text }));
    }
}

function onChangePasswordField(dispatch, password) {
    dispatch(AuthActions.setSignInPassword({ password }));
}

function restorePassword({ navigation }) {
    navigation.navigate('RestorePassword');
}

function requestSignIn(dispatch, { email, userName, password }) {
    dispatch(fetchSignIn({ email, userName, password }));
}

function goToSignUp(navigation) {
    navigation.navigate(AUTH_ROUTES.SIGN_OUT);
}

const SignIn = ({ navigation }) => {
    const dispatch = useDispatch();

    const { email, password, userName } = useSelector(state => state.auth.signInForm);
    const { signInError, isLoading } = useSelector(state => state.auth);

    useEffect(() => {
        LayoutAnimation.easeInEaseOut();
    });

    return (
        <LinearGradient colors={BackgroundGradientColors} style={styles.container}>
            <ScrollView>
                <KeyboardAvoidingView behavior="position" style={styles.container}>
                    <Text style={styles.title}>Ecommerce Store</Text>
                    <TextInput
                        value={email || userName}
                        onChangeText={text => onChangeEmailField(dispatch, text)}
                        style={styles.input}
                        placeholder="Email Address or Login"
                        placeholderTextColor={BaseStyles.colors.black}
                        autoCompleteType="email"
                        blurOnSubmit={true}
                        importantForAutofill="yes"
                        keyboardType="email-address"
                        textContentType="emailAddress"
                    />
                    <TextInput
                        value={password}
                        onChangeText={updatePassword => onChangePasswordField(dispatch, updatePassword)}
                        style={styles.input}
                        placeholder="Password"
                        placeholderTextColor={BaseStyles.colors.black}
                        autoCompleteType="password"
                        importantForAutofill="yes"
                        secureTextEntry={true}
                        textContentType="password"
                    />
                    <FormWarning error={signInError} />
                    <TouchableHighlight
                        underlayColor={BaseStyles.colors.LinkHighlighUnderlay}
                        hitSlop={BaseStyles.buttonHitSlop}
                        style={styles.restorePassword}
                        onPress={() => restorePassword({ navigation })}>
                        <Text style={styles.link}>Forgot Password?</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={isLoading ? styles.signInButtonCollapsed : styles.signInButton}
                        underlayColor={BaseStyles.colors.lightBlue}
                        hitSlop={BaseStyles.buttonHitSlop}
                        onPress={() => {
                            if (!isLoading) {
                                LayoutAnimation.easeInEaseOut();
                                requestSignIn(dispatch, {
                                    email,
                                    password,
                                    userName,
                                });
                            }
                        }}>
                        {isLoading ? (
                            <LoadingIndicator />
                        ) : (
                            <Text style={styles.signInText}>{signInError ? 'Try Again' : 'Sign In'}</Text>
                        )}
                    </TouchableHighlight>
                    <TouchableHighlight
                        underlayColor={BaseStyles.colors.LinkHighlighUnderlay}
                        hitSlop={BaseStyles.buttonHitSlop}
                        style={styles.signUp}
                        onPress={() => goToSignUp(navigation)}>
                        <Text style={styles.link}>New Here? Sign Up?</Text>
                    </TouchableHighlight>
                </KeyboardAvoidingView>
            </ScrollView>
        </LinearGradient>
    );
};

export default SignIn;
