import { Component } from '@angular/core';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { Body } from './body/body';

@Component({
  selector: 'app-master-page',
  imports: [
    Header,
    Body,
    Footer
],
  templateUrl: './master-page.html',
  styleUrl: './master-page.scss',
})
export class MasterPage {

}
