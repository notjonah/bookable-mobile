import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the VenuesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-venues',
  templateUrl: 'venues.html',
})
export class VenuesPage {
  public search: string;
  public location: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.search = this.navParams.get("searchParameter");  
    this.location = this.navParams.get("locationParameter");  

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VenuesPage');
  }

}