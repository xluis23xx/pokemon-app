import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { catchError, finalize, timeout } from 'rxjs/operators';
import { IResult } from 'src/app/pokemon/models/pokemon.interface';
import { PokemonService } from 'src/app/pokemon/services/service-pokemon.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  public isLoading: boolean = true;
  public isError: boolean = false;
  public listPokemon: IResult[] = [];
  public showOnlyLiked: boolean = false;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.listPokemons();
    this.getCurrentUpdatePokemon();
  }

  listPokemons(): void {
    this.pokemonService
      .getPokemons()
      .pipe(
        finalize(() => (this.isLoading = false)),
        catchError((err) => {
          this.isError = true;
          return of([]);
        })
      )
      .subscribe((res) => {
        if (res) {
          this.listPokemon = res;
        }
      });
  }

  getCurrentUpdatePokemon(): void {
    this.pokemonService.pokemon$.subscribe((updatedPokemon) => {
      this.listPokemon = this.listPokemon.map((pokemon) => {
        if (pokemon.name === updatedPokemon.name) {
          return {
            ...pokemon,
            like: updatedPokemon.like,
          };
        }
        return pokemon;
      });
    });
  }
}
