import { Component, Input } from '@angular/core';


@Component({
  selector: 'information-group-about',
  templateUrl: 'information-group-about.html'
})
export class InformationGroupAboutComponent {
  @Input() aboutInfo: any;
}
