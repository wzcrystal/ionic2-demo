import { Component } from '@angular/core';
import { NavController,NavParams  } from 'ionic-angular';

@Component({
  selector: 'page-grid',
  templateUrl: 'grid.html'
})
export class GridPage {

  constructor(public navCtrl: NavController,public navParams: NavParams) {
    console.log(this.navParams.get('user'));
  }

}
