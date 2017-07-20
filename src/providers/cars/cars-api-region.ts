import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { CarsRegionInfo } from '../cars-model/cars-region-info';

export interface ICarsApiRegionProvider {
    loadRegionCarsInfo(): Observable<CarsRegionInfo[]>;
}

/*
  Generated class for the CarsProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/

@Injectable()
export class CarsApiRegionProvider implements ICarsApiRegionProvider {
    constructor() {

    }

    public loadRegionCarsInfo(): Observable<CarsRegionInfo[]> {
        return Observable.of([
            {
                uuid          : 'ba268b30-f4ac-48be-b1a8-66e49a13bc97',
                iBeaconCarInfo: [
                    {
                        major: 1,
                        minor: 1,
                        car  : {
                            name: 'Porshe 2-1',
                            id  : 11
                        }
                    },
                    {
                        major: 1,
                        minor: 2,
                        car  : {
                            name: 'name: 1 -2 ',
                            id  : 12
                        }
                    }
                ]
            },
            {
                uuid          : '2F234454-CF6D-4A0F-ADF2-F4911BA9FFA6',
                iBeaconCarInfo: [
                    {
                        major: 2,
                        minor: 1,
                        car  : {
                            name: 'Porshe',
                            id  : 21

                        }
                    },
                    {
                        major: 2,
                        minor: 2,
                        car  : {
                            name: 'name: 2-2',
                            id  : 22
                        }
                    }
                ]
            }
        ]);
    }
}
