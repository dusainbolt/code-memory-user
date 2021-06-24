export interface LoginInput {
    credential: string;
    password: string;
}


export interface Login {
    token?: string,
    messageError?: string,
}