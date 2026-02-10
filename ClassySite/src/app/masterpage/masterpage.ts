import { Component } from '@angular/core';
import { Header } from './header/header';
import { Body } from './body/body';

@Component({
  selector: 'app-masterpage',
  imports: [
    Header,
    Body,
  ],
  templateUrl: './masterpage.html',
  styleUrl: './masterpage.scss',
})
export class Masterpage {

}
