import { UserModel } from "../user/user.model";

export class UserLoginResponseModel {
    status: string;
    userInfo: UserModel;

    constructor(status: string, userInfo: UserModel) {
        this.status = status || '';
        this.userInfo = userInfo || {} as UserModel;
    }
}
