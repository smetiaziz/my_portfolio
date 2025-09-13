import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Intro } from "./pages/intro/intro";
import { Navbar } from "./core/navbar/navbar";
import { WhoWatching } from "./pages/who-watching/who-watching";
import { Home } from "./pages/home/home";
import { Skills } from "./pages/skills/skills";
import { Experience } from "./pages/experience/experience";
import { Projects } from "./pages/projects/projects";
import { Contact } from "./pages/contact/contact";
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [CommonModule, Intro, Navbar, WhoWatching, Home, Skills, Experience, Projects, Contact, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App  {
  constructor(private router: Router) {}


  navigate(page: string) {
    this.router.navigate([page]);
  }
}