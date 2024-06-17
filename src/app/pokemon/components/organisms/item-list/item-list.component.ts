import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { IResult } from 'src/app/pokemon/models/pokemon.interface';
import { PokemonService } from 'src/app/pokemon/services/service-pokemon.service';
import { DetailComponent } from '../../modals/detail/detail.component';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss'],
})
export class ItemListComponent implements OnInit, OnDestroy {
  private subscription: Subscription = new Subscription();
  public hidden: boolean = false;
  public statusFilterActive: boolean = true;
  @Input() pokemon: IResult = {} as IResult;

  constructor(
    private _matDialog: MatDialog,
    private pokemonService: PokemonService
  ) {}

  ngOnInit(): void {
    this.getStatusActiveFilter();
    this.getFilterSearch();
    this.setDisabledItemByModal();
  }

  setDisabledItemByModal(): void {
    if (!this.statusFilterActive && !this.pokemon.like && !this.hidden)
      this.hidden = true;
  }

  getStatusActiveFilter(): void {
    this.subscription.add(
      this.pokemonService.filterAll$.subscribe((res) => {
        this.statusFilterActive = res;
        if (!res && !this.pokemon.like) this.hidden = true;
        if (res) this.hidden = false;
      })
    );
  }

  updateStatusPokemon($event: boolean): void {
    this.pokemon.like = !this.pokemon.like;
    if (!this.statusFilterActive && $event) this.hidden = true;
  }

  getFilterSearch(): void {
    this.subscription.add(
      this.pokemonService.filterSearch$.subscribe((res) => {
        this.hidden = !this.pokemon.name.includes(res) ? true : false;
      })
    );
  }

  openDetail(pokemon: IResult): void {
    this._matDialog.open(DetailComponent, {
      width: '80%',
      maxWidth: '688px',
      maxHeight: '90vh',
      data: pokemon,
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
