import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-img-card',
  templateUrl: './img-card.component.html',
  styleUrls: ['./img-card.component.scss']
})
export class ImgCardComponent {
  @Input() urlImage: string = '';
  @Output() close: EventEmitter<boolean> = new EventEmitter<boolean>();

  closeCard(): void {
    this.close.emit(true);
  }
}
