import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Subscription, of } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
import { IResDetail, IResult } from '../../../models/pokemon.interface';
import { PokemonService } from '../../../services/service-pokemon.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit, OnDestroy {
  private subscription: Subscription = new Subscription();
  public isLoading: boolean = true;
  public isError: boolean = false;
  public pokemonDetail: IResDetail = {} as IResDetail;

  constructor(
    private pokemonService: PokemonService,
    public _matDialogRef: MatDialogRef<DetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IResult
  ) {}

  ngOnInit(): void {
    this.getDetailPokemon();
  }

  getDetailPokemon(): void {
    this.subscription.add(
      this.pokemonService
        .getDetail(this.data.name)
        .pipe(
          finalize(() => (this.isLoading = false)),
          catchError((err) => {
            this.isError = true;
            return of();
          })
        )
        .subscribe((res) => {
          if (res) {
            this.pokemonDetail = res;
          }
        })
    );
  }

  closeModalDialog() {
    this._matDialogRef.close(this.data);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
