import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Observable";
import { UserLoginFormModel } from "../../models/sso/user-login-form.model";
import { UserLoginResponseModel } from "../../models/sso/user-login-response.model";
import { UserRegistrationFormModel } from "../../models/sso/user-registration-form.model";
import { UserLogoutResponseModel } from "../../models/sso/user-logout-response.model";
import { UserModel } from "../../models/user/user.model";


@Injectable()
export class SsoApiProvider {

  constructor(private http: Http) {
  }

  public login(userLoginForm: UserLoginFormModel): Observable<UserLoginResponseModel> {
    return Observable.of(new UserLoginResponseModel('success', {name: 'Mock', forename: 'User', email: 'mock@site.com'} as UserModel));
  }

  public register(userRegistrationForm: UserRegistrationFormModel): Observable<UserLoginResponseModel> {
    return Observable.of(new UserLoginResponseModel('success', {name: 'Mock', forename: 'User', email: 'mock@site.com'} as UserModel));
  }

  public logout(): Observable<UserLogoutResponseModel> {
    return Observable.of(new UserLogoutResponseModel('success', null));
  }
}
