import { Component, OnInit } from '@angular/core';
import DateTimeFormat = Intl.DateTimeFormat;
import {KeyValue} from '@angular/common';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  dayOfBirth = new Date('1997-11-21');

  skills: {[key: string]: number} = {
    Html: 60,
    Css: 55,
    Javascript: 75,
    Java: 75,
    'C#': 65,
    Android: 65,
    Angular: 60,
    Unity: 60
  };

  originalOrder = (a: KeyValue<number, string>, b: KeyValue<number, string>): number => {
    return 0;
  }

  constructor() { }

  ngOnInit(): void {
    console.log(this.calculateAge());
  }

  // Calculate age based on my birthday and date of today.
  calculateAge(): number {
    const dateNow = new Date();
    let age = dateNow.getFullYear() - this.dayOfBirth.getFullYear();
    const month = dateNow.getMonth() - this.dayOfBirth.getMonth();
    if (month < 0 || (month === 0 && dateNow.getDate() < this.dayOfBirth.getDate())) {
      age--;
    }
    return age;
  }

}
