import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-range',
  templateUrl: 'range.html'
})
export class RangePage {

  constructor(public navCtrl: NavController) {

  }

  sunny:number;
  structure: any = { lower: 33, upper: 60 };
}
