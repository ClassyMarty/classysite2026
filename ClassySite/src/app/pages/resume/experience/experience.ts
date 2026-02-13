import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-experience',
  imports: [
    MatCardModule,
    MatDividerModule
  ],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class Experience {

}
