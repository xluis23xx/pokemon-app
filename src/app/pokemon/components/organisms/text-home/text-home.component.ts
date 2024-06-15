import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-text-home',
  templateUrl: './text-home.component.html',
  styleUrls: ['./text-home.component.scss']
})
export class TextHomeComponent {

  constructor(private router: Router) {}

  goToList($event: string): void {
    this.router.navigate([$event]);
  }
}
