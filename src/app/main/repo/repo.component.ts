import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.scss']
})
export class RepoComponent implements OnInit {
  @Input() name : String | undefined;
  @Input() description : String | undefined;
  @Input() html_url : String | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
