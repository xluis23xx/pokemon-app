import { Component } from '@angular/core';
import { PokemonService } from 'src/app/pokemon/services/service-pokemon.service';

@Component({
  selector: 'app-btn-filter',
  templateUrl: './btn-filter.component.html',
  styleUrls: ['./btn-filter.component.scss']
})
export class BtnFilterComponent {

  public isActiveAll: boolean = true;

  constructor(private pokemonService: PokemonService) {}

  filterAll(): void {
    this.isActiveAll = !this.isActiveAll;
    this.pokemonService.updateFilterAll(this.isActiveAll);
  }
}
