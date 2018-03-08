import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-confirm-alert',
  templateUrl: 'confirm-alert.html'
})
export class ConfirmAlertPage {

  constructor(public navCtrl: NavController,
              public alertCtrl: AlertController) {

  }

  //对话弹窗
  confirm() {
    let confirm = this.alertCtrl.create({
      title:'是否确认？',
      message:'确认后将不能撤销，是否确认？',
      buttons: [{
        text:'取消',
        handler: data => {
          console.log('点击取消');
        }
      },{
        text:'确认',
        handler: data => {
          console.log('点击确定');
        }
      }]
    });

    confirm.present();
  }

}
