import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';

@Component({
  selector: 'app-resume',
  imports: [
    MatButtonModule,
    MatCardModule,
    MatIcon,
    MatListModule

  ],
  templateUrl: './resume.html',
  styleUrl: './resume.scss',
})
export class Resume {

}
