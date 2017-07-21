import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserProvider } from "../../providers/user/user";
import { UserModel } from "../../models/user/user.model";
import { Subscription } from "rxjs/Subscription";


@Component({
  selector: 'user-widget',
  templateUrl: 'user-widget.html'
})
export class UserWidgetComponent implements OnInit, OnDestroy {
  private currentUserSubscription: Subscription;
  public userInfo: UserModel | null;

  constructor(private userProvider: UserProvider) {
  }

  ngOnInit(): void {
    this.currentUserSubscription = this.userProvider.currentUserChanged$
        .subscribe((currentUser: UserModel | null) => {
          this.userInfo = currentUser;
        })
  }

  ngOnDestroy(): void {
    this.currentUserSubscription.unsubscribe();
  }

  public isUserLoggined(): boolean {
    return Boolean(this.userInfo)
  }

  public goToRegisterPage(): void {
  }

  public goToLogginPage(): void {
  }
}
