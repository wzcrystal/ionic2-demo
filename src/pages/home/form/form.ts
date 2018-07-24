import { Injectable } from '@angular/core';

import { CheckboxPage } from './checkbox/checkbox';
import { DateTimePage } from './dateTime/dateTime';
import { InputPage } from './input/input';
import { RadioPage } from './radio/radio';
import { TogglePage } from './toggle/toggle';
import { RangePage } from './range/range';
import { SelectPage } from './select/select';

@Injectable()
export class FormService {

  pageList=[CheckboxPage,DateTimePage,InputPage,RadioPage,TogglePage,RangePage,SelectPage];

}
