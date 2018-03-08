import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-checkbox-alert',
  templateUrl: 'checkbox-alert.html'
})
export class CheckboxAlert {

  constructor(public navCtrl: NavController,
              public alertCtrl: AlertController) {

  }

  //对话弹窗
  checkbox() {
    let dataList = [{
      label: 'Alderaan',
      value: 'value1',
      checked: false
    },{
      label: 'Fraden',
      value: 'value2',
      checked: true
    }]
    let alert = this.alertCtrl.create();
    alert.setTitle('你想参观哪里？');

    for(var checkbox of dataList){
      alert.addInput({
        type: 'checkbox',
        label: checkbox.label,
        value: checkbox.value,
        checked: checkbox.checked
      });
    }

    alert.addButton('取消');
    alert.addButton({
      text: '确定',
      handler: data => {
        console.log('Checkbox data:', data);
      }
    });
    alert.present();
  }

}
