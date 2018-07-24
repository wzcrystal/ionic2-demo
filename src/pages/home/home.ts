import {Component} from '@angular/core';
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
import { FABPage } from './FAB/FAB';
import { GesturesPage } from './gestures/gestures';
import { GridPage } from './grid/grid';
import { ListPage } from './list/list';

import { FormService } from './form/form';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public pageList: Array<any>=[ButtonPage,ActionSheetPage,AlertPage,PromptAlertPage,
    ConfirmAlertPage,RadioAlert,CheckboxAlert,
    BadgePage,CardsPage];

  constructor(public navCtrl: NavController, public appCtrl: App,
              public formService: FormService) {
    let nextPage = [FABPage,GesturesPage,GridPage,ListPage];
    let laterPage = [...formService.pageList, ...nextPage];
    this.pageList=[...this.pageList,...laterPage];
  }

  component={
    alert:false,
    form:false
  }

  //进入详情
  goPage(type) {
    /*this.appCtrl.getRootNav().push(this.pageList[type],{
      user:'crystal'
    });*/
    this.appCtrl.getRootNav().push(this.pageList[type]);
    //this.navCtrl.push(this.pageList[type]);

    //this.appCtrl.getRootNavById('n4').push(this.pageList[type]);
  }

}
