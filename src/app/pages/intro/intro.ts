import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intro',
  imports: [],
  templateUrl: './intro.html',
  styleUrl: './intro.css'
})
export class Intro implements OnInit{
    constructor(private router: Router) {}

  ngOnInit() {
    setTimeout(() => {
       this.router.navigate(['/browse']); 
    }, 3000);
  }
}
