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
export declare function registration(props: AuthProps): Promise<any>;
export declare function login(props: AuthProps): Promise<AuthResponseProps>;
export declare function forgotPassword(login: string): Promise<any>;
export declare function resetPassword(resetProps: ResetPasswordProps): Promise<any>;
export declare function checkAuth(): Promise<AuthResponseProps>;
export {};
