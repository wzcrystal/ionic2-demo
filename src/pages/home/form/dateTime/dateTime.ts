import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-dateTime',
  templateUrl: 'dateTime.html'
})
export class DateTimePage {

  myDate:string = '2018-01-01';

  constructor(public navCtrl: NavController) {

  }

}
