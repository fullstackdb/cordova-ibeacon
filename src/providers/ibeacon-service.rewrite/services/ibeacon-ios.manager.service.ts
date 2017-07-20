import { Injectable } from '@angular/core';
import { Subject } from "rxjs/Subject";
import { Observable } from "rxjs/Observable";
import { IIBeaconManager } from '../models/ibeacon-manager.interface';
import { IBeaconIOSApiService } from './ibeacon-ios.api.service';
import { IBeaconDelegateService } from './ibeacon-delegate.service';
import { IBeaconMonitoringService } from "./ibeacon-monitoring.service";


@Injectable()
export class IBeaconIOSManagerService implements IIBeaconManager {
  private rangeStatus: any;
  private monitoringStatus: any;
  private stateStatus: any;
  private bluetoothStatus: any;

  private isBluetoothAskedSource: Subject<boolean> = new Subject<boolean>();
  private currentRegionSource: Subject<boolean> = new Subject<boolean>();

  public BluetoothAsked$: Observable<boolean> = this.isBluetoothAskedSource.asObservable();
  public CurrentRegionChanged$: Observable<boolean> = this.currentRegionSource.asObservable();

  constructor(private iBeaconIOSApiService: IBeaconIOSApiService,
              private iBeaconDelegateService: IBeaconDelegateService, 
              private IBeaconMonitoringService: IBeaconMonitoringService) {
  }

  run(): void {
    this.iBeaconIOSApiService.isBluetoothEnabled()
        .subscribe((status: boolean) => {
          if (status) {
            this.askForPermissions();
            this.IBeaconMonitoringService.start(this.createRegion('try', '2F234454-CF6D-4A0F-ADF2-F4911BA9FFA6', 3, 1))
          } else {
            this.askForEnablingBluetooth();
          }
          this.listenPluginStatuses();    
        });

  }

  askForPermissions(): void {
    if(!this.hasPermissions) {
      this.iBeaconIOSApiService.requestWhenInUseAuthorization();
    }
  }

  askForEnablingBluetooth(): void {
    this.isBluetoothAskedSource.next(true);
  }

  hasPermissions(): boolean {
    return false;
  }

  createRegion(identifier: string, uuid: string, major: number, minor: number): any {
    return this.iBeaconIOSApiService.createBeaconRegion(identifier, uuid, major, minor);
  }

  private listenPluginStatuses(): void {
    this.iBeaconDelegateService.RangeBeaconsInRegionStatus$
      .subscribe((rangeStatus: any) => {
        console.log('RangeBeaconsInRegionStatus',rangeStatus);
        this.rangeStatus = rangeStatus;
      });

    this.iBeaconDelegateService.MonitoringForRegionStatus$
      .subscribe((monitoringStatus: any) => {
        console.log('MonitoringForRegionStatus', monitoringStatus);
        this.monitoringStatus = monitoringStatus;
      });

    this.iBeaconDelegateService.StateForRegionStatus$
      .subscribe((stateStatus: any) => {
        console.log('StateForRegionStatus', stateStatus);
        this.stateStatus = stateStatus;
      });
  }

}
