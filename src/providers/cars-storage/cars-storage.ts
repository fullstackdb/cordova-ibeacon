import { Inject, Injectable, InjectionToken } from '@angular/core';
import 'rxjs/add/operator/map';
import { fromPromise } from 'rxjs/observable/fromPromise';

import { NativeStorage } from '@ionic-native/native-storage';
import { Observable } from 'rxjs/Observable';
import { CarsApiRegionToken } from '../cars-api-region-token';
import { ICarsApiRegionProvider } from '../cars/cars-api-region';
import { CarsRegionInfo } from '../cars-model/cars-region-info';

/*
  Generated class for the CarsStorageProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
export const STORAGE_KEY = new InjectionToken('STORAGE_KEY');

@Injectable()
export class CarsStorageProvider {

    constructor(private nativeStorage: NativeStorage,
                @Inject(STORAGE_KEY) private STORAGE_KEY: string,
                @Inject(CarsApiRegionToken) private carsRegion: ICarsApiRegionProvider) {
    }

    public initCars(): void {
        this.nativeStorage.getItem(this.STORAGE_KEY)
            .then((cars: CarsRegionInfo[]) => {
                if (!cars) {
                    this.carsRegion.loadRegionCarsInfo().subscribe(
                        (cars: CarsRegionInfo[]) => {
                            this.nativeStorage.setItem(this.STORAGE_KEY, cars);
                        }, err => {
                            console.log('can not load cars from API.');
                        });
                }
            }).catch((err) => {
            console.log('can not load cars from storage ', err);
        });
    }

    public loadCars(): Observable<CarsRegionInfo[] | any> {
        return fromPromise(this.nativeStorage.getItem(this.STORAGE_KEY));
    }
}
