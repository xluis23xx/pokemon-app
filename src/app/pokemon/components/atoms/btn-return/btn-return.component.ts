import { Component, EventEmitter, Output } from '@angular/core';
import { REDIRECT_HOME } from 'src/app/pokemon/elements/constants';

@Component({
  selector: 'app-btn-return',
  templateUrl: './btn-return.component.html',
  styleUrls: ['./btn-return.component.scss']
})
export class BtnReturnComponent {
  @Output() redirect: EventEmitter<string> = new EventEmitter<string>();
  
  redirectTo(): void {
    this.redirect.emit(REDIRECT_HOME);
  }
}
