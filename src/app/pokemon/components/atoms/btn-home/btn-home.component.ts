import { Component, EventEmitter, Output } from '@angular/core';
import { REDIRECT_LIST } from 'src/app/pokemon/elements/constants';

@Component({
  selector: 'app-btn-home',
  templateUrl: './btn-home.component.html',
  styleUrls: ['./btn-home.component.scss'],
})
export class BtnHomeComponent {
  @Output() redirect: EventEmitter<string> = new EventEmitter<string>();

  redirectTo(): void {
    this.redirect.emit(REDIRECT_LIST);
  }
}
