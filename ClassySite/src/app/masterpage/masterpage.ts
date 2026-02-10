import { Component } from '@angular/core';
import { Header } from './header/header';
import { Body } from './body/body';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-masterpage',
  imports: [
    Header,
    Body,
    Footer,
  ],
  templateUrl: './masterpage.html',
  styleUrl: './masterpage.scss',
})
export class Masterpage {

}
