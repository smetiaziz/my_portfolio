import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  imports: [ CommonModule],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.css'
})
export class HeroSection {
   @Input() role: string | null = null;

  get backgroundClass() {
    if (this.role === 'Recruiter') return 'bg-gradient-to-br from-blue-900 to-indigo-700';
    if (this.role === 'Developer') return 'bg-gradient-to-br from-gray-900 via-indigo-800 to-gray-700';
    if (this.role === 'Adventurer') return 'bg-gradient-to-br from-pink-400 via-red-300 to-yellow-200';
    return 'bg-black';
  }
}
