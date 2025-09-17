import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-who-watching',
  imports: [ CommonModule],
  templateUrl: './who-watching.html',
  styleUrls: ['./who-watching.css']
})
export class WhoWatching {
@Output() roleSelected = new EventEmitter<string>();
constructor(private router: Router) {}
  roles = [
  { name: 'Recruiter',  avatar: 'assets/avatars/recruiter.png' },
  { name: 'Developer',  avatar: 'assets/avatars/developer.png' },
  { name: 'Adventurer', avatar: 'assets/avatars/adventurer.png' },
];


selectRole(role: string) {
  // Navigate to /home and pass the role as a query parameter
  this.router.navigate(['/home'], { queryParams: { role } });
}
}
