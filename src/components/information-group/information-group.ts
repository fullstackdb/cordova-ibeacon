import { Component, Input } from '@angular/core';


@Component({
  selector: 'information-group',
  templateUrl: 'information-group.html'
})
export class InformationGroupComponent {
  @Input() title: string;

}
