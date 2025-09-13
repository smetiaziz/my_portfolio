import { Component, Input } from '@angular/core';
import { HeroSection } from "../../shared/hero-section/hero-section";
import { TopPicks } from "../../shared/top-picks/top-picks";

@Component({
  selector: 'app-home',
  imports: [HeroSection, TopPicks],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  @Input() role: string | null = null;

  picks = [
    { title: 'Skills', description: 'My programming skills', link: '/skills', bgClass: 'bg-gradient-to-br from-purple-500 to-indigo-700' },
    { title: 'Experience', description: 'Work experience', link: '/experience', bgClass: 'bg-gradient-to-br from-pink-400 to-red-500' },
    { title: 'Projects', description: 'My projects', link: '/projects', bgClass: 'bg-gradient-to-br from-blue-400 to-teal-400' },
    { title: 'Contact', description: 'Get in touch', link: '/contact', bgClass: 'bg-gradient-to-br from-green-400 to-cyan-400' },
  ];
}
