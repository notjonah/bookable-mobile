import { Component } from '@angular/core';
import { NavController, NavParams, App, TabHighlight } from 'ionic-angular';
import { VenueService } from '../../services/venue.services';
import { Venue } from '../../models/venue';
import { Http, Response } from '@angular/http';
import { CartPage } from '../cart/cart';


/**
 * Generated class for the MapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {
  public venueName: string;
  public venueId: number;
  public map: Array<Array<number>>
  public buttonColor: string;
  public clicked: boolean;
  public color: string;
  public row: number;
  public column: number;
  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private venueService:VenueService, private http: Http, private app: App) {
    this.venueName = this.navParams.get("nameParameter");  
    this.venueId = 2;
    this.map = [];
    this.map[0] = [];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapPage');
  }

  showMap(){
    console.log("running");
    this.http
      .post("http://localhost:3000/Maps/" + this.venueId, {
      }).subscribe(
        result => {
          this.map = result.json();
          //result.body(); 
        },

        err => {
          console.log(err);
        }
      );
  }
  
  addEvent(row: number, column: number){
    console.log("click!");
    console.log(row);
    console.log(column);
    this.row = (row*1+1);
    this.column =  (column*1+1);
    if(this.clicked){
      this.buttonColor = '#345465'; //desired Color
      this.clicked = !this.clicked;
    }
    else{
      this.buttonColor = '#CDCDCD';
      this.clicked = !this.clicked;
    }
    this.color = '#CDCDCD';
    /*
    YOUR FUNCTION CODE
    */

  }

  makeReserve(){
    this.http
      .post("http://localhost:3000/makeOrder/", {
        x: (this.row*1-1),
        y: (this.column*1-1),
        venueId: 2,
        purchaseId: 1,
        time: "12:30",
        amount: 5
      }).subscribe(
        result => {
          console.log(result);
        },

        err => {
          console.log(err);
        }
      );
    this.navCtrl.push(CartPage);
  }





}
