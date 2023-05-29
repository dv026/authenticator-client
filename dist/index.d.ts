interface AuthProps {
    login: string;
    password: string;
}
interface ResetPasswordProps {
    newPassword: string;
    token: string;
}
interface IUser {
    _id: string;
    login: string;
    roles: string[];
}
interface AuthResponseProps {
    user: IUser;
    accessToken: string;
}

export declare function authenticator(apiKey: string): {
    registration: (props: AuthProps) => Promise<any>
    login: (props: AuthProps) => Promise<AuthResponseProps>
    forgotPassword: (login: string) => Promise<any>
    resetPassword: (resetProps: ResetPasswordProps) => Promise<any>
    checkAuth: () => Promise<AuthResponseProps>
}
