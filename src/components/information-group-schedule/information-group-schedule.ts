import { Component, Input } from '@angular/core';


@Component({
  selector: 'information-group-schedule',
  templateUrl: 'information-group-schedule.html'
})
export class InformationGroupScheduleComponent {
  @Input() tablesList: any;
  
}
