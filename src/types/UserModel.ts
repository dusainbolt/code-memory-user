export enum Gender {
    FEMALE,
    MALE,
    OTHER,
}

export enum Role {
    USER,
    ADMIN,
}

export enum UserStatus {
    ACTIVE,
    INACTIVE,
    PAUSE,
    BLOCK,
}

export interface User {
    avatar?: string,
    email?: string,
    facebook?: string,
    firstName?: string,
    gender?: Gender,
    id?: string,
    lastName?: string,
    password?: string,
    phone?: string,
    role?: Role,
    status?: UserStatus,
}

export type UserHashCookie = {
    user: User
}