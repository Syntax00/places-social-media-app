export const TRY_LOGIN = 'TRY_LOGIN';

export const tryLogin = (loginData) => ({
    type: TRY_LOGIN,
    loginData,
})