import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { TabsPage } from '../../tabs/tabs';

@Component({
  selector: 'button-page',
  templateUrl: 'button.html'
})
export class ButtonPage {

  constructor(public navCtrl: NavController) {

  }

  goPage() {
    this.navCtrl.push(TabsPage);
  }

}
