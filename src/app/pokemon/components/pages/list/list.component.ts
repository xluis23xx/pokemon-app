import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/pokemon/services/service-pokemon.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.listPokemons();
    this.detailPokemon();
  }

  listPokemons(): void {
    this.pokemonService.getPokemons().subscribe(res => console.log(res));
  }

  detailPokemon(): void {
    this.pokemonService.getDetail('ditto').subscribe(res => console.log(res));
  }
}
