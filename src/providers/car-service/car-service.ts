import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import { Subject } from 'rxjs/Subject';
import { CarInfo } from '../cars-model/car-info';

@Injectable()
export class CarServiceProvider {
    currentCarChangedSource = new Subject<CarInfo>();
    currentCarChanged$ = this.currentCarChangedSource.asObservable();

    constructor(public http: Http) {
    }

    getCarDetails(car: CarInfo): Observable<CarInfo> {
        return Observable.of<CarInfo>(car);
    }

    setCurrentCar(car: CarInfo | null): void {
        this.currentCarChangedSource.next(car);
    }
}
