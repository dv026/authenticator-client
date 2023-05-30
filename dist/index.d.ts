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
declare function checkAuth(): Promise<AuthResponseProps>;
export declare function authenticator(apiKey: string): {
    registration: (props: AuthProps) => Promise<any>;
    forgotPassword: (login: string) => Promise<any>;
    login: (props: AuthProps) => Promise<AuthResponseProps>;
    resetPassword: (resetProps: ResetPasswordProps) => Promise<any>;
    checkAuth: typeof checkAuth;
};
export {};
