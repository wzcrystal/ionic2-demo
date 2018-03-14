import { Injectable } from '@angular/core';

import { CheckboxPage } from './checkbox/checkbox';
import { DateTimePage } from './dateTime/dateTime';
import { InputPage } from './input/input';
import { RadioPage } from './radio/radio';

@Injectable()
export class FormService {

  pageList=[CheckboxPage,DateTimePage,InputPage,RadioPage];

}
