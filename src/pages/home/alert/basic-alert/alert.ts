import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-alert',
  templateUrl: 'alert.html'
})
export class AlertPage {

  constructor(public navCtrl: NavController,
              public alertCtrl: AlertController) {

  }

  //基础弹窗
  alerts() {
    let alert = this.alertCtrl.create({
      title: '提示',
      subTitle: '提示副标题！',
      message: '详细信息',
      buttons: ['确定']
    });
    alert.present();
  }

}
