import { Component, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'tutorial-item',
  templateUrl: 'tutorial-item.html'
})
export class TutorialItemComponent {
  @Output() skipPressed: EventEmitter<any> = new EventEmitter();

  public skipTutorial(): void {
    this.skipPressed.emit();
  }
}
