import { Component } from '@angular/core';
import { App, NavController } from 'ionic-angular';

import { ButtonPage } from './button/button';
import { ActionSheetPage } from './actionSheet/actionSheet';
import { AlertPage } from './alert/basic-alert/alert';
import { PromptAlertPage } from './alert/prompt-alert/prompt-alert';
import { ConfirmAlertPage } from './alert/confirm-alert/confirm-alert';
import { RadioAlert } from './alert/radio-alert/radio-alert';
import { CheckboxAlert } from './alert/checkbox-alert/checkbox-alert';
import { BadgePage } from './badge/badge';
import { CardsPage } from './cards/cards';

import { FormService } from './form/form';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public pageList=[ButtonPage,ActionSheetPage,AlertPage,PromptAlertPage,
    ConfirmAlertPage,RadioAlert,CheckboxAlert,
    BadgePage,CardsPage];

  constructor(public navCtrl: NavController, public appCtrl: App,
              public formService: FormService) {
    this.pageList=[...this.pageList,...formService.pageList];
  }

  component={
    alert:false,
    form:false
  }

  //进入详情
  goPage(type) {
    //console.log(this.appCtrl.getRootNav())
    //console.log(this.appCtrl.getRootNavById('n4'))
    this.appCtrl.getRootNav().push(this.pageList[type]);
    //建议使用此方法
    //this.appCtrl.getRootNavById('n4').push(this.pageList[type]);
  }

}
