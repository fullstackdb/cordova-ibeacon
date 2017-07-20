import { Injectable } from '@angular/core';
import { Subject } from "rxjs/Subject";
import { Observable } from "rxjs/Observable";
import { IIBeaconManager } from '../models/ibeacon-manager.interface';
import { IBeaconDelegateService } from './ibeacon-delegate.service';
import { IBeaconProcessStatuses } from './../constants/ibeacon-process-statuses.enum';
import { IIBeaconRanging } from "./../models/ibeacon-ranging.interface";

@Injectable()
export class IBeaconRangingService implements IIBeaconRanging {
  private IBeaconRangingStatusSource: Subject<string> = new Subject<string>();
  public IBeaconRangingStatusChanged$: Observable<string> = this.IBeaconRangingStatusSource.asObservable();

  constructor(private iBeaconDelegateService: IBeaconDelegateService) {
  }

  start(beaconRegion: any): void {
    cordova.plugins.locationManager.setDelegate(this.iBeaconDelegateService.getDelegate());
    cordova.plugins.locationManager.requestWhenInUseAuthorization();
    cordova.plugins.locationManager.startRangingBeaconsInRegion(beaconRegion)
      .fail((e) => {
        this.IBeaconRangingStatusSource.next(IBeaconProcessStatuses[IBeaconProcessStatuses.START_FAILED])
      })
      .done(() => {
        this.IBeaconRangingStatusSource.next(IBeaconProcessStatuses[IBeaconProcessStatuses.STARTED])
      });
  }

  stop(beaconRegion: any): void {
    cordova.plugins.locationManager.stopRangingBeaconsInRegion(beaconRegion)
      .fail((e) => {
        this.IBeaconRangingStatusSource.next(IBeaconProcessStatuses[IBeaconProcessStatuses.END_FAILED])
      })
      .done(() => {
        this.IBeaconRangingStatusSource.next(IBeaconProcessStatuses[IBeaconProcessStatuses.ENDED])
      });
  }

}
