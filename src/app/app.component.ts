import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IBeacon } from '@ionic-native/ibeacon';

import { TabsPage } from '../pages/tabs/tabs';
import { CarServiceProvider } from '../providers/car-service/car-service';
import { CarsStorageProvider } from '../providers/cars-storage/cars-storage';

@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    rootPage: any = TabsPage;

    constructor(platform: Platform,
                statusBar: StatusBar,
                splashScreen: SplashScreen,
                private ibeacon: IBeacon,
                private carServiceProvider: CarServiceProvider,
                private carsStorage: CarsStorageProvider) {
        platform.ready().then(() => {
            carsStorage.initCars();
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();

            // Request permission to use location on iOS
            this.ibeacon.requestAlwaysAuthorization();
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

            carsStorage.loadCars().subscribe((c) => {
                window['cars'] = c;
                console.warn(c);
            });
        });
    }
}
