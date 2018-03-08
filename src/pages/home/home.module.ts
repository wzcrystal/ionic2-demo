import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { HomePage } from './home';
import { ButtonPage } from './button/button';
import { ActionSheetPage } from './actionSheet/actionSheet';
import { AlertPage } from './alert/basic-alert/alert';
import { PromptAlertPage } from './alert/prompt-alert/prompt-alert';
import { ConfirmAlertPage } from './alert/confirm-alert/confirm-alert';
import { RadioAlert } from './alert/radio-alert/radio-alert';
import { CheckboxAlert } from './alert/checkbox-alert/checkbox-alert';
import { BadgePage } from './badge/badge';
import { CardsPage } from './cards/cards';

@NgModule({
  declarations: [
    HomePage,
    ButtonPage,
    ActionSheetPage,
    AlertPage,
    PromptAlertPage,
    ConfirmAlertPage,
    RadioAlert,
    CheckboxAlert,
    BadgePage,
    CardsPage
  ],
  imports: [
    IonicModule
  ],
  entryComponents: [
    HomePage,
    ButtonPage,
    ActionSheetPage,
    AlertPage,
    PromptAlertPage,
    ConfirmAlertPage,
    RadioAlert,
    CheckboxAlert,
    BadgePage,
    CardsPage
  ],
  providers: []
})
export class HomeModule {}
