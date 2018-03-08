import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-prompt-alert',
  templateUrl: 'prompt-alert.html'
})
export class PromptAlertPage {

  constructor(public navCtrl: NavController,
              public alertCtrl: AlertController) {

  }

  //对话弹窗
  prompt() {
    let prompt = this.alertCtrl.create({
      title:'密码输入',
      message:'请输入密码',
      inputs: [{
        name:'pws',
        placeholder:'六位数字'
      }],
      buttons: [{
        text:'取消',
        handler: data => {
          console.log('点击取消');
        }
      },{
        text:'确定',
        handler: data => {
          console.log('点击确定');
        }
      }]
    });

    prompt.present();
  }

}
