import { Injectable } from '@angular/core';
import { IIBeaconDelegate } from '../models/ibeacon-delegate.interface';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class IBeaconDelegateService implements IIBeaconDelegate {
  private delegate: IDelegate = new cordova.plugins.locationManager.Delegate();
  private stateForRegionStatusSource: Subject<any> = new Subject<any>();
  private startMonitoringForRegionStatusSource: Subject<any> = new Subject<any>();
  private rangeBeaconsInRegionStatusSource: Subject<any> = new Subject<any>();

  public StateForRegionStatus$: Observable<any> = this.stateForRegionStatusSource.asObservable();
  public MonitoringForRegionStatus$: Observable<any> = this.startMonitoringForRegionStatusSource.asObservable();
  public RangeBeaconsInRegionStatus$: Observable<any> = this.rangeBeaconsInRegionStatusSource.asObservable();

  constructor() {
    this.didDetermineStateForRegion();
    this.didStartMonitoringForRegion();
    this.didRangeBeaconsInRegion();
  }

  public getDelegate(): IDelegate {
    return this.delegate;
  }

  private didDetermineStateForRegion(): void {
    this.delegate.didDetermineStateForRegion = (pluginResult: any) => {
      this.stateForRegionStatusSource.next(pluginResult);
    };
  }

  private didStartMonitoringForRegion(): void {
    this.delegate.didStartMonitoringForRegion = (pluginResult: any) => {
      this.startMonitoringForRegionStatusSource.next(pluginResult);
    };
  }

  private didRangeBeaconsInRegion(): void {
    this.delegate.didRangeBeaconsInRegion = (pluginResult: any) => {
      this.rangeBeaconsInRegionStatusSource.next(pluginResult);
    };
  }
}
