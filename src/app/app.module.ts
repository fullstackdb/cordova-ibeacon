import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { CarPage } from '../pages/car/car.page';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IBeacon } from '@ionic-native/ibeacon';
import { CarLoaderComponent } from '../components/car-loader/car-loader';
import { CarDetailsComponent } from '../components/car-details/car-details';
import { CarServiceProvider } from '../providers/car-service/car-service';
import { FeatureSliderComponent } from '../components/feature-slider/feature-slider';
import { IntroductionComponent } from '../components/introduction/introduction';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    CarPage,
    HomePage,
    TabsPage,
    CarLoaderComponent,
    CarDetailsComponent,
    FeatureSliderComponent,
    IntroductionComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    CarPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    IBeacon,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CarServiceProvider
  ]
})
export class AppModule {}
