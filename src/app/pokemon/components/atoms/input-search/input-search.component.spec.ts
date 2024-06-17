import { FormBuilder } from '@angular/forms';
import { PokemonService } from 'src/app/pokemon/services/service-pokemon.service';
import { InputSearchComponent } from './input-search.component';

describe('InputSearchComponent', () => {
  let component: InputSearchComponent;
  let spyService: jasmine.SpyObj<PokemonService>;

  beforeEach(() => {
    const fb = new FormBuilder();
    spyService = jasmine.createSpyObj('PokemonService', ['updateFilterSearch']);
    component = new InputSearchComponent(fb, spyService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
