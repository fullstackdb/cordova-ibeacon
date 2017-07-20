import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { CarsRegionInfo } from '../cars-model/cars-region-info';
import { BeaconRegion, IBeacon } from '@ionic-native/ibeacon';

/*
  Generated class for the IBeaconMonitorConfigurationProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/

@Injectable()
export class IBeaconMonitorConfigurationProvider {
    constructor(private ibeacon: IBeacon) {
        console.log('Hello IBeaconMonitorConfigurationProvider Provider');
    }

    public getIBeacons(cars: CarsRegionInfo[]): BeaconRegion[] {
        if (cars.length === 0) return [];
        return cars.reduce((prev, c: CarsRegionInfo) => {
            let regionCarsIBeacons = c.iBeaconCarInfo.reduce((prev, carInfo): any => {
                return prev.concat([this.ibeacon.BeaconRegion(carInfo.car.name, c.uuid, carInfo.major, carInfo.minor)]);
            }, []);
            return [prev, ...regionCarsIBeacons];
        }, []);
    }

}
