import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  githubLink = 'https://github.com/DarylvdBerg';
  linkedIn = 'https://www.linkedin.com/in/daryl-van-den-berg-056725163/'
  constructor() { }

  ngOnInit(): void {
  }

}
