import { MatDialog } from '@angular/material/dialog';
import { ItemListComponent } from './item-list.component';
import { PokemonService } from 'src/app/pokemon/services/service-pokemon.service';
import { of } from 'rxjs';

describe('@ItemListComponent', () => {
  let component: ItemListComponent;
  let spyMatDialog: jasmine.SpyObj<MatDialog>;
  let spyService: jasmine.SpyObj<PokemonService>;

  beforeEach(() => {
    spyService = jasmine.createSpyObj('PokemonService', [], {
      filterSearch$: of(''), filterAll$: of(true)
    });
    spyMatDialog = jasmine.createSpyObj('MatDialog', ['open']);
    component = new ItemListComponent(spyMatDialog, spyService)
  });

  it('#should create', () => {
    expect(component).toBeTruthy();
  });
});
