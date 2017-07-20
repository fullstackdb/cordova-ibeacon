import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import { Subject } from "rxjs/Subject";


@Injectable()
export class CarServiceProvider {
  currentCarChangedSource = new Subject<string | null>();  
  currentCarChanged$ = this.currentCarChangedSource.asObservable();

  constructor(public http: Http) {
  }

  getCarDetails(id: string): Observable<any> {
    return Observable.of<any>({name: 'Try CarService'})
  }

  setCurrentCar(carId: string | null): void {
    this.currentCarChangedSource.next(carId);
  }
}
