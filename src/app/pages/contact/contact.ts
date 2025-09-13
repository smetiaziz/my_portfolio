import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  imports: [ CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
  constructor(private router: Router) {}

  viewProfile() {
    this.router.navigateByUrl('/home').catch(() => {});
  }
}
