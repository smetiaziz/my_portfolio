import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-picks',
  imports: [ CommonModule],
  templateUrl: './top-picks.html',
  styleUrls: ['./top-picks.css']
})
export class TopPicks {
  @Input() picks: any[] = [];
  @Output() navigate = new EventEmitter<string>();
  constructor(private router: Router) {}

  go(pick: any) {
    const target = pick.link ?? (pick.title ? pick.title.toLowerCase() : '');
    this.navigate.emit(target);

    if (!target) return;
    const url = target.startsWith('/') ? target : `/${target}`;
    // navigation via router
    this.router.navigateByUrl(url).catch(err => {
      console.warn('Navigation failed:', err, 'target:', url);
    });
  }
}
