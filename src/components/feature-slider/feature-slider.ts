import { Component, Input } from '@angular/core';


@Component({
  selector: 'feature-slider',
  templateUrl: 'feature-slider.html'
})
export class FeatureSliderComponent {
  @Input() slides: any[];

  public slideOptions = {
    pager:true
  }
}
