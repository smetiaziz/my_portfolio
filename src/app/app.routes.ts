import { Routes } from '@angular/router';
import { Intro } from './pages/intro/intro';
import { WhoWatching } from './pages/who-watching/who-watching';
import { Experience } from './pages/experience/experience';
import { Home } from './pages/home/home';
import { Skills } from './pages/skills/skills';
import { Projects } from './pages/projects/projects';
import { Contact } from './pages/contact/contact';

export const routes: Routes = [
    { path: '', redirectTo: 'intro', pathMatch: 'full' },
  { path: 'intro', component: Intro },
  { path: 'browse', component: WhoWatching },
  { path: 'home', component: Home },
  { path: 'skills', component: Skills },
  { path: 'experience', component: Experience },
  { path: 'projects', component: Projects },
  { path: 'contact', component: Contact },
];
