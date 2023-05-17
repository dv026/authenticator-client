const url = "https://ts-authenticator.onrender.com";
export function registration(props) {
    return fetch(`${url}/registration`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({
            login: props.login,
            password: props.password,
        }),
    }).then((response) => response.json());
}
export function login(props) {
    return fetch(`${url}/login`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({
            login: props.login,
            password: props.password,
        }),
    }).then((response) => response.json());
}
export function forgotPassword(login) {
    return fetch(`${url}/forgot-password`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({
            login: login,
        }),
    }).then((response) => response.json());
}
export function resetPassword(resetProps) {
    return fetch(`${url}/reset-password`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({
            newPassword: resetProps.newPassword,
            token: resetProps.token,
        }),
    }).then((response) => response.json());
}
export function checkAuth() {
    return fetch(`${url}/check-auth`, {
        method: "GET",
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then((response) => response.json());
}
