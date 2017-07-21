import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { CarsRegionInfo } from '../cars-model/cars-region-info';
import { BeaconRegion, IBeacon } from '@ionic-native/ibeacon';


@Injectable()
export class IBeaconMonitorConfigurationProvider {
    constructor(private ibeacon: IBeacon) {
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
