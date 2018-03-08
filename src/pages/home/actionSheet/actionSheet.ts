import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';

@Component({
  selector: 'page-actionSheet',
  templateUrl: 'actionSheet.html'
})
export class ActionSheetPage {

  constructor(public navCtrl: NavController,
              public actionSheetCtrl: ActionSheetController) {

  }

  //默认上拉菜单
  presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: '上拉菜单',
      buttons: [
        {
          text:'Destructive',
          role:'destructive',
          handler: () => {
            console.log('点击了按钮Destructive');
            let navTransition = actionSheet.dismiss();
            navTransition.then(() => {
              console.log('关闭');
            });
            return false;
          }
        }, {
          text:'Archive',
          icon: 'ios-bowtie',
          cssClass: 'action-sheet-btn-color',
          handler: () => {
            console.log('点击了按钮Archive');
            return false;
          }
        }, {
          text:'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel');
          }
        }
      ]
    });
    actionSheet.present();

    actionSheet.addButton({text:'增加的button',
      handler: () => {
        console.log('增加按钮');
      }})
  }
}
