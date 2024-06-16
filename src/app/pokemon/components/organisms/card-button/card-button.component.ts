import { Component, Input } from '@angular/core';
import { IResult } from 'src/app/pokemon/models/pokemon.interface';
import { PokemonService } from 'src/app/pokemon/services/service-pokemon.service';

@Component({
  selector: 'app-card-button',
  templateUrl: './card-button.component.html',
  styleUrls: ['./card-button.component.scss']
})
export class CardButtonComponent {
  @Input() pokemon: IResult = {} as IResult;

  constructor(private pokemonService: PokemonService) {}

  updateStatusPokemon(): void {
    this.pokemon.like = !this.pokemon.like;
    this.pokemonService.updateStatusPokemon(this.pokemon)
  }
}
