import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-radio-alert',
  templateUrl: 'radio-alert.html'
})
export class RadioAlert {

  constructor(public navCtrl: NavController,
              public alertCtrl: AlertController) {

  }

  //对话弹窗
  radio() {
    let dataList = [{
      label: 'Blue',
      value: 'blue',
      checked: false
    },{
      label: 'Green',
      value: 'green',
      checked: true
    }]
    let alert = this.alertCtrl.create();
    alert.setTitle('颜色类型');

    for(var radio of dataList){
      alert.addInput({
        type: 'radio',
        label: radio.label,
        value: radio.value,
        checked: radio.checked
      });
    }
    alert.addButton('取消');
    alert.addButton({
      text: '确定',
      handler: data => {
        console.log(data);
      }
    });
    alert.present();
  }

}
