import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  imports: [ CommonModule],
  templateUrl: './experience.html',
  styleUrl: './experience.css'
})
export class Experience {
  experiences = [
    { title: 'Frontend Developer', company: 'PixVow', duration: '2025 - Present', description: 'Building Angular components and interactive UI' },
    { title: 'Intern', company: 'Bank AI Project', duration: '2024', description: 'Developed analytics dashboard using Python and Power BI' },
  ];
}
