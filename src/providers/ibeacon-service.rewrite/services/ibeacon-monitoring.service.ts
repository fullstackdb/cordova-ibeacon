import { Injectable } from '@angular/core';
import { Subject } from "rxjs/Subject";
import { Observable } from "rxjs/Observable";
import { IBeaconDelegateService } from './ibeacon-delegate.service';
import { IBeaconProcessStatuses } from './../constants/ibeacon-process-statuses.enum';
import { IIBeaconMonitoring } from "./../models/ibeacon-monitoring.interface";


@Injectable()
export class IBeaconMonitoringService implements IIBeaconMonitoring {
  private IBeaconMonitoringStatusSource: Subject<any> = new Subject<any>();
  public IBeaconMonitoringStatusChanged$: Observable<any> = this.IBeaconMonitoringStatusSource.asObservable();

  constructor(private iBeaconDelegateService: IBeaconDelegateService) {
  }

  start(beaconRegion: any): void {
    cordova.plugins.locationManager.setDelegate(this.iBeaconDelegateService.getDelegate());
    cordova.plugins.locationManager.startMonitoringForRegion(beaconRegion)
      .fail((e) => {
        this.IBeaconMonitoringStatusSource.next(IBeaconProcessStatuses[IBeaconProcessStatuses.START_FAILED]);
      })
      .done(() => {
        this.IBeaconMonitoringStatusSource.next(IBeaconProcessStatuses[IBeaconProcessStatuses.STARTED]);        
      });
  }

  stop(beaconRegion: any): void {
    cordova.plugins.locationManager.stopMonitoringForRegion(beaconRegion)
      .fail((e) => {
        this.IBeaconMonitoringStatusSource.next(IBeaconProcessStatuses[IBeaconProcessStatuses.END_FAILED]);
      })
      .done(() => {
        this.IBeaconMonitoringStatusSource.next(IBeaconProcessStatuses[IBeaconProcessStatuses.ENDED]);
      });
  }

}
