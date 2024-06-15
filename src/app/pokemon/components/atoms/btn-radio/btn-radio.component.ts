import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-btn-radio',
  templateUrl: './btn-radio.component.html',
  styleUrls: ['./btn-radio.component.scss']
})
export class BtnRadioComponent {
  @Input() isActive: boolean = true;
  
  addFavourite(): void {
    console.log('addFavourite');
  }
}
