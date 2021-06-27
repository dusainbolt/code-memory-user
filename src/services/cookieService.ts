import { LoginHashCookie } from '@Models/login-dto';
import { User, UserHashCookie } from '@Models/user.dto';
import HashService from './hashService';
export default class CookieService {
    instance = null;
    hashService: HashService = null;
    readonly KEY_LOGIN_COOKIE = "__login";
    readonly KEY_USER_COOKIE = "__user";
    readonly EXPIRES_DEFAULT = 14;

    constructor() {
        this.instance = require('js-cookie');
        this.hashService = new HashService();
    }

    setByHashAES = (key: string, data: any, expires = this.EXPIRES_DEFAULT): void => {
        // using hash service to hash data
        const dataHash = this.hashService.hashCryptoAES(data);
        // set data hash to cookie
        this.instance.set(key, dataHash, { expires });
    };

    setLoginCookie = (token: string): void => {
        // set by hashAES
        this.setByHashAES(this.KEY_LOGIN_COOKIE, { token } as LoginHashCookie);
    };

    setUserCookie = (user: User): void => {
        // set by hashAES
        this.setByHashAES(this.KEY_USER_COOKIE, { user } as UserHashCookie);
    }

    getUserCookie = (): User => {
        const userHash = this.instance.get(this.KEY_USER_COOKIE);
        const { user } = this.hashService.unHashCryptoAES(userHash);
        return user;
    }

    getLoginCookie = (): string => {
        const loginHash = this.instance.get(this.KEY_LOGIN_COOKIE);
        const { token } = this.hashService.unHashCryptoAES(loginHash);
        return token;
    }

}