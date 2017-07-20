import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CarServiceProvider } from "../../providers/car-service/car-service";

@Component({
  selector: 'page-car',
  templateUrl: 'car.page.html'
})
export class CarPage implements OnInit {
  currentCarId: string | null;

  constructor(public navCtrl: NavController, 
              private carServiceProvider: CarServiceProvider) {
  }

  ngOnInit(): void {
    this.carServiceProvider.currentCarChanged$
        .subscribe((currentCarId: string | null) => {
          this.currentCarId = currentCarId;
        })
  }

  mockEnterInRegion(): void {
    this.carServiceProvider.setCurrentCar('dsdsd');
  }

  mockExitFromRegion(): void {
    this.carServiceProvider.setCurrentCar(null);    
  }
}
