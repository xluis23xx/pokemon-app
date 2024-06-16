import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IResult } from 'src/app/pokemon/models/pokemon.interface';
import { DetailComponent } from '../../modals/detail/detail.component';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent {
  @Input() pokemon: IResult = {} as IResult;

  constructor(private _matDialog: MatDialog) {}

  updateStatusPokemon(): void {
    this.pokemon.like = !this.pokemon.like;
  }

  openDetail(pokemon: IResult): void {
    const dialogRef = this._matDialog.open(DetailComponent, {
      width: '688px',
      data: pokemon
    })
  }
}
