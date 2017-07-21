import { Component } from '@angular/core';


@Component({
  selector: 'registration',
  templateUrl: 'registration.html'
})
export class RegistrationComponent {
  public gender: string = '';
  public terms: string = '';
}
