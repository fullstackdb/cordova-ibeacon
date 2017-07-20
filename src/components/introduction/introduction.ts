import { Component } from '@angular/core';


@Component({
  selector: 'introduction',
  templateUrl: 'introduction.html'
})
export class IntroductionComponent {
  public isActive: boolean = true;

  public hideIntroduction(): void {
    this.isActive = false;
  }

}
