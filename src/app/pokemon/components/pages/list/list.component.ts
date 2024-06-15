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

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    // this.detailPokemon();
    this.listPokemons();
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

  detailPokemon(): void {
    this.pokemonService.getDetail('ditto').subscribe((res) => console.log(res));
  }
}
