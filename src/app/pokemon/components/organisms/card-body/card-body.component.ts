import { Component, Input } from '@angular/core';
import { IResDetail } from 'src/app/pokemon/models/pokemon.interface';

@Component({
  selector: 'app-card-body',
  templateUrl: './card-body.component.html',
  styleUrls: ['./card-body.component.scss']
})
export class CardBodyComponent {
  @Input() pokemonItem: IResDetail = {} as IResDetail;
}
