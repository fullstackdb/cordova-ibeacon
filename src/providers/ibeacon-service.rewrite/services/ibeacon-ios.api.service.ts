import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';
import { IBeaconAbstractService } from './ibeacon-abstract.api.service';
import { IIBeaconIOSApi } from '../models/ibeacon-api-ios.interface';


@Injectable()
export class IBeaconIOSApiService extends IBeaconAbstractService implements IIBeaconIOSApi {
  constructor() {
    super();
  }

  isAdvertisingAvailable(): Promise<any> {
    return undefined;
  };

  isAdvertising(): Promise<any> {
    return undefined;
  };

  stopAdvertising(): Promise<any> {
    return undefined;
  };

  isBluetoothEnabled(): Observable<any> {
    return Observable.fromPromise(cordova.plugins.locationManager.isBluetoothEnabled());
  }
}
