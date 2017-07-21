import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { UserProvider } from "../user/user";
import { SsoApiProvider } from "../sso-api/sso-api";
import { Observable } from "rxjs/Observable";
import { UserLoginResponseModel } from "../../models/sso/user-login-response.model";
import { UserLoginFormModel } from "../../models/sso/user-login-form.model";
import { UserRegistrationFormModel } from "../../models/sso/user-registration-form.model";
import { UserModel } from "../../models/user/user.model";


@Injectable()
export class SsoProvider {

  constructor(private ssoApiProvider: SsoApiProvider,
              private userProvider: UserProvider) {
  }

  public login(userLoginForm: UserLoginFormModel): Observable<UserModel> {
    return this.ssoApiProvider.login(userLoginForm)
                .map((userLoginResponse: UserLoginResponseModel) => {
                  this.userProvider.setCurrentUser(userLoginResponse.userInfo);
                  return userLoginResponse.userInfo;
                })
  }

  public register(userRegistrationForm: UserRegistrationFormModel): Observable<UserModel> {
    return this.ssoApiProvider.register(userRegistrationForm)
                .map((userRegisterResponse: UserLoginResponseModel) => {
                  this.userProvider.setCurrentUser(userRegisterResponse.userInfo);
                  return userRegisterResponse.userInfo;
                })
  }

  public logout(): Observable<string> {
    return this.ssoApiProvider.logout()
                .map((userLogoutResponse: UserLoginResponseModel) => {
                  this.userProvider.setCurrentUser(userLogoutResponse.userInfo);
                  return userLogoutResponse.status;
                })
  }

}
