import { Component } from '@angular/core';

@Component({
  selector: 'app-btn-shared',
  templateUrl: './btn-shared.component.html',
  styleUrls: ['./btn-shared.component.scss']
})
export class BtnSharedComponent {

  sharedTo(): void {
    console.log('sharedTo');
  }
}
