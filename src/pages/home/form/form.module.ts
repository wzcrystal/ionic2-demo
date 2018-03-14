import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { FormService } from './form';

import { CheckboxPage } from './checkbox/checkbox';
import { DateTimePage } from './dateTime/dateTime';
import { InputPage } from './input/input';
import { RadioPage } from './radio/radio';

@NgModule({
  declarations: [
    CheckboxPage,
    DateTimePage,
    InputPage,
    RadioPage
  ],
  imports: [
    IonicModule
  ],
  entryComponents: [
    CheckboxPage,
    DateTimePage,
    InputPage,
    RadioPage
  ],
  providers: [FormService]
})
export class FormModule {}
