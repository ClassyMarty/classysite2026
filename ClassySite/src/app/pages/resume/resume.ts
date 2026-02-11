import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIcon } from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';

@Component({
  selector: 'app-resume',
  imports: [
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatIcon,
    MatListModule

  ],
  templateUrl: './resume.html',
  styleUrl: './resume.scss',
})
export class Resume {

}
