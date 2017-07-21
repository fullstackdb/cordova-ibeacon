import { Component, Input } from '@angular/core';


@Component({
  selector: 'information-group-resolver',
  templateUrl: 'information-group-resolver.html'
})
export class InformationGroupResolverComponent {
  @Input() type: string;
  @Input() groupInfo: any;
}
