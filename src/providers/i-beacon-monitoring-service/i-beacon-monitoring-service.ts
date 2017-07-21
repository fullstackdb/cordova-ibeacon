import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { CarsStorageProvider } from '../cars-storage/cars-storage';
import { Subscription } from 'rxjs/Subscription';
import { Beacon, IBeacon, IBeaconPluginResult } from '@ionic-native/ibeacon';
import { CarServiceProvider } from '../car-service/car-service';
import { IBeaconMonitorConfigurationProvider } from '../i-beacon-monitor-configuration/i-beacon-monitor-configuration';
import { CarsRegionInfo } from '../cars-model/cars-region-info';
import { IBeaconCarInfo } from '../cars-model/ibeacon-car-info';


const getCarsRegionInfo = (cars: CarsRegionInfo[], ibeaconResult: IBeaconPluginResult): IBeaconCarInfo[] => {
    return cars.find(r => r.uuid === ibeaconResult.region.identifier).iBeaconCarInfo;
};

const getCarInRegion = (ibeaconsCarsRegion: IBeaconCarInfo[], ibeacon: Beacon): IBeaconCarInfo => {
    return ibeaconsCarsRegion.find(beaconCar =>
        beaconCar.minor === ibeacon.minor
        && beaconCar.major === ibeacon.major);
};

@Injectable()
export class IBeaconMonitoringServiceProvider {
    private subscription: Subscription;

    constructor(private carsStorage: CarsStorageProvider,
                private ibeacon: IBeacon,
                private carServiceProvider: CarServiceProvider,
                private ibeaconConfiguration: IBeaconMonitorConfigurationProvider) {
        this.carsStorage.initCars();
    }

    public startMonitoring(): void {
        this.subscription = this.carsStorage.$carsLoaded.subscribe((cars: CarsRegionInfo[]) => {
            this.monitorRegions(cars);
        });
    }

    public stopMonitoring(): void {
        this.subscription.unsubscribe();
    }

    private monitorRegions(cars: CarsRegionInfo[]): void {
        // create a new delegate and register it with the native layer
        let delegate = this.ibeacon.Delegate();

        // Subscribe to some of the delegate's event handlers
        delegate.didRangeBeaconsInRegion()
            .subscribe(
                data => {
                    console.log('didRangeBeaconsInRegion: ', data);
                },
                error => {
                    console.error();
                });

        //delegate.didStartMonitoringForRegion()
        //    .subscribe(
        //        (data: IBeaconPluginResult) => {
        //            console.log('didStartMonitoringForRegion: ', data);
        //        },
        //        error => {
        //            console.error();
        //        });

        delegate.didEnterRegion()
            .subscribe(
                (beaconRes: IBeaconPluginResult) => {
                    console.log('didEnterRegion: ', beaconRes);
                    if (beaconRes.beacons.length > 0) {
                        let IBeaconCarInfo = getCarInRegion(getCarsRegionInfo(cars, beaconRes), beaconRes.beacons[0]);
                        this.carServiceProvider.setCurrentCar(IBeaconCarInfo.car);
                    }
                });

        delegate.didExitRegion()
            .subscribe(
                (beaconRes: IBeaconPluginResult) => {
                    this.carServiceProvider.setCurrentCar(null);
                    console.log('didExitRegion: ', beaconRes);
                });

        let beaconsRegion = this.ibeaconConfiguration.getIBeacons(cars);
        beaconsRegion.map((beaconRegion) => {
            this.ibeacon.startMonitoringForRegion(beaconRegion)
                .then(
                    () => console.log('Native layer recieved the request to monitoring'),
                    error => console.error('Native layer failed to begin monitoring: ', error)
                );
        });
    }
}
