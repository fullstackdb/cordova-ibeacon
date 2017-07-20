import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { CarPage } from '../car/car.page';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  news = HomePage;
  car = CarPage;
  about = AboutPage;

  constructor() {
  }
}
