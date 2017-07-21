import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { CarInfo } from '../cars-model/car-info';

@Injectable()
export class CarServiceProvider {
    currentCarChangedSource: ReplaySubject<CarInfo>;
    currentCarChanged$: Observable<CarInfo>;

    constructor() {
        this.currentCarChangedSource = new ReplaySubject<CarInfo>(1);
        this.currentCarChanged$ = this.currentCarChangedSource.asObservable();
    }

    getCarDetails(car: CarInfo): Observable<CarInfo> {
        return Observable.of<CarInfo>(car);
    }

    setCurrentCar(car: CarInfo | null): void {
        this.currentCarChangedSource.next(car);
    }
}
