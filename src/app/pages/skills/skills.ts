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
    { category: 'Frontend', tags: [
      { name: 'Angular', logo: '/assets/logos/angular.png' },
      { name: 'HTML', logo: '/assets/logos/htm.png' },
      { name: 'CSS', logo: '/assets/logos/cs.png' },
      { name: 'Tailwind', logo: '/assets/logos/Tailwind.png' },
    ]},
    { category: 'Backend', tags: [
      { name: 'C#', logo: '/assets/logos/csharp.png' },
      { name: '.NET', logo: '/assets/logos/dotnet.png' },
      { name: 'Spring Boot', logo: '/assets/logos/spring.png' },
      { name: 'Java', logo: '/assets/logos/java.png' },
    ]},
    { category: 'Databases', tags: [
      { name: 'MySQL', logo: '/assets/logos/mysql.png' },
      { name: 'SQLServer', logo: '/assets/logos/sqlserver.png' },
      { name: 'MongoDB', logo: '/assets/logos/mongodb.png' },
    ]},
    { category: 'Tools', tags: [
      { name: 'Git', logo: '/assets/logos/git.png' },
      { name: 'Docker', logo: '/assets/logos/Docker.png' },
      { name: 'CI/CD', logo: '/assets/logos/cicd.png' },
      { name: 'Agile', logo: '/assets/logos/agile.png' },
    ]},
  ];

  onLogoError(event: Event) {
    (event.target as HTMLImageElement).src = '/assets/logos/placeholder.png';
  }
}
