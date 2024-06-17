import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, of } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
import { IResult } from 'src/app/pokemon/models/pokemon.interface';
import { PokemonService } from 'src/app/pokemon/services/service-pokemon.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit, OnDestroy {
  private subscription: Subscription = new Subscription();
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
    this.subscription.add(
      this.pokemonService
        .getPokemons()
        .pipe(
          finalize(() => (this.isLoading = false)),
          catchError((err) => {
            this.isError = true;
            return of(undefined);
          })
        )
        .subscribe((res) => {
          if (res) {
            console.log('log');
            this.listPokemon = res;
          }
        })
    );
  }

  getCurrentUpdatePokemon(): void {
    this.subscription.add(
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
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
