import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { CarsStorageProvider } from '../cars-storage/cars-storage';
import { Subscription } from 'rxjs/Subscription';
import { IBeacon } from '@ionic-native/ibeacon';
import { CarServiceProvider } from '../car-service/car-service';

/*
  Generated class for the IBeaconMonitoringServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class IBeaconMonitoringServiceProvider {
    private subscription: Subscription;

    constructor(private carsStorage: CarsStorageProvider,
                private ibeacon: IBeacon,
                private carServiceProvider: CarServiceProvider) {
        console.log('Hello IBeaconMonitoringServiceProvider Provider');
        this.carsStorage.initCars();
    }

    public startMonitoring(): void {
        this.subscription = this.carsStorage.$carsLoaded.subscribe(() => {

        });
    }

    public stopMonitoring(): void {
        this.subscription.unsubscribe();
    }

    private monitorRegions(): void {
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

        delegate.didStartMonitoringForRegion()
            .subscribe(
                data => {
                    console.log('didStartMonitoringForRegion: ', data);
                },
                error => {
                    console.error();
                });

        delegate.didEnterRegion()
            .subscribe(
                data => {
                    this.carServiceProvider.setCurrentCar('mockCarId');
                    console.log('didEnterRegion: ', data);
                });

        delegate.didExitRegion()
            .subscribe(
                data => {
                    this.carServiceProvider.setCurrentCar(null);
                    console.log('didEnterRegion: ', data);
                });

        let beaconRegion = this.ibeacon.BeaconRegion('testBeacon32', '2F234454-CF6D-4A0F-ADF2-F4911BA9FFA6');
        this.ibeacon.startMonitoringForRegion(beaconRegion)
            .then(
                () => console.log('Native layer recieved the request to monitoring'),
                error => console.error('Native layer failed to begin monitoring: ', error)
            );

    }
}
