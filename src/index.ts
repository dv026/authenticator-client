const url = "https://ts-authenticator.onrender.com"

interface AuthProps {
  login: string
  password: string
}

interface ResetPasswordProps {
  newPassword: string
  token: string
}

interface IUser {
  _id: string
  login: string
  roles: string[]
}

interface AuthResponseProps {
  user: IUser
  accessToken: string
}

export function registration(props: AuthProps) {
  return fetch(`${url}/registration`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify({
      login: props.login,
      password: props.password,
    }),
  }).then((response) => response.json())
}

export function login(props: AuthProps): Promise<AuthResponseProps> {
  return fetch(`${url}/login`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify({
      login: props.login,
      password: props.password,
    }),
  }).then((response) => response.json())
}

export function forgotPassword(login: string) {
  return fetch(`${url}/forgot-password`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify({
      login: login,
    }),
  }).then((response) => response.json())
}

export function resetPassword(resetProps: ResetPasswordProps) {
  return fetch(`${url}/reset-password`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify({
      newPassword: resetProps.newPassword,
      token: resetProps.token,
    }),
  }).then((response) => response.json())
}

export function checkAuth(): Promise<AuthResponseProps> {
  return fetch(`${url}/check-auth`, {
    method: "GET",
    headers: {
      authorization: `Bearer ${localStorage.getItem('accessToken')}`
    }
  }).then((response) => response.json())
}
