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
import { CarsApiRegionToken } from '../providers/cars-api-region-token';
import { CarsApiRegionProvider } from '../providers/cars/cars-api-region';
import { CarsStorageProvider, STORAGE_KEY } from '../providers/cars-storage/cars-storage';
import { NativeStorage } from '@ionic-native/native-storage';
import { IBeaconMonitoringServiceProvider } from '../providers/i-beacon-monitoring-service/i-beacon-monitoring-service';
import { IBeaconMonitorConfigurationProvider } from '../providers/i-beacon-monitor-configuration/i-beacon-monitor-configuration';
import { TutorialComponent } from '../components/tutorial/tutorial';
import { TutorialProvider } from '../providers/tutorial/tutorial';
import { RegistrationComponent } from '../components/registration/registration';
import { InformationGroupComponent } from '../components/information-group/information-group';
import { InformationGroupAddressComponent } from '../components/information-group-address/information-group-address';
import { AboutInfoProvider } from '../providers/about-info/about-info';
import { InformationGroupResolverComponent } from '../components/information-group-resolver/information-group-resolver';
import { InformationGroupScheduleComponent } from '../components/information-group-schedule/information-group-schedule';
import { InformationGroupAboutComponent } from '../components/information-group-about/information-group-about';
import { UserWidgetComponent } from '../components/user-widget/user-widget';
import { UserProvider } from '../providers/user/user';
import { SsoProvider } from '../providers/sso/sso';
import { SsoApiProvider } from '../providers/sso-api/sso-api';

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
    TutorialComponent,
    RegistrationComponent,
    InformationGroupComponent,
    InformationGroupAddressComponent,
    InformationGroupResolverComponent,
    InformationGroupScheduleComponent,
    InformationGroupAboutComponent,
    UserWidgetComponent,
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
    CarServiceProvider,
    TutorialProvider,
    AboutInfoProvider,
    UserProvider,
    SsoProvider,
    SsoApiProvider,
    {provide: CarsApiRegionToken, useClass: CarsApiRegionProvider},
    {provide: STORAGE_KEY, useValue: 'CARS_STORAGE_KEY'},
    CarsStorageProvider,
    CarsApiRegionProvider,
    IBeaconMonitoringServiceProvider,
    NativeStorage,
    IBeaconMonitorConfigurationProvider
  ]
})
export class AppModule {
}
