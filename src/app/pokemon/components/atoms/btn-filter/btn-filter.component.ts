import { Component } from '@angular/core';
import { PokemonService } from 'src/app/pokemon/services/service-pokemon.service';

@Component({
  selector: 'app-btn-filter',
  templateUrl: './btn-filter.component.html',
  styleUrls: ['./btn-filter.component.scss']
})
export class BtnFilterComponent {

  public isNotActiveAll: boolean = true;

  constructor(private pokemonService: PokemonService) {}

  filterAll(active: boolean): void {
    if (active) {
      this.isNotActiveAll = true;
    } else {
      this.isNotActiveAll = false;
    }
    this.pokemonService.updateFilterAll(active);
  }
}
