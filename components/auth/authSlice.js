import { createSlice } from '@reduxjs/toolkit';

import { signIn } from '../../app/services/auth';

const initialState = {
    isSignedIn: false,
    isLoading: false,
    userToken: undefined,
    signInError: undefined,
    signInForm: {
        userName: undefined,
        email: undefined,
        password: undefined,
    },
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        signInRequest(state, action) {
            if (!state.isSignedIn) {
                state.isLoading = true;
            }
        },
        getSuccessSignIn(state, action) {
            state.isLoading = false;
            state.userToken = action.payload.token;
            state.isSignedIn = true;
        },
        getFailedSignIn(state, action) {
            state.isLoading = false;
            state.signInError = action.payload.error;
            state.isSignedIn = false;
        },
        signOutRequest(state, action) {
            if (state.isSignedIn) {
                state.isLoading = true;
            }
        },
        getSuccessSignOut(state, action) {
            state = initialState;
        },
        setSignInEmail(state, action) {
            state.signInForm.email = action.payload.email;
            state.signInForm.userName = undefined;
        },
        setSignInUserName(state, action) {
            state.signInForm.email = undefined;
            state.signInForm.userName = action.payload.userName;
        },
        setSignInPassword(state, action) {
            state.signInForm.password = action.payload.password;
        },
    },
});

export const {
    signInRequest,
    signOutRequest,
    getFailedSignIn,
    getSuccessSignIn,
    getSuccessSignOut,
    setSignInEmail,
    setSignInUserName,
    setSignInPassword,
} = authSlice.actions;

export default authSlice.reducer;

export const fetchSignIn = ({ email, userName, password }) => dispatch => {
    dispatch(signInRequest());
    signIn({ email, userName, password }).then(signInResult => {
        if (signInResult.status === 1) {
            dispatch(getSuccessSignIn({ token: signInResult.token }));
        } else {
            dispatch(getFailedSignIn({ error: signInResult.error }));
        }
    });
};
