import { Component, Input } from '@angular/core';
import { HeroSection } from "../../shared/hero-section/hero-section";
import { TopPicks } from "../../shared/top-picks/top-picks";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [HeroSection, TopPicks],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  role: string | null = null;

  picks = [
    {
      title: 'Skills',
      description: 'My programming skills',
      link: '/skills',
      image: 'assets/top-picks/skills.jpg'
    },
    {
      title: 'Experience',
      description: 'Work experience',
      link: '/experience',
      image: 'assets/top-picks/experience.jpg'
    },
    {
      title: 'Projects',
      description: 'My projects',
      link: '/projects',
      image: 'assets/top-picks/projects.jpg'
    },
    {
      title: 'Contact',
      description: 'Get in touch',
      link: '/contact',
      image: 'assets/top-picks/contact.jpg'
    }
  ];
  
  constructor(private route: ActivatedRoute) {
    this.route.queryParamMap.subscribe(params => {
      this.role = params.get('role');
    });
  }
}
