import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit {
  @Input() skillName: string | undefined;
  @Input() skillValue: number | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
