import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from "rxjs/Observable";
import { ReplaySubject } from "rxjs/ReplaySubject";
import { UserModel } from "../../models/user/user.model";


@Injectable()
export class UserProvider {
  private currentUser: UserModel | null;
  private currentUserChangedSource: ReplaySubject<UserModel>;
  public currentUserChanged$: Observable<UserModel>;
  
  constructor() {
    this.currentUserChangedSource = new ReplaySubject(1);
    this.currentUserChanged$ = this.currentUserChangedSource.asObservable();
    this.currentUserChangedSource.next({name: 'Mock', forename: 'User', email: 'mock@site.com'} as UserModel);
  }

  public setCurrentUser(user: UserModel | null): void {
    this.currentUser = user;
    this.currentUserChangedSource.next(this.currentUser);
  }

  public getCurrentUser(): UserModel | null {
    return this.currentUser;
  }

}
