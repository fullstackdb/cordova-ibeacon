import { Component, Input, OnInit } from '@angular/core';
import { CarServiceProvider } from "../../providers/car-service/car-service";
import { CarInfo } from '../../providers/cars-model/car-info';


@Component({
  selector: 'car-details',
  templateUrl: 'car-details.html'
})
export class CarDetailsComponent implements OnInit {
  @Input() carId: string;
  @Input() visibility: boolean;

  private carDetails: any;

  public slides = [
    {
      title: "Welcome to the Docs!",
      description: "The <b>Ionic Component Documentation</b> showcases a number of useful components that are included out of the box with Ionic.",
      image: "http://files1.porsche.com/filestore/image/multimedia/none/991-2nd-c2-modelimage-sideshot/model/69e8835b-d7e6-11e6-a122-0019999cd470;s25/porsche-model.png",
    },
    {
      title: "What is Ionic?",
      description: "<b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.",
      image: "http://media.caranddriver.com/images/16q3/669461/2017-porsche-911-carrera-4s-test-review-car-and-driver-photo-669997-s-450x274.jpg",
    },
    {
      title: "What is Ionic Cloud?",
      description: "The <b>Ionic Cloud</b> is a cloud platform for managing and scaling Ionic apps with integrated services like push notifications, native builds, user auth, and live updating.",
      image: "http://files2.porsche.com/filestore/image/multimedia/none/jdp-2016-991-2nd-c2-editorial-xl/normal/fde0b87d-3452-11e5-8c35-0019999cd470;sJ/porsche-normal.jpg",
    }
  ];

  constructor(private carServiceProvider: CarServiceProvider) {
  }

  public ngOnInit(): void {
    this.carServiceProvider.getCarDetails({id: 12} as CarInfo)
      .subscribe((carDetails: any) => {
        this.carDetails = carDetails;
      })
  }

}
