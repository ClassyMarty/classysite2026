import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Resume } from './pages/resume/resume';
import { Hobbies } from './pages/hobbies/hobbies';
import { ThisSite } from './pages/this-site/this-site';
import { Contact } from './pages/contact/contact';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'resume', component: Resume },
    { path: 'hobbies', component: Hobbies },
    { path: 'thissite', component: ThisSite },
    { path: 'contact', component: Contact },
];
