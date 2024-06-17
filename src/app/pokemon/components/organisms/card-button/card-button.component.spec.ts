import { PokemonService } from 'src/app/pokemon/services/service-pokemon.service';
import { CardButtonComponent } from './card-button.component';

describe('@CardButtonComponent', () => {
  let component: CardButtonComponent;
  let spyService: jasmine.SpyObj<PokemonService>;

  beforeEach(() => {
    spyService = jasmine.createSpyObj('PokemonService', ['updateStatusPokemon']);
    component = new CardButtonComponent(spyService)
  });

  it('#should create', () => {
    expect(component).toBeTruthy();
  });
});
