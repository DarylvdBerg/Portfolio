import { Component, OnInit, OnDestroy } from '@angular/core';
import DateTimeFormat = Intl.DateTimeFormat;
import {KeyValue} from '@angular/common';
import { Repo } from './repo.model';
import { Subscription } from 'rxjs';
import { GithubServiceService } from '../shared/github-service.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {
  dayOfBirth = new Date('1997-11-21');

  repositories: Repo[] = [];
  repositorySubscription!: Subscription;

  skills = [
    "Html",
    "Css",
    "Javascript",
    "Java",
    "C#",
    "Android",
    "Angular",
    "Unity"
  ];

  constructor(private service: GithubServiceService) { }

  ngOnInit(): void {
    this.repositorySubscription = this.service.getPublicRepoInformation()
      .subscribe(repos => {
        this.repositories = repos;
        console.log(this.repositories);
      });
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

  ngOnDestroy(): void {
    this.repositorySubscription.unsubscribe();
  }
}
