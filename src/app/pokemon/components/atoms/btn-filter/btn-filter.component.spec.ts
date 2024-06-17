import { PokemonService } from 'src/app/pokemon/services/service-pokemon.service';
import { BtnFilterComponent } from './btn-filter.component';

describe('BtnFilterComponent', () => {
  let component: BtnFilterComponent;
  let spyService: jasmine.SpyObj<PokemonService>;

  beforeEach(() => {
    spyService = jasmine.createSpyObj('PokemonService', ['updateFilterAll']);
    component = new BtnFilterComponent(spyService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
