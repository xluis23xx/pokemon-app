import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-error',
  templateUrl: './card-error.component.html',
  styleUrls: ['./card-error.component.scss']
})
export class CardErrorComponent {

  constructor(private router: Router) {}

  goToHome($event: string): void {
    this.router.navigate([$event]);
  }
}
