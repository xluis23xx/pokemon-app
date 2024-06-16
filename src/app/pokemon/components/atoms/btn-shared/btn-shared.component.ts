import { Component, Input } from '@angular/core';
import { IResult } from 'src/app/pokemon/models/pokemon.interface';

@Component({
  selector: 'app-btn-shared',
  templateUrl: './btn-shared.component.html',
  styleUrls: ['./btn-shared.component.scss']
})
export class BtnSharedComponent {
  @Input() pokemonShared: IResult = {} as IResult;

  sharedTo(): void {
    const link = this.generateWhatsAppLink();
    window.open(link, '_blank');
  }

  generateWhatsAppLink(): string {
    const message = `Check out this Pokémon: ${this.pokemonShared.name}`;
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/?text=${encodedMessage}`;
  }
}
