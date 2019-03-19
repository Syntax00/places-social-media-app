import startMainApp from '../../screens/startTabsScreen';

export const TRY_LOGIN = 'TRY_LOGIN';
export const TRY_AUTH_STARTED = 'TRY_AUTH_STARTED';
export const TRY_AUTH_ENDED = 'TRY_AUTH_ENDED';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const SIGNUP_ERROR = 'SIGNUP_ERROR';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';

export const authUser = (authData, authMode) => {
    return dispatch => {
        if (authMode === 'login') {
            dispatch(loginUser(authData));
        } else if (authMode === 'signup') {
            dispatch(signUpUser(authData));
        }
    }
}

export const signUpUser = (userData) => {
    return dispatch => {
        dispatch(tryAuthStart());
        fetch('https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyD_4sjdEXBgmLqhEXs9ZqM5UEGM5d3loPc', {
            method: 'POST',
            body: JSON.stringify({
                email: userData.email,
                password: userData.password,
                returnSecureData: true,
            }),
            'Content-Type': 'application/json',
        })
            .catch(error => {
                dispatch(tryAuthEnd());
                console.log(error);
            })
            .then(response => response.json())
            .then(parsedResponse => {
                console.log('parsedResponse', parsedResponse);
                dispatch(tryAuthEnd());
                if (parsedResponse.error) dispatch(signupErrorOccured(parsedResponse.error.message));
                else {
                    startMainApp();
                    dispatch(authSuccess("Account registered successfully."));
                }
            })
    }
}

export const loginUser = (userData) => {
    return dispatch => {
        dispatch(tryAuthStart());
        fetch('https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyD_4sjdEXBgmLqhEXs9ZqM5UEGM5d3loPc', {
            method: 'POST',
            body: JSON.stringify({
                email: userData.email,
                password: userData.password,
                returnSecureData: true,
            }),
            'Content-Type': 'application/json',
        })
            .catch(error => {
                dispatch(tryAuthEnd());
                console.log(error);
            })
            .then(response => response.json())
            .then(parsedResponse => {
                console.log('parsedResponse', parsedResponse);
                dispatch(tryAuthEnd());
                if (parsedResponse.error) dispatch(loginErrorOccured(parsedResponse.error.message));
                else {
                    startMainApp();
                    dispatch(authSuccess("Logging you in."));
                }
            })
    }
}

export const tryAuthStart = () => ({
    type: TRY_AUTH_STARTED,
});

export const tryAuthEnd = () => ({
    type: TRY_AUTH_ENDED,
});

export const loginErrorOccured = (error) => {
    let errorMessage;
    if (error === 'INVALID_EMAIL') errorMessage = 'Invalid email was sent to our server.';
    else if (error === 'MISSING_PASSWORD') errorMessage = 'You have to insert a password.'
    else if (error === 'EMAIL_EXISTS') errorMessage = 'This email already exists.';

    return {
        type: LOGIN_ERROR,
        errorMessage,
    }
}

export const signupErrorOccured = (error) => {
    let errorMessage;
    if (error === 'INVALID_EMAIL') errorMessage = 'Invalid email was sent to our server.';
    else if (error === 'MISSING_PASSWORD') errorMessage = 'You have to insert a password.'
    else if (error === 'EMAIL_EXISTS') errorMessage = 'This email already exists.';

    return {
        type: SIGNUP_ERROR,
        errorMessage,
    }
}
export const authSuccess = (successMessage) => ({
    type: AUTH_SUCCESS,
    successMessage,
});
