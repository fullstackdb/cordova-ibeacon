import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IBeacon, IBeaconPluginResult } from '@ionic-native/ibeacon';

import { TabsPage } from '../pages/tabs/tabs';
import { CarServiceProvider } from '../providers/car-service/car-service';
import { IBeaconMonitoringServiceProvider } from '../providers/i-beacon-monitoring-service/i-beacon-monitoring-service';
import { isValidBluetoothStatus } from '../providers/i-beacon-monitoring-service/valid-statuses';

@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    rootPage: any = TabsPage;

    constructor(platform: Platform,
                statusBar: StatusBar,
                splashScreen: SplashScreen,
                private ibeacon: IBeacon,
                private beaconService: IBeaconMonitoringServiceProvider,
                private plt: Platform) {
        platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();

            try {
                if (this.plt.is('ios')) {
                    // Request permission to use location on iOS
                    this.ibeacon.requestAlwaysAuthorization()
                        .then(() => this.ibeacon.getAuthorizationStatus())
                        .then((res: IBeaconPluginResult) => {
                                if (isValidBluetoothStatus(res.authorizationStatus)) {
                                    beaconService.startMonitoring();
                                }
                            }
                        );
                } else if (this.plt.is('android')) {
                    if (!this.ibeacon.isBluetoothEnabled()) {
                        this.ibeacon.enableBluetooth().then(() => beaconService.startMonitoring());
                    }
                }
            } catch (e) {
                console.log('Global Error: ', e);
            }
        });
    }
}
