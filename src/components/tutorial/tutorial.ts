import { Component, OnInit } from '@angular/core';
import { TutorialProvider } from "../../providers/tutorial/tutorial";


@Component({
  selector: 'tutorial',
  templateUrl: 'tutorial.html'
})
export class TutorialComponent implements OnInit {
  public isActive: boolean = true;

  constructor(private tutorialProvider: TutorialProvider) {
  }

  public ngOnInit(): void {
    this.tutorialProvider.tutorialRequested$
        .subscribe((tutorialStatus: boolean) => {
          this.isActive = tutorialStatus;
        })
  }

  public showTutorial(): void {
    this.isActive = true;
  }

  public hideTutorial(): void {
    this.isActive = false;
  }

}
