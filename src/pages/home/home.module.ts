import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { FormModule } from './form/form.module';

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
import { FABPage } from './FAB/FAB';
import { GesturesPage } from './gestures/gestures';
import { GridPage } from './grid/grid';
import { ListPage } from './list/list';
import {TabsPage} from "../tabs/tabs";

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
    CardsPage,
    FABPage,
    GesturesPage,
    GridPage,
    ListPage
  ],
  imports: [
    IonicModule,
    FormModule
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
    CardsPage,
    FABPage,
    GesturesPage,
    GridPage,
    ListPage
  ],
  providers: []
})
export class HomeModule {}
