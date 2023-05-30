const url = "https://ts-authenticator.onrender.com";
function registration(props, apiKey) {
    return fetch(`${url}/registration`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
            'API-KEY': apiKey,
        },
        body: JSON.stringify({
            login: props.login,
            password: props.password,
        }),
    }).then((response) => response.json());
}
function login(props, apiKey) {
    return fetch(`${url}/login`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
            'API-KEY': apiKey,
        },
        body: JSON.stringify({
            login: props.login,
            password: props.password,
        }),
    }).then((response) => response.json());
}
function forgotPassword(login, apiKey) {
    return fetch(`${url}/forgot-password`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
            'API-KEY': apiKey,
        },
        body: JSON.stringify({
            login: login,
        }),
    }).then((response) => response.json());
}
function resetPassword(resetProps, apiKey) {
    return fetch(`${url}/reset-password`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
            'API-KEY': apiKey,
        },
        body: JSON.stringify({
            newPassword: resetProps.newPassword,
            token: resetProps.token,
        }),
    }).then((response) => response.json());
}
function checkAuth() {
    return fetch(`${url}/check-auth`, {
        method: "GET",
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then((response) => response.json());
}
export function authenticator(apiKey) {
    return {
        registration: (props) => registration(props, apiKey),
        forgotPassword: (login) => forgotPassword(login, apiKey),
        login: (props) => login(props, apiKey),
        resetPassword: (resetProps) => resetPassword(resetProps, apiKey),
        checkAuth: checkAuth,
    };
}
