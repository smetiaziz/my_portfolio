import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  imports: [ CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.css'
})
export class Skills {
skills = [
    { category: 'Frontend', tags: ['Angular', 'React', 'HTML', 'CSS', 'Tailwind'] },
    { category: 'Backend', tags: ['Node.js', 'Express', 'Spring Boot', 'SQL', 'MongoDB'] },
    { category: 'Tools', tags: ['Git', 'Docker', 'Postman', 'VS Code'] },
  ];
} 
