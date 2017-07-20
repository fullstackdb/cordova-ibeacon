import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export abstract class IBeaconAbstractService {
  abstract isBluetoothEnabled(): Observable<any>;

  createBeaconRegion(identifier: string, uuid: string, major: number, minor: number): any {
    return new cordova.plugins.locationManager.BeaconRegion(identifier, uuid, major, minor);
  }

  delegate(): IDelegate {
    return new cordova.plugins.locationManager.Delegate();
  }

  appendToDeviceLog(message: string): void {
    cordova.plugins.locationManager.appendToDeviceLog(message);
  }

  setDelegate(delegate: IDelegate): void {
    cordova.plugins.locationManager.setDelegate(delegate);
  }

  requestWhenInUseAuthorization(): void {
    cordova.plugins.locationManager.requestWhenInUseAuthorization();
  }

  requestAlwaysAuthorization(): void {
    cordova.plugins.locationManager.requestAlwaysAuthorization();
  }

  startMonitoringForRegion(beaconRegion: any): any {
    return cordova.plugins.locationManager.startMonitoringForRegion(beaconRegion);
  }

  stopMonitoringForRegion(beaconRegion): any {
    return cordova.plugins.locationManager.stopMonitoringForRegion(beaconRegion);
  }

  startRangingBeaconsInRegion(beaconRegion): any {
    return cordova.plugins.locationManager.startRangingBeaconsInRegion(beaconRegion);
  }

  stopRangingBeaconsInRegion(beaconRegion): any {
    return cordova.plugins.locationManager.stopRangingBeaconsInRegion(beaconRegion);
  }
}
