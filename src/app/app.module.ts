import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, Searchbar } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { VenueService } from '../services/venue.services';
import { SearchPage } from '../pages/search/search';
import { ItineraryPage } from '../pages/itinerary/itinerary';
import { TabsPage } from '../pages/tabs/tabs';
import { SplashPage } from '../pages/splash/splash';
import { ProfilePage } from '../pages/profile/profile';
import { FavoritesPage } from '../pages/favorites/favorites';
import { RecentlyBookedPage } from '../pages/recently-booked/recently-booked';
import { StatsPage } from '../pages/stats/stats';
import { SettingsPage } from '../pages/settings/settings';
import { HttpModule } from '@angular/http';
import { TestPage } from '../pages/test/test';
import { LoginPage } from '../pages/login/login';
import { RegistrationPage } from '../pages/registration/registration';
import { RegistrationService } from '../services/registration.services';
import { CartPage } from '../pages/cart/cart';
import { VenuesPage } from '../pages/venues/venues';
import { PaymentPage } from '../pages/payment/payment';
import { VenueInfoPage } from '../pages/venue-info/venue-info';
import { AgmCoreModule } from '@agm/core';
import { Geolocation } from '@ionic-native/geolocation';
import { MapPage } from '../pages/map/map';

import {FormsModule} from '@angular/forms';

import { AgmDirectionModule } from 'agm-direction'



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SearchPage,
    ItineraryPage,
    TabsPage,
    SplashPage,
    ProfilePage,
    FavoritesPage,
    RecentlyBookedPage,
    StatsPage,
    SettingsPage,
    TestPage,
    LoginPage,
    RegistrationPage,
    CartPage,
    VenuesPage,
    PaymentPage,
    VenueInfoPage,
    MapPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyASClabdsiB_ZnpEI_hRDSzMQJcME6Gers',
      libraries: ["places", "geometry"]
    }),
    AgmDirectionModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SearchPage,
    ItineraryPage,
    TabsPage,
    SplashPage,
    ProfilePage,
    FavoritesPage,
    RecentlyBookedPage,
    StatsPage,
    SettingsPage,
    TestPage,
    LoginPage,
    RegistrationPage,
    CartPage,
    VenuesPage,
    PaymentPage,
    VenueInfoPage,
    MapPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    VenueService,
    RegistrationService,
    Geolocation,
    
    {provide: ErrorHandler, useClass: IonicErrorHandler},

  ]
})
export class AppModule {}
