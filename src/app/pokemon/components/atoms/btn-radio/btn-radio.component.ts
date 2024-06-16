import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-btn-radio',
  templateUrl: './btn-radio.component.html',
  styleUrls: ['./btn-radio.component.scss']
})
export class BtnRadioComponent {
  @Input() isActive: boolean = true;
  @Output() setActive: EventEmitter<boolean> = new EventEmitter<boolean>();
  
  addFavourite(): void {
    this.setActive.emit(true);
  }
}
