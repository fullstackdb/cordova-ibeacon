import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Subject } from "rxjs/Subject";
import { Observable } from "rxjs/Observable";


@Injectable()
export class TutorialProvider {
  private tutorialRequestedSource: Subject<boolean> = new Subject<boolean>(); 
  public  tutorialRequested$: Observable<boolean> = this.tutorialRequestedSource.asObservable();
  
  constructor(public http: Http) {
  }

  showTutorial(): void {
    this.tutorialRequestedSource.next(true);
  }

  hideTutorial(): void {
    this.tutorialRequestedSource.next(false);
  }
}
