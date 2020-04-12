import React from 'react';
import { Text, TextInput, TouchableHighlight, KeyboardAvoidingView, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useDispatch, useSelector } from 'react-redux';

import styles, { BackgroundGradientColors } from './styles';
import { BaseStyles } from '../../../app.styles';
import FormWarning from '../form-warning/form-warning';
import { fetchSignIn, setSignInEmail, setSignInPassword, setSignInUserName } from '../authSlice';
import { isEmail } from '../utils';

function onChangeEmailField(dispatch, text) {
    if (isEmail(text)) {
        dispatch(setSignInEmail({ email: text }));
    } else {
        dispatch(setSignInUserName({ userName: text }));
    }
}

function onChangePasswordField(dispatch, password) {
    dispatch(setSignInPassword({ password }));
}

function restorePassword() {}

function requestSignIn(dispatch, { email, userName, password }) {
    dispatch(fetchSignIn({ email, userName, password }));
}

function goToSignUp(navigation) {
    navigation.navigate('SignUp');
}

const SignIn = ({ navigation }) => {
    const dispatch = useDispatch();

    const { email, password, userName } = useSelector(state => state.auth.signInForm);
    const { signInError } = useSelector(state => state.auth);

    const defaultEmailPlaceholder = 'Email Address or Login';
    const defaultPasswordPlaceholder = 'Password';

    return (
        <ScrollView>
            <LinearGradient colors={BackgroundGradientColors} style={styles.container}>
                <KeyboardAvoidingView behavior="position" style={styles.container}>
                    <Text style={styles.title}>Ecommerce Store</Text>
                    <TextInput
                        value={email || userName}
                        onChangeText={text => onChangeEmailField(dispatch, text)}
                        style={styles.input}
                        placeholder={defaultEmailPlaceholder}
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
                        placeholder={defaultPasswordPlaceholder}
                        placeholderTextColor={BaseStyles.colors.black}
                        autoCompleteType="password"
                        importantForAutofill="yes"
                        secureTextEntry={true}
                        textContentType="password"
                    />
                    {signInError ? <FormWarning error={signInError} /> : null}
                    <TouchableHighlight
                        underlayColor={BaseStyles.colors.LinkHighlighUnderlay}
                        hitSlop={BaseStyles.buttonHitSlop}
                        style={styles.restorePassword}
                        onPress={() => restorePassword()}>
                        <Text style={styles.link}>Forgot Password?</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={styles.signInButton}
                        underlayColor={BaseStyles.colors.lightBlue}
                        hitSlop={BaseStyles.buttonHitSlop}
                        onPress={() =>
                            requestSignIn(dispatch, {
                                email,
                                password,
                                userName,
                            })
                        }>
                        <Text style={styles.signInText}>Sign in</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        underlayColor={BaseStyles.colors.LinkHighlighUnderlay}
                        hitSlop={BaseStyles.buttonHitSlop}
                        style={styles.signUp}
                        onPress={() => goToSignUp(navigation)}>
                        <Text style={styles.link}>New Here? Sign Up?</Text>
                    </TouchableHighlight>
                </KeyboardAvoidingView>
            </LinearGradient>
        </ScrollView>
    );
};

export default SignIn;
