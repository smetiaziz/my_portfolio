import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [ CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects {
  projects = [
    { title: 'PixVow', description: 'Event management platform', link: '#' },
    { title: 'Bank AI', description: 'AI analytics & chatbot system', link: '#' },
  ];
}
