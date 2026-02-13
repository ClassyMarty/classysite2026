import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { Objective } from './objective/objective';
import { Keyskills } from './keyskills/keyskills';
import { Keyprojects } from './keyprojects/keyprojects';
import { Experience } from './experience/experience';
import { Education } from './education/education';

@Component({
  selector: 'app-resume',
  imports: [
    MatCardModule,
    MatIcon,
    MatTabsModule,
    Objective,
    Keyskills,
    Keyprojects,
    Experience,
    Education
  ],
  templateUrl: './resume.html',
  styleUrl: './resume.scss',
})
export class Resume {

}
