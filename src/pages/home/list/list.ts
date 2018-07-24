import { Component } from '@angular/core';
import { NavController,App } from 'ionic-angular';
import { GridPage } from '../grid/grid';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {

  constructor(public navCtrl: NavController,
              public appCtrl: App) {

  }

  goDe(): void{
    //this.navCtrl.push(GridPage);
    this.appCtrl.getRootNav().push(GridPage);
  }

}
