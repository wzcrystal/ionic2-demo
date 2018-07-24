import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { FormService } from './form';

import { CheckboxPage } from './checkbox/checkbox';
import { DateTimePage } from './dateTime/dateTime';
import { InputPage } from './input/input';
import { RadioPage } from './radio/radio';
import { TogglePage } from './toggle/toggle';
import { RangePage } from './range/range';
import { SelectPage } from './select/select';

@NgModule({
  declarations: [
    CheckboxPage,
    DateTimePage,
    InputPage,
    RadioPage,
    TogglePage,
    RangePage,
    SelectPage
  ],
  imports: [
    IonicModule
  ],
  entryComponents: [
    CheckboxPage,
    DateTimePage,
    InputPage,
    RadioPage,
    TogglePage,
    RangePage,
    SelectPage
  ],
  providers: [FormService]
})
export class FormModule {}
