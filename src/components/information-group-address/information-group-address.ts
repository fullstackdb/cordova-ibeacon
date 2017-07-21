import { Component, Input } from '@angular/core';
import { CallNumber } from '@ionic-native/call-number';

@Component({
  selector: 'information-group-address',
  templateUrl: 'information-group-address.html',
  providers: [CallNumber]
})
export class InformationGroupAddressComponent {
  @Input() description: string;
  @Input() addresses: any[];

  constructor(private callNumber: CallNumber) { }

  makeCall(phoneNumber: string): void {
    this.callNumber.callNumber(phoneNumber, true)
      .then(() => console.log('Launched dialer!'))
      .catch(() => console.log('Error launching dialer'));
  }
}
