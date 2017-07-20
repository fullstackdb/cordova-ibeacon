import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CarServiceProvider } from '../../providers/car-service/car-service';
import { CarInfo } from '../../providers/cars-model/car-info';

@Component({
    selector   : 'page-car',
    templateUrl: 'car.page.html'
})
export class CarPage implements OnInit {
    currentCar: CarInfo;

    constructor(public navCtrl: NavController,
                private carServiceProvider: CarServiceProvider) {
    }

    ngOnInit(): void {
        this.carServiceProvider.currentCarChanged$
            .subscribe((currentCar: CarInfo) => {
                this.currentCar = currentCar;
            });
    }

    mockEnterInRegion(): void {
        this.carServiceProvider.setCurrentCar({
            name: 'mock car',
            id  : 777
        });
    }

    mockExitFromRegion(): void {
        this.carServiceProvider.setCurrentCar(null);
    }
}
