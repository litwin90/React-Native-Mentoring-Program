import React from 'react';
import { Text, TextInput, TouchableHighlight, KeyboardAvoidingView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import ValidationComponent from 'react-native-form-validator';

import styles, { BackgroundGradientColors } from './styles';
import { BaseStyles } from '../../../app.styles';
import FormWarning from '../form-warning/form-warning';

class SignIn extends ValidationComponent {
    constructor(props) {
        super(props);
        this.state = { email: '', password: '' };
        this.emailError = '';
        this.passwordError = '';
        this.defaultEmailPlaceholder = 'Email Address';
        this.defaultPasswordPlaceholder = 'Password';
    }

    checkEmailField() {
        this.validateForm();

        if (this.isFieldInError('email')) {
            this.emailError = this.getErrorsInField('email');
        } else {
            this.emailError = '';
        }
    }

    checkPasswordField() {
        this.validateForm();

        if (this.isFieldInError('password')) {
            this.passwordError = this.getErrorsInField('password');
        } else {
            this.passwordError = '';
        }
    }

    onChangeEmail(email) {
        this.setState({ email });
    }

    onChangePassword(password) {
        this.setState({ password });
    }

    onRestorePassword() {}

    onSignIn() {
        this.checkEmailField();
        this.checkPasswordField();
        if (!this.isFormValid()) {
        } else {
            this.clearForm();
        }
    }

    validateForm() {
        const passwordValidator = new RegExp(
            '^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})',
        );
        this.validate({
            email: { required: true, email: true },
            password: { required: true, any: passwordValidator },
        });
    }

    clearForm() {
        this.emailError = '';
        this.passwordError = '';
        this.setState({ email: '', password: '' });
    }

    onSignUp() {}

    render() {
        return (
            <LinearGradient colors={BackgroundGradientColors} style={styles.container}>
                <KeyboardAvoidingView behavior="position" style={styles.container}>
                    <Text style={styles.title}>Ecommerce Store</Text>
                    <TextInput
                        value={this.state.email}
                        onChangeText={text => this.onChangeEmail(text)}
                        style={styles.input}
                        placeholder={this.defaultEmailPlaceholder}
                        placeholderTextColor={BaseStyles.colors.black}
                        autoCompleteType="email"
                        blurOnSubmit={true}
                        importantForAutofill="yes"
                        keyboardType="email-address"
                        textContentType="emailAddress"
                    />
                    {this.emailError ? <FormWarning error={this.emailError} /> : null}
                    <TextInput
                        value={this.state.password}
                        onChangeText={text => this.onChangePassword(text)}
                        style={styles.input}
                        placeholder={this.defaultPasswordPlaceholder}
                        placeholderTextColor={BaseStyles.colors.black}
                        autoCompleteType="password"
                        importantForAutofill="yes"
                        secureTextEntry={true}
                        textContentType="password"
                    />
                    {this.passwordError ? <FormWarning error={this.passwordError} /> : null}
                    <TouchableHighlight
                        underlayColor={BaseStyles.colors.LinkHighlighUnderlay}
                        hitSlop={BaseStyles.buttonHitSlop}
                        style={styles.restorePassword}
                        onPress={() => this.onRestorePassword()}>
                        <Text style={styles.link}>Forgot Password?</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={styles.signInButton}
                        underlayColor={BaseStyles.colors.lightBlue}
                        hitSlop={BaseStyles.buttonHitSlop}
                        onPress={() => this.onSignIn()}>
                        <Text style={styles.signInText}>Sign in</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        underlayColor={BaseStyles.colors.LinkHighlighUnderlay}
                        hitSlop={BaseStyles.buttonHitSlop}
                        style={styles.signUp}
                        onPress={() => this.onSignUp()}>
                        <Text style={styles.link}>New Here? Sign Up?</Text>
                    </TouchableHighlight>
                </KeyboardAvoidingView>
            </LinearGradient>
        );
    }
}

export default SignIn;
