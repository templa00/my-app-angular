import { Component, OnInit } from '@angular/core';
import { SKILLS } from './Skill';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  skills = SKILLS;
  constr;uctor() { 
  }

  ngOnInit() {
  }

}
