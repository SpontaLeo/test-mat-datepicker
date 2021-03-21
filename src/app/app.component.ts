import * as moment from 'moment';

import { FormBuilder, FormGroup } from '@angular/forms';

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'test-mat-datepicker';
  testForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.testForm = this.fb.group({
      date: [null],
    });
  }

  printValue(): void {
    const value = this.testForm.controls.date.value;
    console.log(value, moment.isMoment(value));
  }
}
