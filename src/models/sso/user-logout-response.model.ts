export class UserLogoutResponseModel {
    status: string;
    userInfo: null;

    constructor(status: string, userInfo: null) {
        this.status = status || '';
        this.userInfo = userInfo;
    }
}
